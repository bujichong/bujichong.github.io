(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{525:function(s,e,t){"use strict";t.r(e);var a=t(6),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("在 sublime text 2中想直接"),t("code",[s._v("ctrl+B")]),s._v("就编译写的sass代码吗？\n可以的\n"),s._v("\n安装Sass 和 SASS Build 两个插件就可以。\n（当然你得先安装ruly+sass，也行还顺便还安装compass），\n安装ruly就不说，顺着往下：")]),s._v(" "),t("p",[t("strong",[s._v("1，安装SASS：")]),s._v(" 在开始菜单中打开 **“Start Command Prompt with Ruby” **\n输入：")]),s._v(" "),t("div",{staticClass:"language-cmake line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cmake"}},[t("code",[s._v("gem install sass\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("等待cmd提示安装成功就ok啦~")]),s._v(" "),t("p",[t("strong",[s._v("2，在 sublime text 2中安装 Sass 和 SASS Build **\n怎么安装就不用讲了， Ctrl + Shift + P调出控制台安装，或者在google或百度里搜一下地址吧，下载安装包下来放到 sublime text 2下的“")]),s._v("\\Data\\Packages**”目录中。\n安装完成后，scss的文件就有了高亮了，另外编译系统下多了2个sass项（”tools–编译系统”下找到sass命令，**注意：**默认只有 ” SASS”和”SASS – Compressed”）\n"),t("img",{attrs:{src:"/images/firebugsass-1.png",alt:"firebugsass-1"}})]),s._v(" "),t("p",[t("strong",[s._v("3，安装firefox插件：“FireCompass for Firebug”")]),s._v("\n这个插件装好已经为我们能在firebug的html面版里看到sass内容做好准备了。\n这时候你"),t("code",[s._v("ctrl+B")]),s._v("能直接把sass文件编译成css文件了。\n我们打开fireubg，看html右侧的css面版，显示的还是编译后的css，\n为什么呢？因为如果要fireCompass插件显示sass源码，必须在编译后的css文件里显示对应sass的行号，像下面这样：\n"),t("img",{attrs:{src:"/images/firebugsass-2.png",alt:""}}),s._v("\n只有这样firebug的插件才知道哪一行css对应scss文件里的哪一行代码。\n那这就需要我们在sublime text 2插件编译的时候开启添加行号功能。\nok，那我们就开始干吧~\n我们找到sublime text 2 下 “Data\\Packages\\SASS-Build”文件夹，这里面有2个文件 “.sublime-build”文件，这2个文件对应着“编译系统”菜单里的2个项，\n打开一看就明白了，原来就是自动执行cmd编译命令，\n"),t("img",{attrs:{src:"/images/firebugsass-3.png",alt:""}}),s._v("\n那想开启添加行号，我们需要在执行时添加一个 “"),t("strong",[s._v("–line-numbers")]),s._v("”命令就可以，具体sass编译参数都神马 意思，大家可以去查sass手册，我这儿就不挨个扯淡了。\nok，接下来\n"),t("strong",[s._v("4")]),s._v("，复制 “"),t("strong",[s._v("SASS.sublime-build")]),s._v("”文件，改名为“"),t("strong",[s._v("SASS – Compact.sublime-build")]),s._v("”，\n把cmd对应的那行改为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('"cmd": ["sass", "--update", "$file:${file_path}/${file_base_name}.css", "--stop-on-error", "--no-cache", "--line-numbers","--style", "compact"],\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("添加了 “"),t("strong",[s._v("–line-numbers")]),s._v("”和“"),t("strong",[s._v("compact")]),s._v("”两个参数，\ncompact的意思是精简排版css，就是单行回车显示每条样式。效果如第二个图那样,\n最后，我们回到sublime text中，这时候“编译系统”就有三个SASS命令了，点击把编译选项勾选到“"),t("strong",[s._v("SASS – Compact")]),s._v("”上，如图一，\nCtrl+B,回到页面，看firebug面版：\n"),t("img",{attrs:{src:"/images/firebugsass-4.png",alt:""}}),s._v("\n是不是这里已经显示scss了呢~\nok，搞定~")])])}),[],!1,null,null,null);e.default=n.exports}}]);