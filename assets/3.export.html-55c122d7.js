import{_ as n,p as s,q as a,J as e}from"./framework-d4dfb5a8.js";const t={},p=e(`<blockquote><p>这里我们提供了通用导出为 excel 方法 和从 datagrid 导出为 excel 方法。</p></blockquote><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h3><p>使用 导出需要 require &#39;export&#39; 文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;export&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;pub&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">exportFn</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
    <span class="token comment">/*

  * 通用导出excel函数
  *  excel: (
  *   data: Record&lt;string,string|number&gt;[], //导出数据
  *   cols: gridCol[], //导出对应的列 ，有 field,title, hidden?
  *   fileName: string //导出文件名
  *  ) =&gt; excel下载文件
  *
  *
  * 根据 grid 导出excel
  * gridToExcel(opt)
  * opt : {
  *     grid: &#39;#gridBox&#39;, // grid id，默认为 #gridBox
  *     fileName : &#39;下载文件&#39;, //导出文件名，默认为 下载文件
  *     cols : null, // 导出列，同 excel方法 cols
  *     data : null //导出数据 ，同 excel方法 data
  * }
  * */</span>
 <span class="token comment">// excel 方法</span>
 exportFn<span class="token punctuation">.</span><span class="token function">excel</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> col<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//gridToExcel 方法</span>
 exportFn<span class="token punctuation">.</span><span class="token function">gridToExcel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token string">&#39;#gridBox&#39;</span><span class="token punctuation">,</span> <span class="token comment">//默认为 gridBox，如果不同，需要填写此字段</span>
    <span class="token literal-property property">fileName</span> <span class="token operator">:</span> <span class="token string">&#39;下载文件&#39;</span><span class="token punctuation">,</span> <span class="token comment">//导出的文件名称</span>
    <span class="token literal-property property">cols</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 导出列，默认为 grid 的 columns对应列，如果不同，请手动给出</span>
    <span class="token literal-property property">data</span> <span class="token operator">:</span> <span class="token keyword">null</span> <span class="token comment">// 数据，默认为 grid  getRows 获取来的数据，如果不同，请手动给出</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;export&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;pub&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">exportFn</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.btn-exportExcel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            exportFn<span class="token punctuation">.</span><span class="token function">gridToExcel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">grid</span><span class="token operator">:</span><span class="token string">&#39;#gridBox-1&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>）


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[p];function c(l,o){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","3.export.html.vue"]]);export{r as default};
