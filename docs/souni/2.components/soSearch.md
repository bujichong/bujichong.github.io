---
title: "so-search"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**so-search组件** 暂时只做了简单的默认参数设置，接口完全继承  `u-search`，详情请查看 `u-search`的说明文档。

## 代码示例

**模板代码**：

```vue
<so-search v-model="form.ptName" placeholder="姓名/拼音缩写/身份证号码" @search="search"></so-search>
```

## Props

| 参数        | 说明                                | 类型    | 默认值 | 可选值 |
| ----------- | ----------------------------------- | ------- | ------ | ------ |
| shape       | 搜索框形状，round-圆形，square-方形 | String  | square | round  |
| show-action | 是否显示右侧控件(右侧的"搜索"按钮)  | Boolean | false  | true   |
| clearabled  | 是否启用清除控件                    | Boolean | true   | false  |

## Events

| 方法名 | 参数 | 说明 |
| ------ | ---- | ---- |
|        |      |      |



## Method

| 方法名 | 参数 | 说明 |
| ------ | ---- | ---- |
|        |      |      |

更多说明请查看 [`u-search` 组件介绍](https://www.uviewui.com/components/search.html)