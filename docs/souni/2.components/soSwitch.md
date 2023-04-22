---
title: "so-switch"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**so-switch组件** 是继承 `u-switch` 接口包装的开关组件。

## 代码示例

**模板代码**：

```vue
<so-switch v-model="form.switchVal" on-value="1" off-value="2" @change="changeSwitch"></so-switch>
```

**js代码**：

```javascript
...
data(){
    return {
        form:{
            switchVal:'1'
        }
    }
},
methods:{
    changeSwitch(value){
        console.log(value);
    },
}
...
```

## Props

| 参数          | 说明         | 类型                  | 默认值 | 可选值 |
| ------------- | ------------ | --------------------- | ------ | ------ |
| v-model/value | 值           | Boolean,String,Number | ''     | -      |
| on-value      | 开启时对应值 | Boolean,String,Number | true   | -      |
| off-value     | 关闭对应值   | Boolean,String,Number | false  | -      |

## Events

| 方法名 | 参数          | 说明       |
| ------ | ------------- | ---------- |
| change | Function(val) | 返回切换值 |



## Method

| 方法名 | 参数 | 说明 |
| ------ | ---- | ---- |
|        |      |      |

更多说明请查看  [`u-switch`组件介绍](https://www.uviewui.com/components/switch.html)