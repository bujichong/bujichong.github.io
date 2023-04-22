---
title: "so-radio"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**so-radio组件** 是根据 `u-radio`组件二次包装，直接将 数据列表包装在组件中。
>
>**注意：** 此控件在验证必填性时，请选择 `reqPlus`，可以验证是否空数组或者是数值类型。

## 代码示例

**模板代码**：

```vue
<item span="4" label="味道" prop="sweet" rule="reqPlus">
    <so-radio :list="radioList" textLabel="field" v-model="form.sweet" @change="changeSweet" />
</item>
```

**js代码**：

```javascript
...
data(){
    return {
        form : {
            sweet : 1,
        },
        radioList: [{field: '鲜甜',value:1,disabled: false},{field: '麻辣',value:23,disabled: false}],
    }
},
 methods:{
    changeFruit(record){
        //返回值为和当前设置值一致的数据格式(字符串或者数组)，如 [1,2] 或 '1,2'
        console.log(record);
    },
    ...
 }
...
```

##  列表值的是否可选

`list` 属性对应的list 对象项 属性 `disabled` 对应着是否可以选择。



## Props

| 参数          | 说明                | 类型             | 默认值  | 可选值 |
| ------------- | ------------------- | ---------------- | ------- | ------ |
| v-model/value | 值                  | Number \| String | ''      | -      |
| list          | 数据列表            | Array            | []      | -      |
| textLabel     | 对应显示的label文字 | String           | 'text'  | -      |
| valueLabel    | 选择框实际选择值    | String           | 'value' | -      |

## Events

| 方法名 | 参数             | 说明       |
| ------ | ---------------- | ---------- |
| change | Function(record) | 返回选择值 |

