---
title: "React Native打包apk超详细步骤"
date: "2020-11-13 15:20"
comments: true
categories:
- React
tags:
- React
---

> 根据自己的配置过程，记录一下
<!-- more -->
## 生成一个签名密钥
 Windows机器先进入JDK 的 bin 目录下（比如C:\Program Files\Java\jdkx.x.x_x\bin），才能执行keytool命令。
 mac不需要，直接执行命令即可。
```javascript
//用keytool命令生成一个私有密钥，my-release-key.keystore的密钥库文件 
//keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 20000
$ keytool 
    -genkeypair -v 
    -keystore my-release-key.keystore 
    -alias my-key-alias //alias 参数后面的别名，将来为应用签名时需要用到的
    -keyalg RSA 
    -keysize 2048 
    -validity 20000  //-validity 20000 有效期20000天  
//设置密钥库口令，设置密钥库密码为123456，另一个密码提示时默认设为跟密钥库密码一样（可自己选择）
```

执行命令后，会发现生成了一个文件：my-release-key.keystore，这就是apk的签名密钥。

## 设置 gradle 变量
- 把my-release-key.keystore文件放到你工程中的android/app文件夹下。
- 编辑 /.gradle/gradle.properties 或是 项目目录/android/gradle.properties文件。

>说明：编辑 /.gradle/gradle.properties，修改的是全局配置，对所有项目有效。
/android/gradle.properties（项目配置，只对所在项目有效）
如果没有gradle.properties文件你就自己创建一个，添加如下的代码，分别为签名、别名、密钥库密码、密码

```javascript
MYAPP_RELEASE_STORE_FILE = my-release-key.keystore 
MYAPP_RELEASE_KEY_ALIAS = my-key-alias 
MYAPP_RELEASE_STORE_PASSWORD = 123456 
MYAPP_RELEASE_KEY_PASSWORD = 123456
```

## 把签名配置加入到项目的 gradle 配置中
```javascript
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
          storeFile file("my-release-key.keystore")
          storePassword "123456"
          keyAlias "my-key-alias"
          keyPassword "123456"
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

## 生成发行 APK 包
```javascript
cd android 
 
/gradlew assembleReleas
```
生成的 APK 文件位于android/app/build/outputs/apk/release/app-release.apk，它已经可以用来发布了
