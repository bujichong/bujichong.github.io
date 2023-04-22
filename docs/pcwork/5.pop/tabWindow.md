---
title: "newTabWindow 和 closeTabWindow"
author: bujichong
subSidebar: true
categories:
- pc框架
tags:
- pc框架 
- pop
comments: true
---
:::: warning 说明

- `$pop.newTabWindow`用于在子页面中打开新窗口，显示在主框架的新tab页中；
- `$pop.closeTabWindow` 用于在子页面中通过 **title名称** 关闭其他 tab 窗口；

::::

## $pop.newTabWindow(tabTitle, url, unselected？)代码示例

- `unselected` 为 `true` 时，打开新窗口后不选中聚焦；
- 标题存在， url 不同，则更新 url　刷新页面

```js
//打开新tab窗口
$pop.newTabWindow('查看详情','details.html');
```



## $pop.closeTabWindow(tabTitle)

```js
//关闭对应标题窗口
$pop.closeTabWindow('查看详情');
```

