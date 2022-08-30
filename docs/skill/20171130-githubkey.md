---
layout: post
title: "github 创建密钥"
date: "2017-11-30 10:00"
comments: true
categories:
- skill
tags:
- github
- skill
---

> 记性不好，记录一下~
<!-- more -->

## 先解个惑：为什么要公钥和私钥

我在csdn上找了一个比较好的答案：

- git帮我们生成的是不对称的一对密钥，GIT服务器上存储的是公钥，本地存储的是私钥，当你push本地代码库到远程代码库，服务器会要求你出示私钥，并且用你出示的私钥和它的公钥配对来完成认证。由于使用的是不对称加密，所以公钥可以公开，只要保管好私钥就可以。
- 路人甲只要没有私钥，所以无法push。这样才能保证开源项目的完整性，否则阿猫阿狗都去push代码，那项目不就乱套了？如果路人甲想对你的项目做出贡献，那么以GITHUB为例，他会发送一个pull request给你，然后由你来审核他作出的改变，如果审核通过，那么你就可以将他的pull request合并到你工程的某一分支中。这里只以GITHUB为例，私有的GIT服务器可能没有类似功能，比如GITLAB就没有pull request。

##  msysgit生成密钥及github配置

步骤如下：

- 首先肯定是装了 msysgit

- 打开 git  bash 输入命令：cd ~/.ssh，转跳到当前用户名下的.ssh目录下，比如 Administrator用户就会跳到**C:\Users\Administrator\.ssh** 目录(这个目录是用来放密钥的文件路径，其实这步可以省略，密钥默认会生成在这个目录)

- 输入命令 ssh-keygen -t rsa -C “your_email@youremail.com”，系统就会提示：

  Enter file in which to save the key (/c/Users/Administrator/.ssh/id_rsa):

  然后一路回车就可以了~

  系统信息如下：

  ![git-0](/images/git-0.png)

- 查看密钥指令：cat ~/.ssh/id_rsa.pub

-  登录 github ,点击账号，Personal settings > ssh and GPG keys > new ssh key，填写 title 和 key(id_rsa.pub内的信息)

  ![git-5](/images/git-5.png)

## TortoiseGit配置密钥

不习惯git直接的命令行，就直接用tortoisegit，配置密钥也不复杂。

TortoiseGit 使用扩展名为ppk的密钥，而不是ssh-keygen生成的rsa密钥。

![git-4](/images/git-4.png)

使用命令ssh-keygen -C "邮箱地址" -t rsa产生的密钥在TortoiseGit中不能用。而基于git的开发必须要用到rsa密钥，因此需要用到TortoiseGit的putty key generator工具来生成既适用于git的rsa密钥也适用于TortoiseGit的ppk密钥。

具体配置步骤如下：

- 运行TortoiseGit开始菜单中的puttygen程序

  ![git-1](/images/git-1.jpg)

- 点击“Generate”按钮，鼠标在上图的空白地方来回移动直到进度条完毕，就会自动生一个随机的key

  ![git-2](/images/git-2.jpg)

- 将上图中多行文本框的内容全选、复制，并粘贴到git账户的 SSH public key中，这就是适用于git的公钥

- 点击上图中的“Save private key”按钮,将生成的key保存为适用于TortoiseGit的私钥（扩展名为.ppk）。

- 运行TortoiseGit开始菜单中的Pageant程序，程序启动后将自动停靠在任务栏中，图标显示为![img](http://img.blog.csdn.net/20140106141921187?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmVuZGFuYmFpY2hpMTk4OQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)，双击该图标，弹出key管理列表，如下

  ![git-3](/images/git-3.jpg)

- 点击上图中的“Add Key”按钮，将第4步保存的ppk私钥添加进来，关闭对话框即可

ok，这篇写的好详细，我自己撸了一遍，估计小白看了都会了。