import{_ as n,p as s,q as t,w as d,s as e,J as l}from"./framework-d4dfb5a8.js";const i="/images/dns-1.png",o="/images/dns-2.png",a="/images/dns-3.png",c="/images/dns-4.jpg",p={},r=e("blockquote",null,[e("p",null,"github访问太慢，把博客在coding.net又拷贝一份，利用CloudXNS来实现分流解析，哪个快解析到哪个。")],-1),m=l('<p>首先注册一个 CloudXNS 的账号，然后去原域名购买商处，将域名的 DNS 服务器指定为 CloudXNS 的服务器。</p><p>以我的万网域名为例，登录到后台，域名 &gt; 单个域名后面的“管理”&gt;修改DNS</p><p><img src="'+i+'" alt="dns-1"></p><p><img src="'+o+'" alt="dns-2"></p><p><img src="'+a+`" alt="dns-3"></p><p>将域名的 DNS 服务器指定为 CloudXNS 的服务器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lv3ns1.ffdns.net
lv3ns2.ffdns.net
lv3ns3.ffdns.net
lv3ns4.ffdns.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在 CloudXNS 设置你的域名，并添加如下域名解析：</p><p><img src="`+c+'" alt="dns-4"></p><p>这样，默认访问将会被解析到 Coding.net，但是海外访问会被解析到 Github。非常方便。如果你的网站域名已经备案了的话，你还可以使用 CloudXNS 提供的免费 CDN 服务进一步为自己的网站提速。</p><p>以上，CloudXNS 都是免费的~</p>',11);function u(_,g){return s(),t("div",null,[r,d(" more "),m])}const N=n(p,[["render",u],["__file","20171130-CloudXNS.html.vue"]]);export{N as default};
