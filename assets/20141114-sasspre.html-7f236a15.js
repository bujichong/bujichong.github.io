import{_ as s,p as n,q as a,w as e,s as p,J as t}from"./framework-d4dfb5a8.js";const c={},i=p("p",null,"最近在用sass，记下一例：",-1),l=t(`<p>在css里写这样的代码是比较容易的，</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.w10</span><span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>10%<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是在sass里,如果我要用循环</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> <span class="token selector">1 to 10 </span><span class="token punctuation">{</span>
<span class="token selector">.wp<span class="token variable">#{$i}</span>0 </span><span class="token punctuation">{</span>
   <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">#{$i}</span>%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就报错了， 变量后不能用%， 想了很多办法，用引号引住%,或者加/\\，但是不管用， 说来说去，这里毕竟还是css，并不识别这些符号为注释符号。</p><p>看到函数这节，豁然开朗，写了如下</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@function</span> <span class="token function">per</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">@return</span> <span class="token variable">$a</span>+<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> <span class="token selector">1 to 5 </span><span class="token punctuation">{</span>
<span class="token selector">.wp<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
   <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">per</span><span class="token punctuation">(</span><span class="token variable">#{$i}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行生成：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wp1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.wp2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 2%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.wp3</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 3%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.wp4</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 4%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ok了</p><p>真正正确的写法应该是如此：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">20 </span><span class="token punctuation">{</span>
.wp#<span class="token punctuation">{</span><span class="token variable">$i</span>*5<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span> 5%*<span class="token variable">$i</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function o(u,d){return n(),a("div",null,[i,e(" more "),l])}const k=s(c,[["render",o],["__file","20141114-sasspre.html.vue"]]);export{k as default};
