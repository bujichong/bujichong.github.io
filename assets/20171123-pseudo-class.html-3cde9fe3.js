import{_ as s,p as a,q as p,w as t,s as n,J as e}from"./framework-d4dfb5a8.js";const c="/images/after.png",o="/images/css-counter.png",u={},i=n("blockquote",null,[n("p",null,"抛弃旧版本浏览器的兼容性，写起样式来真是爽多了，这篇记录一些伪类的使用及相关的一些css3属性")],-1),l=e(`<p>其实不光是伪类，随便写写最近常用的一些关于样式上的应用 。</p><h2 id="绝对尺寸单位-rem" tabindex="-1"><a class="header-anchor" href="#绝对尺寸单位-rem" aria-hidden="true">#</a> 绝对尺寸单位 rem</h2><p>全部rem绝对是对旧版本浏览器宣布再见，但想要高度自适应还有什么比rem绝对单位更好的选择。</p><p>在 base.css 的 reset 部分就这样写啦</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">html</span><span class="token punctuation">{</span><span class="token property">font-size</span><span class="token punctuation">:</span> 75%<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1400px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token selector">html</span><span class="token punctuation">{</span><span class="token property">font-size</span><span class="token punctuation">:</span> 87.5%<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span><span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1400px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token selector">html</span><span class="token punctuation">{</span><span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以针对更小宽度的界面进行设置， 比如 width 小于480,320，基本可以当手机浏览处理。还有用js来处理基础字号来实现弹性布局，原理相同，不过那个可以操控的更准确。</p><p>然后我们就可以对所有元素采用 rem来定义各种宽高了。</p><p>例如：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.txt-search</span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>5rem<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>14.5rem<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span>0 0.5rem<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>1.5rem<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span>0.2rem solid #ddd<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/icon/i-shopsearch.png<span class="token punctuation">)</span></span> no-repeat 100% center<span class="token punctuation">;</span><span class="token property">-webkit-background-size</span><span class="token punctuation">:</span>cover<span class="token punctuation">;</span><span class="token property">background-size</span><span class="token punctuation">:</span>cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有尺寸单位都用rem，这样随着屏幕宽度的变化，字号、宽高、间距等等都随着字高一起变化。</p><h2 id="nth-child-选择器" tabindex="-1"><a class="header-anchor" href="#nth-child-选择器" aria-hidden="true">#</a> :nth-child() 选择器</h2><p>这个不是什么新鲜或者生僻的东西，但是之前确实很少用，总是通过两个容器，外层 <strong>overflow:hidden</strong> 内层超过宽度来处理，或者奇偶变色通过js来处理...赶紧淘汰掉这些古董浏览器吧。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p:nth-child(odd)</span><span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span>#ff0000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">p:nth-child(even)</span><span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span>#0000ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">p:nth-child(3n+0)</span><span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span>#ff0000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="before-与-after" tabindex="-1"><a class="header-anchor" href="#before-与-after" aria-hidden="true">#</a> :before 与 :after</h2><p>举个典型例子：</p><p><img src="`+c+`" alt="after"></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.ul-group-pros .li-pro:after</span><span class="token punctuation">{</span>
<span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;+&#39;</span><span class="token punctuation">;</span>
<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span>15rem<span class="token punctuation">;</span><span class="token property">top</span><span class="token punctuation">:</span>22%<span class="token punctuation">;</span>
<span class="token property">font-size</span><span class="token punctuation">:</span>2rem<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span>#444<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.ul-group-pros .li-pro:last-child::after</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里 用了双重的伪类，这里如果用背景图片，或者在页面里写一些和内容相关的代码是不是会麻烦很多呢？</p><h2 id="伪类结合-css的counter-reset和-counter-increment属性" tabindex="-1"><a class="header-anchor" href="#伪类结合-css的counter-reset和-counter-increment属性" aria-hidden="true">#</a> 伪类结合 css的counter-reset和 counter-increment属性</h2><p>用css来进行计算，这比较有趣</p><p>css代码如：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.article</span> <span class="token punctuation">{</span>
	<span class="token property">counter-reset</span><span class="token punctuation">:</span> figures<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.figure</span> <span class="token punctuation">{</span>
	<span class="token property">counter-increment</span><span class="token punctuation">:</span> figures<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.figure figcaption:before</span> <span class="token punctuation">{</span>
	<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;Fig. &#39;</span> <span class="token function">counter</span><span class="token punctuation">(</span>figures<span class="token punctuation">)</span> <span class="token string">&#39; - &#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样可以用来命名一个批量的格式，自动生成序列</p><p>效果：</p><p><img src="`+o+`" alt="css-counter"></p><p>具体示例在这里：https://tympanus.net/Tutorials/AutomaticFigureNumbering/</p><h2 id="设置-webkit浏览器滚动条" tabindex="-1"><a class="header-anchor" href="#设置-webkit浏览器滚动条" aria-hidden="true">#</a> 设置 webkit浏览器滚动条</h2><p>我说的主要是 chrome浏览器，修改默认的浏览器样式，主要是设置 <strong>::-webkit-scrollbar</strong> 相关属性。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-track</span> <span class="token punctuation">{</span><span class="token property">background-color</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span><span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-track:hover</span> <span class="token punctuation">{</span><span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>#fefefe<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-track:active</span> <span class="token punctuation">{</span><span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>#f0f0f0<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span><span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 1px 1px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-thumb:hover</span> <span class="token punctuation">{</span><span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 1px 1px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-thumb:active</span> <span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.6<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function r(k,d){return a(),p("div",null,[i,t(" more "),l])}const b=s(u,[["render",r],["__file","20171123-pseudo-class.html.vue"]]);export{b as default};