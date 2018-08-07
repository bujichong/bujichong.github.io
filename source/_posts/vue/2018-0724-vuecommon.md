---
layout: post
title: "VUE.JS常用函数大全"
date: 2018-7-24 8:39
comments: true
tags:
	- vue
---

> 记录方便查看。

## 目录记忆
assets文件夹（不编译的文件夹）

## 安装相关
安装live-server
```javascript
i.
```

## 内部指令
```javascript
v-if="msg"		v-else		v-show="msg"
v-for="(item,index)  in  items";		{{item}}
v-text="msg"		//text
v-html="msg"		//html
v-on:click="jiafen";	// v-on:  可以使用 @代替（每次点击执行jiafen方法）绑定的是监听事件。
//i.	修饰符：
实例： @click.stop="clickme";
.stop		//阻止冒泡
    .prevent	//阻止默认事件
    .native		//监听组件根元素的原生事件（为组件加事件用）
    .once		//只触发一次回调
    .left		//点击鼠标左键触发
    .right		//点击鼠标右键触发
    .middle		//点击鼠标中键触发
v-model="msg";	//双向数据绑定（用于表单元素input textarea）
v-model.lazy="msg"；	//懒加载	
v-model.number="msg"；//只能输入数字
v-model.trim="msg"；	//去除空格。
//此处msg 为绑定元素的 value值（数据源）
v-bind:src="imgurl";	//v-bind: 可以使用 : 代替）（冒号）
// 绑定标签上的属性
v-pre;			//对此标签原样输出
v-cloak；		//渲染完成后才显示
v-once;			//只渲染一次
```

## 全局API
### 指令：
```javascript
Vue.directive();			//自定义指令
//生命周期：
bind : fun( el,binding ){}		//被绑定时调用（用于执行初始化，只调用1次）
inserted : fun( el,binding ){}		//绑定到节点时调用
update : fun( el,binding ){}		//组件更新时调用
compontUpdated : fun( el,binding ){}	//组件更新完成调用
unbind : fun( el,binding ){}		//（解绑时调用）只调用一次
app.$destroy();				//销毁
aaa.$mount("#author");			//将aaa绑定到id为author的元素上
```
### Vue.set()

###  Vue的生命周期（钩子函数）
```javascript
beforeCreate	//初始化之后
created			//创建完成
beforeMount		//挂载之前
mounted			//挂载之后
beforeUpdate	//数据更新前
updated			//数据被更新后
activated		//组件激活时调用
deactivated		//组件停止时调用
beforeDestroy	//销毁之前
destroyed		//销毁之后
```

###  template:"#id"	//制作模板（挂载模板）
标签模板模板内容  script模板（type="x-template"）


###  component	组件(针对组件专门讲解)
```javascript
v-bind:is = "…"；				//动态绑定组件（后面接data中定义的名字：对应的是创建出来的组件）
Vue.component(name,{template:`…`});	//定义全局组件(在构造器外定义)
//局部组件（在构造器里面定义）
components ： {"name":{template : `…`}，…};	//可定义多个
template :` ` 				//模板
props ：[]				//挂载属性
```

###  修改插值符号
```javascript
delimiters : ["<<" , ">>"]
```

###  构造器里的选项
```javascript
propsData{} 	 				//创建实例时传递props.主要作用是方便测试
//定义组件中的插值
computed{}						//计算
methods{}						//方法
watch{}						//监听data中数据的变化
watch{ msg : function(newVal,oldVal){ } }		//在构造器里面使用
app.$watch("msg",function(newVal,oldVal){ })	//在构造器外面使用
mixins : []						//混入，不想改动构造器的情况下，在构造器外部重新定义个一个对象，用混入的方式插入执行
extends:对象变量					//扩展（与mixins类似）
//i.注意：如果与构造器中的方法名一致，则扩展出来的方法不执行
```

##  安装Vue的控制台调试工具
- 每个人的安装方法不同，不作太多的介绍，可能需要你科学上网（翻墙）。

##  实例和内置组件
概述：实例就是在构造器外部操作构造器内部的属性选项或者方法，就叫做实例？实例的作用就是给原生的或者其他javascript框架一个融合的接口或者说是机会，让Vue和其他框架一起使用。
### 实例方法
```javascript
	var  a =Vue.extend({ template : `…` }) 		//扩展实例构造器(和组件配合使用，用于复用某一模块代码)
	vm = new a().$mount("header");		//挂载
	vm.$destroy() ;					//卸载(销毁)方法
	vm.$forceUpdate();				//更新(刷新)方法
	vm.$nextTick(func(){ 数据更新之后的回调 }) ;   //数据修改方法（和构造器里的update生命周期很像）
```
### 实例事件
概述：实例事件就是在构造器外部写一个调用构造器内部的方法。这样写的好处是可以通过这种写法在构造器外部调用构造器内部的数据。
```javascript
	var app = new Vue({ … });
	app.$on("方法名称"，func(){ … });		//在构造器外部添加事件
	func 方法名称(){ app.$emit("方法名称") };	//这样$on定义的方法在外部就可以用了
	app.$once("方法名称"，func(){ … });		//只调用一次
```
### 内置组件-slot讲解
概述：slot是标签的内容扩展，也就是说你用slot就可以在自定义组件时传递给组件内容，组件接收内容并输出。
使用slot需要2步
- 在HTML的组件中用slot属性传递值。
```javascript
	{{jspangData.bolgUrl}}
	{{jspangData.netName}}
	{{jspangData.skill}}
```
- 在组件模板中用标签接收值。

代码
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>Slot content extend Demo</title>
</head>
<body>
    <h1>Slot content extend Demo</h1>
    <hr>
    <div id="app">
    <jspang>
        <span slot="bolgUrl">{{jspangData.bolgUrl}}</span>    
        <span slot="netName">{{jspangData.netName}}</span>    
        <span slot="skill">{{jspangData.skill}}</span>    
    </jspang>
    </div>
 
 
<template id="tmp">
    <div>
        <p>博客地址：<slot name="bolgUrl"></slot></p>
        <p>网名：<slot name="netName"></slot></p>
        <p>技术类型：<slot name="skill"></slot></p>
        
    </div>
</template>
 
    <script type="text/javascript">
        var jspang={
            template:'#tmp'
        }
 
        var app=new Vue({
            el:'#app',
            data:{
               jspangData:{
                   bolgUrl:'http://jspang.com',
                   netName:'技术胖',
                   skill:'Web前端'
               }
            },
            components:{
                "jspang":jspang
            }
        })
    </script>
</body>
</html>
```
