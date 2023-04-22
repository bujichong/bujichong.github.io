---
title: "pop"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**pop组件** 是页面中的模态框，由于 Uni 无法直接通过 js 直接初始化 模态框，这里我们通过在 `reft-layout`组件中插入全局pop组件，通过全局发布订阅模式将 pop组件的显示隐藏订阅到全局，实现 js 调用模态框，所以普通情况下，我们不需要单独调用 pop组件，在页面的生命周期中直接 使用 `this.$pop`来调用即可 。
>
>由于采用了特殊的处理，接口方法不提供 `promise` 接口返回书写方式。

## 使用

pop组件，不提供可配置参数，配置参数 **通过方法传递** 进去，详情请看接口说明

## 代码示例

**模板代码**：

```vue
<pop ref="pop"></pop>
```

**js代码**：

```javascript
...
 methods:{
     alert(){
         this.$refs.pop.alert('你需要提示的内容！',()=>{
        	//点击确定后执行的事件
        });
     },
     confirm(){
        this.$refs.pop.confirm('你确定提交此修改吗？',()=>{
            //点击确定后执行的事件
        },()=>{
            //点击取消执行的事件
        });
      },
     commonConfirm(){
         //我们通常不在当前引入组件，而是直接调用全局 pop方法(this.$pop.confirm,this.$pop.alert)
        this.$pop.confirm('你需要提示的内容！',()=>{
            //点击确定后执行的事件
        });
      }，
      showPop(){
          //如果你在 组件 options属性上配置了显示属性，也可以可以通过 show/hide方法来控制弹窗的显示
          this.$refs.pop.show({
              title:'好吧',
              content : '<b style="color:red;">这就是要显示</b>的内容！'
              //这里支持html富文本标签，请不要使用 <view>标签
          });
      },
       hidePop(){
           this.$refs.pop.hide();
       },
       ...
 }
...
```

## Method

| 参数    | 参数                                 | 说明                                                        |
| ------- | ------------------------------------ | ----------------------------------------------------------- |
| alert   | Function(content,confirmFn)          | 提示框，content 同show 中参数                               |
| confirm | Function(content,confirmFn,cancelFn) | 确认框，content 同show 中参数                               |
| show    | Function(options)                    | 显示弹窗，参数为显示弹窗参数，覆盖已配置在`options`上的参数 |
| hide    | Function()                           | 关闭弹窗                                                    |

## show 方法 options 可配置参数

| 参数          | 说明                                           | 类型             | 默认值   | 可选值             |
| ------------- | ---------------------------------------------- | ---------------- | -------- | ------------------ |
| mode          | 弹窗模式                                       | String           | 'alert'  | 'alert'\|'confirm' |
| z-index       | 层级                                           | String \| Number | 1075     | -                  |
| title         | 标题内容                                       | String           | ''       | -                  |
| show-title    | 是否显示标题                                   | Boolean          | false    | true\|false        |
| width         | 模态框宽度，数值时单位为rpx                    | String \| Number | '600rpx' | -                  |
| content       | 内容，支持即html标签，请不要使用 `<view>` 标签 | String           | ''       | -                  |
| content-class | 给显示内容自定义className                      | String           | ''       | -                  |
| content-style | 给显示内容自定义样式                           | Object           | {}       | -                  |
| confirm-show  | 显示确定按钮                                   | Boolean          | true     | true\|false        |
| confirm-text  | 确认按钮的文字                                 | String           | 确认     | -                  |
| confirm-color | 确认按钮的颜色                                 | String           | #2979ff  | -                  |
| confirm-style | 自定义确认按钮样式，对象形式                   | Object           | -        | -                  |
| cancel-show   | 是否显示取消按钮                               | Boolean          | false    | true               |
| cancel-text   | 取消按钮的文字                                 | String           | 取消     | -                  |
| cancel-color  | 取消按钮的颜色                                 | String           | #606266  | -                  |
| cancel-style  | 自定义取消按钮样式，对象形式                   | Object           | -        | -                  |
| zoom          | 是否开启缩放模式                               | Boolean          | true     | false              |
| async-close   | 是否异步关闭，只对确定按钮有效，见上方说明     | Boolean          | false    | true               |
| mask-close    | 是否允许点击遮罩关闭Modal                      | Boolean          | false    | true               |
| offset        | 往上偏移的值                                   | String \|Number  | 0        | -                  |
| confirm       | 提交事件                                       | Function         | ()=>{}   | -                  |
| cancel        | 取消时间                                       | Function         | ()=>{}   | -                  |

