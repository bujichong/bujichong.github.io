---
title: "iframePop 及 closePop"
author: bujichong
subSidebar: true
categories:
- pc框架
tags:
- pc框架 
- pop
comments: true
---

:::: tip 说明

`$pop.iframePop`基于**layer**包装，
可以帮助我们在任何地方，通过交互弹出一个内嵌页面的窗口，
除自定义参数外，其他参数可以参考 [layer.open](https://layuion.com/docs/modules/layer.html)。

除了 `layer` 的 `iframe` 模式本身，还扩展了功能：

- 父子交互传递数据;
-  `iframePop` 子页面为表单，提交时，快捷刷新或执行 勾子事件 `sureback`；

::::
## 父子间传递数据

### 父传子：
```js

//父页面发送：
$pop.iframePop({
  ...
  postData : { a: 1, b: 2 },
  ...
});

//子页面接收
require(["pub"],function(){
  ...
  var receiveData = $store.getPostData();
  //receiveData: { a: 1, b: 2 }
  ...
});

```
### 子传父：
```js
//子页面发送：
$pop.closePop({
  ...
  sendData: {name: 'user1' }
  ...
});
//父页面接收：
$pop.iframePop({
  ...
    end : function(iframeSendData){
      //iframeSendData: {name: 'user1' }
    },
    sureback : function (iframeSendData){
      //iframeSendData: {name: 'user1' }
    }
  ...
});

```

### 通过全局 $store方法 传递参数：
```js
//父页面 或 子页面 设置全局变量值：
$store.set('kind_page_val',val); //注意全局参数命名的唯一性，全局参数会挂在 框架页的根对象上

//子页面获取：
$store.get('kind_page_val');

//父页面最好在勾子函数里获取：
$pop.iframePop({
    ...
    end : function(){
      $store.get('kind_page_val');
    },
    sureback : function (){
      $store.get('kind_page_val');
    }
    ...
});

```
## $pop.iframePop
```js
$pop.iframePop('/contacts/url.html');//只设置url，直接默认宽高100%打开页面，标题默认为'提示'

$pop.iframePop({
    title: '集团通讯录-修改',//标题
    content: '/contacts/url.html',//请求地址
    area: ['660px', '250px'],//窗口大小
    postData : {a:1,b:2},//往子页面传值
    end : function(iframeSendData){
      //关闭执行函数，子页面可通过 $pop.closePop 返回参数
    },
    sureback : function (iframeSendData){
      //表单提交| 或成功 执行函数，子页面可通过 $pop.closePop 返回参数
    }
 },'#gridBox');//刷新grid #gridBox

 $pop.iframePop({
    title: '修改状态',//标题
    content: '/contacts/url.html',//请求地址
    area: ['100%', '100%']//窗口全屏
 },['#gridBox','#gridBox2']);//刷新grid #gridBox,#gridBox2，刷新多个grid用数组方式


//子页面获取父页面传值
$store.getPostData();
//{a:1,b:2}

//子页面手动返回成功
$pop.closePop({refreshGrid:true});

```

## $pop.closePop 

`$pop.closePop()`是关闭弹窗的通用关闭方法，日常我们主要用来关闭`iframePop` 。

**所有参数：**

```js
$pop.closePop({
    popIndex : null, //指定pop的index，可以关闭当前页面普通的弹窗 (普通弹窗)
    callback : function () {}, //关闭时执行时间 (普通弹窗 / iframePop弹窗)
    sendData : null, //往父页面传递参数 (iframePop弹窗)
    success : false, //告诉父页面是否成功，会触发父页面刷新grid和 sureback勾子事件 (iframePop弹窗)
    refreshGrid : false,// 同 success 
    refresh : false, // 同 success 
    time : false //延迟关闭时间 (iframePop弹窗)
})
```

### 关闭当前页面弹窗

```js
var pop = $pop.open({
  ...
});
//关闭当前页弹窗
$pop.closePop({popIndex:pop});
$pop.close(pop);
layer.closeAll();
```

### iframePop 在子页面里关闭弹窗

```js
//父页面
$pop.iframePop({
  ...
});

//子页面 取消事件
$pop.closePop();
//子页面 提交事件
$pop.closePop({refreshGrid:true});
```