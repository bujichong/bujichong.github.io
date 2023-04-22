---
title: "submit"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**submit组件** 是快捷提交按钮，默认了提交按钮的参数和事件，页面中使用更方便，此组件除私有方法，继承按钮接口。

## 代码示例

**模板代码**：

```vue
<submit @submit="searchSubmit" @click="submit" text="查询" /><reset />
```

**js代码**：

```javascript
...
data(){
    return {
        
    }
},
methods:{
    submit(valid){
      console.log('表单是否通过了验证',valid);
    },
    searchSubmit(){
		//执行表单通过验证后事件
    }
}
...
```

## Props

| 参数 | 说明         | 类型   | 默认值    | 可选值                                    |
| ---- | ------------ | ------ | --------- | ----------------------------------------- |
| type | 按钮样式类型 | String | 'primary' | primary / success / info/ warning / error |
| text | 按钮文字     | String | '提交'    | -                                         |

## Events

| 方法名 | 参数  | 说明                     |
| ------ | ----- | ------------------------ |
| click  | valid | 是否通过了验证           |
| submit | 无    | 表单验证通过后触发此事件 |



## Method

| 参数 | 参数 | 说明 |
| ---- | ---- | ---- |
|      |      |      |

