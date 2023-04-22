---
title: "btn"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**btn组件** 继承于 `u-button` 组件

## 代码示例

```vue
<btn @click="updateFruits" type="primary">更新</btn>
<btn @click="updateRadioList" type="primary" ripple>更新radio列表</btn>
```



## 组件处理

- 默认添加了水波纹效果
- 修改了内联时按钮的样式

## Props

| 参数   | 说明           | 类型    | 默认值 | 可选值 |
| ------ | -------------- | ------- | ------ | ------ |
| inline | 是否是内联按钮 | Boolean | true   | false  |
| text   | 按钮文字       | String  | ''     | -      |

## Slots

默认 Slot 就是按钮文字，有 `text` 属性，text属性优先