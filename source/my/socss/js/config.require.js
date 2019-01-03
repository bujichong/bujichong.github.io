//node r.js -o build-bmap.js
require.config({
    baseUrl: "js/",
    map: {
        "*": {"css": "css.min"}
    },
    paths: {
        "text": "text",
    	"lodash" : "lib/lodash.core.min",//工具包
        "rx" : "lib/rx",
        "my97":"lib/my97/WdatePicker",//日历控件
        "jquery": "jquery-1.11.3.min",//jquery
        "easyui":"lib/easyui/jquery.easyui.min",//easyui ，细节有修改
        "easyui.extend":"lib/easyui/jquery.easyui.base.extend",//基础扩展，包括语言包、官方gridedit、扁平树扩展 和requirejs结合修正
        "md5":"lib/md5",//md5加密脚本，仅供参考
        // "jquery.validate": "plus/jquery.validate",
        "jquery.extend": "plus/jquery.extend",//jquery基础扩展
        "easyvalidate.extend": "plus/easyvalidate.extend",//easyui验证扩展，包括各种验证规则
        "easygridEdit": "plus/easygridEdit.extend",//easyui gridedit方法扩展
        "param":"plus/param", //全局公用变量
        "addrLink" : "plus/addrLink",//省市区联动
        "pub":"plus/pub",//基于基础扩展写的公共处理脚本库
        "btnExt" : "plus/btnExt",
         'editor': 'plus/editor',
        "btnSearch" : "plus/btnSearch",
        "readCard" : "plus/readCard",
        "tabPatientInfo":"app/tabPatientInfo",
        "tabPatientInfoComp" : "app/tabPatientInfoComp",
        // "print":"plus/print",
        "layer.min":"lib/layer/layer.min",//layer弹窗控件
        "moment":"lib/moment.min",//daterangepicker
        "daterangepicker":"lib/daterangepicker/daterangepicker",//daterangepicker
        "pinyin_dict":"lib/pinyinjs/dict/pinyin_dict",//拼音库
        "pinyin":"lib/pinyinjs/pinyinUtil",//拼音库支持工具
        "template":"lib/template",//art template
        "hotkeys" : "lib/hotkeys",//快捷键注册库
        "echarts":"lib/echarts/echarts",//echarts完整库
        "echartsMap":"lib/echarts/echarts-map",//echarts扩展地图
        "chinaMap":"lib/echarts/china",//echarts中国地图
        "WebUploader":"lib/webuploader/webuploader.min",//百度上传控件
        "myupload":"lib/webuploader/MyAmdWebUpload",//上传控件扩展amd版，上传require此文件
        "fancybox":"lib/fancybox/jquery.fancybox-1.3.4.pack",//fancybox弹窗控件
        "baidueditor": "lib/ueditor1.4.3.3-utf8-jsp/myue",//ue编辑器
        "bdlang": "lib/ueditor1.4.3.3-utf8-jsp/lang/zh-cn/zh-cn",//ue编辑器
        "zeroclipboard": "lib/ueditor1.4.3.3-utf8-jsp/third-party/zeroclipboard/ZeroClipboard.min"//ue编辑器
        // "hightlight": "lib/SyntaxHighlighter/brush"//代码高亮
    },
    shim:{
        "lodash":["jquery"],
        "jquery.validate":["jquery"],
        "layer.min":["jquery"],
        "fancybox":["jquery"],
        "btnExt" :["jquery"],
        "btnSearch" : ["jquery","easyui"],
        "tabPatientInfo" :  ["btnExt","btnSearch"],
        "tabPatientInfoComp" : ["jquery","easyui"],
        // "hightlight":["jquery"],
        "jquery.extend":["param","layer.min","my97"],//依赖这些基础配置
        // "jquery.extend":["param","layer.min"],//依赖这些基础配置
        "easyui":["jquery"],
        "daterangepicker": {deps: ["jquery", "moment"]},
        // "jquery.jdirk":["jquery"],
        "easyui.extend":["easyui"],
        "easyvalidate.extend":["easyui"],
        "easygridEdit":["easyui"],
        "bootstrap":["jquery"],
        "pinyin": ["pinyin_dict"],
        // "template": {exports: "template"},
        "chinaMap":["echarts","echartsMap"],
        "pub":["jquery.extend","easyui.extend","easyvalidate.extend","template","moment","daterangepicker"],//依赖
        "baidueditor": {deps: ["lib/ueditor1.4.3.3-utf8-jsp/ueditor.config", "css!lib/ueditor1.4.3.3-utf8-jsp/themes/default/css/ueditor"]},
        "bdlang":{deps: ["baidueditor"]}
    }
});

require(["layer.min","pub"],function(){

});
