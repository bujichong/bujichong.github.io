---
layout: post
title: "gitbook使用感受和几个需要注意的问题"
date: 2019-11-29 10:33
comments: true
tags:
	- skill
	- gitbook
---

> 使用了docsify，docsify直接显示页面的效果比较爽，但是无法生成文档，另一款竞品gitbook可以生成各种文档，决定也试一下

## 安装及使用过程
gitbook使用起来比docsify还是简单，安装，然后书写运行就可以
### 安装
```
npm install -g gitbook-cli
```

### 初始化：到指定目录下运行
```
gitbook init
```
半天不响应，以为失败了，试了两次以后，原来是执行时间太长，需要等很久，最后成功了。
执行完后，你会看到多了两个文件 —— README.md 和 SUMMARY.md，它们的作用如下：
- README.md —— 书籍的介绍写在这个文件里
- SUMMARY.md —— 书籍的目录结构在这里配置

### 运行
我已经在docsify里已经有大量的md文档，直接拿过来试着运行
把docs、images资源文件都拷贝过来，
运行命令：
```
gitbook serve [--port 2333]
```
运行时候居然失败，百度了一下，发现原来是gitbook的bug，修正如后
还可以
```
gitbook build
```

### 生成电子文档
还可以生成电子文档，不过也报错了，修正如后
**生成pdf格式：**
```
gitbook pdf ./ ./mybook.pdf
```
**生成epub格式：**
```
gitbook epub ./ ./mybook.epub
```
**生成 mobi 格式：**
```
gitbook mobi ./ ./mybook.mobi
```

## 修正 serve 和 build 时候的错误
#### 问题
运行 **gitbook build** 及 **gitbook serve** 时候会报错：
```
no such file or directory
```
这是一个bug(存在于gitbook v3.2.3)

#### 解决办法
在目录：
```
C:\Users\你的用户名\.gitbook\versions\3.2.3\lib\output\website
```
搜索文件夹里的文档，把所有的**confirm: true**都改为**confirm: false**

## 修正生成电子文档时候的错误
#### 问题
GitBook生成PDF、epub报错Error during ebook generation: 'ebook-convert' 乱码

#### 解决办法
- 安装calibre，
- 并把calibre放到环境变量的path中：电脑-属性-系统-高级系统设置-环境变量，配置环境——用户变量里的path，添加 **calibre** 路径
- 退出cmd，再次执行生成pdf命令，成功~


