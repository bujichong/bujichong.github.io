import{_ as a,p as n,q as s,w as o,s as e,J as r}from"./framework-d4dfb5a8.js";const d={},i=e("blockquote",null,[e("p",null,"绿化后直接解压安装包，配置环境变量及设置配置就可以用，配置文件及安装模块在安装包内")],-1),t=r(`<p>如，将node安装到 *<em>D:\\Program Files\\nodejs*</em> 目录</p><h2 id="查看命令" tabindex="-1"><a class="header-anchor" href="#查看命令" aria-hidden="true">#</a> 查看命令：</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm config ls <span class="token operator">-</span>l    <span class="token comment">//查看设置</span>
npm list <span class="token operator">--</span>depth<span class="token operator">=</span><span class="token number">0</span> <span class="token operator">-</span>g     <span class="token comment">//查看已安装到全局的模块</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初次修改-将文件和cache都移到安装文件夹中" tabindex="-1"><a class="header-anchor" href="#初次修改-将文件和cache都移到安装文件夹中" aria-hidden="true">#</a> 初次修改，将文件和cache都移到安装文件夹中</h2><p>在node安装文件夹里新建2个目录：</p><ul><li>\\node_global</li><li>\\node_cache</li></ul><p>将 C:\\Users\\Administrator\\AppData\\Roaming\\npm文件下的node_modules拷贝到 <strong>\\node_global</strong>中 将 C:\\Users$USER.npmrc 用户配置文件拷贝到node安装目录下</p><h2 id="添加node到环境变量-设置全局node-path变量" tabindex="-1"><a class="header-anchor" href="#添加node到环境变量-设置全局node-path变量" aria-hidden="true">#</a> 添加node到环境变量，设置全局NODE_PATH变量</h2><p>“我的电脑”-右键-“属性”-“高级系统设置”-“高级”-“环境变量”，</p><h3 id="用户环境变量" tabindex="-1"><a class="header-anchor" href="#用户环境变量" aria-hidden="true">#</a> 用户环境变量：</h3><p>添加 ： C:\\Users\\Administrator\\AppData\\Roaming\\npm(可选添加)</p><h3 id="系统变量" tabindex="-1"><a class="header-anchor" href="#系统变量" aria-hidden="true">#</a> 系统变量：</h3><p>增加： NODE_PATH ： D:\\Program Files\\nodejs\\node_global\\node_modules</p><p>path中添加： D:\\Program Files\\nodejs<br> %NODE_PATH% 两项</p><h2 id="将配置文件设置到当前目录下" tabindex="-1"><a class="header-anchor" href="#将配置文件设置到当前目录下" aria-hidden="true">#</a> 将配置文件设置到当前目录下</h2><p>.npmrc文件已在当前目录下 在cmd下设置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm config <span class="token keyword">set</span> userconfig <span class="token string">&quot;D:\\Program Files\\nodejs\\.npmrc&quot;</span>

<span class="token comment">//这两项已在.npmrc文件中</span>
npm config <span class="token keyword">set</span> prefix <span class="token string">&quot;D:\\Program Files\\nodejs\\node_global&quot;</span>
npm config <span class="token keyword">set</span> cache <span class="token string">&quot;D:\\Program Files\\nodejss\\node_cache&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function c(l,p){return n(),s("div",null,[i,o(" more "),t])}const h=a(d,[["render",c],["__file","20190531-nodeConfig.html.vue"]]);export{h as default};
