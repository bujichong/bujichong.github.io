let fs = require('fs');
let path = require('path');

function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
    let fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
        let temO = {};
        temO[item] = [];
        readFileList(path.join(dir, item), temO[item]); //递归读取文件
        filesList.push(temO);
    } else if(item.endsWith('.md')){
      filesList.push(fullPath);
    }
  });
  return filesList;
}

let filesList = [];
readFileList('./docs',filesList);
// console.log(filesList);

let navArr = [];
function toBarList(list){
    list.forEach((item,index)=>{
        // console.log(1,item);
        if(typeof(item)=='string'){
            var data=fs.readFileSync(item,'utf-8');
            data = data.split('\r');
            let title =data[0].substr(2);
            let date = data[1].substr(6);
            let d = date.split(' ')[0];

            navArr.push({
                date : date,
                title : `* [**[${d}]** ${title}](${item})\n`
            });
            // var title = data.substr(2, ix-2);
            // let titleA = item.split(/\\|\./);
            // let title = titleA[titleA.length-2];
            // navTxt += `${date}>|<* [${title}](${item})\n`;
        }else{
            for (const k in item) {
                if (item.hasOwnProperty(k)) {
                    // navTxt += `\n* ${k}\n`;
                    toBarList(item[k]);
                }
            }
        }
    });
}

toBarList(filesList);//得出目录list

navArr.sort(function (t1,t2){//按时间排序
    return new Date(t2.date).getTime() - new Date(t1.date).getTime();
});
// console.log(navArr);
let navTxt = '';
navArr.forEach((v,i)=>{
    navTxt +=v.title;
});
console.log(navTxt);
fs.writeFile("side.md",navTxt, function(err){
    if(err) {
        return console.log("写入侧边栏失败", err);
    }
    console.log("写入侧边栏成功");
});

// * [第一篇](first)
// * [typoraHavenStyle](color/typoraHavenStyle)