import{_ as t,p,q as o,s as n,G as s,t as c,J as a,n as i}from"./framework-d4dfb5a8.js";const l={},u=a(`<blockquote><p>这里我们引入的是 <code>uni-simple-router</code> ，uni本身是并不支持js路由配置的，这里实现的路由功能在app端其实也并不完整。全局最主要的就是 两个勾子 <code>beforeEach</code> <code>afterEach</code> 。</p></blockquote><h2 id="组件内导航守卫" tabindex="-1"><a class="header-anchor" href="#组件内导航守卫" aria-hidden="true">#</a> 组件内导航守卫</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
   <span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 在渲染该组件的对应路由被 confirm 前调用</span>
    <span class="token comment">// 因为当守卫执行前，组件实例还没被创建,不！能！获取组件实例 \`this\`</span>
    	<span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">vm</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 通过 \`vm\` 访问组件实例</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteUpdate</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 在当前路由改变，但是该组件被复用时调用</span>
    <span class="token comment">// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，</span>
    <span class="token comment">// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。</span>
    <span class="token comment">// 可以访问组件实例 \`this\`</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 导航离开该组件的对应路由时调用</span>
    <span class="token comment">// 可以访问组件实例 \`this\`</span>
  <span class="token punctuation">}</span>
 <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r={href:"https://hhyang.cn/v2/",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"uni-simple-router",-1),k=a(`<h2 id="link-路由切换" tabindex="-1"><a class="header-anchor" href="#link-路由切换" aria-hidden="true">#</a> $link 路由切换</h2><p>在 <code>.vue</code> 页面中，我们可以使用全局函数 <code>this.$link</code> 来切换页面地址，并传递参数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 无参数</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$link</span><span class="token punctuation">(</span><span class="token string">&#39;/pages/components/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 带参数</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$link</span><span class="token punctuation">(</span><span class="token string">&#39;/pages/components/index&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lisa&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//完整版</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$link</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;pages/components/empty/index&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lisa&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面接收参数" tabindex="-1"><a class="header-anchor" href="#页面接收参数" aria-hidden="true">#</a> 页面接收参数</h2><p>在目标页面中，我们可以通过生命周期钩子 <code>onLoad</code> 来获取 <code>link</code> 传递过来的参数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">opt</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//opt:{name:lisa}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadPtInfo</span><span class="token punctuation">(</span>opt<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(m,b){const e=i("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[s("此路由插件非uni 官方提供，后期可以根据需求对路由做更多改造，更多说明请查看 "),n("a",r,[d,s(" 文档"),c(e)])]),k])}const f=t(l,[["render",v],["__file","03.router.html.vue"]]);export{f as default};
