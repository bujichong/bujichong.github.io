import{_ as n,p as s,q as a,J as e}from"./framework-d4dfb5a8.js";const t={},i=e(`<h2 id="框架目录及说明" tabindex="-1"><a class="header-anchor" href="#框架目录及说明" aria-hidden="true">#</a> 框架目录及说明</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">static</span>
 ├── css <span class="token comment">//css样式</span>
 │   ├── soicon <span class="token comment">//图标集</span>
 │   │   ├── demo<span class="token punctuation">.</span>css 
 │   │   ├── demo_index<span class="token punctuation">.</span>html <span class="token comment">//查看所有图标的demo页面</span>
 │   │   ├── iconfont<span class="token punctuation">.</span>css <span class="token comment">//主图标样式文件</span>
 │   │   ├── iconfont<span class="token punctuation">.</span>js
 │   │   ├── iconfont<span class="token punctuation">.</span>json
 │   │   ├── iconfont<span class="token punctuation">.</span>ttf <span class="token comment">//图标字体文件</span>
 │   │   ├── iconfont<span class="token punctuation">.</span>woff
 │   │   ├── iconfont<span class="token punctuation">.</span>woff2
 │   │   ├── plus
 │   ├── base<span class="token punctuation">.</span>css <span class="token comment">//基础样式文件</span>
 │   ├── easy<span class="token operator">-</span>plus<span class="token punctuation">.</span>css <span class="token comment">//easyui 修正优化样式文件</span>
 │   ├── index<span class="token punctuation">.</span>css <span class="token comment">//首页单独样式文件</span>
 │   ├── socss<span class="token punctuation">.</span>css <span class="token comment">// socss框架样式</span>
 │   ├── login<span class="token punctuation">.</span>css <span class="token comment">//登录页样式文件</span>
 │   ├── patientCard<span class="token punctuation">.</span>css <span class="token comment">//患者读卡样式(专项样式文件)</span>
 │   ├── plugins<span class="token punctuation">.</span>css <span class="token comment">//插件样式集合</span>
 │   ├── viewer<span class="token punctuation">.</span>min<span class="token punctuation">.</span>css <span class="token comment">//插件viewer样式</span>
 ├── images
 │   ├── <span class="token number">403</span><span class="token punctuation">.</span>png <span class="token comment">//基础图片 403图片</span>
 │   ├── base <span class="token comment">//基础公共图片</span>
 │   │   ├── blankPic<span class="token punctuation">.</span>png
 │   │   └── swipe<span class="token punctuation">.</span>png
 │   ├── blank<span class="token punctuation">.</span>png
 │   ├── icon <span class="token comment">//图标icon目录</span>
 │   ├── layer <span class="token comment">// 弹窗图片目录</span>
 │   ├── login <span class="token comment">//登录图片目录</span>
 │   ├── logo<span class="token punctuation">.</span>ico
 │   ├── logo<span class="token punctuation">.</span>png
 │   ├── logo64<span class="token punctuation">.</span>ico
 │   ├── tree <span class="token comment">//树组件图片目录</span>
 └── js
     ├── app <span class="token comment">//应用脚本目录</span>
     │   ├── aTools<span class="token punctuation">.</span>js
     │   ├── tab_baseInfo<span class="token punctuation">.</span>js
     │   ├── tab_businesInsuer<span class="token punctuation">.</span>js
     │   ├── template
     │   ├── uploadGallery<span class="token punctuation">.</span>js
     │   ├── userSpecialTip<span class="token punctuation">.</span>js
     │   └── water<span class="token punctuation">.</span>js
     ├── config<span class="token punctuation">.</span>require<span class="token punctuation">.</span>js <span class="token comment">//入口压缩文件路径配置</span>
     ├── index<span class="token punctuation">.</span>js <span class="token comment">//首页脚本</span>
     ├── jquery<span class="token operator">-</span><span class="token number">1.11</span><span class="token number">.3</span><span class="token punctuation">.</span>min<span class="token punctuation">.</span>js <span class="token comment">//jquery</span>
     ├── lib <span class="token comment">//三方库内插件目录</span>
     │   ├── daterangepicker 
     │   ├── easyui <span class="token comment">//easyui</span>
     │   ├── echarts <span class="token comment">//echarts</span>
     │   ├── goeasy<span class="token punctuation">.</span>js
     │   ├── layer <span class="token comment">//layer 弹窗</span>
     │   ├── lodash<span class="token punctuation">.</span>min<span class="token punctuation">.</span>js
     │   ├── md5<span class="token punctuation">.</span>js
     │   ├── moment<span class="token punctuation">.</span>min<span class="token punctuation">.</span>js
     │   ├── my97 <span class="token comment">//普通日历</span>
     │   ├── passLib
     │   ├── petite<span class="token operator">-</span>vue<span class="token punctuation">.</span><span class="token number">0.3</span><span class="token number">.0</span><span class="token punctuation">.</span>umd<span class="token punctuation">.</span>js <span class="token comment">//petie-vue</span>
     │   ├── pinyinjs
     │   ├── qrcode<span class="token punctuation">.</span>min<span class="token punctuation">.</span>js <span class="token comment">//二维码</span>
     │   ├── rx<span class="token punctuation">.</span>js
     │   ├── sunyaPass <span class="token comment">//三雅</span>
     │   ├── ueditor1<span class="token punctuation">.</span><span class="token number">4.3</span><span class="token number">.3</span><span class="token operator">-</span>utf8<span class="token operator">-</span>jsp <span class="token comment">//ueditor</span>
     │   ├── viewer<span class="token punctuation">.</span>min<span class="token punctuation">.</span>js <span class="token comment">//图片放大相册</span>
     │   └── webuploader <span class="token comment">//webuploader</span>
     ├── main<span class="token punctuation">.</span>js <span class="token comment">//生产环境js框架正式入口</span>
     ├── main<span class="token punctuation">.</span>un<span class="token punctuation">.</span>js <span class="token comment">//打包入口文件，打包后生成main.js</span>
     ├── ocx
     ├── plus <span class="token comment">//增强框架文件</span>
     │   ├── addrLink<span class="token punctuation">.</span>js <span class="token comment">//省市区三级联动</span>
     │   ├── btnExt<span class="token punctuation">.</span>js <span class="token comment">//按钮扩展，关联 btnSearch</span>
     │   ├── btnSearch<span class="token punctuation">.</span>js <span class="token comment">//患者按钮搜索</span>
     │   ├── btnSearchInp<span class="token punctuation">.</span>js  <span class="token comment">//患者搜索</span>
     │   ├── easygridEdit<span class="token punctuation">.</span>extend<span class="token punctuation">.</span>js <span class="token comment">//datagrid 成组、移动及行编辑扩展（基础）</span>
     │   ├── easyvalidate<span class="token punctuation">.</span>extend<span class="token punctuation">.</span>js <span class="token comment">//form 验证（基础）</span>
     │   ├── editor<span class="token punctuation">.</span>js <span class="token comment">//编辑器</span>
     │   ├── <span class="token keyword">export</span><span class="token punctuation">.</span>js <span class="token comment">//excel导出</span>
     │   ├── goeasyControl<span class="token punctuation">.</span>js <span class="token comment">//goeasy扩展</span>
     │   ├── jquery<span class="token punctuation">.</span>extend<span class="token punctuation">.</span>js <span class="token comment">//jquery 综合扩展 (基础 重要)</span>
     │   ├── pub<span class="token punctuation">.</span>js <span class="token comment">//公共扩展 （基础 重要）</span>
     │   ├── jquery<span class="token punctuation">.</span>soColorPacker<span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">.</span>min<span class="token punctuation">.</span>js
     │   ├── ocxControl<span class="token punctuation">.</span>js
     │   ├── pageload<span class="token punctuation">.</span>js
     │   ├── plus<span class="token punctuation">.</span>js <span class="token comment">//新公共方法收集处</span>
     │   ├── print<span class="token punctuation">.</span>js
     │   ├── rationalDrug<span class="token punctuation">.</span>js <span class="token comment">//合理用药脚本</span>
     │   ├── readCard<span class="token punctuation">.</span>js <span class="token comment">//读卡</span>
     │   ├── readcardPop<span class="token punctuation">.</span>js
     │   ├── rsaPlus<span class="token punctuation">.</span>js <span class="token comment">//登录页面加密</span>
     │   ├── rsaPlus<span class="token punctuation">.</span>min<span class="token punctuation">.</span>js
     │   ├── soUpOneImg<span class="token punctuation">.</span>js
     │   ├── swfobject<span class="token punctuation">.</span>js
     │   ├── topWebsocket<span class="token punctuation">.</span>js
     │   ├── watermark<span class="token punctuation">.</span>js <span class="token comment">//水印</span>
     │   ├── WebSocketMain<span class="token punctuation">.</span>swf
     │   └── web_socket<span class="token punctuation">.</span>js
     ├── pvue <span class="token comment">//petie-vue 方法扩展</span>
     ├── require<span class="token punctuation">.</span>js
     ├── requirePaths<span class="token punctuation">.</span>js <span class="token comment">//本地插件调用入口 (重要)</span>
     └── zipConfig<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[i];function p(l,o){return s(),a("div",null,c)}const d=n(t,[["render",p],["__file","1.files.html.vue"]]);export{d as default};
