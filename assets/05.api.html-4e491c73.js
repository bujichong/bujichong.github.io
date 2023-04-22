import{_ as n,p as s,q as a,J as e}from"./framework-d4dfb5a8.js";const t={},p=e(`<blockquote><p>框架对服务端的请求全通过异步请求实现，请求方式理论上并无严格限制，这里我们推荐将公共 <code>api</code> 请求 集中管理，放置项目根目录 <code>@/api/</code> 文件夹中，需要全局存储及全局驱动的异步方法，可以借助 <code>vuex</code> 共享。</p></blockquote><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>├─api <span class="token comment">//公共api接口目录</span>
│  ├─index<span class="token punctuation">.</span>js<span class="token comment">//公共请求方法</span>
│  ├─examine<span class="token punctuation">.</span>js <span class="token comment">//某专栏公共请求</span>
│  ├─url<span class="token punctuation">.</span>js <span class="token comment">//存放全局url地址变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="推荐示例" tabindex="-1"><a class="header-anchor" href="#推荐示例" aria-hidden="true">#</a> 推荐示例</h2><p><code>@/api/nav.js</code> 中方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> url <span class="token keyword">from</span> <span class="token string">&#39;./url.js&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token function">getNav</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> ajax<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>nav<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.vue</code> 中调用：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> navApi <span class="token keyword">from</span> <span class="token string">&#39;@/api/nav.js&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
	<span class="token operator">...</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">setNav</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            navApi<span class="token punctuation">.</span>getNav<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                <span class="token operator">...</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局调用" tabindex="-1"><a class="header-anchor" href="#全局调用" aria-hidden="true">#</a> 全局调用</h2><ul><li>写在 <code>@/api/url.js</code> 的 <code>default</code> 对象中的 url ，在页面里可以通过 <code>this.$url.</code> 直接访问。</li><li>写在<code>@/api/index.js</code> 的 <code>default</code> 对象中的 方法，在页面里可以通过 <code>this.$api.</code> 直接使用。</li></ul>`,10),c=[p];function i(o,l){return s(),a("div",null,c)}const u=n(t,[["render",i],["__file","05.api.html.vue"]]);export{u as default};
