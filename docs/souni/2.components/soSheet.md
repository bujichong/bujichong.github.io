---
title: "so-sheet"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**so-sheet组件** 是根据 `u-sheet` 扩展包装的下拉选择框，但没有继承 `u-select`接口方法。

## 代码示例

**模板代码**：

```vue
<so-sheet :list="actionSheetList" v-model="form.sex" :canEmpty="true" @confirm="selectSex" />
```

**js代码**：

```javascript
...
data(){
    return {
        forrm:{
            sex:'',
            ...
        },
        actionSheetList: [{text: '男',value:'1'},{text: '女',value:'2'},{text: '保密',value:'3'}],
    }
},
methods:{
    selectSex({record,index}){
        console.log(record,index)
    },
}
...
```

## Props

| 参数          | 说明                                     | 类型                | 默认值      | 可选值 |
| ------------- | ---------------------------------------- | ------------------- | ----------- | ------ |
| list          | 数据列表                                 | Array               | []          | -      |
| valueLabel    | value对应list中的字段                    | String              | 'valueCode' | -      |
| textLabel     | text对应list中的字段                     | String              | 'valueDesc' | -      |
| v-model/value | 值                                       | Array,String,Number | ''          | -      |
| canEmpty      | 可以选择空值，会增加一个空值选项         | Boolean             | false       | true   |
| disabled      | 是否禁用，禁用后能选择，但输入值不会变化 | Boolean             | false       | true   |

## Events

| 方法名  | 参数                     | 说明                   |
| ------- | ------------------------ | ---------------------- |
| confirm | Function({record,index}) | 确认时返回列表选择记录 |



## Method

| 方法名 | 参数 | 说明 |
| ------ | ---- | ---- |
|        |      |      |