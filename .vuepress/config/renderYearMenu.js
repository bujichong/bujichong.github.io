/*
 * @Descripttion:  自动生成侧边栏
 * @version: 
 * @Email: bujichong@163.com
 * @Date: 2023-04-24 14:18:28
 * @LastEditors: bujichong
 * @LastEditTime: 2023-04-25 09:38:37
 * @Author: bujichong
 */
const { log } = require('console');
let fs = require('fs');
let path = require('path');

const basePath = path.resolve(__dirname, '../../');
const rPath = path.resolve(__dirname, '../../docs/')//文档目录
const menuMd = path.resolve(__dirname, '_yearMenu.md')//写入bar文档

let renderFn = {
    filesList : [],
    barArr : [],
    navTxt : '',
    init (){
        let me = this;
        me.readFileList(rPath,me.filesList);//读取到基础列表
        me.renderBar();//渲染bar
    },
    renderBar (){//渲染bar
        let me = this;
        me.toBarList(me.filesList);//得出bar目录list barArr
        // me.barArr.sort(function (t1,t2){//按时间排序
        //     return new Date(t2.date).getTime() - new Date(t1.date).getTime();
        // });
        let barTxt = '';
        me.barArr.forEach((v,i)=>{
            barTxt += v.title;
        });
        fs.writeFile(menuMd,barTxt, function(err){//写入 side.md
            if(err) {
                return console.log("写入侧边栏失败", err);
            }
            console.log("写入侧边栏成功");
        });
    },
    readFileList (dir, filesList = []){
        let me = this;
        const files = fs.readdirSync(dir);
        files.forEach((item, index) => {
          let fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
              let temO = {};
              temO[item] = [];
              me.readFileList(path.join(dir, item), temO[item]); //递归读取文件
              filesList.push(temO);
          } else if(item.endsWith('.md')){
            filesList.push(fullPath);
          }
        });
        return filesList;
    },
    toBarList (list){
        let me = this;
        list = list.reverse();
        list.forEach((item,index)=>{
            if(typeof(item)=='string'){
                var data=fs.readFileSync(item,'utf-8');
                data = data.split('\r');
                data = data.slice(0,4);
                let title = data.filter(item => {
                    if(item.match(/title:.*/)){
                        return true;
                    }
                })[0].split(':')[1];
                title = title.replace(/\"/g, '');

                let date =  data.filter(item => {
                    if(item.match(/date:.*/)){
                        return true;
                    }
                });
                let dateS = '';
                if(date.length){
                    dateS = date[0].split(':')[1];
                    dateS = dateS.replace(/\"| /g,'');
                    dateS = dateS.slice(0,10);
                }
                let itemPath = item.replace(rPath,'\\docs');
                itemPath = itemPath.replace(/\\/g,'/');
                // let dateS = date.lenth? date[0].split(':')[1] : '';
                if(dateS){
                    me.barArr.push({
                        date : dateS,
                        title : `- [${dateS?`**[${dateS}]**`:''} ${title}](${itemPath})\n`
                    });
                }

            }else{
                for (const k in item) {
                    me.barArr.push({
                        title: `\n## ${k} \n`,
                    });
                    if (item.hasOwnProperty(k)) {
                        me.toBarList(item[k]);
                    }
                }
            }
        });
    }
}

//执行
renderFn.init();