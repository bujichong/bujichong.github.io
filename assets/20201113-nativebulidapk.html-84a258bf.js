import{_ as a,p as n,q as e,w as i,s,J as l}from"./framework-d4dfb5a8.js";const t={},o=s("blockquote",null,[s("p",null,"根据自己的配置过程，记录一下")],-1),p=l(`<h2 id="生成一个签名密钥" tabindex="-1"><a class="header-anchor" href="#生成一个签名密钥" aria-hidden="true">#</a> 生成一个签名密钥</h2><p>Windows机器先进入JDK 的 bin 目录下（比如C:\\Program Files\\Java\\jdkx.x.x_x\\bin），才能执行keytool命令。 mac不需要，直接执行命令即可。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//用keytool命令生成一个私有密钥，my-release-key.keystore的密钥库文件 </span>
<span class="token comment">//keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 20000</span>
$ keytool 
    <span class="token operator">-</span>genkeypair <span class="token operator">-</span>v 
    <span class="token operator">-</span>keystore my<span class="token operator">-</span>release<span class="token operator">-</span>key<span class="token punctuation">.</span>keystore 
    <span class="token operator">-</span>alias my<span class="token operator">-</span>key<span class="token operator">-</span>alias <span class="token comment">//alias 参数后面的别名，将来为应用签名时需要用到的</span>
    <span class="token operator">-</span>keyalg <span class="token constant">RSA</span> 
    <span class="token operator">-</span>keysize <span class="token number">2048</span> 
    <span class="token operator">-</span>validity <span class="token number">20000</span>  <span class="token comment">//-validity 20000 有效期20000天  </span>
<span class="token comment">//设置密钥库口令，设置密钥库密码为123456，另一个密码提示时默认设为跟密钥库密码一样（可自己选择）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令后，会发现生成了一个文件：my-release-key.keystore，这就是apk的签名密钥。</p><h2 id="设置-gradle-变量" tabindex="-1"><a class="header-anchor" href="#设置-gradle-变量" aria-hidden="true">#</a> 设置 gradle 变量</h2><ul><li>把my-release-key.keystore文件放到你工程中的android/app文件夹下。</li><li>编辑 /.gradle/gradle.properties 或是 项目目录/android/gradle.properties文件。</li></ul><blockquote><p>说明：编辑 /.gradle/gradle.properties，修改的是全局配置，对所有项目有效。 /android/gradle.properties（项目配置，只对所在项目有效） 如果没有gradle.properties文件你就自己创建一个，添加如下的代码，分别为签名、别名、密钥库密码、密码</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">MYAPP_RELEASE_STORE_FILE</span> <span class="token operator">=</span> my<span class="token operator">-</span>release<span class="token operator">-</span>key<span class="token punctuation">.</span>keystore 
<span class="token constant">MYAPP_RELEASE_KEY_ALIAS</span> <span class="token operator">=</span> my<span class="token operator">-</span>key<span class="token operator">-</span>alias 
<span class="token constant">MYAPP_RELEASE_STORE_PASSWORD</span> <span class="token operator">=</span> <span class="token number">123456</span> 
<span class="token constant">MYAPP_RELEASE_KEY_PASSWORD</span> <span class="token operator">=</span> <span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="把签名配置加入到项目的-gradle-配置中" tabindex="-1"><a class="header-anchor" href="#把签名配置加入到项目的-gradle-配置中" aria-hidden="true">#</a> 把签名配置加入到项目的 gradle 配置中</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">...</span>
android <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    defaultConfig <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
    signingConfigs <span class="token punctuation">{</span>
        release <span class="token punctuation">{</span>
          storeFile <span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&quot;my-release-key.keystore&quot;</span><span class="token punctuation">)</span>
          storePassword <span class="token string">&quot;123456&quot;</span>
          keyAlias <span class="token string">&quot;my-key-alias&quot;</span>
          keyPassword <span class="token string">&quot;123456&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    buildTypes <span class="token punctuation">{</span>
        release <span class="token punctuation">{</span>
            <span class="token operator">...</span>
            signingConfig signingConfigs<span class="token punctuation">.</span>release
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成发行-apk-包" tabindex="-1"><a class="header-anchor" href="#生成发行-apk-包" aria-hidden="true">#</a> 生成发行 APK 包</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cd android 
 
<span class="token operator">/</span>gradlew assembleReleas
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成的 APK 文件位于android/app/build/outputs/apk/release/app-release.apk，它已经可以用来发布了</p>`,13);function r(c,d){return n(),e("div",null,[o,i(" more "),p])}const v=a(t,[["render",r],["__file","20201113-nativebulidapk.html.vue"]]);export{v as default};
