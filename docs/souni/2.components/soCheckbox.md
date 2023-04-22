---
title: "so-checkbox"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**so-checkbox组件** 是根据 `u-checkbox`组件二次包装，直接将 数据列表包装在组件中。
>
>**注意：** 此控件在验证必填性时，请选择 `reqPlus`，可以验证是否空数组。

## 代码示例

**模板代码**：

```vue
<item span="4" label="水果" prop="fruit" rule="reqPlus">
    <so-checkbox :list="checkboxList" textLabel="field" v-model="form.fruit" @change="changeFruit" />
</item>
```

**js代码**：

```javascript
...
data(){
    return {
        form : {
            fruit : [],
        },
        checkboxList : [{field:'苹果',value:1},{field:'雪梨',value:2},{field:'柠檬',value:3,disabled:true}],
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

| 参数          | 说明                                       | 类型                        | 默认值  | 可选值 |
| ------------- | ------------------------------------------ | --------------------------- | ------- | ------ |
| v-model/value | 值                                         | Number \| String \| Array   | ''      | -      |
| list          | 数据列表                                   | Array                       | []      | -      |
| textLabel     | 对应显示的label文字                        | String                      | 'text'  | -      |
| valueLabel    | 选择框实际选择值                           | String                      | 'value' | -      |
| span          | 列宽，如果设置了span，则会根据当前宽度平分 | String \| Number \| Boolean | false   | -      |

## Events

| 方法名 | 参数             | 说明                                                         |
| ------ | ---------------- | ------------------------------------------------------------ |
| change | Function(record) | 返回选择值，为和当前设置值一致的数据格式(字符串或者数组)，如 [1,2] 或 '1,2' |

