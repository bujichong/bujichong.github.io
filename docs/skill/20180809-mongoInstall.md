---
layout: post
title: "Mongodb 安装与卸载"
date: "2018-08-08 10:00"
comments: true
categories:
- skill
tags:
- github
- skill
---

> 记录一下

## 安装包下载
地址：https://www.mongodb.com/download-center
选择 “Community Server”， **download(msi)**
windows版，我新安装的版本是4.0

## 安装
- 点击安装msi文件，选择“custom”安装方式，安装目录默认户I选择C盘的Program Files，点next
- 我安装的是4.0版，这个版本比之前的版本（和3.2版本对比）多了一个 `Install MongoD as a Service user`，
我理解是安装包会默认帮我把mongo注册到windows服务里去，
这个在之前版本里是需要手动配置的，
安装完可以到 window的服务面版里去查看验证，
确实多了一个 `Mongodb Server`的服务。
- 下方有个小勾，默认勾上的，提示是否安装 `MongoDB Compass`，
不去掉，安装时会连接远程下载安装程序，很花时间。

## 更改 data 存储目录
新建存储目录，如我在C盘下新建目录 `data`，里面再新建两个文件夹， `db`和`log`，
我们要将数据目录和log目录指到新建的这个文件夹中。

- 启动cmd命令行
- 进入 mongdb目录，默认目录，我这里是 `C:\Program Files\MongoDB\Server\4.0\bin`
- 命令行命令：
``` bash
mongod --dbpath C:\data\db
```
- 待命令执行完成后，在浏览器输入http://localhost:27017，页面显示 **'It looks like you。。。'**表示设置正确，连接成功。


## 注册及移除windows服务
先将cmd目录指到mongo的bin目录下，执行以下命令(当然也可以把这个目录做成环境变量，就可以直接在cmd里执行这个命令，这里就不说明怎么配置环境变量了)
### 注册：
**方法一：**
``` bash
mongod --dbpath "C:\data\db" --logpath "C:\data\log\log.txt" --install --serviceName "MongoDB"
```
**方法二：**
- 在bin目录下新建文件 `mongo.config`
- 打开文件，并输入：
``` bash
dbpath=C:\data\db
logpath=C:\data\log\log.txt
```
- cmd在bin目录下输入：
``` bash
mongod --config "C:\Program Files\MongoDB\Server\4.0\bin\mongo.config" --install --serviceName "MongoDB"
```
ok，完成，
打开 window 服务面板验证一下吧


### 卸载：
```bash
mongod.exe --remove --serviceName "MongoDB"
```


## 启动及关闭服务
只说命令：
``` bash
NET start MongoDB
```
``` bash
NET stop MongoDB
```

## 卸载
卸载直接在控制面板通过程序卸载就OK，程序会帮助我们把mongo文件删的干干净净，没有发现问题


## MongoDB 优缺点
#### 优点
- 文档结构的存储方式，能够更便捷的获取数据
- 内置GridFS，支持大容量的存储
- 海量数据下，性能优越
- 动态查询
- 全索引支持,扩展到内部对象和内嵌数组
- 查询记录分析
- 快速,就地更新
- 高效存储二进制大对象 (比如照片和视频)
- 复制（复制集）和支持自动故障恢复
- 内置 Auto- Sharding 自动分片支持云级扩展性，分片简单
- MapReduce 支持复杂聚合
- 商业支持,培训和咨询

#### 缺点
- 不支持事务操作
- MongoDB 占用空间过大 （不过这个确定对于目前快速下跌的硬盘价格来说，也不算什么缺点了）
- MongoDB没有如MySQL那样成熟的维护工具
- 无法进行关联表查询，不适用于关系多的数据
- 复杂聚合操作通过mapreduce创建，速度慢
- 模式自由,自由灵活的文件存储格式带来的数据错
- MongoDB 在你删除记录后不会在文件系统回收空间。除非你删掉数据库。但是空间没有被浪费