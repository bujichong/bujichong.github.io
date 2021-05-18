define(['zrender','lodash','template','./temSheetZ/point','./temSheetZ/trans'],function (zrender,_,template,point,trans) {
  var validInfo = {
    t : {
      valid : 'rangeNum[35,42,1]',
      msg : '35-42之间最多一位小数',
      opt : ',precision:1'
    },
    pc : {
      valid : 'rangeNum[35,42,1]',
      msg : '35-42之间最多一位小数',
      opt : ',precision:1'
    },
    h : {
      valid : 'rangeNum[1,300,0]',
      msg : '1-300的整数',
      opt : ''
    },
    p : {
      valid : 'rangeNum[1,500,0]',
      msg : '1-500的整数',
      opt : ''
    },
    pa : {
      valid : 'rangeNum[0,10,0]',
      msg : '1-10的整数',
      opt : ''
    }
  };

  template.helper('typeValid', function (type,attr) {
    return validInfo[type][attr];
  });


  // window.console&&console.log(point,trans);
    var back  ={
    init : function () {//入口
      var me = this;
      // window.console&&console.log('init');
      me.drawPaper();//渲染画布
      me.renderMonth();//渲染周日期
      me.potEdit();//点编辑
    },
    drawPaper : function (){
      var me = this;
      me.paper = zrender.init(document.getElementById('main'));



      me.paper.on('click',function (e){
        window.console&&console.log(e);
        if(!e.target.style.canclick){//zlevel 11为 点 所在图层
          me.hideDotPop();
        }
        // window.console&&console.log(e.target);
      });
      $('#btn-clear').click(function (){
        me.clearSheetData();
      });
      // me.drawOne(me.lineA);
      // me.drawOne(me.lineB);
    },
    $zr : {
      table :function(o){
        var zr = back.paper;
        var tableGroup = new zrender.Group();
        var w = o.w,h = o.h;
        for (var i = 0; i < o.row; i++) {
            var y = i*h;
            for (var j = 0; j < o.col; j++) {
                var x = j*w;
                var cw = w;
                if(o.type=='fromPos'){
                    x = x-20;
                    if(j == 0){
                        x = 0;
                        cw = w-20;
                    }
                }
                if(o.text){
                    // window.console&&console.log(i,j,o.text[i][j]);
                    o.style.text = o.text[i][j];
                }
                var r = new zrender.Rect({
                    style : o.style,
                    shape: {
                        x: x,
                        y: y,
                        width: cw,
                        height: h
                    },
                    zlevel : o.zlevel || 0,
                    onmouseover : function (e){
                      o.onmouseover&&o.onmouseover(e);
                    },
                    onmouseout : function (e){
                      o.onmouseout&&o.onmouseout(e);
                    }
                });
                (function (i,j){
                  r.on('click',function (e){
                    o.click&&o.click(e,i,j);
                  })
                })(i,j);

                tableGroup.add(r);
            }
        }
        tableGroup.attr('position', [o.pos.x+0.5,o.pos.y+0.5]);
        zr.add(tableGroup);
      },
      line : function (o){
        var zr = back.paper;
        var o = $.extend({
            pos : {x:0,y: 0}
        },o||{});
        var lineGroup = new zrender.Group();
        for (var i = 0; i < o.repeat; i++) {
            var x1 = o.x,
                x2 = o.x,
                y1 = o.y,
                y2 = o.y;
            if(o.x2){x2 = o.x2};
            if(o.y2){y2 = o.y2};
            if(o.h){
                x1 = x2 = o.x+ o.foot*i;
                y2 = o.y + o.h
            };
            if(o.w){
                x2 = o.x + o.w;
                y1 = y2 = o.y+ o.foot*i;
            };
            if(o.mode=='x'){
              x1 = o.x+ o.foot*i;
              x2 = o.x2+ o.foot*i;
              y2 = o.y2;
              window.console&&console.log(o,x1,x2,y1,y2);
            };
            if(o.mode=='y'){
              x2 = o.x2;
              y1 = o.y+ o.foot*i;
              y2 = o.y2+ o.foot*i;
            };
            var line= new zrender.Line({
                zlevel : o.zlevel?o.zlevel:0,
                style : o.style,
                shape: {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2
                }
            });
            lineGroup.add(line);
        }
        lineGroup.attr('position', [o.pos.x+0.5,o.pos.y+0.5]);
        zr.add(lineGroup);
      },
      pLine : function (o){
        var zr = back.paper;
        var o = $.extend({
          zlevel :0,
          pos : {x:100,y:115}
      },o||{});
        var pLineGroup = new zrender.Group();
        var pLine = new zrender.Polyline({
            style : o.style,
            zlevel : o.zlevel,
            shape : {
                points : o.points
            }
        });
        pLineGroup.add(pLine);
        pLineGroup.attr('position', [o.pos.x,o.pos.y]);
        zr.add(pLineGroup);
      },
      circle : function (o){
        var zr = back.paper;
        var o = $.extend({
          zlevel :0,
          pos : {x:100,y:115}
      },o||{});
        var circleGroup = new zrender.Group();
        var circle = new zrender.Circle({
            style : o.style,
            zlevel : o.zlevel,
            rectHover : true,
            shape : {
                cx : o.cx,
                cy : o.cy,
                r : o.r
            }
        });
        circle.on('click',function (e){
            o.click(e);
        });
        circleGroup.add(circle);
        circleGroup.attr('position', [o.pos.x+0.5,o.pos.y+0.5]);
        zr.add(circleGroup);
        return circleGroup;
      },
      image : function (o){
        var zr = back.paper;
        var o = $.extend({
          zlevel :0,
          pos : {x:100,y:115}
      },o||{});
        var imageGroup = new zrender.Group();
        var image = new zrender.Image({
            style : {
                x : o.x-Math.floor(o.width/2),
                y : o.y-Math.floor(o.width/2),
                width : o.width,height:o.height,
                image : o.image,
                canclick : o.canclick
            },
            rectHover : true,
            zlevel : o.zlevel,
            onmouseover : function (e){
              o.onmouseover&&o.onmouseover(e);
            },
            onmouseout : function (e){
              o.onmouseout&&o.onmouseout(e);
            }
        });
        image.on('click',function (e){
          o.click&&o.click(e);
        });
        imageGroup.add(image);
        imageGroup.attr('position', [o.pos.x,o.pos.y]);
        zr.add(imageGroup);
        return imageGroup;
      },
      text :function (o) {
        var zr = back.paper;
        var o = $.extend({
          color : 'red',
          text : '',
          zlevel : 0,
          relative : false
      },o||{});
        var group = new zrender.Group();
        var tLen = o.text.length;
        for (var i = 0; i < tLen; i++) {
            var text = new zrender.Text({
                zlevel : o.zlevel,
                style: {
                    text: o.text.charAt(i),
                    fontSize: 12,
                    textFill: o.color
                }
            });
            var y = 14 * i;
            text.attr('position', [0, y]);
            group.add(text);
        }
        if(o.relative){o.x = 100+o.x,o.y =115+o.y;}
        group.attr('position', [o.x, o.y]);
        zr.add(group);
        return group;
      }
    },
    renderArea : function (){
      var me =this;
      var $zr = me.$zr;
      me.datesTxt.unshift('日　　期');
      // window.console&&console.log(me.datesTxt);
      var tableA = {//第一行(日期)
          type : 'fromPos',
          w : 120,
          h : 25,
          row : 1,
          col : 8,
          pos : {x:0,y:0},
          text : [
              me.datesTxt
              // ['日　　期','2019-07-10','07-11','07-12','07-13','07-14','07-15','07-16']
          ],
          style : {fill:'transparent',stroke:'#000',lineWidth:1}
          // ,onmouseover : function (e){
          //   if(e.target.style.text=='日　　期'){return;}
          //   // window.console&&console.log(e);
          //   e.target.attr('style',{
          //     textFill : '#ff6a00',
          //     fill : '#fff3e1'
          //   });
          // },
          // onmouseout : function (e){
          //   e.target.attr('style',{
          //     textFill : '#000',
          //     fill : 'transparent'
          //   });
          // },
          // click : function (e,i,j){
          //   if(j==0){return;}//标题 日期 无点击事件
          //   me.popSheetEdit(j-1);//点击编辑
          // }
      }

      var tableA2 = {//前二、三行(住院天数、术后天数)
          type : 'fromPos',
          w : 120,
          h : 25,
          row : 2,
          col : 8,
          pos : {x:0,y:25},
          text : [
              me.ohterV.inpDay.data,me.ohterV.surgeryDay.data
              // ['住院天数','1','2','3','4','5','6','7'],
              // ['术后天数','2','3','','','','','']
          ],
          style : {fill:'transparent',stroke:'#000',lineWidth:1}
      }

      var tableBL = {//四、五行(时间标题)
          type : 'fromPos',
          w : 120,
          h : 20,
          row : 2,
          col : 1,
          pos : {x:0,y:75},
          text : [
              ['时　　间'],
              ['脉搏　　体温']
          ],
          style : {fill:'transparent',stroke:'#000',lineWidth:1}
      }

      var tableBR = {//四、五行(时间内容)
          w : 20,
          h : 20,
          row : 2,
          col : 42,
          pos : {x:100,y:75},
          text : [
              ['4','8','12','16','20','24','4','8','12','16','20','24','4','8','12','16','20','24','4','8','12','16','20','24','4','8','12','16','20','24','4','8','12','16','20','24','4','8','12','16','20','24'],
              []
          ],
          style : {fill:'transparent',stroke:'#000',lineWidth:1}
      }

      var tableC = {//右侧描点绘制格子区
          w : 20,
          h : 20,
          row : 40,
          col : 42,
          pos : {x:100,y:115},
          style : {fill:'transparent',stroke:'#c9c9c9',lineWidth:1}
      }

      var tableD = {//呼吸行
          w : 20,
          h : 35,
          row : 1,
          col : 42,
          pos : {x:100,y:915},
          text : [me.b.data],
          style : {fill:'transparent',textFill:'red',stroke:'#000',lineWidth:1}
      }

      var tableE = {//末尾八行标题列
        type : 'fromPos',
        w : 120,
        h : 35,
        row : 2,
        col : 1,
        pos : {x:0,y:915},
        text : [['呼吸(次/分)'],['血压(mmHg)']],
        style : {fill:'transparent',stroke:'#000',lineWidth:1,textAlign:'left',textOffset:[-44,0]}
      };

      var tableE2 = {//末尾八行标题列
        type : 'fromPos',
        w : 120,
        h : 25,
        row : 6,
        col : 1,
        pos : {x:0,y:985},
        text : me.otherTitle,
        // [['呼吸(次/分)'],['血压(mmHg)'],['大便(次)'],['体重(kg)'],['身高(cm)'],['过敏药物']]
        style : {fill:'transparent',stroke:'#000',lineWidth:1,textAlign:'left',textOffset:[-44,0]}
      };

      var tableF = {//血压行
          w : 40,
          h : 35,
          row : 1,
          col : 21,
          pos : {x:100,y:950},
          text : [me.bp.data],
          style : {fill:'transparent',stroke:'#000',lineWidth:1,textLineHeight:8}
      }


      var tableG = {//末尾6行(大便、身高、体重等等)
        // type : 'fromPos',
        w : 120,
        h : 25,
        row : 6,
        col : 7,
        pos : {x:100,y:985},
        text : [
            me.ohterV.weight.data,
            me.ohterV.height.data,
            me.ohterV.stool.data,
            me.ohterV.allergyMedication.data,
            me.ohterV.dynamic1.data,
            me.ohterV.dynamic2.data
        ],
        style : {fill:'#fff',stroke:'#000',lineWidth:1,textAlign:'left',textPosition: 'inside',textOffset:[-58,0]}
    };



      var lineA = {//绘图区域左侧两条黑色竖线(脉搏、体温)
          style : {stroke:'#000',lineWidth:1},
          x : 50,
          y : 95,
          h : 820,
          foot : 50,
          repeat : 2
      };

      var lineB = {//时间竖线
          style : {stroke:'#000',lineWidth:1},
          x : 100,
          y : 75,
          h : 40,
          foot : 20,
          repeat : 42
      };

      var lineC = {//绘图区域红色竖线
          style : {stroke:'red',lineWidth:1},
          x : 220,
          y : 75,
          h : 840,
          foot : 120,
          repeat : 7
      };

      var lineD = {//绘图区域灰色横虚线
          style : {stroke:'#c9c9c9',lineDash:[2,3],lineWidth:1},
          x : 100,
          y : 125,
          w : 840,
          foot : 20,
          repeat : 40
      };

      var lineE = {//绘图区域中间横红线
          style : {stroke:'red',lineWidth:1},
          x : 100,
          y : 565,
          w : 840,
          foot : 20,
          repeat : 1
      };

      var lineF = {//绘图区域中间横黑线
          style : {stroke:'#000',lineWidth:1},
          x : 100,
          y : 215,
          w : 840,
          foot : 100,
          repeat : 7
      };

      $zr.table(tableC);
      $zr.table(tableA);
      $zr.table(tableA2);
      $zr.table(tableBL);
      $zr.table(tableBR);
      $zr.table(tableD);
      $zr.table(tableE);
      $zr.table(tableE2);
      $zr.table(tableF);
      $zr.table(tableG);

      $zr.line(lineA);
      $zr.line(lineB);
      $zr.line(lineC);
      $zr.line(lineD);
      $zr.line(lineE);
      $zr.line(lineF);

      var drawL = new zrender.Image({
          style : {
              image : 'images/sheet/drawL2.png',
              x : 1,
              y : 120,
              width : 99,
              height : 799
          }

      });
      me.paper.add(drawL);

    },
    clearPaper : function (){
      var me = this;
      me.clearSheetData();//清除画布相关数据
    },
    getOneSheet : function(){
      var me = this;
      me.getData(function (){
        me.clearSheetData();//清除画布相关数据
        me.getVals();//设置各个值
        me.getDates();//设置日期
        me.renderOtherVals(me.ohterV);//渲染其他普通值(单日单字段)
        me.renderBloodPressure(me.bp);//血压
        me.renderArea();//渲染画布
        me.datePowerEdit();//添加日期编辑权限按钮
        me.transAndDrawPos(me.t);//体温
        me.transAndDrawPos(me.pc);//物理降温
        me.transAndDrawPos(me.h);//心率
        me.transAndDrawPos(me.p);//脉搏
        me.tryDrawPC();//体温-物理降温集
        me.tryDrawPH();//脉搏心率差
        me.transAndDrawPos(me.c);//注释

        me.transAndDrawPos(me.pa);//疼痛
        me.renderBreathe(me.b);//呼吸
      });
    },
    renderMonth : function(){
      var me = this;
      // if(!me.monthReady){
      var t = sTime;
      t.end = t.out || t.now;
      t.inD = t.entry.split(' ')[0];
      t.inStr = new Date(t.inD).getTime();
      t.endStr = new Date(t.end).getTime();
      t.l = Math.ceil((t.endStr + 100000 - t.inStr)/(3600*24*1000*7));// +100000，避免正好整除时 周数计算不正确
      me.nowM = t.l;
      var marr = [];
      for (var i = 1; i <= t.l; i++) {
        marr.push({value:i,text:'第'+i+'周'});
      }
      $('.drop-month').combobox({
        onChange : function (val) {
          me.nowM = val;
          me.getOneSheet();//更新sheet数据
        }
      });
      $('.drop-month').combobox('loadData',marr).combobox('setValue',t.l);
      // me.monthReady = true;
      // }
    },
    // monthReady : false,//是否已加载周数据
    nowM :0,//当前第几周
    dates : [],//sheet日期数组
    datesTxt : [],//填写表格的日期
    data : null,//暂存返回data
    paper : null,
    // date : '',//暂存日期 如： 2018-12-29
    paperW : 840, paperH : 800,
    c : {
      title : '注释',
      type : 'c',
      p:[],
      pos : []//缓存坐标
    },
    t : {//体温
      title : '体温',
      type : 't',
      p : [],
      pos : []//缓存坐标
    },
    p : {//脉搏
      title : '脉搏',//标题文案
      type : 'p',
      p : [],
      pos : []//缓存坐标
    },
    h : {//心率
      title : '心率',//标题文案
      type : 'h',
      p : [],
      pos : []//缓存坐标
    },
    ph : {//脉搏心率差
      type : 'ph',
      p : [],
      ones : []
    },
    pc : {//物理降温值
      title : '物理降温',
      type : 'pc',
      p : [],
      pos : []//缓存坐标
    },
    pch : {//体温-物理降温集
      type : 'pch',
      p : [],
      ones : []
    },
    pa : {//疼痛
      title : '疼痛',//标题文案
      type : 'pa',
      p : [],
      pos : []//缓存坐标
    },
    b : {//呼吸
      base:[],
      data :[]
    },
    bp : {//血压
      base:[],
      data :[]
    },
    otherTitle : [],
    ohterV : {//其他普通字段
      inpDay : {
        type :'fromPos',
        title : '住院天数',
        prefix : '',
        suffix : '',
        data : []
      },
      surgeryDay : {
        type :'fromPos',
        title : '术后天数',
        prefix : '',
        suffix : '',
        data : []
      },
      weight : {
        title : '体重(kg)',
        prefix : '',
        suffix : '',
        data : []
      },
      height : {
        title : '身高(cm)',
        prefix : '',
        suffix : '',
        data : []
      },
      stool : {
        title : '大便(次)',
        prefix : '',
        suffix : '',
        data : []
      },
      allergyMedication : {
        title : '过敏药物',
        prefix : '',
        suffix : '',
        data : []
      },
      dynamic1 : {
        type : 'dynamic',
        field : 'dynamicFiled1',
        prefix : '',
        suffix : '',
        data : []
      },
      dynamic2 : {
        type : 'dynamic',
        field : 'dynamicFiled2',
        prefix : '',
        suffix : '',
        data : []
      }
    },
    m : 0,
    getData : function (callback){
      var me = this;
      var url = ['sheet3.js','sheet2.js','sheet.js'];
      $ajax.post({
        url : 'json/'+url[me.m%3],
        // data : {numberOfWeek:me.nowM},
        success : function (rst) {
          me.data = rst.data;
          me.m++;
          callback();
        }
      });
    },
    clearSheetData :function(){
      var me = this;
      me.paper.clear();
      me.c.pos = [];
      me.t.pos = [];
      me.p.pos = [];
      me.h.pos = [];
      me.ph.pos = [];
      me.ph.ones = [];
      me.pc.pos = [];
      me.pch.pos = [];
      me.pch.ones = [];
      me.pa.pos = [];
      me.b.data = [];
      me.bp.data = [];
      me.otherTitle = [];
      me.ohterV.inpDay.data = [];
      me.ohterV.surgeryDay.data = [];
      me.ohterV.weight.data = [];
      me.ohterV.height.data = [];
      me.ohterV.stool.data = [];
      me.ohterV.allergyMedication.data = [];
      me.ohterV.dynamic1.data = [];
      me.ohterV.dynamic2.data = [];

      var wrapR = new zrender.Rect({
        style : {fill:'#fff',stroke:'#000',lineWidth:1},
        shape: {
            x: 0.5,
            y: 0.5,
            width: 940,
            height: 1135
        }
    });

    me.paper.add(wrapR);//重绘外框

    },
    getVals : function (){//组装体温数据
      var me = this;
      var r = me.data.record;
      var commentArr = [],//注释
          tempArr = [],//体温
          pulseArr = [],//脉搏
          heartRateArr = [],//心率
          phArr = [],//脉搏心率差集
          pcArr = [],//物理降温
          pchArr = [],//体温-物理降温集
          paArr = [],//疼痛
          breatheArr = [],//呼吸
          bloodPressureArr = [];//血压
      $.each(r,function (i,v){
        $.each(v.temperature,function (k,w){
          var num = i*6+k*1;
          var pcv = v.physicalCooling[k];//物理降温值
          w.num = num;
          w.pc = pcv;
          tempArr.push(w);
          if(pcv){
            pcArr.push({num:num,value:pcv,temV:w.value,temT:w.name});//物理降温值
            w.value&&pchArr.push({num:num,v1:w.value,v2:pcv});//体温-物理降温集
          }
        });
        var hv = v.heartRate;
        $.each(v.pulse,function (k,w){
          var num = i*6+k*1;
          pulseArr.push({num:num,value:w});

          if(v.heartRate[k]){//如果点 有心率值，取心率自己值，标为个性点
            heartRateArr.push({num:num,value:v.heartRate[k],self:1});
          }else{//如果点心率无值，取脉搏值为点当前心率值
            heartRateArr.push({num:num,value:w,self:0});
          }
          // window.console && console.log(hv[k],w);
          if(hv[k]&&w&&hv[k]!==w){//如果心率和脉搏有值且值不同，则加入
            phArr.push({num:num,v1:w,v2:hv[k]});
          }
        });

        $.each(v.formComment,function (k,w){
          commentArr.push({num:i*6+k*1,value:w})
        });
        // $.each(v.heartRate,function (k,w){
        //   heartRateArr.push({num:i*6+k*1,value:w})
        // });
        $.each(v.painScore,function (k,w){
          paArr.push({num:i*6+k*1,value:w})
        });
        breatheArr.push(v.breathe);
        bloodPressureArr.push(v.bloodPressure);
      });

      // window.console&&console.log('注释','c.p',commentArr);
      // window.console&&console.log('体温','t.p ',tempArr);
      // window.console&&console.log('脉搏','p.p',pulseArr);
      // window.console&&console.log('心率','ph.p',heartRateArr);
      // window.console&&console.log('心率脉搏差','ph.p',phArr);
      // window.console&&console.log('物理降温','pc.p',pcArr);
      // window.console&&console.log('体温-物理降温集','pch.p',pchArr);
      // window.console&&console.log('呼吸','b.base',breatheArr);
      // window.console&&console.log('疼痛','pa.p',paArr);
      // window.console&&console.log('血压','bp',bloodPressureArr);
      me.c.p = commentArr;//注释
      me.t.p = tempArr;//体温
      me.p.p = pulseArr;//脉搏
      me.h.p = heartRateArr;//心率
      me.ph.p = phArr;//心率脉搏差
      me.pc.p = pcArr;//物理降温
      me.pch.p = pchArr;//体温-物理降温集
      me.b.base = breatheArr;//呼吸
      me.pa.p = paArr;//疼痛
      me.bp.base = bloodPressureArr;//血压
    },
    getDates :  function (){//设置日期
      var me = this;
      // window.console&&console.log(me.data);
      var nowDate = me.data.record[0].recordDate.split(' ')[0];//取记录的第一条为起始时间
      var fDate = new Date(nowDate).getTime();//转为时间戳
      var dates = [],datesB = [];
      for (var index = 1; index < 7; index++) {//得出剩余6天日期
        fDate += 86400000;
        var d = $.fmtDate('yyyy-MM-dd',fDate);
        dates.push(d);
        datesB.push(d);
      }
      var ts = nowDate.split('-');//对比值，如： [“2018”,“11”,“29”]
      $.each(dates,function (i,v){
        // if(i ==0) {dates[0] = ts[1]+'-'+ts[2];return;}
        var vs = v.split('-');
        if(ts[1]!==vs[1]){//如果月不相同
          if(ts[0]!==vs[0]){//如果年不相同
            ts[0] = vs[0];//更新年对比值
            ts[1] = vs[1] //更新月对比值
            //dates[i] = dates[i];
            return;
          }
          dates[i] = vs[1]+'-'+vs[2];//返回 月-日
          ts[1] = vs[1];//更新月对比值
        }else{
          dates[i] = vs[2];//返回 日
        }
      });
      dates.unshift(nowDate);//首位插入当前日期
      datesB.unshift(nowDate);//首位插入当前日期
      me.dates = datesB;
      me.datesTxt = dates;
      // dates  ["11-29", "30", "12-01", "02", "03", "04", "05"]
      // dates  ["12-29", "30", "31", "2019-01-01", "02", "03", "04"]
      // var trDatesHtml = '<th colspan="2">日　　期</th>';
    },
    datePowerEdit : function(){
      var me = this;
      var endDate = sTime.out || sTime.now;
      $.each(me.dates,function (i,v){
        var dataLong = new Date(endDate).getTime() - new Date(v).getTime();//可编辑日期 <= (出院日期 || 当前日期)
        var canEdit= dataLong>=0&&(power=='all' || v==sTime.now);//编辑权限： power值 =='all'? 可全部编辑 : 只可编辑当天
        // window.console&&console.log(canEdit,dataLong);
        if(canEdit){
          me.$zr.image({
            x : 110+i*120,
            y : 10,
            width: 15,height:15,
            image : 'images/sheet/head-edit.png',
            pos : {x : 100,y:0},
            onmouseover : function (e){
              // window.console&&console.log(e);
              e.target.attr('style',{
                image : 'images/sheet/head-edit-on.png'
              });
            },
            onmouseout : function (e){
              e.target.attr('style',{
                image : 'images/sheet/head-edit.png'
              });
            },
            click : function (){
              // window.console&&console.log(i);
              me.popSheetEdit(i);//点击编辑
            }
          });
        }
      });
    },
    popSheetEdit : function (key){
      var me = this;
      // $('.one-date-edit').click(function (){
      //   var recordDate = $(this).attr('rel');
        var recordDate = me.dates[key];//获取当前日期
        $pop.iframePop({
          title : recordDate,
          content : pageUrl.oneDate+'?recordDate='+recordDate+'&inpNumber='+inpNumberVar,
          area : ['850px','630px'],
          sureback : function () {
            me.getOneSheet();
          }
        });
      // });
    },
    transAndDrawPos : function (one){//转换并描点
      var me = this;
      one.pos = [];
      var p = one.p;
      $.each(p,function (i,v){
        var pot = trans[one.type](v);
        pot.v&&one.pos.push(pot);
      });
      if(one.type=='p'){//脉搏
        var nPos = _.intersectionBy(me.p.pos,me.t.pos,'xy');//选出脉搏和心率的交集
        $.each(nPos,function (i,v) {
          $.each(me.p.pos,function (j,w) {//改变交集里，脉搏的画点类型
            if(w.n == v.n){
              w.t = 'ring';
            }
          });
        });
      }
      // window.console&&console.log(one);
      me.drawOne(one);
    },
    tryDrawPH : function (){//描脉搏心率差
      var me = this;
      var ph = me.ph;
      // window.console&&console.log(ph);
      if(ph.p.length){//如果有差异值
        $.each(ph.p,function (i,v){//每个值一条虚线
          var pot = trans.ph(v);
          var one = {
            type:'ph',
            pos:[
              {n:pot.n,v:pot.v1,x:pot.x1+0.5,y:pot.y1,xy:pot.xy1},
              {n:pot.n,v:pot.v2,x:pot.x2+0.5,y:pot.y2,xy:pot.xy2}
          ]};
          ph.ones.push(one);
          me.drawLine(one);
        });
      }
      // window.console&&console.log(ph.ones);
    },
    tryDrawPC : function (){//体温-物理降温集
      var me = this;
      var pch = me.pch;
      // window.console&&console.log(pch);
      if(pch.p.length){//如果有差异值
        $.each(pch.p,function (i,v){//每个值一条虚线
          var pot = trans.pch(v);
          var one = {
            type:'pch',
            pos:[
              {n:pot.n,v:pot.v1,x:pot.x1+0.5,y:pot.y1,xy:pot.xy1},
              {n:pot.n,v:pot.v2,x:pot.x2+0.5,y:pot.y2,xy:pot.xy2}
            ]};
            pch.ones.push(one);
            me.drawLine(one);
        });
      }
      // window.console&&console.log(ph.ones);
    },
    renderComment : function(pos){//渲染注释
      var me = this;
      // window.console && console.log(pos);
      // var txtHtml = '';
      $.each(pos,function (i,v) {
        me.$zr.text({
          x : v.x,
          y : v.y,
          text : v.v,
          relative : true
        });
        // $('#textWrap').append('<span class="s-sheetTxt" style="position:absolute;left:'+(v.x-4)+'px;top:'+v.y+'px;">'+v.v+'</span>');
      });
      // $('#textWrap').append(txtHtml);
    },
    renderTemp35 : function(pos){//体温不升
      var me = this;
      me.renderComment([{x:pos.x-5,y:pos.y+3,v:'不升'}]);
    },
    renderBreathe : function (b){ //渲染呼吸
      // window.console&&console.log(b);
      //呼吸(次/分)
      // var breatheHtml = '<th class="th-f" colspan="2">呼吸(次/分)</th>';
      // b.data.push('呼吸(次/分)');
      for (i = 0; i <7; i++) {
        var v = b.base[i];
        // if(v){
          var k = 0;
          for (var j = 1; j < 7; j++) {
            b.data.push(k%2?('\n'+v[j]):(v[j]+'\n'));
            k++;
            // if(v[j]){
            //   breatheHtml += '<td><span class="'+(k%2?'s-even':'s-odd')+'">'+v[j]+'</span></td>';
            //   k++;
            // }else{
            //   breatheHtml += '<td></td>';
            // }
          }
        // }else{
        //   breatheHtml += '<td></td><td></td><td></td><td></td><td></td><td></td>';
        // }
      }
      // $('.tr-breath').html(breatheHtml);
      // window.console&&console.log(b.data);
    },
    renderBloodPressure : function (bp){//渲染血压
      var me = this;
      var prelineArr = [];
      for (var i = 0; i <7; i++) {
        var v = bp.base[i];
        // if(v){
          for (var j = 1; j < 4; j++) {
            var vj = v[j];
            if(vj&&vj.diastolic){
              var sr = i*3+j-1;
              // prelineArr.push(i*7+j);
              prelineArr.push({
                style : {stroke:'#000',lineWidth:1},
                // zlevel : 5,
                x:133+sr*40,
                y : 962,
                x2 : 105+sr*40,
                y2 : 974,
                // mode : 'x',
                repeat : 1
              });
              bp.data.push(vj.diastolic +'　\n'+'　　'+'\n　'+vj.systolic);
            }else{
              bp.data.push('');
            }
          }
      }
      for (var k = 0; k <prelineArr.length; k++) {
        me.$zr.line(prelineArr[k]);
      }
    },
    renderOtherVals : function (vals){
      var me = this;
      var  r = me.data.record;
      // window.console&&console.log(vals,r);
      $.each(vals,function (k,v){
        // window.console && console.log(v);
        if(v.type=='fromPos'){
          v.data.push(v.title);//表格从起点定位的标题也推入data中，住院天数，术后天数
        }else{
          if(v.type=='dynamic'){v.title = me.data[v.field]};
          me.otherTitle.push([v.title]);//标题推入 otherTitle 中
        };

        for (i = 0; i <7; i++) {
          var w = r[i];
          if(w){
            if(w[k]){
              v.data.push(v.prefix+w[k]+v.suffix);
              // vhtml += '<td colspan="6">'+v.prefix+w[k]+v.suffix+'</td>';
            }else{
              v.data.push('');
              // vhtml += '<td colspan="6"></td>';
            }
          }else{
            v.data.push('');
            // vhtml += '<td colspan="6"></td>';
          }
        }
        // window.console&&console.log(k,v.data);
        // $('.tr-'+k).html(vhtml);
      });
    },
    drawOne : function (one){
        var me = this;
        if(one.type==='c'){
          me.renderComment(one.pos);
          return;
        }
        var pos = one.pos;
        // window.console && console.log(one);
        if(one.type!=='pc'){//物理降温点不相连
          me.drawLine(one);
        }
        $.each(pos,function (i,v){
          var st = null;
          var posOne = me.drawPot(v,one);
          // window.console&&console.log(v);
          if(!posOne){return;}
          // posOne.data({p:v}).hover(function (e,x,y){//鼠标经过离开
          //   var p = this.data('p');
          //   me.pot.p = p;
          //   me.pot.one = one;
          //   st = setTimeout(function() {
          //     me.showDotPop(x,y);
          //   },300);
          // },function(){
          //   clearTimeout(st);
          // });
        });
        // $(document).on('click',function (e){
        //   var $t = $(e.target);
        //   if(e.target.nodeName=='circle' || e.target.nodeName==='image'){return;}
        //   if(!$t.hasClass('dotPopBox') && !$t.parents('.dotPopBox').length){
        //     me.hideDotPop();
        //   }
        // });
    },
    pot : { p : null ,one : null},
    getPotTime : function(){//获得当前点的时间
      var me = this;
      var p = me.pot.p;
      return me.dates[Math.floor((p.n-1)/6)]+' '+('0'+((p.n-1)%6+1)*4).substr(-2)+':00';
    },
    showDotPop : function (x,y){//显示当前点信息
      var me = this;
      me.pot.p.time = me.getPotTime();
      // window.console&&console.log(me.pot.p.time);
      var p = me.pot.p;
      var potType = me.pot.one.type;
      $(".pot-v-time").html(p.time);
      $(".pot-temp-t").html(p.tt);
      $(".pot-v-temp").html(p.v);
      $('.dotPopBox').css({top:y-40,left:x+10});
    },
    hideDotPop : function (){//隐藏当前点信息
      $('.dotPopBox').css({top:-800,left:-800});
    },
    potT : {
      p : 'pulse',
      h : 'heartRate',
      t : 'temperature',
      pc : 'physicalCooling',
      pa : 'painScore'
    },
    potEdit : function (){//编辑当前点
      var me = this;
      $('.btn-pot-edit').on('click',function (){
        // window.console && console.log(me.pot);
        me.hideDotPop();
        var potData = {//tem表单数据
          time : me.pot.p.time,
          value : me.pot.p.v,
          pc : me.pot.p.pc,
          n : me.pot.p.n,
          name : me.pot.p.tt,
          type : me.pot.one.type,
          valid :'rangeNum[34,42,1]'
        };
        var popH = (potData.type == 't'||potData.type == 'pc')?'220px':'195px';
        if(potData.type == 'pc'){//如果是编辑物理降温
          potData.name = me.pot.p.temT || '腋温';//解决体温点已被删除的问题
          potData.value = me.pot.p.temV;
          potData.pc = me.pot.p.v;
        }
        var editPop = $pop.popTemForm({
          title : '编辑'+potData.time+'的'+potData.name+'值',
          temId : 'potEditTem',
          temData : potData,
          area : ['350px',popH],
          onPop :function(){
            $('.txt-editVal').next('.numberbox').find('input').focus();
          },
          beforeSubmit : function(opt,$form,formData){
            // window.console && console.log(formData);
            var d = Math.floor((formData.n-1)/6);
            var s = (formData.n-1)%6+1;
            // window.console && console.log(formData.n,d,s);
            var sData = {record:[{recordDate:me.dates[d]}]};
            sData.inpNumber = inpNumberVar;
            // sData.record[d] = {recordDate:me.dates[d]};
            if(formData.type === 't' ||formData.type === 'pc'){
              sData.record[0].temperature = {};
              sData.record[0].temperature[s] = {};
              sData.record[0].temperature[s].name = formData.name;
              sData.record[0].temperature[s].value = formData.value;
              sData.record[0].physicalCooling = {};
              sData.record[0].physicalCooling[s] = formData.pc;
            }else{
              sData.record[0][me.potT[formData.type]] = {};
              sData.record[0][me.potT[formData.type]][s] = formData.value;
            }
            // window.console && console.log(sData);
            $ajax.post({
              url : 'json/true.js',
              data : sData,
              jsonData : true,
              tip: '确定提交此更改？',
              success : function (rst) {
                me.getOneSheet();//更新sheet数据
                $pop.close(editPop);
              }
            });
            ///ui/temperature/aemrTemperature/saveOrUpdate
          },
          afterSubmit : function(rst){
            // console.log(rst);
          }
        });
      });

      $('.btn-pot-del').on('click',function (){
        // window.console && console.log(me.pot);
        var d = Math.floor((me.pot.p.n-1)/6);
        var s = (me.pot.p.n-1)%6+1;
        var type = me.pot.one.type;
        var sData = {record:[{recordDate:me.dates[d]}]};
        var tipMsg = '确定删除此点记录？'
        sData.inpNumber = inpNumberVar;
        sData.record[0][me.potT[type]] = {};
        if(type === 't'){
          sData.record[0].temperature[s] = {name:'腋温',value:''};
          if(me.pot.p.pc){//如果存在物理降温值，连通物理降温值一起删除
            sData.record[0].physicalCooling = {};
            sData.record[0].physicalCooling[s] = '';
            tipMsg = '该温度有做物理降温处理，<b class="red">删除该温度会同时删除物理降温</b>，是否确认删除?';
          }
        }else{
          sData.record[0][me.potT[type]][s] = '';
        }
        $ajax.post({
          url : '/json/true.js',
          data : sData,
          jsonData : true,
          tip: tipMsg,
          success : function (rst) {
            me.getOneSheet();//更新sheet数据
          }
        });

        me.hideDotPop();
        // me.drawLine(one);//重新划线
        });
    },
    drawPot : function (pot,one){
      var me = this;
      var r = null;
      var pt = point[one.type];
      // window.console&&console.log(pt);
      // window.console&&console.log(pot,one);
      if(one.type=='t'&&pot.y>=700){return;}//体温类型，不升时不描点

      if(pot.t=='image'){
          // var s = pt.image.size;
          // r =me.paper.image(pt.image.image,(pot.x-Math.floor(s[0]/2)), (pot.y-Math.floor(s[1]/2)),s[0],s[1]);
          r = me.$zr.image({
            x : pot.x,
            y : pot.y,
            // zlevel : 5,
            width : pt.image.size[0],height:pt.image.size[1],
            image : pt.image.image,
            canclick : true,
            click : function (e){
              window.console&&console.log(e.target);
              var cPos = $('#main').offset();
              me.pot.p = pot;
              me.pot.one = one;
              me.showDotPop(cPos.left+e.offsetX,cPos.top+e.offsetY);
            }
        });
      }
      // }else{
      if(pot.t=='circle'||pot.t=='ring'){
        // r = me.paper.circle(pot.x, pot.y, pt[pot.t].radius).attr(pt[pot.t]);
        r = me.$zr.circle({
          style : pt[pot.t],
          cx : pot.x,
          cy : pot.y,
          // zlevel : 5,
          r : pt[pot.t].radius,
          click : function (e){
            // window.console&&console.log(e.target);
            var cPos = $('#main').offset();
            me.pot.p = pot;
            me.pot.one = one;
            me.showDotPop(cPos.left+e.offsetX,cPos.top+e.offsetY);
          }
        });
      }
      return r;
    },
    drawLine : function (one){
      var me = this;
      var pos = one.pos;
      var posArr = [[]];
      var posNowI = 0;
      // var lStr = 'M';
      // window.console&&console.log(one,pos);
      if(pos.length){//有坐标值才划线
        // window.console && console.log(one);
        $.each(pos,function (i,v){
          // if(one.type=='t'&&v.y>=700){//体温低于35时
          //   lStr += ',M';
          //   me.renderTemp35(v);
          // }else if(v.tt=='断点'){//类型为断点
          //   lStr += ',M';
          // }else{
          //   lStr += v.xy+',L';
          // };
          if(one.type=='t'&&v.y>=700){//体温低于35时
            posNowI++;
            posArr[posNowI]=[];
            me.renderTemp35(v);
            return;
          }else if(v.tt=='断点'){//类型为断点
            posNowI++;
            posArr[posNowI]=[];
            return;
          }
          posArr[posNowI].push([v.x,v.y]);
        });
        // lStr = lStr.replace('L,','');
        $.each(posArr,function (i,v){
          me.$zr.pLine({
            style : point[one.type].line,
            points : v
          });
        })

      // window.console&&console.log(one,lStr);
        // me.paper.path(lStr).attr(point[one.type].line).toBack();
      }
    }
  };
  return back;
});
