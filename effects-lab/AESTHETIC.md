# 审美方向（阶段 A 产出）

> 阶段 A（轮次 1-3）填写此文件；阶段 B/C 以此为锚。
>
> 轮次 1 更新（2026-04-17）：搜集候选方向。

## 候选方向 (轮次 1 搜集)

### 1. Refined Glassmorphism 2026
细磨砂玻璃+多层透明+细边框+深度层级。2026 版比早期更克制，玻璃后面常叠 grain/noise + 柔和光晕。
- 参考：awwwards 近期 fintech/saas 站（Jeton、American Bitcoin Corp 风格）
- 关键词：frosted blur、layered depth、subtle borders、ambient glow
- 技术栈：CSS backdrop-filter、SVG turbulence、WebGL blur pass

### 2. Organic / Natural Material
有机形态 + 低饱和泥土/米色/苔绿 palette + 纹理触感（布料、纸、石）。反装饰、重氛围。
- 参考：Ravi Klaassens、Odd Ritual（awwwards 近期获奖）
- 关键词：muted earth、organic shape、tactile texture、editorial warmth
- 技术栈：SVG blob morph、canvas grain、CSS filter: url(#noise)

### 3. Brutalist / Raw HTML
monospace 字体、裸骨网格、高对比撞色、暴露结构。故意反"用户友好"。
- 参考：NaughtyDuk©、httpster 常见独立站
- 关键词：monospace、anti-grid、harsh color、raw form
- 技术栈：纯 CSS 即可 + GSAP 小动效点缀

### 4. Editorial / Anti-Grid
印刷杂志感，流体非对称排版，大标题 + serif 配 sans 混排，滚动驱动切换。
- 参考：MERSI、Max Mara - Jacket Circle
- 关键词：asymmetric layout、big serif headline、scroll-driven、print-inspired
- 技术栈：GSAP ScrollTrigger、CSS grid 不规则、SVG 装饰

### 5. WebGL Signature Scene
一个吃满首屏的 3D/shader 艺术场景当门面。黑洞、液态金属、粒子波、霓虹涟漪。
- 参考：Bruno Simon 2026 portfolio（Site of the Month, January）、VoXelo Neon Ripple、darrylhuffman Black Hole
- 关键词：hero shader、signature 3D scene、interactive ripple
- 技术栈：three.js / ogl / 原生 WebGL + GLSL

### 6. Retro CRT / Y2K / Cyber
扫描线、色差、霓虹发光、bitmap 字体、故障(glitch)效果。
- 参考：gingerbeardman/webgl-crt-shader、codepen glitch pens
- 关键词：scanline、chromatic aberration、neon glow、bitmap type
- 技术栈：WebGL 后处理 shader、CSS filter、canvas pixel

### 7. Grain + Soft Gradient（灰阶电影感）
大片柔和渐变 + 叠一层细腻 film grain，整体像胶片静帧。常配极简排版。
- 参考：by Crawford blog 案例、Zarma Type 文章示例
- 关键词：film grain、soft gradient、cinematic still、minimal type
- 技术栈：SVG feTurbulence、canvas 像素噪点、CSS mix-blend-mode

### 8. Morph / Fluid Motion（液态过渡）
滚动或 hover 触发的液态变形、metaball、displacement。Jeton 的"scroll-based morph"是典型。
- 参考：Jeton（Site of the Day）、stefanweck Waterdroplet
- 关键词：morph、metaball、displacement map、scroll-driven
- 技术栈：SVG filter feDisplacementMap、GSAP MorphSVG、shader displacement

## 轮次 2 深化观察（2026-04-17）

### 2026 标志性站点 + 可复现性评估
| 站点 | 风格 | 技术 | 录屏爽度 | 单文件复现难度 |
|------|------|------|----------|----------------|
| Bruno Simon Portfolio (SOTM Jan/Feb 2026) | 3D 游乐场 | three.js + cannon-es 物理 | ★★★★★ | 5/5 太重 |
| Shader.se (80s corporate tape) | retro CRT + WebGPU | three.js + TSL shader | ★★★★★ | 4/5 shader 可抄 |
| Justine Soulié Portfolio | 插画+WebGL interface | WebGL 纹理 + displacement | ★★★★☆ | 3/5 素材是关键 |
| Jeton | 金融 + scroll morph | SVG morph + GSAP ScrollTrigger | ★★★★☆ | 3/5 |
| Pentagram | 极致排印 | CSS + 细节节奏 | ★★★☆☆ | 2/5 但难"好看到录屏" |
| Max Mara Jacket Circle | editorial + 圆形滚动 | GSAP ScrollTrigger | ★★★★☆ | 3/5 |
| NaughtyDuk© | brutalist | 纯 CSS + 小 JS | ★★★☆☆ | 2/5 |
| Odd Ritual | organic dark ritual | canvas 粒子 + 深色 | ★★★★☆ | 3/5 |

### 关键洞察
1. **能录屏发小红书的几乎全是"首屏即视觉冲击"**：大面积 shader、大字排印、或动态有机形态。
2. **brutalist/grain/editorial 偏静态**——好看，但录屏没张力。除非配滚动叙事，否则不适合短视频。
3. **交互爽感来自两类**：(A) WebGL 流体/粒子跟随鼠标；(B) scroll 驱动的大型形变/转场。
4. **single-file 可行性**：shader 类最友好（几十行 GLSL 就能出效果）；3D 游戏类最难（物理引擎+模型）。
5. **趋势共识**：grain/noise + soft gradient 几乎每个 2026 趋势文章都提；已成"基础味道"。

### 候选收敛提案（供轮次 3 最终确认）
**提案 A - 双主线**：
- 主线 1「**WebGL Signature Scene**」覆盖粒子/shader/流体/CRT → 吃掉候选 1、5、6、8 的视觉爽度。
- 主线 2「**Editorial / Organic + Grain**」覆盖排印+大字+有机形+颗粒 → 吃掉候选 2、4、7。
- 放弃 brutalist（候选 3）：静态好看但录屏无张力。

**提案 B - 单主线 all-in WebGL**：所有 10 个实现都做 shader/粒子/3D 变体。视觉统一、录屏最稳。
**提案 C - 分 10 份拼盘**：每个 HTML 一个方向。风格不统一但品类齐全。

**倾向**: 提案 A。轮次 3 最终确认。

## 最终锁定方向（轮次 3 收敛 · 2026-04-17）

采纳 **提案 A 双主线**。

### 主线 1 · WebGL Signature Scene（视觉爽感担当）
- **关键词**: shader、粒子流体、霓虹、CRT/retro、rippling、metaball、黑色背景重色彩
- **调色盘（暗色）**: 底色 `#0a0612 / #07030d`；重点色 cyan `#22d3ee`、magenta `#ec4899`、neon purple `#a855f7`、gold `#fbbf24`
- **字体**: JetBrains Mono（技术感）或 Space Grotesk（现代感）
- **目标观感**: 打开即震撼，鼠标一动就有粒子/形变/光感响应，录屏 10 秒内出张力。
- **分配轮次**: 11、12、13、14、15、16 （6 个实现）

### 主线 2 · Editorial / Organic + Grain（品味担当）
- **关键词**: 大字排印、serif + grotesk 混排、有机流体形状、film grain、柔和渐变
- **调色盘（浅色）**: 底色 `#f4efe6 / #ece5d3`（米/奶油）或 `#0f0f0e`（深版）；主色 `#d94f2a`（砖红）、`#2e3a2c`（苔绿）、`#c9a961`（黄铜）
- **字体**: Fraunces / PP Editorial New（衬线）+ Inter / Space Grotesk（无衬线）
- **目标观感**: 杂志封面感，滚动有节奏，细节处有 grain / noise / 微动效。
- **分配轮次**: 17、18、19、20 （4 个实现）

### 放弃
- Brutalist、极繁玻璃态（候选 3、候选 1 的纯 glassmorphism 版本）：静态好看但录屏无张力，作为"辅料"可以混入其它实现。

### 10 个实现槽位预案（阶段 C 参考，轮次 B 阶段可微调）
| 槽 | 轮次 | 主线 | 效果题目 | 核心技术 |
|----|------|------|----------|----------|
| 01 | 11 | WebGL | 液态金属 hover（displacement 字） | GLSL fragment shader |
| 02 | 12 | WebGL | 粒子星云鼠标跟随 | three.js + BufferGeometry |
| 03 | 13 | WebGL | 霓虹涟漪交互背景 | 原生 WebGL + mouse uniform |
| 04 | 14 | WebGL | CRT 扫描线 + 故障文字 | shader 后处理 + 位图字 |
| 05 | 15 | WebGL | metaball 流体球 | p5.js + webgl |
| 06 | 16 | WebGL | shader sky/noise 大地 | GLSL 程序化纹理 |
| 07 | 17 | Editorial | 大字排印 hero + grain | CSS + SVG feTurbulence |
| 08 | 18 | Editorial | 杂志滚动 scroll-story | GSAP ScrollTrigger + CSS grid |
| 09 | 19 | Editorial | 有机 blob morph 页头 | SVG path morph + anime.js |
| 10 | 20 | Editorial | 产品卡片 hover 柔动效 | CSS + GSAP + grain overlay |

## 技术栈取向（轮次 3 勾选）
- [x] Canvas 2D — 辅助
- [x] WebGL / three.js / ogl — **主线 1 核心**
- [x] p5.js — metaball / particle 辅助
- [x] GSAP + ScrollTrigger — **主线 2 核心**
- [x] anime.js — SVG morph
- [ ] Lottie — 不用（美术资源门槛）
- [x] CSS-only — editorial 层面
- [x] SVG + SMIL / morph — editorial 层面
- [x] Shader (glsl) — **主线 1 核心**

## 轮次 2 新增参考来源
- https://www.awwwards.com/sites/bruno-simon-portfolio (SOTM Jan/Feb 2026)
- https://www.webgpu.com/showcase/shader-se-webgpu-tsl-studio-site/
- https://www.webgpu.com/showcase/justine-soulie-portfolio-webgl-illustrations/
- https://tympanus.net/codrops/2026/03/04/webgl-for-designers-creating-interactive-shader-driven-graphics-directly-in-the-browser/
- https://mdx.so/blog/webgl-development-how-to-build-immersive-3d-web-experiences-in-2026
- https://www.siteinspire.com/websites/categories/editorial/typographic/typography
- https://www.typza.com/insigths/top-10-best-typography-combinations-2026 (Pentagram 排印)
- https://www.maglr.com/blog/best-scrollytelling-examples

## 轮次 1 参考来源
- https://www.awwwards.com/websites/sites_of_the_day/
- https://gezar.dk/en/blog/web-design-trends-2026
- https://bycrawford.com/blog/web-design-trends-2026
- https://zarmatype.com/web-design-trends-2026/
- https://codepen.io/tag/webgl
- https://codepen.io/VoXelo/pen/MYWLBRm (Neon Ripple)
- https://codepen.io/darrylhuffman/pen/gRZrpv (Black Hole)
