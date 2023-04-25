import { defineUserConfig } from "vuepress";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
// import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import series from "./config/sidebar";
import navContainer from "./config/navContainer";
import navbar from "./config/navbar";
import notice from "./config/notice";

export default defineUserConfig({
  title: "不羁的空间",
  description: "疏行懒言，年轻无为，卖马为生",
  head: [
    ["link", { rel: "icon", href: "/images/logo.png" }],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@docsearch/css@3" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@docsearch/js@3" }],
  ],
  plugins: [
    mediumZoomPlugin({
      // 配置项
    }),
    ...navContainer, //自定义 nav 容器
  ],
  
  port: 1208,
  theme: recoTheme({
    catalogTitle:'文档目录',
    lastUpdatedText: "最后更新时间：",
    autoSetBlogCategories: true,
    routerSkip:  ['/my/','/photo/', '/souni/', '/zvue/'],
    // vuePreviewsDir : './.vuepress/vue-previews',
    // autoAddCategoryToNavbar: true,
    autoSetSeries: true,
    style: "@vuepress-reco/style-default",
    logo: "/images/config/bujichong.jpg",
    author: "bujichong",
    authorAvatar: "/images/config/bujichong.min.jpg",
    docsRepo: "https://github.com/bujichong/bujichong.github.io",
    docsBranch: "master",
    docsDir: "",
    primaryColor: "#a37bee",
    series,
    navbar,
    // bulletin: notice
    algolia: {
      appId: 'D044II9N8C',
      apiKey: 'c4f5b730336b403056a67c49ce18bec2',
      indexName: 'iflong',
      inputSelector: '### REPLACE ME ####',
      algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
      debug: false // Set debug to true if you want to inspect the dropdown
    },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
});
