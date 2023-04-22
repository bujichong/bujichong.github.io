/*
 * @Descripttion: 自定义容器，用来渲染的导航
 * @Email: bujichong@163.com
 * @Date: 2023-02-28 14:42:25
 * @LastEditors: SC-202002031034
 * @LastEditTime: 2023-03-05 13:11:47
 * @Author: bujichong
 */
import { containerPlugin } from "@vuepress/plugin-container";

const colors = [
  "#e0faff",
  "#EAEBFD",
  "#FCEBEB",
  "#e7f2ff",
  "#ECFBEC",

  "#FBF0F8",
  "#FBF3E6",
  "#E1F9F7",
  "#E9EAEF",
  "#F4F8E0",
];

export default [
  containerPlugin({
    //nav 导航容器
    type: "nav",
    render: (tokens, idx, options, env, self) => {
      // console.log(tokens,index,options,env,self);
      const { type, info } = tokens[idx];
      const [customType, icon, color] = info.trim().split(" ");
      if (/container\_\w+\_open/g.test(type)) {
        const realC =
          color || colors[Math.floor(colors.length * Math.random())];
        const bgch = `style="background-color:${realC};"`;
        return `<div class="nav-container ${customType}" ${bgch}>
        <xicons class="xicon" iconSize="28" icon="${
          icon || "Cube"
        }" />`;
      }
      if (/container\_\w+\_close/g.test(type)) {
        return "</div>";
      }
      return self.renderToken(tokens, idx, options);
    },
  }),
  containerPlugin({
    //nav 导航组
    type: "nav-group",
    before: (info: string) => {
      return `<div class="nav-group-container">${
        info ? `<h2 class="nav-group-title">${info}</h2>` : ""
      }\n`;
    },
    after: (): string => {
      return "</div>\n";
    },
  }),
];
