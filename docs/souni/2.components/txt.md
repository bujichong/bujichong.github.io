---
title: "txt"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**txt组件**  即最基础的 input 输入框 ，继承于 `u-input`组件。

## 组件处理

- 简写了标签
- 自动为 label标签后添加 `：`
- 自动绑定 `placeholder`  为 当前 `label ` 值

## 代码示例

**模板代码**：

```vue
<item span="4" label="姓名" prop="name" :rule="['reqPlus']"><txt v-model="form.name" /></item>
<item span="4" label="电话" prop="phone"><txt v-model="form.phone" /></item>
```

**js代码**：

```javascript
...
data(){
    return {
        
    }
},
methods:{

}
...
```


更多说明请查看  [`u-input` 组件介绍](https://www.uviewui.com/components/input.html)