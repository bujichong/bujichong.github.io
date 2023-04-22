---
title: "popbox"
author: bujichong
subSidebar: true
categories:
- 组件
tags:
- 组件
- components
comments: true
---

>**popbox组件** 主要是用在页面中的弹窗。

## 代码示例

```vue
<popbox title="弹窗标题" v-mode="popshow" @close="closePopbox" :width="width" :height="height" padding="0">
	...
</popbox>
```

## Props

| 参数                   | 说明                                                         | 类型             | 默认值    | 可选值                                |
| ---------------------- | ------------------------------------------------------------ | ---------------- | --------- | ------------------------------------- |
| v-mode/value           | 显示隐藏弹窗                                                 | Boolean          | false     | false/true                            |
| title                  | 弹窗标题                                                     | String           | ''        |                                       |
| width                  | 弹窗宽度,mode = left \|center \|right 时有效                 | String \|Number  | 500rpx    |                                       |
| height                 | 弹窗高度，mode = left \|center \|right有效，不写默认自动撑开 | String \|Number  |           |                                       |
| mode                   | 弹窗方向，普通情况都是居中弹窗                               | String           | center    | top / right / bottom / center         |
| mask-close-able        | 点击遮罩是否可以关闭弹出层                                   | Boolean          | false     | false/true                            |
| closeable              | 是否显示关闭图标                                             | Boolean          | false     | true                                  |
| padding                | content 内边距 默认                                          | String,Number    | 15        |                                       |
| mask                   | 是否显示遮罩                                                 | Boolean          | true      | false                                 |
| zoom                   | 是否开启缩放动画，只在`mode`为`center`时有效                 | Boolean          | true      | false                                 |
| safe-area-inset-bottom | 是否开启[底部安全区适配](https://www.uviewui.com/components/safeAreaInset.html#关于uview某些组件safe-area-inset参数的说明) | Boolean          | false     | true                                  |
| custom-style           | 用户自定义样式                                               | Object           | -         | -                                     |
| z-index                | 弹出内容的`z-index`值                                        | Number \| String | 10075     | -                                     |
| close-icon             | 关闭图标的名称，只能uView的内置图标                          | String           | close     | -                                     |
| close-icon-pos         | 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角 | String           | top-right | top-left / bottom-left / bottom-right |
| close-icon-color       | 关闭图标的颜色                                               | String           | #909399   | -                                     |
| close-icon-size        | 关闭图标的大小，单位rpx                                      | String \| Number | 30        | -                                     |
| negative-top           | 中部弹出时，以避免可能弹出的键盘重合，往上偏移的值，单位任意，数值则默认为rpx单位 | String \| Number | 0         | -                                     |
| mask-custom-style      | 遮罩自定义样式，一般用于修改遮罩透明度对象形式，如：{background: 'rgba(0, 0, 0, 0.5)'} | Object           | -         | -                                     |
| duration               | 遮罩打开或收起的动画过渡时间，单位ms                         | String \| Number | 250       |                                       |

## Events

| 属性名 | 说明                           | 参数 |
| ------ | ------------------------------ | ---- |
| open   | 打开弹窗触发事件               | null |
| close  | 点击右上方按钮关闭弹窗触发事件 | null |

接口继承 uview的 popup,更多详细接口 [请查看这里](https://www.uviewui.com/components/popup.html)