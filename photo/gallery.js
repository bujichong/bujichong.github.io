"use strict";

const fs = require("fs");
const images = require("images");
const path = "../../photos/";
const outfile = "gallery.json";
const sourcePath = path + "source";
const galleryPath = path + "gallery";
const thumbPath = path + "thumb";

fs.readdir(sourcePath, function (err, files) {
    if (err) {
        return;
    }
    // console.log(files);
    let arr = [];

    function resizeImg (name,path,maxsize,quality) {
        const img = images(sourcePath + "/" + name)//加载图像文件
        const size = img.size();
        const wh = size.width/size.height;
        let newsize = size;

        if(wh>=1){//图片宽>高
            if (maxsize