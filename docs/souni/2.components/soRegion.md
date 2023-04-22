---
title: "so-region"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**so-region组件** 是根据 uni内置的省市区数据扩展出来的省市区组件， `uview`中有省市区组件，但是没有做到列表选择值和当前值对应，`so-region` 修复了此问题，并简化了输入输出接口。

## 代码示例

**模板代码**：

```vue
<item span="4" label="地区" prop="region" rule="reqPlus">
    <so-region v-model="form.region" type="pca" valueKey="name" @confirm="selectRegion" />
</item>
```

**js代码**：

```javascript
...
 methods:{
     selectRegion(record){
         console.log(record);
     },
       ...
 }
...
```

##  选择类型 mode参数

`mode` 参数可以为 ` ['pca','pc','ca','p','c','a']` 中的任何一个值，`pca` 的含义对应下列中的值

```javascript
{
    p : 'province',
    c : 'city',
    a : 'area'
}
```

## confirm 返回参数

confirm返回值会根据mode种类进行返回，`pca` 完整的返回如下：

```javascript
{
	province: {
		label: "广东省",
		value: "44"
	},
	city: {
		label: "深圳市",
		value: "4403"
	},
	area: {
		label: "宝安区",
		value: "440306"
	},
}
```

## Props

| 参数          | 说明                                     | 类型            | 默认值 | 可选值                                  |
| ------------- | ---------------------------------------- | --------------- | ------ | --------------------------------------- |
| v-model/value | 值                                       | Array \| String | ''     | -                                       |
| mode          | 选择类型                                 | String          | 'pca'  | ['pca','pc','ca','p','c','a']中任何一个 |
| valueKey      | 输入框返回值                             | String          | 'name' | 'code'                                  |
| splitLetter   | 分隔符，默认是空格                       | String          | ''     | -                                       |
| disabled      | 是否禁用，禁用后能选择，但输入值不会变化 | Boolean         | false  | true                                    |
| clearValue    | 是否可以清空值                           | Boolean         | true   | false                                   |

## Events

| 方法名 | 参数             | 说明       |
| ------ | ---------------- | ---------- |
| change | Function(record) | 返回选择值 |



## Method

| 方法名 | 参数 | 说明 |
| ------ | ---- | ---- |
|        |      |      |

更多说明请查看 [`u-picker` 的区域模式](https://www.uviewui.com/components/picker.html)