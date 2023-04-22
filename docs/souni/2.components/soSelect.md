---
title: "so-select"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**so-select组件** 是根据 `u-select` 扩展包装的下拉选择框，分 **单列**、**多列**、**联动多列** 三种模式，是表单中最常用的输入组件之一，此组件没有继承 `u-select`接口方法。

## 代码示例

**模板代码**：

```vue
<item span="4" label="single列" prop="single">
    <so-select  v-model="form.single" :list="sList1" mode="single" @confirm="selectSingle" valueLabel="value" textLabel="text" />
</item>

<item span="4" label="many列" prop="many">
    <so-select  v-model="form.many" :list="sList2" mode="many" joinLetter="" @confirm="selectMany" valueLabel="value" textLabel="text" />
</item>

<item span="4" label="tree列" prop="area">
    <so-select  v-model="form.area" :list="sList3" mode="tree" @confirm="selectTree" valueLabel="value" textLabel="text" />
</item>
```

**js代码**：

```javascript
...
data(){
    return {
        sList1: [{valueCode: '1',: '长江'},{valueCode: '2',valueDesc: '黄河'},{valueCode: '3',valueDesc: '湘江'},{valueCode: '5',valueDesc: '潘长江'}],
        sList2: [[{valueCode: '11',valueDesc: '张'},{valueCode: '12',valueDesc: '刘'},{valueCode: '13',valueDesc: '马'},{valueCode: '14',valueDesc: '陈'}],[{valueCode: '21',valueDesc: '亮'},{valueCode: '22',valueDesc: '琳宓'},{valueCode: '23',valueDesc: '文一'}]],
        sList3: [{valueCode: 1,valueDesc: '中国',children: [{valueCode: 2,valueDesc: '广东',children: [{valueCode: 3,valueDesc: '深圳'},{valueCode: 4,valueDesc: '广州'}]},{valueCode: 5,valueDesc: '广西',children: [{valueCode: 6,valueDesc: '南宁'},{valueCode: 7,valueDesc: '桂林'}]}]},{valueCode: 8,valueDesc: '美国',children: [{valueCode: 9,valueDesc: '纽约',children: [{valueCode: 10,valueDesc: '皇后街区'}]}]}],
    }
},
methods:{
    selectSingle(record){
        console.log(record);
    },
    selectMany(record){
        console.log(record);
    },
    selectTree(record){
        console.log(record);
    },
}
...
```

##  @confirm 返回值

返回值为 `value` 和 `label` 组成的对象，或者对象的数组

```javascript
//单列
{value: "3", label: "湘江"}

//多列
[{"value":"12","label":"刘"},{"value":"23","label":"文一"}]

//联动多列
[{"value":"8","label":"美国"},{"value":"9","label":"纽约"},{"value":"10","label":"皇后街区"}]
```





## Props

| 参数          | 说明                                     | 类型                             | 默认值      | 可选值                   |
| ------------- | ---------------------------------------- | -------------------------------- | ----------- | ------------------------ |
| list          | 数据列表                                 | Array                            | []          | -                        |
| listFliter    | 过滤数据列表值                           | Function:(item:{})=>Boolean      | -           | -                        |
| listRender    | 根据list数据重新返回新的list             | Function:(record[])=>newRecord[] | -           | -                        |
| mode          | 选择类型                                 | String                           | 'single'    | 'single'\|'many'\|'tree' |
| valueLabel    | value对应list中的字段                    | String                           | 'valueCode' | -                        |
| textLabel     | text对应list中的字段                     | String                           | 'valueDesc' | -                        |
| v-model/value | 值                                       | Array,String,Number              | ''          | -                        |
| childName     | 在 `tree` 模式下子对象的key值            | String                           | 'children'  | -                        |
| splitLetter   | value分隔符                              | String                           | ','         | -                        |
| joinLetter    | 输入框中多个字段联结字符                 | String                           | ' '         | -                        |
| disabled      | 是否禁用，禁用后能选择，但输入值不会变化 | Boolean                          | false       | true                     |
| clearValue    | 是否可以清空值                           | Boolean                          | true        | false                    |

## Events

| 方法名  | 参数             | 说明       |
| ------- | ---------------- | ---------- |
| confirm | Function(record) | 返回选择值 |



## Method

| 方法名 | 参数 | 说明 |
| ------ | ---- | ---- |
|        |      |      |

