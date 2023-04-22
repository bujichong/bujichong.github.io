/*
 * @Descripttion:  博客主导航
 * @Email: bujichong@163.com
 * @Date: 2023-03-01 11:06:31
 * @LastEditors: SC-202002031034
 * @LastEditTime: 2023-04-22 11:29:30
 * @Author: bujichong
 */
const navbar = [
    { text: "博客", link: "/", icon: 'Home' },
    // { text: "文档首页", link: "/docs/index.html", icon: 'DataCenter'},
    // { text: "分类", link: "/categories/shuoming/1/" },
    // { text: "标签", link: "/tags/shuoming/1/" },
    {
      text: "CSS",
      link: "/docs/css/index/",
      icon: 'CloudSatellite',
    },
    {
      text: "JS",
      link: "/docs/js/index/",
      icon: 'Explore',
    },
    // {
    //   text: "相册",
    //   link: "/photo/",
    //   icon: 'Explore',
    // },
    {
      text: "文档首页",
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
      ]
    },
  ];

export default navbar;