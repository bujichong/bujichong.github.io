import{_ as r,p as o,q as n,s as t,G as d,t as a,J as s,n as i}from"./framework-d4dfb5a8.js";const c={},l=s('<blockquote><p><strong>num组件</strong> 是 <code>u-number-box</code> 组件包装的结果,只是简写，另外简单地做了一些必要属性设置。</p></blockquote><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>v-model</td><td>输入框初始值</td><td>Number</td><td>1</td><td>-</td></tr><tr><td>bg-color</td><td>输入框和按钮的背景颜色</td><td>String</td><td>#F2F3F5</td><td>-</td></tr><tr><td>min</td><td>用户可输入的最小值</td><td>Number</td><td>0</td><td>-</td></tr><tr><td>max</td><td>用户可输入的最大值</td><td>Number</td><td>99999</td><td>-</td></tr><tr><td>step</td><td>步长，每次加或减的值，1.4.5起支持小数值，如需小数，请设置<code>positive-integer</code>为<code>false</code></td><td>Number</td><td>1</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用操作，禁用后无法加减或手动修改输入框的值</td><td>Boolean</td><td>false</td><td>true</td></tr><tr><td>size</td><td>输入框文字和按钮字体大小，单位rpx</td><td>String | Number</td><td>26</td><td>-</td></tr><tr><td>color</td><td>输入框文字和加减按钮图标的颜色</td><td>String</td><td>#323233</td><td>-</td></tr><tr><td>input-width</td><td>输入框宽度，单位rpx</td><td>String | Number</td><td>80</td><td>-</td></tr><tr><td>input-height</td><td>输入框和按钮的高度，单位rpx</td><td>String | Number</td><td>50</td><td>-</td></tr><tr><td>index</td><td>事件回调时用以区分当前发生变化的是哪个输入框</td><td>String | Number</td><td>-</td><td>-</td></tr><tr><td>disabled-input</td><td>是否禁止输入框手动输入值</td><td>Boolean</td><td>false</td><td>true</td></tr><tr><td>cursor-spacing</td><td>指定光标于键盘的距离，避免键盘遮挡输入框，单位rpx</td><td>String | Number</td><td>200</td><td>-</td></tr><tr><td>long-press</td><td>是否开启长按连续递增或递减</td><td>Boolean</td><td>true</td><td>false</td></tr><tr><td>press-time</td><td>开启长按触发后，每触发一次需要多久，单位ms</td><td>String | Number</td><td>250</td><td>-</td></tr><tr><td>positive-integer</td><td>是否只能输入正整数</td><td>Boolean</td><td>true</td><td>false</td></tr></tbody></table><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>方法名</th><th>说明</th><th>参数h</th></tr></thead><tbody><tr><td>change</td><td>输入框内容发生变化时触发，对象形式</td><td>value：输入框当前值，index：通过props传递的<code>index</code>值</td></tr><tr><td>blur</td><td>输入框失去焦点时触发，对象形式</td><td>value：输入框当前值，index：通过props传递的<code>index</code>值</td></tr><tr><td>minus</td><td>点击减少按钮时触发(按钮可点击情况下)，对象形式</td><td>value：输入框当前值，index：通过props传递的<code>index</code>值</td></tr><tr><td>plus</td><td>点击增加按钮时触发(按钮可点击情况下)，对象形式</td><td>value：输入框当前值，index：通过props传递的<code>index</code>值</td></tr><tr><td>blur 1.7.6</td><td>输入框失去焦点时触发，对象形式</td><td>value：输入框当前值，index：通过props传递的<code>index</code>值</td></tr></tbody></table>',5),u={href:"https://www.uviewui.com/components/numberBox.html",target:"_blank",rel:"noopener noreferrer"},h=t("code",null,"u-number-box",-1);function p(b,m){const e=i("ExternalLinkIcon");return o(),n("div",null,[l,t("p",null,[d("更多属性和用法查看 "),t("a",u,[h,d(" 组件介绍"),a(e)])])])}const _=r(c,[["render",p],["__file","num.html.vue"]]);export{_ as default};
