---
title: "reset"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true

---

>**reset组件** 是基于 `btn`组件包装，reset的作用就是重置 **插入位置所在表单** 的表单值

## 代码示例

**模板代码**：

```vue
<submit @submit="searchSubmit" text="查询" /><reset />
```

## Props

| 参数  | 说明                     | 类型    | 默认值    | 可选值                                    |
| ----- | ------------------------ | ------- | --------- | ----------------------------------------- |
| type  | 弹窗模式                 | String  | 'primary' | primary / success / info/ warning / error |
| plain | 按钮是否镂空，背景色透明 | Boolean | true      | false                                     |
| text  | 按钮文字                 | String  | '重置'    | -                                         |

## Events

| 属性名 | 类型    | 说明                                    |
| ------ | ------- | --------------------------------------- |
| click  | Handler | 点击按钮除了默认reset事件外，可触发事件 |