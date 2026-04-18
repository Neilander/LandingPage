# 视觉参考 & 数据来源

## 花语数据来源

### 西方维多利亚花语（Floriography）
- [Language of flowers · Wikipedia](https://en.wikipedia.org/wiki/Language_of_flowers)
- [The Language of Flowers: An Alphabet of Floral Emblems (1857) · Public Domain Review](https://publicdomainreview.org/collection/the-language-of-flowers-an-alphabet-of-floral-emblems-1857/)
- [Decoding The Victorian Flower Language · Lillicoco](https://www.lillicoco.com/blogs/love-lillicoco-blog/decoding-the-victorian-flower-language-a-floriography-guide)
- [Floriography · Planterra](https://planterraevents.com/blog/floriography-secret-language-flowers-victorian-era)
- [Flower Meanings · The Old Farmer's Almanac](https://www.almanac.com/flower-meanings-language-flowers)

### 中文花语
- [花语大全 · zhihu 专栏](https://zhuanlan.zhihu.com/p/630537538)
- [各种花的花语 · 中华 00cha](http://huayu.00cha.net/)
- [47 种花的花语大全 · 北京语言文字工作协会](http://www.bjywxh.org.cn/html/2019/zgyy_0326/1435.html)

### 关键原则
- 同一朵花常有多重含义（玫瑰有 5+ 色不同含义）
- 中西花语有时相同有时相反（比如黄玫瑰西方"友谊"/中方"嫉妒"）
- 选花语时取**最广泛共识的那一条**，不要冷门解读
- 每朵花打 3-5 个中英 tag，方便模糊匹配

## 视觉参考

### 风格关键词
- "Single line drawing flower minimalist"（单线条）
- "Botanical line art + spot color fill"（线稿+局部纯色填充）
- "Midcentury flower illustration flat"（中世纪现代平面花朵）

### 具体方向（3 种都试试，风格可以混搭）

1. **Continuous line art**：一笔画完整朵花的轮廓，不断笔。极简优雅。适合小花如 lily of the valley、pansy。
2. **Outline + spot color**：细黑线勾花形，关键部位（花瓣中心、叶脉、花蕊）用 1-2 个平涂纯色填充。适合 rose、peony。
3. **Matisse cutout**：放弃线条，直接用有机形色块拼出花形。适合 violet、sunflower。

### 具体参考（搜索词）
- iStock: "single line drawing flower minimalist"
- Adobe Stock: "flower line drawing"
- Vecteezy: "botanical line drawing" (CC0 可下)

### 我们自己画的美术规格
- `viewBox="0 0 120 140"`
- 线稿: `stroke="#2a2520"` `stroke-width="1.2"` `stroke-linecap="round"` `stroke-linejoin="round"` `fill="none"`
- 纯色填充: 从项目色盘选（--brick / --moss / --brass / --plum / --lavender / --peach）
- 不做: 渐变、阴影、3D、写实
- 动画: 载入时 stroke-dashoffset 自绘；hover 时轻微 scale+摇
