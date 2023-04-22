import{_ as p,p as t,q as o,w as e,s as n,G as s,t as r,P as l,J as c,n as i}from"./framework-d4dfb5a8.js";const u="/images/soscrollpage-1.png",k="/images/soscrollpage-2.png",y={},m=n("blockquote",null,[n("p",null,"想必苹果产品页的效果大家都很熟悉了，单页面上下切换，每切换一次都有飞入和飞出效果， 这种效果已经在很多网站上被大肆模仿， 加上现在比较炫丽的css3效果，让页面效果更漂亮， 但要实现这样的效果工作量也是很大的， 对js，css的水平要求也比较高 soScrollPage是我在工作中根据页面展示需要做的一个插件， 封装了单页进入和飞出事件，对单页里的元素只要用类似animate设置css的方式就可以实现我们想实现的效果了， 插件是完全用jQuery的animate动画和一些的基本操作来实现的， 这样如果我们不使用css3完全可以做成兼容ie6的很多炫丽页面。")],-1),d=c(`<p><strong>ok,首先是soScrollPage的api接口：</strong></p><p>例如我们把页面都放在一个id叫 gpsIntroBox 的盒子里</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#gpsIntroBox&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">soScrollPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">scrollbox</span> <span class="token operator">:</span> <span class="token string">&#39;#pageScrollbox&#39;</span><span class="token punctuation">,</span><span class="token comment">//滚动包裹对象</span>
	<span class="token literal-property property">page</span> <span class="token operator">:</span> <span class="token string">&#39;.page&#39;</span><span class="token punctuation">,</span><span class="token comment">//页class</span>
	<span class="token literal-property property">pageClsH</span> <span class="token operator">:</span> <span class="token string">&#39;soScrollPage-&#39;</span><span class="token punctuation">,</span><span class="token comment">//为每页单独定义的cls头，会生成 soScrollPage-0 , soScrollPage-1 这样的class，方便每页dom查找，如无冲突，一般不用修改</span>
	<span class="token literal-property property">thumbCls</span> <span class="token operator">:</span> <span class="token string">&#39;s-pageThumb&#39;</span><span class="token punctuation">,</span><span class="token comment">//thumb class,</span>
	<span class="token literal-property property">btnPrev</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span><span class="token comment">//切换到上一页的按钮对象</span>
	<span class="token literal-property property">btnNext</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span><span class="token comment">//切换到下一页的按钮对象</span>
	<span class="token literal-property property">minDuring</span> <span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span><span class="token comment">//每页离开时最少停留时间</span>
	<span class="token literal-property property">animateOpt</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token comment">//动画参数对象</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里是所有的参数，实际应用中我们如果和默认参数相同就不用修改了</p><p>我们的html结构大体如下： <img src="`+u+'" alt=""></p><p>单页页面里有我们需要展示的元素，展开page1这个div，里面的元素大概如下： <img src="'+k+`" alt=""></p><p>这里style里都是js运行后生成的， 下面来看看我们的js调用： 在页面的最底下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#gpsIntroBox&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">soScrollPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">animateOpt</span> <span class="token operator">:</span> an
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们只设置了animateOpt为an， an是我们的动画参数对象数组，</p><p><strong>举例如下：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> an <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token comment">//0 第一页动画对象</span>
	<span class="token punctuation">{</span><span class="token string-property property">&quot;in&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token comment">//进入时操作动画数组</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.h3-title&#39;</span><span class="token punctuation">,</span><span class="token comment">//动画对象</span>
				<span class="token literal-property property">fn</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">css</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">top</span><span class="token operator">:</span><span class="token string">&#39;-150px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">addClass</span><span class="token operator">:</span><span class="token string">&#39;h3-now&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//函数事件，可以执行css、addClass、removeClass、removeAttr等jQuery默认支持的属性操作事件,</span>
				<span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">top</span><span class="token operator">:</span><span class="token string">&#39;120px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">600</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token comment">//动画事件，可以执行animate，另外可以设置delay时间</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.p-intro&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">fn</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">css</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">top</span><span class="token operator">:</span><span class="token string">&#39;-250px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">addClass</span><span class="token operator">:</span><span class="token string">&#39;p-now&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">top</span><span class="token operator">:</span><span class="token string">&#39;250px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">800</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token comment">//在进入800ms后执行</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.s-i-1&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">fn</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">css</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginLeft</span><span class="token operator">:</span><span class="token string">&#39;1200px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginLeft</span><span class="token operator">:</span><span class="token string">&#39;-216px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">400</span><span class="token punctuation">,</span><span class="token literal-property property">delay</span><span class="token operator">:</span><span class="token number">400</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//在进入400ms后执行</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.s-i-2&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">fn</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">css</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginLeft</span><span class="token operator">:</span><span class="token string">&#39;1200px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginLeft</span><span class="token operator">:</span><span class="token string">&#39;-96px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">600</span><span class="token punctuation">,</span><span class="token literal-property property">delay</span><span class="token operator">:</span><span class="token number">400</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.s-i-3&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">fn</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">css</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginLeft</span><span class="token operator">:</span><span class="token string">&#39;1200px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginLeft</span><span class="token operator">:</span><span class="token string">&#39;24px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">800</span><span class="token punctuation">,</span><span class="token literal-property property">delay</span><span class="token operator">:</span><span class="token number">400</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.s-i-4&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">fn</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">css</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginLeft</span><span class="token operator">:</span><span class="token string">&#39;1200px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginLeft</span><span class="token operator">:</span><span class="token string">&#39;144px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token literal-property property">delay</span><span class="token operator">:</span><span class="token number">400</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token string-property property">&quot;out&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token comment">//飞出时操作动画数组</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.h3-title&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">fn</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">removeClass</span><span class="token operator">:</span><span class="token string">&#39;h3-now&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">removeAttr</span><span class="token operator">:</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">top</span><span class="token operator">:</span><span class="token string">&#39;60px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token literal-property property">delay</span><span class="token operator">:</span><span class="token number">400</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">top</span><span class="token operator">:</span><span class="token string">&#39;1220px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">700</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.p-intro&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">fn</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">removeClass</span><span class="token operator">:</span><span class="token string">&#39;p-now&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">removeAttr</span><span class="token operator">:</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">top</span><span class="token operator">:</span><span class="token string">&#39;1250px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">600</span><span class="token punctuation">,</span><span class="token literal-property property">delay</span><span class="token operator">:</span><span class="token number">600</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.s-i-1&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginLeft</span><span class="token operator">:</span><span class="token string">&#39;-1200px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">400</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.s-i-2&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginLeft</span><span class="token operator">:</span><span class="token string">&#39;-1200px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">600</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.s-i-3&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginLeft</span><span class="token operator">:</span><span class="token string">&#39;-1200px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">800</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.s-i-4&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginLeft</span><span class="token operator">:</span><span class="token string">&#39;-1200px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">1000</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token comment">//省略</span>
  <span class="token operator">...</span>
	<span class="token comment">//5 第6页</span>
	<span class="token punctuation">{</span><span class="token string-property property">&quot;in&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.a-test&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginTop</span><span class="token operator">:</span><span class="token string">&#39;-70px&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">opacity</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">600</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.s-sys&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginTop</span><span class="token operator">:</span><span class="token string">&#39;-5px&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">opacity</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">1000</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;out&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.a-test&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginTop</span><span class="token operator">:</span><span class="token string">&#39;-40px&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">opacity</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">900</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span><span class="token string">&#39;.s-sys&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">fx</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">marginTop</span><span class="token operator">:</span><span class="token string">&#39;-55px&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">opacity</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">during</span><span class="token operator">:</span><span class="token number">600</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ok，这个动画对象是不是看起来比较直观而且比较灵活呢？</p>`,12),v=n("p",null,"样式部分就看个人了，基本来说都是绝对定位，推荐最好对page进行百分比定位，",-1);function g(b,x){const a=i("RouterLink");return t(),o("div",null,[m,e(" more "),d,n("p",null,[s("最后是实现效果，大家可以 "),n("strong",null,[r(a,{to:"/my/soScrollPage/index.html"},{default:l(()=>[s(" 猛击这里")]),_:1})])]),v])}const _=p(y,[["render",g],["__file","20141204-soscrollpage.html.vue"]]);export{_ as default};
