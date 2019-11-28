# 安装docsify
```javascript
npm i docsify-cli -g
```

# 生成主导航及侧边栏
运行**render.bat**文件，node脚本会自动把 **docs** 文件夹中的.md转为目录
或在当前目录执行命令：
```javascript
node render.js
```
为了标准化文档，及生成导航，markdown文件书写请遵守规则：
第一行： # 标题
第二行： #### 时间

# 运行
运行**run.bat**
或者当前目录执行命令：
```javascript
docsify serve
```