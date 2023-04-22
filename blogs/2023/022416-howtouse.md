---
title: 博客使用说明
date: 2023-02-24 16:32
author: bujichong
tags:
 - 说明
categories:
 - 说明
---

## 欢迎使用
我的博客 是采用 [`vuepress 2.0`](https://v2.vuepress.vuejs.org/zh/)创建，整个渲染是基于 `vue3 + vite` 的，
同时，我们集成了最流行的 `vuepress` 主题 [`vuepress-theme-reco`](http://v2.vuepress-reco.recoluan.com/)。  
需要说明的是，这个主题 集合了 **博客** 和 **文档** 两个功能。 
书写博客或文档都是采用最流行的`markdown`格式。  
**注：** 为了便于生成导航，文档请使用 **.md** 做文件后缀名。

## 目录
书写博客请放置在 `blogs` 文件夹中，文档请在 `docs` 目录下根据文档类型，建立目录书写存放。

```js
aierdever
 ├── blogs  //博客总目录
 │   ├── 2023 //博客分类文件夹
 │   └── howuse.md
 ├── docs //文档总目录
 │   ├── pcwork //pc框架文档目录
 │   └── souni //souni文档目录
 ├── .vuepress //vuepress 配置目录
 │   ├── config.ts //配置文件
 │   ├── public //存放公共资源文件目录
 │   │   ├── blogs // 博客资源总文件夹
 │   │   ├── docs //文档资源总文件夹
 │   │   │   └── pcwork
 │   │   └── logo.png
 │   ├── render.js  //运行生成侧边栏文件
 │   ├── sidebar.js //存放侧边栏json数据
 │   ├── styles
 │   │   └── index.css
 │   └── vue-previews //vue 预览文件夹
 │       ├── demo.ts
 │       └── test.vue
 ├── package.json
 ├── pnpm-lock.yaml
 └── README.md
```

## 静态资源存放目录

书写博文时，我们经常会有图片或资源需要存放，
为了便于维护和查找，请将资源存放在 `/.vuepress/pubilc/` 中(如上目录结构，已分类)，
博客请在目录中新建文件夹，分类存放。
如：文档 pcwork 的资源我们就放置在 `/.vuepress/pubilc/docs/pcwork`
## 图标使用
vuepress-theme-reco@2.x 是通过 Xicons 来配置图标的，[Xicons](https://www.xicons.org/#/zh-CN) 只集成了 **`carbon` 1 种图标**，几乎可以满足绝大部分场景。
如果想要在 markdown 中输出一个星星图标 <xicons icon="Star" />，你就可以在 markdown 中这样编辑代码：
```vue
<xicons icon="Star" />
```

## 博客书写规范
- 博客请放置在`blogs`里对应年份的文件夹中，文件名为 `月日时-内容标题.md`，如： `020418-howtouse.md`，这样博客系统会自动帮收入博客列表中，
- 博客的头部文件请注意正确书写 `Frontmatter`，很多的 `Frontmatter`名称和方式，请[参考官方文档](https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html)。
- 注意写好 `tags` 和 `categories`，多个字段分组书写，博客会自动根据这些字段自动分类文章。

```
---
title: 想知道怎么使用这个博客吗？
date: 2023-02-24 16:32
author: bujichong
tags:
 - 说明文档
 - info
categories:
 - 说明文档
---
```

## 文档书写规范
- 文档按文件夹放置在 `/.vuepress/pubilc/docs/` 中。
- 根据内容，分类可在文档目录下再建子目录来分类存放，侧导航会根据文件夹来自动分类生成。
- 为了保证导航的正确顺序，请注意文件名称的命名排序。
- 可参考已有项目文件目录 `pcwork`或 `souni`，将首页单独放置在 `index` 文件夹中，并推荐在首页中书写当前文档导航。
- 文档头文件书写，参考如：
```
---
title: "框架目录"
subSidebar: true
categories:
- pc框架
tags:
- pc框架
- 框架基础
comments: true

---
```
文档和博客暂未开启评论，字段预留。

## 添加主导航

写完手册文档，请在 `/.vuepress/config/navbar.ts`中添加入口导航，示例如：
```js
navbar: [
    ...
    { text: "soUni", link: "/docs/souni/index.html",icon: 'Document'
        // children: [
        //     { text: "指南", link: "/docs/souni/frame/index.html" },
        //     { text: "组件", link: "/docs/souni/components/index.html" },
        //     { text: "Js", link: "/docs/souni/js/index.html" },
        // ],
    },
    ...
]
```

## 页面中添加导航
为了更好的导航所有文档，我们专门设置了文档首页： `docs/index.md`，书写完文档，请将自己文档的导航目录添加到这个文件中。
为了更好的显示文档的导航，我们定制了2个专有容器 `nav-group` 和 `nav`，

**使用方法:**
``` md
:::: nav-group [组标题]
    ::: nav [导航图标]
    [导航文字](链接)
    :::
::::
```
图标从 [Xicons](https://www.xicons.org/#/zh-CN) 的 **`carbon` 图标** 中查找，设置 icon名称即可。

**示例代码：**
``` md
:::: nav-group pc框架手册
    ::: nav Home
    [首页](/docs/pcwork/index/)
    :::
    ::: nav Book
    [框架基础](/docs/pcwork/1.base/1.files.md)
    :::
    ::: nav Carbon3DPrintMesh
    [样式及图标](/docs/pcwork/2.css/1.grid.md)
    :::
::::
```
**显示效果：**
:::: nav-group pc框架手册
::: nav Home
[首页](/docs/pcwork/index/)
:::
::: nav Book
[框架基础](/docs/pcwork/1.base/1.files.md)
:::
::: nav Carbon3DPrintMesh
[样式及图标](/docs/pcwork/2.css/1.grid.md)
:::
::::

## 侧边栏目录

文档是不会自动生成侧边栏的，书写文档后请运行下命令生成侧边栏，或者build 网站直接使用 `go` 命令。

```bash
## npm
npm run side
##npm run go 

## yarn
yarn side

## pnpm
pnpm side
## pnpm go 
```

## 最后

为了更加愉快的书写 文档 和 博客，推荐使用 `Typora`~
