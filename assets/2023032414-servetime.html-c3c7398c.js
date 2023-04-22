import{_ as n,p as s,q as a,J as t}from"./framework-d4dfb5a8.js";const p={},e=t(`<blockquote><p>无需真正往后端发请求，使用以下两种方法，只要有网，获取到的时间始终是服务器时间。</p></blockquote><h2 id="原生方法" tabindex="-1"><a class="header-anchor" href="#原生方法" aria-hidden="true">#</a> 原生方法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getServerTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>xhr<span class="token punctuation">)</span><span class="token punctuation">{</span>
            xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XMLHTTP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
        xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;HEAD&quot;</span><span class="token punctuation">,</span>location<span class="token punctuation">.</span>href<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
            <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span><span class="token function">getResponseHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Date&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span>  
        xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jquery" tabindex="-1"><a class="header-anchor" href="#jquery" aria-hidden="true">#</a> jQuery</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;HEAD&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">async</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResponseHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Date&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),o=[e];function c(u,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","2023032414-servetime.html.vue"]]);export{r as default};
