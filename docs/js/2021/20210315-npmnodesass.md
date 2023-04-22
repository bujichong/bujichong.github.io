---
title: "安装node-sass正确姿势"
date:  "2021-03-15 13:50"
comments: true
categories:
- nodeJs
tags:
- nodeJs
- npm
- node-sass
---

> 每次装node-sass都头疼
<!-- more -->
### npm或yarm指定淘宝镜像
```javascript
# npm命令
npm config get registry
# yarn命令
yarn config get registry
```
修改为淘宝镜像
```javascript
# npm命令
npm config set registry http://registry.npm.taobao.org/
# yarn命令
yarn config set registry http://registry.npm.taobao.org/
```
此时，正常情况再安装node-sass都可以成功，如果安装还报错，则进入下面第二步。安装编译windows平台编译环境

### 安装windows平台编译环境（需要在管理员权限下安装）
```javascript
npm install -g node-gyp
npm install --global --production windows-build-tools 
```
当然也可在项目目录下临时安装指定node-sass为镜像淘宝
```javascript
npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
```


