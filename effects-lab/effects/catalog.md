# 动效 & 技术 catalog（阶段 B 产出）

> 阶段 B（轮次 4-10）填写。按「效果名 / 来源 / 核心技术 / 难度(1-5) / 是否要复现」结构记录。

## 格式示例
### ✨ Liquid Metal Hover
- 来源: https://...
- 核心技术: WebGL fragment shader + displacement map
- 难度: 4/5
- 要复现: 是 → 计划在阶段 C 第 12 轮

---

## 条目

### 轮次 4 · WebGL 主线 - 槽 01/02/03 素材

#### ✨ Fluid Metal WebGL Shader (darika-dev)
- 来源: https://codepen.io/darika-dev/pen/rNvWGxZ
- 核心技术: GLSL fragment shader + simplex noise 变形 + 高反光材质色
- 难度: 3/5
- 要复现: **是 → 槽 01 / 轮 11** (液态金属 hover)

#### ✨ Animating Letters with Shaders (Codrops 2025-03-24)
- 来源: https://tympanus.net/codrops/2025/03/24/animating-letters-with-shaders-interactive-text-effect-with-three-js-glsl/
- 核心技术: three.js MSDF 字体 + 自定义 vertex displacement + 鼠标力场
- 难度: 4/5
- 要复现: **是 → 槽 01 / 轮 11** (主要参考)

#### ✨ WebGL Text Displacement (swarm)
- 来源: https://codepen.io/swarm/pen/YeqWXd
- 核心技术: canvas 2D 画文字 → textureLoader → fragment displacement
- 难度: 3/5
- 要复现: 备选 → 槽 01

#### ✨ Interactive Particle Nebula (kasunshana)
- 来源: https://codepen.io/kasunshana/pen/zxvWEWG
- 核心技术: three.js + EffectComposer + UnrealBloomPass + mouse 3D lerp
- 难度: 3/5
- 要复现: **是 → 槽 02 / 轮 12** (粒子星云) 主要参考

#### ✨ Interactive Particle Sphere (VoXelo)
- 来源: https://codepen.io/VoXelo/pen/PwYJdVG
- 核心技术: BufferGeometry 多属性 + ShaderMaterial + 鼠标 uniform 扰动
- 难度: 4/5
- 要复现: **是 → 槽 02 / 轮 12** (合并参考)

#### ✨ Interactive WebGL Neon Ripple (VoXelo)
- 来源: https://codepen.io/VoXelo/pen/MYWLBRm
- 核心技术: fullscreen fragment shader + mouse swirl distortion + smoothstep 衰减
- 难度: 2/5
- 要复现: **是 → 槽 03 / 轮 13** (霓虹涟漪)

#### ✨ WebGL Neon Wave Effect (phillip-gimmi)
- 来源: https://codepen.io/phillip-gimmi/pen/raNRYpM
- 核心技术: iResolution/iTime/iMouse shadertoy 风格 + 波纹叠加
- 难度: 2/5
- 要复现: **是 → 槽 03 / 轮 13** (合并参考)

#### ✨ GSAP + WebGL Shader Ripples/Blur (Codrops 2025-10-08)
- 来源: https://tympanus.net/codrops/2025/10/08/how-to-animate-webgl-shaders-with-gsap-ripples-reveals-and-dynamic-blur-effects/
- 核心技术: GSAP 控制 shader uniform（progress、mouse）+ dynamic blur
- 难度: 4/5
- 要复现: 备选技术 → 可与槽 01 合并

### 轮次 5 · WebGL 主线 - 槽 04/05/06 素材

#### ✨ CRT TV Effect (GLITCHXploitR)
- 来源: https://codepen.io/GLITCHXploitR/pen/OxGKrq
- 核心技术: canvas 2D 噪点 + 扫描线 + text-shadow RGB 分离 + 闪烁动画
- 难度: 2/5
- 要复现: **是 → 槽 04 / 轮 14** (CRT 扫描线 + 故障文字) 主要参考

#### ✨ CSS Text Glitch Effects (freefrontend 合集)
- 来源: https://freefrontend.com/css-text-glitch-effects/
- 核心技术: @keyframes + clip-path: inset() 切片 + 多层 text-shadow（RGB 偏移）
- 难度: 1/5
- 要复现: **是 → 槽 04 / 轮 14** (文字 glitch 组合技术)

#### ✨ RetroZone WebGL post-processing (Phaser 2026-03)
- 来源: https://phaser.io/news/2026/03/retrozone-open-source-retro-display-engine-phaser
- 核心技术: WebGL 后处理 pass（scanline + warp + chromatic + noise + blur 全家桶）
- 难度: 4/5
- 要复现: 备选（库太重，只参考 shader 代码）

#### ✨ Metaballs and WebGL (Jamie Wong)
- 来源: https://jamie-wong.com/2016/07/06/metaballs-and-webgl/
- 核心技术: fragment shader 逐像素 SDF field（每 metaball 求和）+ threshold 等高线
- 难度: 3/5
- 要复现: **是 → 槽 05 / 轮 15** (metaball 流体球) 主要参考

#### ✨ Animated Metaballs with p5.js Shaders (alexcodesart)
- 来源: https://alexcodesart.com/create-animated-metaballs-with-shaders-in-p5-js-a-creative-coding-tutorial/
- 核心技术: p5.js + 自定义 shader + simplex noise 驱动 metaball 运动
- 难度: 3/5
- 要复现: **是 → 槽 05 / 轮 15** (教程级，代码结构清晰可抄)

#### ✨ WebGL Fluid Simulation (PavelDoGreat)
- 来源: https://codepen.io/PavelDoGreat/pen/zdWzEL
- 核心技术: Navier-Stokes GPU 求解（velocity/pressure/dye 多 FBO）+ mouse force
- 难度: 5/5
- 要复现: 备选（太重但若时间够，第 15 轮上限版本）

#### ✨ Basic Procedural Noise Terrain (Shadertoy)
- 来源: https://www.shadertoy.com/view/Ws3XRs
- 核心技术: fragment ray-marching + fbm noise heightmap + 简易光照
- 难度: 4/5
- 要复现: **是 → 槽 06 / 轮 16** (shader 大地) 主要参考

#### ✨ Clouds (Shadertoy, iq)
- 来源: https://www.shadertoy.com/view/XslGRr
- 核心技术: FBM 噪声 + 体积 ray-marching + 太阳方向光
- 难度: 5/5
- 要复现: **是 → 槽 06 / 轮 16** (天空部分参考 iq 的减版)

#### ✨ Tiny Clouds (10 行 Shadertoy 名作 / demofox 解析)
- 来源: https://blog.demofox.org/2017/11/26/dissecting-tiny-clouds/
- 核心技术: 极简 FBM + 简化散射，~10 行出效果
- 难度: 3/5
- 要复现: **是 → 槽 06 / 轮 16** (轻量版，首选)

### 轮次 6 · Editorial 主线 - 槽 07/08 素材

#### ✨ Grainy Gradients (CSS-Tricks)
- 来源: https://css-tricks.com/grainy-gradients/
- 核心技术: SVG feTurbulence (fractalNoise) 生成噪声 → 作为 background，叠在 CSS gradient 上 + 亮度对比提升
- 难度: 1/5
- 要复现: **是 → 槽 07 / 轮 17** (大字 hero 背景) 主要参考

#### ✨ SVG Filter Effects: feTurbulence (Codrops, Sara Soueidan)
- 来源: https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/
- 核心技术: turbulence vs fractalNoise + stitchTiles + displacement map 组合
- 难度: 2/5
- 要复现: **是 → 槽 07 / 轮 17** (grain 配方参考)

#### ✨ nnnoise SVG Noise Generator (fffuel)
- 来源: https://www.fffuel.co/nnnoise/
- 核心技术: 可配置 SVG noise 生成器（baseFrequency、octaves、colorMatrix 调色）
- 难度: 1/5
- 要复现: 工具参考（生成 data-URL 直接嵌入 HTML）

#### ✨ Variable Font / Scroll (trabuccocampos)
- 来源: https://codepen.io/trabuccocampos/pen/abdKRyo
- 核心技术: CSS variable + font-variation-settings (wght、srff) + scrollY → CSS vars
- 难度: 2/5
- 要复现: **是 → 槽 07 / 轮 17** (hero 大字滚动变粗) 辅助

#### ✨ Variable Font Weight Scroll (indiablonix)
- 来源: https://codepen.io/indiablonix/pen/ExvQXbx
- 核心技术: scrollY 驱动 font-weight 100→900 + opacity 过渡
- 难度: 1/5
- 要复现: **是 → 槽 07 / 轮 17** (合并)

#### ✨ GSAP ScrollTrigger Showcase Collection
- 来源: https://codepen.io/collection/DkvGzg
- 核心技术: pin + scrub + snap + 水平滚动 + split text + 图片 parallax
- 难度: 3/5
- 要复现: **是 → 槽 08 / 轮 18** (杂志滚动叙事) 主要参考集合

#### ✨ Horizontal Scroll Layout Explorations (filipz)
- 来源: https://codepen.io/filipz/embed/qEBoPWz
- 核心技术: ScrollTrigger pin + horizontal translateX + 多种 panel 类型（split、parallax、big type）
- 难度: 3/5
- 要复现: **是 → 槽 08 / 轮 18** (水平滚动杂志) 主要参考

#### ✨ Kinetic Typography CSS-only (coderthegreat)
- 来源: https://codepen.io/coderthegreat/pen/djvQXK
- 核心技术: 纯 CSS @keyframes + transform + 单词级延迟
- 难度: 1/5
- 要复现: 备选（纯 CSS 可以塞给槽 07 的二级内容）

### 轮次 7 · Editorial 主线 - 槽 09/10 素材

#### ✨ Smooth Animated Blob (georgedoescode, dev.to)
- 来源: https://dev.to/georgedoescode/tutorial-build-a-smooth-animated-blob-using-svg-js-3pne
- 核心技术: Catmull-Rom spline + 极坐标点扰动 + simplex-noise 时间驱动
- 难度: 2/5
- 要复现: **是 → 槽 09 / 轮 19** (blob morph 页头) 主要参考（无需 anime.js 也行）

#### ✨ Morphing SVG shape / blob anime.js (wiseoldman)
- 来源: https://codepen.io/wiseoldman/pen/wRmveE
- 核心技术: anime.js + path d 属性切换 + 多路径循环 + 渐变填充
- 难度: 2/5
- 要复现: **是 → 槽 09 / 轮 19** (anime.js 技法参考)

#### ✨ Organic Shape Animations with SVG clipPath (Codrops)
- 来源: https://tympanus.net/codrops/2017/06/28/organic-shape-animations-with-svg-clippath/
- 核心技术: SVG clipPath + path morph → 裁切图片呈现有机形
- 难度: 3/5
- 要复现: **是 → 槽 09 / 轮 19** (让 blob 当图片 mask 升级版)

#### ✨ GSAP 3D Card Hover (Devotee007)
- 来源: https://codepen.io/Devotee007/pen/pomOEVa
- 核心技术: GSAP rotationX/Y 基于鼠标位置 + perspective + shadow 跟随
- 难度: 2/5
- 要复现: **是 → 槽 10 / 轮 20** (产品卡 3D 倾斜) 主要参考

#### ✨ Interactive Mystery Card Hover (filipz)
- 来源: https://codepen.io/filipz/pen/QwwOEQZ
- 核心技术: 透明 noise PNG repeating + steps() 帧动画叠 grain + hover 翻转
- 难度: 2/5
- 要复现: **是 → 槽 10 / 轮 20** (grain overlay 技法合并)

#### ✨ GSAP Image Tilt with Image Layers (jimthornton)
- 来源: https://codepen.io/jimthornton/pen/mEMGgB
- 核心技术: 多层图片 parallax tilt + translate 偏移放大景深
- 难度: 3/5
- 要复现: 备选 → 槽 10 升级版

#### ✨ Duotone CSS Blend Mode (jmperez Spotify-ish)
- 来源: https://codepen.io/jmperez/pen/wrVxga
- 核心技术: 容器 background-color + img mix-blend-mode: darken + ::before lighten 做高光染色
- 难度: 1/5
- 要复现: **是 → 槽 10 / 轮 20** (产品卡图片双色调) 辅助

#### ✨ Duotone Hover Animation CSS vars (Sidstumple)
- 来源: https://codepen.io/Sidstumple/pen/NWPgGNB
- 核心技术: CSS custom properties + hover 切换两组双色调
- 难度: 1/5
- 要复现: **是 → 槽 10 / 轮 20** (hover 染色切换)

### 轮次 8 · 横向补充 - 通用装饰技法（可任意塞到各槽）

#### ✨ GSAP SplitText Masked Reveal (osmosupply)
- 来源: https://codepen.io/osmosupply/pen/pvvKezw
- 核心技术: GSAP SplitText 切行/词/字 + overflow mask + stagger
- 难度: 2/5
- 要复现: 通用辅料 → 槽 04/07/08/17-20 几乎都能用
- 备注: SplitText 付费，CodePen 免费；我们实现用 SplitType（免费替代）

#### ✨ SplitType 免费替代 (designcourse)
- 来源: https://codepen.io/designcourse/pen/RwyMePX
- 核心技术: SplitType lib + GSAP stagger（y:0 0.05s）
- 难度: 1/5
- 要复现: **是** → 所有文字阶段 C 默认走这个
- CDN: `https://unpkg.com/split-type`

#### ✨ Custom Cursor Mix-Blend-Mode (Lomzo)
- 来源: https://codepen.io/Lomzo/pen/qBBROLm
- 核心技术: 固定定位白圆 + `mix-blend-mode: difference` + hover 放大
- 难度: 1/5
- 要复现: 通用辅料 → 所有暗色主线 WebGL 页都叠上

#### ✨ Cursor Follow Vanilla JS (mathieudaix)
- 来源: https://codepen.io/mathieudaix/pen/GYRYjW
- 核心技术: 纯 vanilla + requestAnimationFrame lerp（跟随平滑）
- 难度: 1/5
- 要复现: **是** → 默认光标实现

#### ✨ OGL - Minimal WebGL Library
- 来源: https://github.com/oframe/ogl · https://oframe.github.io/ogl/
- 核心技术: 8KB gzipped，裸 WebGL + 轻封装（Program/Mesh/Geometry）
- 难度: 3/5
- 要复现: 作为 three.js 的轻量替代；槽 03/04/06 若 shader-only 可以换用
- CDN: `https://cdn.skypack.dev/ogl` 或 `https://unpkg.com/ogl`

## 阶段 C 技术选型决策（轮次 8 冻结）

### CDN 依赖表（阶段 C 直接用）
| 库 | CDN URL | 用途槽位 |
|----|---------|---------|
| three.js | `https://unpkg.com/three@0.160.0/build/three.module.js` | 02/05(升级) |
| three.js addons | `https://unpkg.com/three@0.160.0/examples/jsm/` | 02 bloom |
| ogl | `https://cdn.skypack.dev/ogl` | 03/04 备选 |
| GSAP | `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js` | 08/18/19/20 |
| ScrollTrigger | `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js` | 08 |
| anime.js | `https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.min.js` | 09/19 |
| p5.js | `https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js` | 05/15 |
| SplitType | `https://unpkg.com/split-type` | 所有文字 |
| simplex-noise | `https://cdn.jsdelivr.net/npm/simplex-noise@4.0.1/+esm` | 09/19 blob |

### 槽位最终技术栈
| 槽 | 轮 | 库 | 难度 |
|----|----|----|----|
| 01 | 11 | vanilla WebGL（fragment-only） | 3 |
| 02 | 12 | three.js + BufferGeometry Points + BloomPass | 4 |
| 03 | 13 | vanilla WebGL（fragment-only） | 2 |
| 04 | 14 | canvas2D（CRT 噪点/扫描）+ CSS text-shadow | 2 |
| 05 | 15 | p5.js (WEBGL 模式，shader-based metaball) | 3 |
| 06 | 16 | vanilla WebGL（fragment-only，Tiny Clouds 减版） | 3 |
| 07 | 17 | CSS + SVG feTurbulence + SplitType | 2 |
| 08 | 18 | GSAP + ScrollTrigger（pin + horizontal） | 3 |
| 09 | 19 | SVG path + simplex-noise + vanilla JS | 2 |
| 10 | 20 | CSS + GSAP + grain PNG + duotone blend | 2 |

### 三条硬规则（阶段 C 共用）
1. **单文件自足**：所有 HTML 走 CDN，不引本地资源；颜色/字体定义在 `:root` 顶部。
2. **首屏 100% 可看**：加载立刻出视觉（不靠 scroll 触发才出东西），录屏前 5 秒就有张力。
3. **尺寸**：`1440×900` 以上视口设计目标，全屏 canvas 跟随 resize。

### 轮次 9 · 精炼 - 调色盘 / 字体 / GLSL 工具箱（阶段 C 直取）

#### 主线 1 WebGL 调色盘（dark neon）
```css
--bg-0:     #050308;  /* 最深底 */
--bg-1:     #0a0612;  /* 主暗底 */
--bg-2:     #141028;  /* 抬色区 */
--cyan:     #22d3ee;  /* 主信号 */
--magenta:  #ec4899;  /* 次信号 */
--violet:   #a855f7;  /* 第三色 */
--acid:     #d4ff00;  /* hazard，极少用 */
--fg-0:     #f5f3ff;  /* 主文字 */
--fg-muted: #a1a1aa;  /* 次文字 */
```
原则（整理自 2026 cyberpunk 色彩文章）: 一个主信号 + 一个次信号 + 一个 hazard 点睛，其余纯黑/深蓝做戏剧背景。

#### 主线 2 Editorial 调色盘（warm paper + 深邃）
```css
/* 浅版（杂志封面）*/
--paper:    #f4efe6;
--cream:    #ece5d3;
--ink:      #1c1a17;
--brick:    #d94f2a;    /* 主色：砖红 */
--moss:     #2e3a2c;    /* 配色：苔绿 */
--brass:    #c9a961;    /* 点缀：黄铜 */

/* 深版（夜读感，可选）*/
--nightpaper: #1a1712;
--nightink:   #f4efe6;
```

#### 字体栈（Google Fonts CDN）
```html
<!-- 主线 1 WebGL：技术/现代 -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">

<!-- 主线 2 Editorial：有机/表达 -->
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..900,0..100,0..1&family=Inter:wght@300..800&display=swap" rel="stylesheet">
```
Fraunces 是 2026 编辑设计宠儿（variable axes: wght/opsz/SOFT/WONK 可玩"怪味"）；配 Inter 做正文。

#### GLSL 工具函数（直接粘贴用）

```glsl
// 2D hash + value-noise + fbm（Inigo Quilez 风格，体积最小）
float hash21(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float noise2(vec2 p){
  vec2 i=floor(p), f=fract(p);
  float a=hash21(i), b=hash21(i+vec2(1.,0.)), c=hash21(i+vec2(0.,1.)), d=hash21(i+vec2(1.,1.));
  vec2 u=f*f*(3.-2.*f);
  return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;
}
float fbm(vec2 p){
  float v=0., a=0.5;
  mat2 R=mat2(0.8,-0.6,0.6,0.8);  // 旋转防方向条纹
  for(int i=0;i<5;i++){ v+=a*noise2(p); p=R*p*2.; a*=0.5; }
  return v;
}

// 极坐标 swirl（霓虹涟漪常用）
vec2 swirl(vec2 uv, vec2 center, float strength){
  vec2 d=uv-center; float r=length(d), a=atan(d.y,d.x)+strength/(r+.1);
  return center+r*vec2(cos(a),sin(a));
}

// smoothstep-based 圆环（用于涟漪）
float ring(float r, float c, float thickness){
  return smoothstep(c-thickness, c, r) - smoothstep(c, c+thickness, r);
}
```

#### 来源
- https://www.media.io/color-palette/cyberpunk-color-palette.html
- https://www.digitalsilk.com/digital-trends/neon-color-palettes/
- https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
- https://thebookofshaders.com/13/
- https://fontfyi.com/blog/best-serif-fonts-2026/
- https://fonts.google.com/specimen/Fraunces
