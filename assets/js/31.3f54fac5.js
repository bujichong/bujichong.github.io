(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{515:function(v,t,a){"use strict";a.r(t);var e=a(6),s=Object(e.a)({},(function(){var v=this,t=v.$createElement,a=v._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("blockquote",[a("p",[v._v("工作中实现的，属于基本满足使用\n")])]),v._v(" "),a("p",[v._v("实现效果如下图：")]),v._v(" "),a("p",[a("img",{attrs:{src:"/images/temSheet.png",alt:"体温单效果图"}})]),v._v(" "),a("h2",{attrs:{id:"实现过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现过程"}},[v._v("#")]),v._v(" 实现过程")]),v._v(" "),a("p",[v._v("开始实现了svg版，用html画的表格，数据填充直接js Dom交互，点线通过svg实现，用了 "),a("strong",[v._v("raphael.js")]),v._v(" 库实现，api简单，会jquery直接看api就上手搞了，\n实现以后发现...\n当页面缩放的时候，背景表格和点线svg放大比例不一致，直接就错位分离了，\n而且浏览器端浏览器的缩放是无法控制的，这实在让人抓狂，\n找了各种办法，但是无法控制用户缩放页面，\n尤其是当用户直接在系统里设置显示缩放，页面直接就缩放变形了，\n这个更无法控制，\n感觉心累啊，纠结了很久，\n还是动手用canvas改造，\n当然还是找个库上手更快些，\n就用了最常用的 "),a("strong",[v._v("zRender.js")]),v._v(" ，\n自己包装了表格、点、线、文字等等几个方法，\n表格、线都是花蛮力定位画上去的，\n表格背景绘制出来以后，心里终于觉得还好，没那么难搞了，\ncanvas实现就是表格不像html，table和内容可以自适应自动换行，\n现在是和需求约定，暂时没有做文字换行的处理，\n好在需要换行的文字在底部，就算真的要实现，定位也不会太复杂，\n终于又花了大概一周时间，也是抽时间加紧终于搞定了")]),v._v(" "),a("h2",{attrs:{id:"部分业务难点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部分业务难点"}},[v._v("#")]),v._v(" 部分业务难点")]),v._v(" "),a("p",[v._v("当然，难的部分还在部分业务实现，最大的就是几个：")]),v._v(" "),a("ul",[a("li",[v._v("数据值与坐标的换算，一共3套坐标换算;")]),v._v(" "),a("li",[v._v("心率与脉搏之间要画虚线;")]),v._v(" "),a("li",[v._v("脉搏和体温如果坐标相同，脉搏由实心点变为大圆环;")]),v._v(" "),a("li",[v._v("温度低于35度不升，及断点;")]),v._v(" "),a("li",[v._v("不同点点击都要实现编辑功能")])]),v._v(" "),a("p",[v._v("当然总体实现应该说有难点，但是难度还好，基本思考尝试都跨越了，初期版本一周左右断断续续就做好了，感觉看上去还是不错")]),v._v(" "),a("h2",{attrs:{id:"一些细节实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些细节实现"}},[v._v("#")]),v._v(" 一些细节实现")]),v._v(" "),a("ul",[a("li",[v._v("svg里需要用到图片的地方都是嵌入或者画出来的，背景图在打印中，如果用户不主动点击显示背景，将无法打印出来")]),v._v(" "),a("li",[v._v("血压里的斜线，svg版是用的图片嵌入，canvas里是直接定位划线")]),v._v(" "),a("li",[v._v("点画的点显示编辑窗口，点其他区域关闭窗口，svg里实现比较简单，监听document的click事件，通过target的节点类型直接控制显示隐藏，canvas就麻烦一些，开始我通过zlevel来控制，把需要显示编辑窗的元素zlevel全部设置在一个数量级上，这样通过target的zlevel判断显示隐藏，这样逻辑比较简单，但是我发现一旦加了zlevel属性后，几个zlevel层级页面里就又几个canvas对象，这样感觉还是不好，一个是用户右键另存为的时候，只能存下最顶上一次的绘制内容，另外canvas对象多可能还是会有点性能影响，最后我在对象的style里添加了一个canclick私有属性，这个属性通过click的e.target.style是可以查找到的，最终完美实现解决点击弹窗的问题")])]),v._v(" "),a("p",[v._v("东西终于搞完，松了一口气，感觉短期内不想再碰这个东西了，\n过程中用到了svg和canvas绘图，基本都是最简单的，当然这本身就不难，不用框架实现也不会太复杂，就这样啦~")])])}),[],!1,null,null,null);t.default=s.exports}}]);