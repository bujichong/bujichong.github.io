---
layout: post
title: "css3之展开封面"
date: 2018-08-07 16:39
comments: true
tags:
    - css
---

> 最近又重温了一下css3的动画，虽然以前在各种项目里用过不少次，但每次都是匆匆完成任务，做完基本就忘了，看了凹凸工作室的在h5中css3的大量应用，之前还是小看了css3的动画能力，手上如果有足够好用的调试或者编写样式工具，写花哨的css3代码应该不算问题，问题是你的想象力~

这次简单做了一个展开封面的动画，鼠标经过即展开封面，用到了 **-webkit-transform**中的 **rotate**方法，旋转本身并不难，主要是对距离和空间效果缺乏概念，不好调试，我在google上搜到了 http://enjoycss.com/ ，使用了一下，还是很好上手的，尤其是下面的 **transition**和 **transform** 可视化调整还是很方便很有用。下面是主要的代码。
## html代码
-  html比较简单，就是一个外盒，内部是底面，和四个需要展开的面
```html
    <div class="boxWrap">
        <div class="bottom"></div>
        <div class="trapezoid trapezoid-t"></div>
        <div class="trapezoid trapezoid-l"></div>
        <div class="trapezoid trapezoid-r"></div>
        <div class="trapezoid trapezoid-b"></div>
    </div>
```

## CSS
- CSS 部分，就是整个的实现了，先给外盒和底一个固定宽高
```css
.boxWrap{position: relative;width:200px;height:200px;margin:200px;}
.bottom{width:200px;height:200px;background-color:rgb(45, 45, 163);}
```

- 四个侧面的公共样式
通过border宽度不同来实现梯形。
```css
.trapezoid{
position: absolute;
width: 100px;
height: 0;/*高度为0*/
border: 50px solid rgba(0,0,0,0); /*边框给透明色 */
border-top: 0 solid;
border-bottom: 100px solid #1abc9c;/*底边给梯形颜色，宽度为100，加上宽度100，整体200px*/
-webkit-transition: transform 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 10ms;/* 这个是用enjoycss生成的，具体去页面里操作，比较直观，手写还是麻烦点*/
-moz-transition: transform 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 10ms;
-o-transition: transform 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 10ms;
transition: transform 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 10ms;
-webkit-transform-origin: 0 100% 0;transform-origin: 0 100% 0;
}
```

- 单个面的样式，比如上边
```css
.trapezoid-t{
top:-100px;left:0;/*将边定义到bottom的上部*/
border-bottom-color: #ebd725;/*梯形单独定义颜色*/
-webkit-transform: rotateZ(0deg) rotateX(180deg);transform:rotateZ(0deg) rotateX(180deg); /*定义默认旋转*/
}
```

- 鼠标经过盒子后的样式
```css
.boxWrap:hover .trapezoid-t{
-webkit-transform: rotateZ(0deg) rotateX(0deg);transform:rotateZ(0deg) rotateX(0deg);
}
```

其他四边基本基本这样，ok，上结果，[猛击这里](/my/transformDemo/expandCover.html)

这只是一个小例子，以供启发之用。