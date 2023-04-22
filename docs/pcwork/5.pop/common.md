---
title: "$pop常用弹窗"
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

`layer`是当前比较流行的前端弹窗组件，交互界面友好，易于使用，快速平台引入进来，js api没有进行二封装，只在样式和图标上进行了整合修改，
[完整的API请参考这里](http://www.layui.com/doc/modules/layer.html)，这里做了一些常用方法示例供参考。

::::

## $pop.alert(msg,yes?,opt?)

```js
//icon: {0:'叹号',1:'对勾',2:'叉叉',3:'问号'}

//alert
layer.alert('<p class="red">对不起，提交数据失败！</p>请检查网络或联系管理员...',{
  icon: 2,
  title:false,
  btnAlign: 'c'
});
```

***\*`$pop.alert` 与 `layer.alert` 传参顺序不同 , `layer.alert(msg,opt,yes)` \*\*VS\*\* `$pop.alert(msg,yes,opt)`\****

```js
//icon 默认使用0，表示警示
//icon: {0:'叹号',1:'对勾',2:'叉叉',3:'问号'}

$pop.alert('提示信息');
$pop.alert('提示信息',function(index){
  //console.log('事件');
  //默认已执行 layer.close(index);
},{title:'默认没有标题'})

//如果没有yes事件，可以省略这个参数
$pop.alert('提示信息',{title:'默认没有标题'})

//alert系列，参数与alert相同，$pop.XX()等同于$pop.alert.XX();
$pop.warning('提示信息');//同于$pop.alert
$pop.success('成功信息');//显示成功图标
$pop.err('错误信息');//显示错误图标
$pop.ask('疑问信息');//显示询问(疑问)图标

$pop.alert.warning('提示信息');//同于$pop.alert
$pop.alert.success('成功信息');//显示成功图标
$pop.alert.err('错误信息');//显示错误图标
$pop.alert.ask('疑问信息');//显示询问(疑问)图标
```

## $pop.msg(msg,end?,opt?)

```js
//基于：layer.msg
layer.msg('请先为该医院设置筹建工作事项模板',{icon:0});

//icon: {0:'叹号',1:'对勾',2:'叉叉',3:'问号'}

//option: (msg,end,opt)
//默认自动消失时间 2000ms
$pop.msg('提示信息',function(){
 window.console&&console.log('提示结束执行事件');
});

//自定义参数
$pop.msg('提示信息',function(){
  window.console&&console.log('提示结束执行事件');
 },{time:5000});

 //可快捷设置time
 $pop.msg('提示信息',function(){
  window.console&&console.log('提示结束执行事件');
 },5000);

 //没有返回函数，以下两种方式都可以
 $pop.msg('提示信息',{time:5000,icon:2});
 $pop.msg('提示信息',5000,{icon:2});

$pop.msg.warning('提示信息');//同于$pop.msg
$pop.msg.success('成功信息',3000);//显示成功图标
$pop.msg.err('信息不正确！',{offset:'t',time:3000});//显示错误图标
$pop.msg.ask('疑问信息');//显示询问(疑问)图标
```

## $pop.confirm(msg,yes,cancel,opt)

```js
//icon: {0:'叹号',1:'对勾',2:'叉叉',3:'问号'}

//option: (msg,yes,cancel,opt)
//icon 默认使用0，表示警示
$pop.confirm('提示信息',function(){
   window.console&&console.log('点确定执行事件');
   return true;//return true关闭窗口
},function(){
   window.console&&console.log('点取消执行事件');
   return true;//return true关闭窗口
});

//基于：layer.confirm
layer.confirm('你确定退出系统吗？', {
    icon: 0, title:false,btnAlign: 'c'
    }, function(){
      window.location.href = url;
});
```

## $pop.tips(msg, follow, options)

```js
//option: (msg, follow, options)
//默认自动消失时间 2000ms
$pop.tips('提示信息','#tipsObj');


//基于：layer.tips
layer.tips('请先为该医院设置筹建工作事项模板','#tipsObj',{tips:1});
```

## $pop.load()

```js
//option: (icon, options)
var loading = $pop.load();
$pop.close(loading);//关闭loading

//基于：layer.load
var loading = layer.load();
```

## 完整方法layer.open示例代码

```js
//完整方法layer.open，提供了5种层类型
//type可传入的值有：0(信息框，默认) 1(页面层）2(iframe层) 3(加载层) 4(tips层)

layer.open({//信息提示框
  content: '信息提示内容~'
});


layer.open({//打开页面中内容层
  type: 1,
  title :'页面内容弹窗',
  content: $('#id')
  area :['600px', '420px']
});


layer.open({//打开iframe页面
  type: 2,
  title :'iframe窗口',
  content:url,
  area :['100%', '100%']//全屏
});
```