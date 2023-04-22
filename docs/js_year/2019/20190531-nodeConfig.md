---
title: "绿化nodeJs"
date: "2019-05-31 13:50"
comments: true
categories:
- nodeJs
tags:
- nodeJs
- NODE_PATH
---

> 绿化后直接解压安装包，配置环境变量及设置配置就可以用，配置文件及安装模块在安装包内

<!-- more -->
如，将node安装到 **D:\Program Files\nodejs\** 目录

## 查看命令：
```javascript
npm config ls -l    //查看设置
npm list --depth=0 -g     //查看已安装到全局的模块
```

## 初次修改，将文件和cache都移到安装文件夹中
在node安装文件夹里新建2个目录：
- \node_global
- \node_cache

将 C:\Users\Administrator\AppData\Roaming\npm文件下的node_modules拷贝到 **\node_global**中
将 C:\Users\$USER\.npmrc   用户配置文件拷贝到node安装目录下


## 添加node到环境变量，设置全局NODE_PATH变量
“我的电脑”-右键-“属性”-“高级系统设置”-“高级”-“环境变量”，

### 用户环境变量：
添加 ：  C:\Users\Administrator\AppData\Roaming\npm(可选添加)

### 系统变量：
增加：
NODE_PATH   ： D:\Program Files\nodejs\node_global\node_modules

path中添加：
D:\Program Files\nodejs\
%NODE_PATH%
两项


## 将配置文件设置到当前目录下
.npmrc文件已在当前目录下
在cmd下设置
```javascript
npm config set userconfig "D:\Program Files\nodejs\.npmrc"

//这两项已在.npmrc文件中
npm config set prefix "D:\Program Files\nodejs\node_global"
npm config set cache "D:\Program Files\nodejss\node_cache"
```
