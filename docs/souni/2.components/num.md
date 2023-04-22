---
title: "num"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**num组件** 是 `u-number-box` 组件包装的结果,只是简写，另外简单地做了一些必要属性设置。



## Props

| 参数             | 说明                                                         | 类型             | 默认值  | 可选值 |
| ---------------- | ------------------------------------------------------------ | ---------------- | ------- | ------ |
| v-model          | 输入框初始值                                                 | Number           | 1       | -      |
| bg-color         | 输入框和按钮的背景颜色                                       | String           | #F2F3F5 | -      |
| min              | 用户可输入的最小值                                           | Number           | 0       | -      |
| max              | 用户可输入的最大值                                           | Number           | 99999   | -      |
| step             | 步长，每次加或减的值，1.4.5起支持小数值，如需小数，请设置`positive-integer`为`false` | Number           | 1       | -      |
| disabled         | 是否禁用操作，禁用后无法加减或手动修改输入框的值             | Boolean          | false   | true   |
| size             | 输入框文字和按钮字体大小，单位rpx                            | String \| Number | 26      | -      |
| color            | 输入框文字和加减按钮图标的颜色                               | String           | #323233 | -      |
| input-width      | 输入框宽度，单位rpx                                          | String \| Number | 80      | -      |
| input-height     | 输入框和按钮的高度，单位rpx                                  | String \| Number | 50      | -      |
| index            | 事件回调时用以区分当前发生变化的是哪个输入框                 | String \| Number | -       | -      |
| disabled-input   | 是否禁止输入框手动输入值                                     | Boolean          | false   | true   |
| cursor-spacing   | 指定光标于键盘的距离，避免键盘遮挡输入框，单位rpx            | String \| Number | 200     | -      |
| long-press       | 是否开启长按连续递增或递减                                   | Boolean          | true    | false  |
| press-time       | 开启长按触发后，每触发一次需要多久，单位ms                   | String \| Number | 250     | -      |
| positive-integer | 是否只能输入正整数                                           | Boolean          | true    | false  |

## Events

| 方法名     | 说明                                           | 参数h                                                |
| ---------- | ---------------------------------------------- | ---------------------------------------------------- |
| change     | 输入框内容发生变化时触发，对象形式             | value：输入框当前值，index：通过props传递的`index`值 |
| blur       | 输入框失去焦点时触发，对象形式                 | value：输入框当前值，index：通过props传递的`index`值 |
| minus      | 点击减少按钮时触发(按钮可点击情况下)，对象形式 | value：输入框当前值，index：通过props传递的`index`值 |
| plus       | 点击增加按钮时触发(按钮可点击情况下)，对象形式 | value：输入框当前值，index：通过props传递的`index`值 |
| blur 1.7.6 | 输入框失去焦点时触发，对象形式                 | value：输入框当前值，index：通过props传递的`index`值 |

更多属性和用法查看 [`u-number-box` 组件介绍](https://www.uviewui.com/components/numberBox.html)