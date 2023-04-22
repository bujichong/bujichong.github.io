---
title: "so-form"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**so-form组件** 是表单验证的核心组件，属性不多，应用起来并不复杂，但在这个组件上我们会绑定表单的验证，更新表单的验证，重置以及验证所有表单值，表单的提交都是围绕着form组件展开的。
>
>`so-form` 组件继承了 `u-form` 的所有接口。

## 表单代码示例

下面是一个简单的表单：

**模板代码**：

```vue
<so-form ref="soForm" :model="form" :rules="rules">
    <row>				
        <item span="4" label="姓名" prop="name" :rule="['reqPlus','zn']"><txt v-model="form.name" /></item>
        <item span="4" label="电话" prop="phone"><txt v-model="form.phone" /></item>
        <item span="4" label="性别" prop="sex" rule="req">
            <so-sheet :list="actionSheetList" v-model="form.sex" :canEmpty="true" @confirm="selectSex" />
        </item>
    </row>

    <row>
        <item span="4" label="年龄" prop="age" rule="age"><txt v-model="form.age" /></item>
        <item span="4" label="范围数值" prop="num" rule="req|range[1,20,true,true]"><txt v-model="form.num" /></item>
        <item span="4" label="邮箱" prop="email" rule="req|email"><txt v-model="form.email" /></item>
    </row>
    ...
    <btn @click="submit" type="primary">提交</btn>
    <submit @submit="submitForm" text="提交" />
    <reset />
</so-form>
```

**js代码**：

```javascript
...
data(){
    return {
        form : {
            name: '',
            phone: '',
            sex: '',
            age : '',
            num : '',
            email : '',
        },
        rules: {
			date : [this.$r.req('日期')],//在这里也可以通过this.$r 来验证字段
        },
        ...
    }
},
 methods:{		
     selectSex({record,index}){
         console.log(record,index)
     },
     restForm(){//手动重置表单
         //reset 按钮组件 已经绑定了重置事件，不需要单独手写
         this.$refs.soForm.resetFields();
     },
     validateForm(){//提交表单
         //submit 方法 返回的是个promise对象
         this.$refs.soForm.submit().then(valid=>{
             console.log(valid);
         })
     },
     submit() {//提交表单事件
         console.log(JSON.stringify(this.form));
         this.$refs.soForm.validate(valid => {
             if (valid) {
                 //验证通过，提交
                 this.$ajax.post('/api/sengData',{
                     data:this.form
                 },'<b style="color:red">你确定提交此修改吗？</b>').then(res=>{
                     //console.log('提交成功~')
                 });
             } else {
                 console.log('验证失败');
             }
         }).then(valid=>{//也可以在这里返回
             console.log(valid);
         });
	 },
     submitForm(valid){//submit按钮的 submit事件，只有在通过验证后才执行
		console.log(valid);
      },
    ...
 }
...
```



##  绑定验证规则

uni 原生的表单是没有提供验证的，uview提供了一整套验证方法，但考虑兼容性，需要用户在页面加载完成时手动通过 `seRules`  方法绑定  `rules`  到表单上，`so-form` 通过全局 `mixin` 在页面加载的时候，自动检测页面是否有表单，并自动绑定 属性 `rules` 到表单上。另外，还实现了一整套更加简易的表单验证方法，可以直接在 `item` 组件上直接添加 `rule` 属性来绑定验证规则，并可以根据需求变化，动态更新表单项的验证规则。如：

```vue
<item span="4" label="姓名" prop="name" :rule="['reqPlus','zn']"><txt v-model="form.name" /></item>
<item span="4" label="范围数值" prop="num" rule="req|range[1,20,true,true]"><txt v-model="form.num" /></item>
<item span="4" label="邮箱" prop="email" rule="req|email"><txt v-model="form.email" /></item>
```

- `item` 组件的 `rule` 属性可以为数组 或 字符串，多个验证规则在字符串中通过 `|` 隔开，参数写在验证规则后的中括号里。
- 表单的验证规则是 `so-form` 的 `rules` 属性和 `item` 标签上 `rule` 属性的集合，`item` 属性优先级更高，合并是覆盖式合并，最好不要多处书写。
- 详细验证规则 [请查看 rules](../js/03.rules.md)。

## 更新验证规则

```javascript
this.$refs.soForm.updateRules({//对象参数，同时对多个字段进行更新
    name : 'req|cn',
    phone : ['req','tel'],
    age : 'req',
    sex : '',
    num : {
        valid : [{
            min: 5, 
            message: '数值不能少于5个字', 
            trigger: 'change'
        }]
    }
});

this.$refs.soForm.updateRules('date','');//去除date字段已有全部验证
```



## Props

| 参数           | 说明                                          | 类型             | 默认值                       | 可选值         |
| -------------- | --------------------------------------------- | ---------------- | ---------------------------- | -------------- |
| model          | 表单数据对象                                  | Object           | -                            | -              |
| rules          | 通过`ref`设置，见上方说明                     | Object           | -                            | -              |
| error-type     | 错误的提示方式，数组形式，见上方说明          | Array            | ['message', 'border-bottom'] | -              |
| border-bottom  | 是否显示表单域的下划线边框                    | Boolean          | true                         | -              |
| label-position | 表单域提示文字的位置，`left`-左侧，`top`-上方 | String           | left                         | top            |
| label-width    | 提示文字的宽度，单位rpx                       | String \| Number | 160                          | 数值 / auto    |
| label-style    | `lable`的样式，对象形式                       | Object           | -                            | -              |
| label-align    | `lable`的对齐方式                             | String           | left                         | center / right |

## Events

| 方法名      | 说明                              | 参数                                       |
| ----------- | --------------------------------- | ------------------------------------------ |
| updateRules | 更新验证规则                      | Function(ruleKey，newRules)                |
| resetFields | 重置表单为初始值，并移除校验结果  | -                                          |
| validate    | 对整个表单进行校验的方            | Function(Function(boolean)),并返回 promise |
| submit      | 方法同 validate，但是submit不带参 | 返回 promise                               |

更多接口可查看 [`u-form` 的接口说明](https://www.uviewui.com/components/form.html)