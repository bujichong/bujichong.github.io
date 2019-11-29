let fs = require('fs');
let path = require('path');

let rPath = './docs';//文档目录
let navMd = '_nav.md';//写入nav文档
let barMd = '_bar.md';//写入bar文档

let renderFn = {
    filesList : [],
    barArr : [],
    navTxt : '',
    init (){
        let me = this;
        me.readFileList(rPath,me.filesList);//读取到基础列表
        me.renderNav();//渲染nav
        me.renderBar();//渲染bar
    },
    renderNav (){//渲染nav
        let me = this;
        me.toNavList(me.filesList);//得出nav目录list navTxt
        console.log(me.navTxt);
        fs.writeFile(navMd,me.navTxt, function(err){//写入 nav.md
            if(err) {
                return console.log("写入导航失败", err);
            }
            console.log("写入导航成功");
        });
    },
    renderBar (){//渲染bar
        let me = this;
        me.toBarList(me.filesList);//得出bar目录list barArr
        me.barArr.sort(function (t1,t2){//按时间排序
            return new Date(t2.date).getTime() - new Date(t1.date).getTime();
        });
        // console.log(navArr);
        let barTxt = '';
        me.barArr.forEach((v,i)=>{
            barTxt +=v.title;
        });
        console.log(barTxt);
        fs.writeFile(barMd,barTxt, function(err){//写入 side.md
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
    toNavList (list,level = 0){
        let me = this;
        list.forEach((item,index)=>{
            let tt = '\t'.repeat(level);
            // console.log(1,item);
            if(typeof(item)=='string'){
                var data=fs.readFileSync(item,'utf-8');
                var ix = data.indexOf('\r');
                var title = data.substr(2, ix-2);
                // let titleA = item.split(/\\|\./);
                // let title = titleA[titleA.length-2];
                me.navTxt += `${tt}* [${title}](${item})\n`;
            }else{
                for (const k in item) {
                    if (item.hasOwnProperty(k)) {
                        me.navTxt += `\n* ${k}\n`;
                        me.toNavList(item[k],level+1);
                    }
                }
            }
        });
    },
    toBarList (list){
        let me = this;
        list.forEach((item,index)=>{
            if(typeof(item)=='string'){
                var data=fs.readFileSync(item,'utf-8');
                data = data.split('\r');
                let title =data[0].substr(2);
                let date = data[1].substr(6);
                let d = date.split(' ')[0];
                me.barArr.push({
                    date : date,
                    title : `* [**[${d}]** ${title}](${item})\n`
                });
            }else{
                for (const k in item) {
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
