import{_ as t,p as n,q as s,J as a}from"./framework-d4dfb5a8.js";const p={},o=a(`<blockquote><p><strong>pop组件</strong> 是页面中的模态框，由于 Uni 无法直接通过 js 直接初始化 模态框，这里我们通过在 <code>reft-layout</code>组件中插入全局pop组件，通过全局发布订阅模式将 pop组件的显示隐藏订阅到全局，实现 js 调用模态框，所以普通情况下，我们不需要单独调用 pop组件，在页面的生命周期中直接 使用 <code>this.$pop</code>来调用即可 。</p><p>由于采用了特殊的处理，接口方法不提供 <code>promise</code> 接口返回书写方式。</p></blockquote><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>pop组件，不提供可配置参数，配置参数 <strong>通过方法传递</strong> 进去，详情请看接口说明</p><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><p><strong>模板代码</strong>：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pop</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pop<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pop</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>js代码</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">...</span>
 <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
     <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>pop<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;你需要提示的内容！&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        	<span class="token comment">//点击确定后执行的事件</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>pop<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;你确定提交此修改吗？&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token comment">//点击确定后执行的事件</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token comment">//点击取消执行的事件</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token function">commonConfirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token comment">//我们通常不在当前引入组件，而是直接调用全局 pop方法(this.$pop.confirm,this.$pop.alert)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$pop<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;你需要提示的内容！&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token comment">//点击确定后执行的事件</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>，
      <span class="token function">showPop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token comment">//如果你在 组件 options属性上配置了显示属性，也可以可以通过 show/hide方法来控制弹窗的显示</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>pop<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;好吧&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">content</span> <span class="token operator">:</span> <span class="token string">&#39;&lt;b style=&quot;color:red;&quot;&gt;这就是要显示&lt;/b&gt;的内容！&#39;</span>
              <span class="token comment">//这里支持html富文本标签，请不要使用 &lt;view&gt;标签</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token function">hidePop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>pop<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token operator">...</span>
 <span class="token punctuation">}</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="method" tabindex="-1"><a class="header-anchor" href="#method" aria-hidden="true">#</a> Method</h2><table><thead><tr><th>参数</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>alert</td><td>Function(content,confirmFn)</td><td>提示框，content 同show 中参数</td></tr><tr><td>confirm</td><td>Function(content,confirmFn,cancelFn)</td><td>确认框，content 同show 中参数</td></tr><tr><td>show</td><td>Function(options)</td><td>显示弹窗，参数为显示弹窗参数，覆盖已配置在<code>options</code>上的参数</td></tr><tr><td>hide</td><td>Function()</td><td>关闭弹窗</td></tr></tbody></table><h2 id="show-方法-options-可配置参数" tabindex="-1"><a class="header-anchor" href="#show-方法-options-可配置参数" aria-hidden="true">#</a> show 方法 options 可配置参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>mode</td><td>弹窗模式</td><td>String</td><td>&#39;alert&#39;</td><td>&#39;alert&#39;|&#39;confirm&#39;</td></tr><tr><td>z-index</td><td>层级</td><td>String | Number</td><td>1075</td><td>-</td></tr><tr><td>title</td><td>标题内容</td><td>String</td><td>&#39;&#39;</td><td>-</td></tr><tr><td>show-title</td><td>是否显示标题</td><td>Boolean</td><td>false</td><td>true|false</td></tr><tr><td>width</td><td>模态框宽度，数值时单位为rpx</td><td>String | Number</td><td>&#39;600rpx&#39;</td><td>-</td></tr><tr><td>content</td><td>内容，支持即html标签，请不要使用 <code>&lt;view&gt;</code> 标签</td><td>String</td><td>&#39;&#39;</td><td>-</td></tr><tr><td>content-class</td><td>给显示内容自定义className</td><td>String</td><td>&#39;&#39;</td><td>-</td></tr><tr><td>content-style</td><td>给显示内容自定义样式</td><td>Object</td><td>{}</td><td>-</td></tr><tr><td>confirm-show</td><td>显示确定按钮</td><td>Boolean</td><td>true</td><td>true|false</td></tr><tr><td>confirm-text</td><td>确认按钮的文字</td><td>String</td><td>确认</td><td>-</td></tr><tr><td>confirm-color</td><td>确认按钮的颜色</td><td>String</td><td>#2979ff</td><td>-</td></tr><tr><td>confirm-style</td><td>自定义确认按钮样式，对象形式</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>cancel-show</td><td>是否显示取消按钮</td><td>Boolean</td><td>false</td><td>true</td></tr><tr><td>cancel-text</td><td>取消按钮的文字</td><td>String</td><td>取消</td><td>-</td></tr><tr><td>cancel-color</td><td>取消按钮的颜色</td><td>String</td><td>#606266</td><td>-</td></tr><tr><td>cancel-style</td><td>自定义取消按钮样式，对象形式</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>zoom</td><td>是否开启缩放模式</td><td>Boolean</td><td>true</td><td>false</td></tr><tr><td>async-close</td><td>是否异步关闭，只对确定按钮有效，见上方说明</td><td>Boolean</td><td>false</td><td>true</td></tr><tr><td>mask-close</td><td>是否允许点击遮罩关闭Modal</td><td>Boolean</td><td>false</td><td>true</td></tr><tr><td>offset</td><td>往上偏移的值</td><td>String |Number</td><td>0</td><td>-</td></tr><tr><td>confirm</td><td>提交事件</td><td>Function</td><td>()=&gt;{}</td><td>-</td></tr><tr><td>cancel</td><td>取消时间</td><td>Function</td><td>()=&gt;{}</td><td>-</td></tr></tbody></table>`,12),e=[o];function d(c,i){return n(),s("div",null,e)}const u=t(p,[["render",d],["__file","pop.html.vue"]]);export{u as default};
