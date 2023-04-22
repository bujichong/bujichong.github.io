---
title: "popForm"
author: bujichong
subSidebar: true
categories:
- pc框架
tags:
- pc框架 
- pop
comments: true
---
> `$pop.popForm` 基于**layer**及 `soform` 包装在当前页面显示form，可以帮助我们在当前层显示一个form。

:::: warning 注意
此方法为旧版表单弹窗，除维护外已弃用。

页面弹层或者表单，请使用新的 `popTemForm`方法。
::::

## 所有参数及示例代码

```js
//参数：
$pop.popForm({
    target : null,//需要弹出的对象class或者id
    refreshGrid : true,//是否刷新grid
    gridId : 'gridBox',//需要刷新grid的id
    width : 400,height:300,//pop宽高
    beforePop : function ($formBox) {},//弹窗之前的事情
    beforeSubmit : null,//function (formData,$form){}
    afterSubmit : null//提交之后的事件, function (rst,$formBox) {}
});


//示例代码：
$('.btn-newForm').click(function () {
    $pop.popForm({
        title : '新增号源',
        target : $('.pop-addOneItem'),
        area : ['500px','300px'],
        beforePop : function ($formBox) {
            $('.pop-addOneItem').find('.easyui-combobox').combobox('setValue','');
        },
        beforeSubmit : function (formData,$form,popid) {
            var  data = $form.sovals();
            window.console&&console.log(data);
            return true;
            //这里return true才能继续提交事件
        }
    });
});

```