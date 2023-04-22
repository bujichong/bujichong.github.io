import{_ as e,p as n,q as s,w as i,s as a,J as l}from"./framework-d4dfb5a8.js";const o={},d=a("blockquote",null,[a("p",null,"记录一下")],-1),r=l(`<h2 id="安装包下载" tabindex="-1"><a class="header-anchor" href="#安装包下载" aria-hidden="true">#</a> 安装包下载</h2><p>地址：https://www.mongodb.com/download-center 选择 “Community Server”， <strong>download(msi)</strong> windows版，我新安装的版本是4.0</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ul><li>点击安装msi文件，选择“custom”安装方式，安装目录默认户I选择C盘的Program Files，点next</li><li>我安装的是4.0版，这个版本比之前的版本（和3.2版本对比）多了一个 <code>Install MongoD as a Service user</code>， 我理解是安装包会默认帮我把mongo注册到windows服务里去， 这个在之前版本里是需要手动配置的， 安装完可以到 window的服务面版里去查看验证， 确实多了一个 <code>Mongodb Server</code>的服务。</li><li>下方有个小勾，默认勾上的，提示是否安装 <code>MongoDB Compass</code>， 不去掉，安装时会连接远程下载安装程序，很花时间。</li></ul><h2 id="更改-data-存储目录" tabindex="-1"><a class="header-anchor" href="#更改-data-存储目录" aria-hidden="true">#</a> 更改 data 存储目录</h2><p>新建存储目录，如我在C盘下新建目录 <code>data</code>，里面再新建两个文件夹， <code>db</code>和<code>log</code>， 我们要将数据目录和log目录指到新建的这个文件夹中。</p><ul><li>启动cmd命令行</li><li>进入 mongdb目录，默认目录，我这里是 <code>C:\\Program Files\\MongoDB\\Server\\4.0\\bin</code></li><li>命令行命令：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongod <span class="token parameter variable">--dbpath</span> C:<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>待命令执行完成后，在浏览器输入http://localhost:27017，页面显示 **&#39;It looks like you。。。&#39;**表示设置正确，连接成功。</li></ul><h2 id="注册及移除windows服务" tabindex="-1"><a class="header-anchor" href="#注册及移除windows服务" aria-hidden="true">#</a> 注册及移除windows服务</h2><p>先将cmd目录指到mongo的bin目录下，执行以下命令(当然也可以把这个目录做成环境变量，就可以直接在cmd里执行这个命令，这里就不说明怎么配置环境变量了)</p><h3 id="注册" tabindex="-1"><a class="header-anchor" href="#注册" aria-hidden="true">#</a> 注册：</h3><p><strong>方法一：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongod <span class="token parameter variable">--dbpath</span> <span class="token string">&quot;C:\\data\\db&quot;</span> <span class="token parameter variable">--logpath</span> <span class="token string">&quot;C:\\data\\log\\log.txt&quot;</span> <span class="token parameter variable">--install</span> <span class="token parameter variable">--serviceName</span> <span class="token string">&quot;MongoDB&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>方法二：</strong></p><ul><li>在bin目录下新建文件 <code>mongo.config</code></li><li>打开文件，并输入：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">dbpath</span><span class="token operator">=</span>C:<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>db
<span class="token assign-left variable">logpath</span><span class="token operator">=</span>C:<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>log<span class="token punctuation">\\</span>log.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>cmd在bin目录下输入：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongod <span class="token parameter variable">--config</span> <span class="token string">&quot;C:\\Program Files\\MongoDB\\Server<span class="token entity" title="\\4">\\4</span>.0<span class="token entity" title="\\b">\\b</span>in\\mongo.config&quot;</span> <span class="token parameter variable">--install</span> <span class="token parameter variable">--serviceName</span> <span class="token string">&quot;MongoDB&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ok，完成， 打开 window 服务面板验证一下吧</p><h3 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载：</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongod.exe <span class="token parameter variable">--remove</span> <span class="token parameter variable">--serviceName</span> <span class="token string">&quot;MongoDB&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动及关闭服务" tabindex="-1"><a class="header-anchor" href="#启动及关闭服务" aria-hidden="true">#</a> 启动及关闭服务</h2><p>只说命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>NET start MongoDB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>NET stop MongoDB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="卸载-1" tabindex="-1"><a class="header-anchor" href="#卸载-1" aria-hidden="true">#</a> 卸载</h2><p>卸载直接在控制面板通过程序卸载就OK，程序会帮助我们把mongo文件删的干干净净，没有发现问题</p><h2 id="mongodb-优缺点" tabindex="-1"><a class="header-anchor" href="#mongodb-优缺点" aria-hidden="true">#</a> MongoDB 优缺点</h2><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ul><li>文档结构的存储方式，能够更便捷的获取数据</li><li>内置GridFS，支持大容量的存储</li><li>海量数据下，性能优越</li><li>动态查询</li><li>全索引支持,扩展到内部对象和内嵌数组</li><li>查询记录分析</li><li>快速,就地更新</li><li>高效存储二进制大对象 (比如照片和视频)</li><li>复制（复制集）和支持自动故障恢复</li><li>内置 Auto- Sharding 自动分片支持云级扩展性，分片简单</li><li>MapReduce 支持复杂聚合</li><li>商业支持,培训和咨询</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li>不支持事务操作</li><li>MongoDB 占用空间过大 （不过这个确定对于目前快速下跌的硬盘价格来说，也不算什么缺点了）</li><li>MongoDB没有如MySQL那样成熟的维护工具</li><li>无法进行关联表查询，不适用于关系多的数据</li><li>复杂聚合操作通过mapreduce创建，速度慢</li><li>模式自由,自由灵活的文件存储格式带来的数据错</li><li>MongoDB 在你删除记录后不会在文件系统回收空间。除非你删掉数据库。但是空间没有被浪费</li></ul>`,33);function t(c,p){return n(),s("div",null,[d,i(" more "),r])}const h=e(o,[["render",t],["__file","20180809-mongoInstall.html.vue"]]);export{h as default};
