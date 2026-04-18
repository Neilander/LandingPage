# 花语搜索器 · Progress

## 目标
做一个 landing page 下的小工具：用户输入心情/关键词（"勇气 / 思念 / 告别"），返回**匹配的花**，并配上**白底线稿+纯色填充**的花朵插图（Matisse 剪纸风 + 细线描）。

## 交互草案
1. 搜索框（居中，大字，白底）
2. 输入 1-3 个词 → 匹配 top 3-5 朵花
3. 每朵花：名字（中文 + 学名） / 花语 / 一句诗意小注 / 独立 SVG 插图
4. 结果卡片带微动（悬浮感 / 绽放动画）
5. 空态显示"10 种花正在等你问"

## 风格
- 背景：#f8f4ed 温暖白（不纯白，更像纸张）
- 线稿：#2a2520 深墨色 1-1.5px 细线
- 填充：4-5 个纯色 palette：砖红 / 苔绿 / 黄铜 / 深紫 / 薰衣草 / 奶杏
- 字体：Fraunces（花名）+ Noto Serif SC（中文）+ Inter（UI）
- 插图：线稿轮廓 + 平涂纯色内衬，**不渐变、不写实、不 3D**

## 三阶段工作流（10 轮）

### 阶段 A · 研究（轮次 1-2）
- 花语数据：中英文 20-30 种花 + 含义
- 视觉参考：3-5 个"line-art + flat color"花朵插图参考链接
- 输出：REFS.md + DATA.md

### 阶段 B · 插图构建（轮次 3-5）
- 每轮产出 4 朵花的 SVG（≈12 朵）
- 每朵：独立 symbol，可复用
- 输出：flowers.svg 或内联在 index.html 的 `<defs>`

### 阶段 C · 工具构建（轮次 6-8）
- 轮 6：搜索 UI + 搜索逻辑（关键词到花的映射表）
- 轮 7：结果展示 + 动画
- 轮 8：polish + 空态 + 移动端

### 阶段 D · 集成（轮次 9-10）
- 轮 9：`node --check` + 浏览器自测 + 截图
- 轮 10：添加到 `LandingPage/index.html` 的卡片网格（替换某张 `#` 占位卡）

## 轮次记录
| 轮次 | 时间 | 阶段 | 产出 | 备注 |
|------|------|------|------|------|
| 0 | 2026-04-17 18:26 EDT | 初始化 | 建骨架 | 由主对话创建 |
| 1 | 2026-04-17 18:33 EDT | A-研究 | REFS.md 写完（英/中花语来源 + 风格 3 路线）; DATA.md 首 6 朵花（红玫瑰/白紫罗兰/铃兰/向日葵/勿忘我/牡丹） | 下轮续补 6-10 朵 |
| 2 | 2026-04-17 18:43 EDT | A-研究 | DATA.md 续补 8 朵（郁金香/薰衣草/雏菊/鸢尾/山茶/樱花/蒲公英/三色堇）共 14 朵完成; 锁定 6 色色盘 + 3 轮插图排期 | 阶段 A 完毕 |
| 3 | 2026-04-17 18:53 EDT | B-插图 | flowers-3.html 首 5 朵 SVG symbol: rose-red/violet-white/lily-of-valley/sunflower/forget-me-not + 预览页 | 符合规格: 线稿+局部纯色 |
| 4 | 2026-04-17 19:03 EDT | B-插图 | flowers-4.html 4 朵 SVG symbol: peony/tulip-red/lavender/daisy + 预览页 | 累计 9 朵,剩 5 朵 |
| 5 | 2026-04-17 19:13 EDT | B-插图 | flowers-5.html 5 朵末批 SVG symbol: iris/camellia/cherry-blossom/dandelion/pansy + 预览页 | **14 朵全部画完**,阶段 B 收尾 |
| 6 | 2026-04-17 19:23 EDT | C-骨架 | index.html: 搜索框 + 14 朵 symbol 内联 + FLOWERS 数组 + includes 打分搜索 + 结果卡片基础样式 + 7 个 hint pill + 空态; node --check 通过 | 下轮做卡片动画/空态美化 · 用户中途反馈: 改用 Rough.js 手绘风,去色块 |
| 7 | 2026-04-17 19:33 EDT | C-动画 | 卡片 stagger reveal (translateY 20→0 + scale 0.95→1, cubic-bezier 弹性, 5 张错峰 0.06s-0.46s); 空态重做带 ❋/✽ 花体标记 + 诗意提示; render 用 rAF 触发动画重放 | Rough.js 手绘已在轮 6 接入 |

## 状态
- 当前轮次: 7
- 下一轮: 8（阶段 C 末 - 移动端适配 + 卡片 hover + 插图呼吸 + self-check）
- 已完成: 否

## 停止条件
- 轮次 ≥ 10 或标记「已完成: 是」后，下次触发只追加"跳过: 已完成"。
- 或用户 CronDelete 手动停。

## 输出位置
- 本目录: `LandingPage/tools/flower-lang/`
- 最终工具: `LandingPage/tools/flower-lang/index.html`
- Landing 入口（最后集成）: `LandingPage/index.html` 的 ITEMS 数组里加一张卡
