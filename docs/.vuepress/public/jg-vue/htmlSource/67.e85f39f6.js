(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{308:function(s,a,e){"use strict";e.r(a);var n=e(0),r=Object(n.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"vue3-0源码结构分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue3-0源码结构分析","aria-hidden":"true"}},[s._v("#")]),s._v(" Vue3.0源码结构分析")]),s._v(" "),e("h2",{attrs:{id:"vue2与vue3的对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue2与vue3的对比","aria-hidden":"true"}},[s._v("#")]),s._v(" Vue2与Vue3的对比")]),s._v(" "),e("ul",[e("li",[s._v("对TypeScript支持不友好（所有属性都放在了this对象上，难以推倒组件的数据类型）")]),s._v(" "),e("li",[s._v("大量的API挂载在Vue对象的原型上，难以实现TreeShaking。")]),s._v(" "),e("li",[s._v("架构层面对跨平台dom渲染开发支持不友好")]),s._v(" "),e("li",[s._v("CompositionAPI。受ReactHook启发")]),s._v(" "),e("li",[s._v("对虚拟DOM进行了重写、对模板的编译进行了优化操作...")])]),s._v(" "),e("h2",{attrs:{id:"一-monorepo介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-monorepo介绍","aria-hidden":"true"}},[s._v("#")]),s._v(" 一.monorepo介绍")]),s._v(" "),e("p",[s._v("monorepo是一种将多个package放在一个repo中的代码管理模式")]),s._v(" "),e("p",[s._v("Vue3中 使用 "),e("code",[s._v("yarn workspace + lerna")]),s._v(" 来管理项目")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"workspaces"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"packages/*"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("blockquote",[e("p",[s._v("通过 "),e("code",[s._v("workspaces")]),s._v(" 来指定需要管理的模块")])]),s._v(" "),e("h2",{attrs:{id:"二-lerna介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-lerna介绍","aria-hidden":"true"}},[s._v("#")]),s._v(" 二.lerna介绍")]),s._v(" "),e("p",[s._v("lerna是在js项目中用来管理多个package的工具")]),s._v(" "),e("ul",[e("li",[s._v("全局安装")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" lerna -g\nlerna init\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("常用命令")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("lerna bootstrap "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖生成软链")]),s._v("\nlerna "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有包")]),s._v("\nlerna publish "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布包")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"三-项目结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-项目结构","aria-hidden":"true"}},[s._v("#")]),s._v(" 三.项目结构")]),s._v(" "),e("ul",[e("li",[s._v("reactivity:响应式系统")]),s._v(" "),e("li",[s._v("runtime-core:与平台无关的运行时核心 (可以创建针对特定平台的运行时 - 自定义渲染器)")]),s._v(" "),e("li",[s._v("runtime-dom: 针对浏览器的运行时。包括DOM API，属性，事件处理等")]),s._v(" "),e("li",[s._v("runtime-test:用于测试")]),s._v(" "),e("li",[s._v("server-renderer:用于服务器端渲染")]),s._v(" "),e("li",[s._v("compiler-core:与平台无关的编译器核心")]),s._v(" "),e("li",[s._v("compiler-dom: 针对浏览器的编译模块")]),s._v(" "),e("li",[s._v("compiler-ssr: 针对服务端渲染的编译模块")]),s._v(" "),e("li",[s._v("template-explorer：用于调试编译器输出的开发工具")]),s._v(" "),e("li",[s._v("shared：多个包之间共享的内容")]),s._v(" "),e("li",[s._v("vue:完整版本,包括运行时和编译器")])]),s._v(" "),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[s._v("                                    +---------------------+\n                                    |                     |\n                                    |  @vue/compiler-sfc  |\n                                    |                     |\n                                    +-----+--------+------+\n                                          |        |\n                                          v        v\n                      +---------------------+    +----------------------+\n                      |                     |    |                      |\n        +------------\x3e|  @vue/compiler-dom  +---\x3e|  @vue/compiler-core  |\n        |             |                     |    |                      |\n   +----+----+        +---------------------+    +----------------------+\n   |         |\n   |   vue   |\n   |         |\n   +----+----+        +---------------------+    +----------------------+    +-------------------+\n        |             |                     |    |                      |    |                   |\n        +------------\x3e|  @vue/runtime-dom   +---\x3e|  @vue/runtime-core   +---\x3e|  @vue/reactivity  |\n                      |                     |    |                      |    |                   |\n                      +---------------------+    +----------------------+    +-------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])])])},[],!1,null,null,null);a.default=r.exports}}]);