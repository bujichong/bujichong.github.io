---
title: "so-calendar"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

> **so-calendar组件** 是基于 [`u-calendar`](https://www.uviewui.com/components/calendar.html)历组件，有**单选** 和 **范围** 两种模式，返回日期固定为年月日，即 `yyyy-MM-dd`，如果需要选择时分秒，请使用so-time组件。

## 代码示例

**模板代码**：

```vue
<so-calendar v-model="form.date" mode="date" max-date="2021-05-14" @confirm="selectDate" />

<so-calendar  v-model="form.dateRange" mode="range" max-date="2021-05-14" @confirm="selectDate" :disabled="true"></so-calendar>
```

**js代码**：

```javascript

 methods:{
     selectDate(record){
		console.log(record);
	},
 }
```

## 日历模式

即单选模式，点击确定 `@confirm`返回值：

```javascript
{
	day: 4, // 选择了哪一天
	days: 30, // 这个月份有多少天
	isToday: true, // 选择的日期是否今天
	month: 6, // 选择的月份
	result: "2020-06-04", // 选择的日期整体值
	week: "星期四", // 选择日期所属的星期数
	year: 2020 , // 选择的年份
}
```

## 日期范围模式

点击确定 `@confirm`返回值：

```javascript
{
	endDate: "2020-06-04", // 选择的结束日期
	endDay: 4, // 结束日期是哪一天
	endMonth: 6, // 结束日期的月份
	endWeek: "星期四", // 结束日期的星期数
	endYear: 2020, // 结束日期的年份
	startDate: "2020-06-01", // 选择的起始日期
	startDay: 1, // 起始日期是哪一天
	startMonth: 6, // 起始日期的月份
	startWeek: "星期一", // 起始日期的星期数
	startYear: 2020 // 起始日期的年份
}
```

## Props

| 参数              | 说明                                                      | 类型             | 默认值                | 可选值                                    |
| ----------------- | --------------------------------------------------------- | ---------------- | --------------------- | ----------------------------------------- |
| v-model/value     | 输入值，日期范围可以为逗号隔开的字符串也可以为2个值的数组 | String\|Array    | -                     | -                                         |
| mode              | 模式，默认为日期模式                                      | String           | 'date'                | 'range'                                   |
| split-letter      | 日期分隔符,默认用中横杠                                   | String           | '-'                   | -                                         |
| join-letter       | 日期范围联结字符                                          | String           | '至'                  | -                                         |
| min-date          | 最小可选日期                                              | Number \| String | 1900-01-01            | -                                         |
| max-date          | 最大可选日期                                              | Number \| String | 2100-01-01            | -                                         |
| max-year          | 可切换的最大年份                                          | Number \| String | 2050                  | -                                         |
| min-year          | 可切换的最小年份                                          | Number \| String | 1950                  | -                                         |
| border            | 输入框边框                                                | Boolean          | false                 | true                                      |
| disabled          | 是否禁用，禁用后能选择，但输入值不会变化                  | Boolean          | false                 | true                                      |
| mask-close-able   | 是否允许通过点击遮罩关闭日历                              | Boolean          | true                  | false                                     |
| month-arrow-color | 月份切换按钮箭头颜色                                      | String           | #606266               | -                                         |
| year-arrow-color  | 年份切换按钮箭头颜色                                      | String           | #909399               | -                                         |
| color             | 日期字体的默认颜色                                        | String           | #303133               | -                                         |
| active-bg-color   | 起始/结束日期按钮的背景色                                 | String           | #2979ff               | -                                         |
| z-index           | 弹出时的`z-index`值                                       | String \| Number | 10075                 | -                                         |
| active-color      | 起始/结束日期按钮的字体颜色                               | String           | #ffffff               | -                                         |
| range-bg-color    | 起始/结束日期之间的区域的背景颜色                         | String           | rgba(41,121,255,0.13) | -                                         |
| range-color       | 选择范围内字体颜色                                        | String           | #2979ff               | -                                         |
| start-text        | 起始日期底部的提示文字                                    | String           | 开始                  | -                                         |
| end-text          | 结束日期底部的提示文字                                    | String           | 结束                  | -                                         |
| btn-type          | 底部确定按钮的主题                                        | String           | primary               | default / success / info/ warning / error |
| toolTip           | 顶部提示文字，如设置名为`tooltip`的`slot`，此参数将失效   | String           | 选择日期              | -                                         |
| closeable         | 是否显示右上角的关闭图标                                  | Boolean          | true                  | false                                     |

## Events

| 方法名  | 说明                         | 参数             |
| ------- | ---------------------------- | ---------------- |
| confirm | 返回选择日期，返回值如上介绍 | Function(record) |

##  Slots 

| 名称    | 说明                 |
| :------ | :------------------- |
| tooltip | 自定义日历顶部的内容 |

更多API接口及说明，可查看 [`u-calendar`手册](https://www.uviewui.com/components/calendar.html)