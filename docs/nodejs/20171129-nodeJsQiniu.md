---
layout: post
title: "nodeJs批量上传文件到七牛"
date: "2017-11-29 13:50"
comments: true
categories:
- nodeJs
tags:
- nodeJs
- qiniu
---

> 昨晚我把七牛的服务限制了一下，被网上刷流量的情况吓着了，看来博客除了域名，其他统统免费爽不是那么容易的。

说批量，肯定是已经有了对应的文件列表，这里我是有的，我用NodeJs处理图片的时候顺便生成了文件路径Json，格式大体如下：

```json
{
  "data": [
    {
      "name": "cs_xihu_20171126/0.jpg",
      "type": "pic",
      "time": "2017-11-27 9:7:19",
      "w": 1125,
      "h": 1500
    },
    {
      "name": "cs_xihu_20171126/1.jpg",
      "type": "pic",
      "time": "2017-11-27 9:7:50",
      "w": 1125,
      "h": 1500
    },
    {
      "name": "cs_xihu_20171126/2.jpg",
      "type": "pic",
      "time": "2017-11-27 9:10:8",
      "w": 1125,
      "h": 1500
    }
}
```

结构就是如此，反正是n多个文件组成，上传对应到七牛的路径，需要用到的就是这个 **name** 。

然后就是上传需要用到的配置，这些账号信息什么的是必须的：

```javascript
let opt = {//七牛账号信息——用于上传，详细参数及nodeAPI : https://developer.qiniu.com/kodo/sdk/1289/nodejs
    accessKey : '',//sk
    secretKey : '',//sk
    bucket :  '',//文件容器
    zone : 'Zone_z0'//空间对应机房区域：华南
  }
```

执行函数：

```javascript
 function uploadQiniu(opt , jsonFile) {//jsonFile对应上传的文件名
   let o = opt;
   const promise = new Promise(function(resolve, reject) {//获取七牛上传临时uploadToken
     let mac = new qiniu.auth.digest.Mac(o.accessKey, o.secretKey);
     let options = {
       scope: o.bucket
     };
     let putPolicy = new qiniu.rs.PutPolicy(options);
     let uploadToken=putPolicy.uploadToken(mac);
     resolve(uploadToken);//返回uploadToken
   });


   promise.then(function (uploadToken) {//上传图片
     // console.log(uploadToken);
     let file= jsonFile;
     console.log('上传文件对应的json路径：'+file);
     let filesData = '';
     try{
       filesData = JSON.parse(fs.readFileSync( file));
     }catch(e){
       console.error('需要上传文件的json路径不正确~');
       return;
     }
     if (uploadToken&&filesData&&filesData.data&&filesData.data.length) {//检验是否满足需要上传的条件
       var config = new qiniu.conf.Config();
       config.zone = qiniu.zone[o.zone];// 空间对应的机房

       let formUploader = new qiniu.form_up.FormUploader(config);
       let putExtra = new qiniu.form_up.PutExtra();
       let dataLen = filesData.data.length;

       // 循环文件上传
       filesData.data.forEach(function (item,i) {
         let localFile = opt.fileOutPath + item.name;
         let key= item.name;
         formUploader.putFile(uploadToken, key, localFile, putExtra, function(respErr,respBody, respInfo) {
           if (respErr) {
             throw respErr;
           }
           if (respInfo.statusCode == 200) {
             console.log(item,respBody);
           } else {
             console.log(respInfo.statusCode);
             console.log(item,respBody);
           }
           if (i === dataLen-1) {
             console.log('上传任务结束，共上传处理'+dataLen+'个文件~');
           };
         });
       });

     };

   });

  }
```

ok，写的可能有点啰嗦，而且我是es5,se6随便写，但是大体就是这样。

更多细节可以参考官方文档： https://developer.qiniu.com/kodo/sdk/1289/nodejs 。