let fs = require('fs');
let path = require('path');

const basePath = path.resolve(__dirname, '../../');
const sourcePath = path.resolve(__dirname, '../../docs/')
const barFile = path.resolve(__dirname,'./sidebar.js');

let renderFn = {
    booksList: [],
    filesList : {},
    newFilesList: {},
    barData : {
        // '/docs/pcwork':[],
    },
    navTxt : '',
    init (){
        let me = this;
        me.getList();
        me.readFileList(sourcePath,me.filesList);//读取到基础列表
        me.renderListData();
        // console.log(JSON.stringify(me.filesList,'',2));
        me.renderSidebar();
    },
    getList(){ //初始化需要读取的文件列表
        const files = fs.readdirSync(sourcePath);
        let folds = [];
        files.forEach(file => {
            let ph = fs.statSync(sourcePath + '/' + file,()=>{});

            if(ph.isDirectory()){
                folds.push(file);
            }
        });
        // console.log(folds);
        folds.forEach( foldName => {
            const itemName = `/docs/${foldName}`;
            this.booksList.push(itemName);
            this.barData[itemName] = [];
        });
    },
    renderListData(){
        var me = this;
        let kk = {}; //存放同组的url keys
        let newList = {}; //新的 {text,children} 格式的导航数据
        let kv = {}; //每项最终导航
        let kw = {}; //最终导航列表
        Object.keys(me.filesList).forEach(item => {
            // console.log(item);
            Object.keys(me.barData).forEach( k => {
                if(!kk[k]){kk[k] = []}
                if(item.indexOf(k)>=0){
                    if(item.match(/.*?index/)){
                        kk[k].unshift(item); //index  放在最前
                    }else{
                        kk[k].push(item);
                    }
                    
                }
            });
            const itemSplit = item.lastIndexOf('/');
            const itemN = item.slice(itemSplit+1);
            newList[item] = {
                // path: item,
                text: itemN == 'index'?'首页':itemN,
                children: me.filesList[item]
            }
        });
        // console.log(kk);
        Object.keys(kk).forEach(k => {
            let item = kk[k];
            kv[k] = item.map(kitem => {
                return newList[kitem];
            });
        });
        // console.log(kv);
        Object.keys(kk).forEach(k => {
            let item = kk[k];
            item.forEach(kitem => {
                kw[kitem] = kv[k];
            }) 
        });
        console.log(kw);
        me.newFilesList = kw;
    },
    renderSidebar(){
        var me = this;
        fs.writeFile(barFile,`export default ${JSON.stringify(me.newFilesList,'',2)}`, function(err){//写入 nav.md
            if(err) {
                return console.log("写入导航失败", err);
            }
            console.log("写入导航成功");
        });
    },
    readFileList (dir, filesList = {}){
        let me = this;
        const files = fs.readdirSync(dir);
        files.forEach((item, index) => {
          let fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
              me.readFileList(fullPath, filesList); //递归读取文件
          } else if(item.endsWith('.md')){
            const fileFullPath = fullPath.replace(basePath,'').replace(/\\/ig,'/');
            const pathSplit = fileFullPath.lastIndexOf('/');
            const filePath = fileFullPath.slice(0,pathSplit);
            let fileName = item.replace(/(.md|.markdown)/,'');
            if(fileName == 'index' || fileName == 'readme'){
                fileName = 'index.html'
            }
            const fileItem = filePath+ '/' + fileName;

            // console.log(filePath, '==', fileItem);

            if(filesList[filePath]){
                if(fileName == 'index.html'){ //index  放在最前
                    filesList[filePath].unshift(fileItem);
                }else{
                    filesList[filePath].push(fileItem);
                }
            }else{
                filesList[filePath] = [fileItem];
            }
          }
        });
        return filesList;
    },
}

//执行
renderFn.init();