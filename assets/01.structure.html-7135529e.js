import{_ as n,p as s,q as a,J as e}from"./framework-d4dfb5a8.js";const i={},c=e(`<blockquote><p>目录是一个完整的 uni项目结构。</p></blockquote><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>├─api <span class="token comment">//公共api接口目录</span>
├─components<span class="token comment">//公共组件目录（无需单独import引入）</span>
├─<span class="token keyword">extends</span><span class="token comment">//扩展方法目录</span>
│  ├─request<span class="token comment">//请求方法包装目录</span>
│  ├─ajax<span class="token punctuation">.</span>js <span class="token comment">//异步请求方法函数</span>
│  ├─bindRules<span class="token punctuation">.</span>js <span class="token comment">//绑定验证</span>
│  ├─bus<span class="token punctuation">.</span>js <span class="token comment">//bus</span>
│  ├─getNode<span class="token punctuation">.</span>js <span class="token comment">//getParent getCildren</span>
│  ├─mixin<span class="token punctuation">.</span>js <span class="token comment">//全局mixin</span>
│  ├─pop<span class="token punctuation">.</span>js <span class="token comment">//pop弹窗组件</span>
│  ├─rules<span class="token punctuation">.</span>js <span class="token comment">//验证规则及工具函数</span>
│  ├─tools<span class="token punctuation">.</span>js <span class="token comment">//工具方法集</span>
│  └─vue<span class="token punctuation">.</span>extend<span class="token punctuation">.</span>js <span class="token comment">//扩展入口</span>
├─pages <span class="token comment">//页面目录</span>
│  ├─<span class="token number">404</span> <span class="token comment">//404页面</span>
│  ├─components<span class="token comment">//页面组件文件夹</span>
│  ├─examine
│  ├─userInfo
│  └─userList
├─router <span class="token comment">//路由目录</span>
├─<span class="token keyword">static</span> <span class="token comment">//静态资源文件夹</span>
│  ├─css <span class="token comment">//页面公共样式</span>
│  │  └─iconfont <span class="token comment">//iconfont</span>
│  └─images
├─store <span class="token comment">//store 全局数据中心</span>
├─unpackage <span class="token comment">//uni打包目录</span>
├─uview<span class="token operator">-</span>ui uView组件目录
│   ├─components
│   └─libs
├─main<span class="token punctuation">.</span>js <span class="token comment">//项目入口</span>
├─App<span class="token punctuation">.</span>vue <span class="token comment">//app启动文件</span>
├─manifest<span class="token punctuation">.</span>json <span class="token comment">//项目配置文件</span>
├─pages<span class="token punctuation">.</span>json <span class="token comment">//项目页面配置</span>
└─<span class="token keyword">package</span><span class="token punctuation">.</span>json <span class="token comment">//npm 配置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[c];function o(p,l){return s(),a("div",null,t)}const d=n(i,[["render",o],["__file","01.structure.html.vue"]]);export{d as default};
