# 10 槽实现 Wireframe（轮次 10 产出）

阶段 C 各轮直接按此执行。每轮只做 1 个文件；若本 wireframe 明显不对再微调。

---

## 槽 01 · 轮 11 ·「液态金属字」(11_liquid-metal-text.html)
**布局**: 居中单行大字 "FLUID FORGE"（宽高各 vw/vh 80%），背景纯黑。鼠标离近字：显示面发生液态金属 displacement。
**技术**: 全屏 `<canvas>` + vanilla WebGL fragment-only（full-screen quad）。canvas 2D 预渲染文字做纹理上传；fragment shader 用 fbm + 鼠标距离 warp UV 后采样文字纹理；金属色用 `mix(cyan, magenta, noise)` 调出反光。
**交互**: mousemove → uniform `uMouse`；无点击。
**色**: bg `#050308`, liquid base `#22d3ee→#ec4899`, 金属反光白高光。
**字**: Space Grotesk 900，letter-spacing -0.04em，字号 16vw。
**录屏卖点**: 光滑到离谱的流动感。

---

## 槽 02 · 轮 12 ·「粒子星云」(12_particle-nebula.html)
**布局**: 全屏三维粒子云，中心有暗漩涡，粒子环绕。左下角 Logo + 一行 tagline。
**技术**: three.js + BufferGeometry + PointsMaterial（custom shader 给每粒子发光 + 大小随距离）+ UnrealBloomPass。粒子初始位置：球形 + 噪声偏移。鼠标位置 → lerp 到 camera 微倾；鼠标速度 → 推斥粒子。
**粒子数**: 30k（笔记本能稳 60fps）
**色**: bg `#050308`，粒子从 violet → magenta → cyan 渐变 by radius。
**卖点**: 鼠标一划粒子呼吸。

---

## 槽 03 · 轮 13 ·「霓虹涟漪」(13_neon-ripple.html)
**布局**: 全屏 fragment shader，顶部居中 hero 标题，副标题 subtle 灰。鼠标点击/移动，涟漪从鼠标发散。
**技术**: vanilla WebGL fullscreen quad + fragment shader。uniforms: iTime、iResolution、iMouse、iClick[3]（最近 3 次点击位置 + 时间）。每次点击加一个环，ring() 函数叠加；背景 fbm 做能量流动。
**色**: bg 深紫，涟漪 cyan → magenta 渐变。
**卖点**: 点哪响哪，无限爽。

---

## 槽 04 · 轮 14 ·「CRT 故障文字」(14_crt-glitch.html)
**布局**: 居中大字块 "SIGNAL LOST / 01010111"，模拟老 CRT。整屏带 vignette + 桶形畸变 + scanline + 闪烁 + RGB 分离 + 随机故障条。
**技术**: canvas 2D 叠 3 层：(1) 文字 ctx drawText；(2) canvas overlay drawn scanlines；(3) 随机 glitch 条（rect+random offset）。CSS `text-shadow: 2px 0 cyan, -2px 0 magenta` RGB 分离。
**色**: bg `#0a0612`, 主体绿色 phosphor `#66ff88` 或 amber `#ffb347`，可随机切换。
**字**: JetBrains Mono 700。
**卖点**: 每 3 秒随机故障抖一下。

---

## 槽 05 · 轮 15 ·「Metaball 流体」(15_metaball-flow.html)
**布局**: 全屏黑底，中心 12-15 个 metaball 互相融合、分离。柔和呼吸感。右上角 3 行小字 caption。
**技术**: p5.js WEBGL 模式 + 自定义 shader。fragment shader 逐像素累加 SDF field，threshold 决定实体；fresnel 边缘发光。球位置：simplex-noise 时间驱动。
**色**: bg 黑，球体 violet → magenta 渐变；边缘 cyan 发光。
**卖点**: 像熔岩灯进化版。

---

## 槽 06 · 轮 16 ·「程序化天空」(16_procedural-sky.html)
**布局**: 全屏 shader，地平线下方 1/3 是起伏 fbm 山脊黑影，上方 2/3 是流动云层 + 远处太阳光晕。顶部一行诗意文字。
**技术**: vanilla WebGL fragment shader。地平线 y 阈值切上下；天空用 fbm 做云（3 octaves）+ 太阳 `smoothstep(1-dot(rd,sunDir))`；山做 fbm(x) 比较 y；大气散射 `mix(天顶色, 地平色, 1-y)`。
**色**: 太阳 gold `#fbbf24`，天顶 deep violet，地平 magenta，山脊剪影黑。
**卖点**: 静态截一张就能发 ins，连动态有呼吸。

---

## 槽 07 · 轮 17 ·「大字 hero + grain」(17_editorial-hero.html)
**布局**: 米色纸背景，一个吃满屏的 Fraunces 大字"ISSUE 01 / PLAY IT SLOW"（双行左对齐），上方一行编号 meta，下方一行日期 meta，右下角小图（SVG 几何点缀）。
**技术**: 纯 CSS + SVG feTurbulence grain 层叠（opacity 0.15，mix-blend-mode: multiply）。SplitType 分字，载入时 stagger reveal（y:40→0 ease 0.8s）。
**字**: Fraunces WONK=1 wght=800 opsz=144 当标题；Inter 300 当 meta。
**卖点**: 封面感到位，文字落字节奏顺。

---

## 槽 08 · 轮 18 ·「水平滚动杂志」(18_horizontal-magazine.html)
**布局**: 5 屏水平滚动面板：封面 → 引言大字 → 图文左右切 → 全幅引号页 → 尾页。滚动用滚轮驱动水平 pin。
**技术**: GSAP + ScrollTrigger pin + horizontal translateX，用户滚轮 → scrub 控制 translateX。每面板 enter 时 SplitType 文字上浮。
**色**: 浅版 paper，但每屏有轻微色块变换（米 → 苔绿 → 砖红 → 黑）。
**卖点**: 鼠标滚一整圈，看完一本杂志。

---

## 槽 09 · 轮 19 ·「有机 Blob 页头」(19_organic-blob-hero.html)
**布局**: 上半屏一个巨大有机 blob（600×600px 居中偏右），缓慢 morph；左侧竖排大字 caption "MAKE. / SLOWLY." 填充剩余空间。blob 内部渐变 + 作为 clipPath 裁掉一张抽象图片。
**技术**: SVG 18 个点 + Catmull-Rom 样条，simplex-noise 时间驱动点径向偏移，每帧 d 属性重算。纯 vanilla JS，无 anime.js 也行。
**色**: 暗版：bg `#1a1712`, blob 渐变 brick → brass。
**卖点**: blob 呼吸性动 + 大字硬排版反差。

---

## 槽 10 · 轮 20 ·「产品卡组」(20_product-cards.html)
**布局**: 3×2 网格，6 张产品卡，每张顶部一张 duotone 双色调商品图（用 picsum 或 svg 占位）+ 下方标题 + 价格 + 按钮。hover：3D tilt（rotX/Y 基于鼠标）+ grain 层 + duotone 变色。
**技术**: GSAP 跟随 tilt + CSS mix-blend-mode 双色调 + grain PNG repeating。
**色**: 纸底 `#f4efe6`，duotone 对 = moss+brick。
**卖点**: hover 每张卡身临其境地反应。

---

## 通用装饰（每张都可加）
- 自定义光标（白圆 + mix-blend-mode difference + lerp 跟随）
- 右下角版本号（`v0.1 · 17 Apr 2026` 小字）
- 右上角页码 `01 / 10`（10 张整体统一）
- 浏览器 title 统一 `frontend effects lab · NN`
