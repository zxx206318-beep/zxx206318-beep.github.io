# 邹欣璇游戏美术求职作品集

这是一个无需构建、可直接运行的静态作品集。页面按招聘方阅读逻辑分为：

1. 第一屏：姓名、求职方向、个人定位、联系入口
2. 精选作品：项目与能力证据，可按品类筛选
3. 能力范围：角色、绑定动画与关卡设计
4. 教育与项目经历：中国传媒大学 28 级游戏艺术背景
5. 联系方式：邮箱、简历和作品平台

页面默认显示中文，右上角可切换为英文。语言选择会保存在浏览器中。

## 修改内容

绝大部分文字集中在 `content.js`。姓名、学校、作品文案、中英文翻译和
`./pictures/` 素材路径都在该文件中维护。

作品支持图片和视频：

```js
{
  id: "unique-project-id",
  title: "PROJECT NAME",
  subtitle: { zh: "一句话项目定位", en: "Short project label" },
  category: "character", // character / animation / level
  year: "2026",
  layout: "wide", // wide 占整行；standard 占一列
  cover: "./pictures/cover.png",
  roles: {
    zh: ["角色造型", "材质"],
    en: ["Character design", "Materials"]
  },
  description: {
    zh: "一句到两句项目说明。",
    en: "A short project description."
  },
  images: ["./pictures/01.png", "./pictures/02.png"],
  videos: [
    {
      src: "./pictures/demo.mp4",
      label: { zh: "动作演示", en: "Motion demo" }
    }
  ]
}
```

新增作品时，复制现有作品对象并修改 `id` 即可。筛选分类会自动生成。
新增分类时，同时更新 `copy.categories` 中的中英文名称。

当前作品分为角色设计、ZBrush、绑定动画、关卡设计与引擎呈现五类。首屏会轮播精选项目，
项目区采用统一的卡片网格，点击进入详情。页面采用暗色
毛玻璃界面，并会按作品类别显示轻微的项目强调色。展示图使用
`pictures/web/` 中压缩到 1920 px 的 JPEG；原始 PNG 和视频仍保留在
`pictures/`，方便以后重新导出。

短动画同时提供 `pictures/previews/` 中的 640 px GIF 循环预览。较长的实机视频
使用 `preload="none"`，只有打开项目并点击播放时才加载原视频。

## 预览

直接双击 `index.html` 可以预览。推荐在目录中运行本地服务器：

```powershell
node server.js
```

然后打开 `http://localhost:8080`。

新增图片后，将用于页面的版本导出为宽约 1600–1920 px 的 WebP/JPEG 并放进
`pictures/web/`。视频建议在上线前进一步压缩，减少移动网络下的等待时间。

## 上线

整个目录可直接部署到 GitHub Pages、Cloudflare Pages、Vercel、Netlify 或普通静态服务器。无需 Node.js 或打包步骤。
