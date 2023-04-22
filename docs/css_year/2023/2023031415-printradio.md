---
title: 单选按钮在打印模式下不显示选中状态的问题
date: 2023-03-14 15:54
author: bujichong
tags:
 - css
categories:
 - css
---

## 问题
arss里的调查问卷，都是单选框，明明有些题是勾选状态，实际确不显示勾选，怀疑是无法打印背景色造成的。

## 解决
上网查了一下，果然是这个问题，其实就是打印的时候要勾选 “背景图形”选项。  
但其实，用户肯定是懒得去勾选了，那我们可以通过样式强制显示打印背景：
```css
/* 强制打印背景颜色/图像 */
* {
	-webkit-print-color-adjust: exact !important; /* Chrome, Safari */
	color-adjust: exact !important; /*Firefox*/
}
```

复制粘贴，解决~ ，火线走起....