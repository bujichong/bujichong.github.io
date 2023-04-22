---
title: js获取服务器时间的方法
date: 2023-03-14 15:54
author: bujichong
tags:
 - css
categories:
 - css
---
> 无需真正往后端发请求，使用以下两种方法，只要有网，获取到的时间始终是服务器时间。

## 原生方法
```js
function getServerTime(){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        if(!xhr){
            xhr = new ActiveXObject("Microsoft.XMLHTTP");  
        }  
        xhr.open("HEAD",location.href,true);  
        xhr.onreadystatechange = function(){  
            if(xhr.readyState == 4 && xhr.status == 200 ){
                resolve(xhr.getResponseHeader("Date"))
            }  
        }  
        xhr.send(null);
    })
}
```

## jQuery
```js
new Date($.ajax({type:"HEAD",async:false}).getResponseHeader('Date'));
```
