const SALT = "neil-landing-2026";
const MAX_ID_LEN = 64;
const ID_RE = /^[a-zA-Z0-9_-]+$/;
const MAX_PER_IP = 10;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

async function hashIp(ip) {
  const data = new TextEncoder().encode(ip + "|" + SALT);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 32);
}

function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: { "Content-Type": "application/json", ...CORS, ...(init.headers || {}) },
  });
}

function bad(msg, status = 400) {
  return json({ error: msg }, { status });
}

async function readCount(env, id) {
  const v = await env.VOTES.get(`count:${id}`);
  return parseInt(v || "0", 10);
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS });
    }

    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/votes") {
      const list = await env.VOTES.list({ prefix: "count:" });
      const result = {};
      await Promise.all(
        list.keys.map(async (k) => {
          const id = k.name.slice("count:".length);
          result[id] = await readCount(env, id);
        })
      );
      return json(result);
    }

    if (request.method === "GET" && url.pathname === "/vote") {
      const id = url.searchParams.get("id");
      if (!id || !ID_RE.test(id) || id.length > MAX_ID_LEN) return bad("invalid id");
      const ip = request.headers.get("CF-Connecting-IP") || "0.0.0.0";
      const iphash = await hashIp(ip);
      const [count, ipRaw] = await Promise.all([
        readCount(env, id),
        env.VOTES.get(`vote:${id}:${iphash}`),
      ]);
      const ipCount = parseInt(ipRaw || "0", 10);
      return json({ id, count, ipCount, maxPerIp: MAX_PER_IP, capped: ipCount >= MAX_PER_IP });
    }

    if (request.method === "POST" && url.pathname === "/vote") {
      let body;
      try {
        body = await request.json();
      } catch {
        return bad("invalid json");
      }
      const id = (body.id || "").toString();
      if (!id || !ID_RE.test(id) || id.length > MAX_ID_LEN) return bad("invalid id");

      const ip = request.headers.get("CF-Connecting-IP") || "0.0.0.0";
      const iphash = await hashIp(ip);
      const voteKey = `vote:${id}:${iphash}`;
      const countKey = `count:${id}`;

      const ipCount = parseInt((await env.VOTES.get(voteKey)) || "0", 10);
      if (ipCount >= MAX_PER_IP) {
        return json({
          id,
          count: await readCount(env, id),
          ipCount,
          maxPerIp: MAX_PER_IP,
          capped: true,
        });
      }

      const next = (await readCount(env, id)) + 1;
      const nextIp = ipCount + 1;
      await Promise.all([
        env.VOTES.put(voteKey, String(nextIp)),
        env.VOTES.put(countKey, String(next)),
      ]);
      return json({
        id,
        count: next,
        ipCount: nextIp,
        maxPerIp: MAX_PER_IP,
        capped: nextIp >= MAX_PER_IP,
      });
    }

    return bad("not found", 404);
  },
};
