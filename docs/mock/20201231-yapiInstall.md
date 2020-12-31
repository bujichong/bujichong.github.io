# yapi安装
#### 2020-12-31 18:00

---
layout: post
title: "yapi安装"
date: 2020-12-31 18:00
comments: true
tags:
	- yapi
	- mockjs
---

### 前置准备
Yapi需要 **nodejs(npm)** 和 **MongoDB**


### 安装yapi
```javascript
npm install -g yapi-cli --registry https://registry.npm.taobao.org
```
- 注意node的版本要低于 13，不然后面安装配置会报错，安装完成后运行
```
yapi server
```

运行后，会提示：
```
在浏览器打开 http://0.0.0.0:9090 访问。非本地服务器，请将 0.0.0.0 替换成指定的域名或ip
```

打开地址，按流程进行配置，配置成功后，按要求打开地址：
***http://127.0.0.1:3000/***
进行用户登录即可，默认用户 ***admin*** 密码： ***admin@admin****
