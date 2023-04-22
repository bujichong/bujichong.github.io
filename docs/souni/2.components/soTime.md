---
title: "so-time"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**so-time组件** 是基于 `u-picker` 包装的一个专门选择日期时间的输入组件，可根据需要返回 日期时间 格式数据，没有列出的参数继承 `u-picker` 接口。

## 代码示例

**模板代码**：

```vue
<so-time v-model="form.time" mode="date" @change="changeTime" :disabled="true" />
```

**js代码**：

```javascript
...
data(){
    return {
        form:{
            time:'2021-01-14'
        }
    }
},
methods:{
	changeTime(value){
        console.log(value);
    },
}
...
```

## Props

| 参数          | 说明                                     | 类型    | 默认值 | 可选值                                              |
| ------------- | ---------------------------------------- | ------- | ------ | --------------------------------------------------- |
| v-model/value | 输入值                                   | String  | ''     | -                                                   |
| splitLetter   | 日期分隔符                               | String  | '-'    | -                                                   |
| mode          | 日期选择器格式                           | Boolean | 'date' | month\|date\|dateTime\|dateMinute\|time\|hourMinute |
| disabled      | 是否禁用，禁用后能选择，但输入值不会变化 | Boolean | false  | true                                                |
| clearValue    | 是否可以清空值                           | Boolean | true   | false                                               |

## Events

| 方法名 | 参数             | 说明       |
| ------ | ---------------- | ---------- |
| change | Function(record) | 返回选择值 |



## Method

| 参数 | 参数 | 说明 |
| ---- | ---- | ---- |
|      |      |      |

更多说明请查看 [`u-picker` 的日期选择模式介绍](https://www.uviewui.com/components/picker.html)