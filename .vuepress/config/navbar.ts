/*
 * @Descripttion:  博客主导航
 * @Email: bujichong@163.com
 * @Date: 2023-03-01 11:06:31
 * @LastEditors: bujichong
 * @LastEditTime: 2023-04-25 11:25:37
 * @Author: bujichong
 */
const navbar = [
    { text: "博客", link: "/", icon: 'Home' },
    // { text: "文档首页", link: "/docs/index.html", icon: 'DataCenter'},
    // { text: "分类", link: "/categories/shuoming/1/" },
    // { text: "标签", link: "/tags/shuoming/1/" },
    {
      text: "枫林望月",
      link: "/docs/seemoon_year/index/",
      icon: 'Moon',
    },
    {
      text: "技术文集",
      link: "/docs/css_year/index/",
      icon: 'CloudSatellite',
      children: [
        {
          text: "CSS文集",
          link: "/docs/css_year/index/",
        },
        {
          text: "JS文集",
          link: "/docs/js_year/index/",
        }
      ]
    },
    {
      text: "手册文档",
      link: "/docs/index/",
      icon: 'DataCenter',
      children: [
        {
          text: "PC端框架手册",
          link: "/docs/pcwork/index/",
          // icon: 'CdArchive',
        },
        {
          text: "uni小程序开发手册",
          link: "/docs/souni/index/",
          // icon: 'IbmCloudVpcEndpoints',
        },
        {
          text: "珠峰教案",
          link: "/zvue/index.html",
          // icon: 'IbmCloudVpcEndpoints',
        },
      ]
    },
    {
      text: "相册",
      link: "/photo/indexGallery.html",
      icon: 'ColorPalette',
    },
  ];

export default navbar;