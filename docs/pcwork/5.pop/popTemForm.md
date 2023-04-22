---
title: "popTemForm"
author: bujichong
subSidebar: true
categories:
- pc框架
tags:
- pc框架 
- pop
comments: true
---
:::: warning 说明

`$pop.popTemForm`在`popForm`上进行了升级改进，使用更方便，交互更简单，功能更强大

- 可以通过template的方式初始化数据，也可以通过 `formLoad` 的方式初始化数据，并留出接口
- 通过`popTemForm`初始化的表单，每次都是重新初始化，页面里的验证及数据都会重新渲染

**注**：使用 `$pop.popTemForm` 方法是不需要再单独require `template`，但如果页面里有其他需要用模板的代码片段，仍需要引入`template`

::::

## 所有参数

```js
//参数：
$pop.popTemForm({   
	title : '编辑',//标题
	temId : '',//指向pop的template的id
	temData : {},//template初始化的data，需要时可使用
	data : null,//form初始化数据，另一种初始化方式
    zIndex : 100000, //弹窗的 z-index值 
	grid : null,//提交后刷新的grid，也可以是tree的id,class，支持数组形式
	btn : null,//pop open的btn，layer的默认接口
	area : ['500px','300px'],//默认宽高
	action : '',//pop form的action属性，即提交地址
	beforePop : function(){},//打开之前执行
	onPop : function(){},//打开时执行
	end : function (){},//layer的默认接口
	beforeSubmit : null,//function (formData,$form){}//提交之前执行
	afterSubmit : null//提交之后的事件, function (rst,$formBox) {}//提交之后执行，默认表单提交会关闭弹窗，其他事件用户自定义处理
});
```

## 只关闭 popTemForm 的按钮class: btn-closeTemPop

:::: warning 注意

在模板中带 `btn-cancel` class 的 **取消按钮** 可以关闭弹窗，但是这是一个通用的 class，他还可以关闭 `iframePop`，如果有多层混用弹窗，在 **取消按钮** 上请使用 `btn-closeTemPop`。

::::

## 示例代码

:::: code-group
::: code-group-item html模板
```html
<script id="formTem" type="text/html">
    <form id="infoForm" class="soform form-validate pad-t20 pad-r20 solab-l form-enter">
        <input class="hide" type="text" name="id">
        <div class="row">
            <div class="p12"><div class="item-one">
                <label class="lab-item">商品类别：</label>
                <input class="txt txt-validate" type="text" name="proname" noNull="必填" value="{{proname}}" /><!-- 注意这里 {{proname}} 是通过temData加载进来的数据 -->

            </div></div>
        </div>

        <div class="row">
            <div class="p12"><div class="item-one">
                <label class="lab-item">1积分需消费金额：</label>
                <input class="txt easyui-numberbox required" type="text" name="num" style="width:100%;" data-options="required:true,min:0,max:10000" missingMessage="必填" validType="range[0,10000,'只能为1-10000的数字']" value="" />
            </div></div>
        </div>

        <p class="row-btn center">
            <input type="button" class="btn btn-primary btn-easyFormSubmit" lay-submit name="btnSubmit" value="确定" />
            <input type="button" class="btn btn-cancel" name="btnCancel" value="取 消" />
        </p>
    </form>
</script>

```
:::
::: code-group-item 脚本
```js
$('.btn-newForm').click(function () {
	$pop.popTemForm({
		title : '新增',
		temId : 'formTem',
		area : ['400px','200px'],
		action : '../json/true.js?type=add',//表单提交地址
		afterSubmit : function(rst){
			console.log(rst);
		},
		grid : '#gridBox'//提交后需要刷新的grid
	});
});

$('.btn-editForm').click(function () {
	$pop.popTemForm({
		title : '编辑',
		temId : 'formTem',
		temData : {proname:'商品名'}
		area : ['400px','200px'],
		action : '../json/true.js',//表单提交地址
		beforeSubmit : function(formData,$form){//提交前处理
			//beforeSubmit方法存在，必须返回true，表单才会继续提交
			console.log(rst,$formBox);
			return true;
		},
		afterSubmit : function(rst,$formBox){//提交服务端后返回数据处理
			console.log(rst,$formBox);
		}
	});
});
```
:::
::::

## 示例代码2：仍然通过在form上添加全局拦截函数处理自定义事件

:::: code-group
::: code-group-item HTML模板
```html
<script id="formTem" type="text/html">
    <form id="infoForm" class="soform form-validate pad-t20 pad-r20 solab-l form-enter" data-opt="{beforeCallback:'submitEditForm'}">
	<!-- 仍然可以通过在form上添加data-opt的方式来进行 beforeCallback 和 callback处理，这里添加了函数以后，js里的beforeSubmit方法和afterSubmit方法失效 -->
        <input class="hide" type="text" name="id">
        <div class="row">
            <div class="p12"><div class="item-one">
                <label class="lab-item">商品类别：</label>
                <input class="txt txt-validate" type="text" name="proname" noNull="必填" value="" />
            </div></div>
        </div>

        <div class="row">
            <div class="p12"><div class="item-one">
                <label class="lab-item">1积分需消费金额：</label>
                <input class="txt easyui-numberbox required" type="text" name="num" style="width:100%;" data-options="required:true,min:0,max:10000" missingMessage="必填" validType="range[0,10000,'只能为1-10000的数字']" value="" />
            </div></div>
        </div>

        <p class="row-btn center">
            <input type="button" class="btn btn-primary btn-easyFormSubmit" lay-submit name="btnSubmit" value="确定" />
            <input type="button" class="btn btn-closeTemPop" name="btnCancel" value="取 消" />
        </p>
    </form>
</script>

```
:::
::: code-group-item 脚本
```js
var formPop =null;
     $grid.newGrid("#gridBox",{
        tools:[
          [
            {iconCls:'plus_sign',text:'新增',click:function(){
                formPop = $pop.popTemForm({
                    title : '新增',
                    temId : 'formTem',
                    area : ['400px','200px']
                });
            }}
        ]],
//...
  onLoadSuccess : function (data) {
	$('.s-op-edit').click(function(){
	  var ix = $(this).attr('rel');
	  var row = data.rows[ix];
	  formPop =  $pop.popTemForm({
		  title : '编辑',
		  temId : 'formTem',
		  data : row,//加载行数据
		  area : ['400px','200px']
	  })
	});
//...

window.submitEditForm = function (opt,$form,data){//拦截提交事件，对新增和编辑进行区分处理
	// window.console&&console.log(opt,$form,data);
	if(data.id){//编辑
		$ajax.post({
			url : '../json/true.js',
			data :data,
			tip : '你确定提交此编辑？',
			success : function (rst){
				$pop.close(formPop);
				$('#gridBox').datagrid('reload');
			}
		});
	}else{//新增
		$ajax.post({
			url : '../json/true.js?type=add',
			data :data,
			tip : '你确定提交此新增？',
			success : function (rst){
				$pop.close(formPop);
				$('#gridBox').datagrid('reload');
			}
		});
	}
	return false;
}

```
:::
::::