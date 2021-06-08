---
layout: post
title: "Express安装"
date: "2019-11-04 13:50"
comments: true
categories:
- nodeJs
tags:
- nodeJs
- NODE_PATH
- express
---

> 重新装电脑，安装express到全局总是报错，要么是找不到express要么是express不是内部或外部命令，之前处理过，是通过设置NODE_PATH处理的，总是忘掉，记录一下。

<!-- more -->
### 全局安装express
```javascript
npm install express -gd
npm install -gd express-generator
```
generator是express 4.0以后分离出来的，也需要安装
安装以后，可能还是不行，运行需要express时，仍然提示 **Error: Cannot find module 'express'**,

这个时候，我们还需要在环境变量里添加node_path
电脑右键\属性\高级系统设置\高级\环境变量\系统变量
添加： **NODE_PATH**
路径对应
```javascript
npm root -g
```
出来的路径，大体是： **C:\Users\0\AppData\Roaming\npm\node_modules** 这样的

设置完路径以后再跑node命令，express已经可以使用了。

### 附录：

#### 查看当前已安装的模块：
```javascript
npm ls --depth=0 -g
npm list --depth=0 -g
npm list --depth=0 -global
```

#### 查看全局配置
```javascript
npm config ls -l
```

#### 查看系统全局的路径
```javascript
npm root -g
```
这个就可以帮我们查看node npm全局包对应的位置了



### 设置NODE_PATH为环境变量
最简单的就是直接把现在的目录直接设为环境变量

### 其他常用node命令

- npm list  查看当前目录下已安装的node包

- npm help  查看帮助命令

- npm update    更新node模块

- npm uninstall    卸载模块

- npm install -g cnpm --registry=https://registry.npm.taobao.org    安装cnpm

- npm config set registry http://registry.npm.taobao.org/   设置淘宝镜像

- npm root  查看当前包的安装路径

