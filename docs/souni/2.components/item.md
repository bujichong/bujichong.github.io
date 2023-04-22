---
title: "item"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**item组件** 表单里的重要组件，是 `u-col` 和 `u-form-item` 的结合体，当有 `span` 属性时会自动添加 `u-col` 外盒。另外，我们在item上通过  `rule` 属性绑定当前表单项的验证规则。

## 代码示例

```vue
<item span="4" label="日期范围" prop="dateRange">
	<so-calendar  v-model="form.dateRange" mode="range" max-date="2021-05-14" @confirm="selectDate" :disabled="false"></so-calendar>
</item>
```

## alter 属性

`alter` 属性是为了输入框有不同变化值时，把变化值显示在输入项下方，用户点击变化值，将变化值填入输入项。

当 输入显示存在 `key/value` 情况时，及显示值和真实输入值不同时，可以启用 `alterText` 属性来显示文本值，真实值还是放在 `alter` 中，示例代码如下：

```vue
<item span="4" label="姓名(中文)" label-width="200" prop="name" rule="req|cn" :alter="alter.name"><txt v-model="form.name" /></item>

<item span="4" label="证件种类" prop="documentType" :alter="alter.documentType" :alterText="alter.documentName" @alterConfirm="alterDocumentType">
```



## rule 绑定规则

`rule` 绑定规则请参考 `so-form` 说明及表单验证说明。

## Props

| 参数      | 说明                   | 类型          | 默认值 | 可选值 |
| --------- | ---------------------- | ------------- | ------ | ------ |
| rule      | 绑定当前表单项验证规则 | String,Array  | ''     | -      |
| alter     | 变化值                 | String,Number | ''     | -      |
| alterText | 变化值显示文字         | String,Number | ''     | -      |

## Events

| 方法名       | 参数                   | 说明                          |
| ------------ | ---------------------- | ----------------------------- |
| alterConfirm | Function({value,text}) | 点击 变化值返回当前变化值对象 |



更多属性查看 [`u-form` 表单 item 介绍](https://www.uviewui.com/components/form.html)