---
title: "row"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true

---

>**row组件** 即`u-row`简写，另外默认了 `40rpx` 的间距

## 代码示例

```vue
<row>
    <item span="12" label="其他联络方式" label-width="220" prop="otherContact"><txt v-model="form.otherContact" /></item>	
</row>
```

## Props

| 参数    | 说明                                  | 类型             | 默认值              | 可选值                                                       |
| ------- | ------------------------------------- | ---------------- | ------------------- | ------------------------------------------------------------ |
| gutter  | 栅格间隔，左右各为此值的一半，单位rpx | String \| Number | 40                  | -                                                            |
| justify | 水平排列方式(微信小程序暂不支持)      | String           | start(或flex-start) | end(或flex-end) / center / around(或space-around) / between(或space-between) |
| align   | 垂直排列方式                          | String           | center              | top / bottom                                                 |
