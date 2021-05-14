---
layout: post
title: "Git TortoiseGit记住用户密码"
date: "2018-08-08 10:00"
comments: true
categories:
- skill
tags:
- github
- skill
---

> 提交github每次都要输入用户密码，好烦，尤其我现在有github和coding两个版本库，每次都要写用户密码，真是烦死，之前瞎猫碰搞定了用户密码，重新查了一下文档，并且试了一下，这次真的ok了，记录一下。

- 在 `C:\User\Administrator` (找当前操作用户名下)里找到 `.gitconfig` 文件
- 打开，里面内容是
``` java
[user]
	email = user@XXX.com
	name = user@XXX.com
```
这个应该是我之前提交时候，他在此留下的用户名痕迹，如果没有就手动添加上自己的信息

在这下面添加两行
```javascript
[user]
	email = user@XXX.com
	name = user@XXX.com

[credential]
	helper = store
```

这样就妥了，下次提交代码的时候，还会提示输入用户密码，以后就自动了。