---
title: "toast"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**toast组件** 是页面短消息提示组件，基于 `u-toast`实现，全局toast现在使用的就是 `toast` 组件。

## 代码示例

**模板代码**：

```vue
<toast ref="appMsg" />
```

**js代码**：

```javascript
...
data(){
    return {
        
    }
},
methods:{
    toastShow(){
        //默认提示为 warning类型,停留时间 2000ms
        this.$refs.appMsg.show('提示内容'); 
    },
	toastSuccess(){
        this.$refs.appMsg.show({
            title : '提示内容',
            type : 'success',
            duration : 4000
        });
    }
}
...
```

## show 方法参数

```javascript
//对象参数
this.$refs.pop.show({
	title : '提示内容',
	type : 'success',//primary / success / error / warning / info
	duration : 4000
});
//完整参数
this.$refs.pop.show('提示内容','success',3000);
```

更多方法及参数请查看 [`u-toast` 介绍](https://www.uviewui.com/components/toast.html)

