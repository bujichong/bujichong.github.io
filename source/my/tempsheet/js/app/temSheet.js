define(['raphael','lodash','template','./temSheet/point','./temSheet/trans'],function (Raphael,_,template,point,trans) {
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
    // window.console && console.log(type,attr);
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
    getOneSheet : function(){
      var me = this;
      me.getData(function (){
        me.clearSheetData();//清除画布相关数据
        me.getVals();//设置各个值
        me.getDates();//设置日期
        me.transAndDrawPos(me.c);//注释
        me.transAndDrawPos(me.t);//体温
        me.transAndDrawPos(me.pc);//物理降温
        me.transAndDrawPos(me.h);//心率
        me.transAndDrawPos(me.p);//脉搏
        me.tryDrawPC();//体温-物理降温集
        me.tryDrawPH();//脉搏心率差

        me.transAndDrawPos(me.pa);//疼痛
        me.renderBreathe(me.b);//呼吸
        me.renderBloodPressure(me.bp);//血压
        me.renderOtherVals(me.ohterV);//渲染其他普通值(单日单字段)
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
    b : [],//呼吸
    bp : [],//血压
    ohterV : {//其他普通字段
      inpDay : {
        title : '住院天数',
        prefix : '',
        suffix : ''
      },
      surgeryDay : {
        title : '术后天数',
        prefix : '',
        suffix : ''
      },
      weight : {
        title : '体重(kg)',
        prefix : '',
        suffix : ''
      },
      height : {
        title : '身高(cm)',
        prefix : '',
        suffix : ''
      },
      stool : {
        title : '大便(次)',
        prefix : '',
        suffix : ''
      },
      allergyMedication : {
        title : '过敏药物',
        prefix : '',
        suffix : ''
      },
      dynamic1 : {
        type : 'dynamic',
        field : 'dynamicFiled1',
        prefix : '',
        suffix : ''
      },
      dynamic2 : {
        type : 'dynamic',
        field : 'dynamicFiled2',
        prefix : '',
        suffix : ''
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
      $('#textWrap').html('');//文字置空
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
      me.c.p = commentArr;//注释
      me.t.p = tempArr;//体温
      me.p.p = pulseArr;//脉搏
      me.h.p = heartRateArr;//心率
      me.ph.p = phArr;//心率脉搏差
      me.pc.p = pcArr;//物理降温
      me.pch.p = pchArr;//体温-物理降温集
      me.b = breatheArr;//呼吸
      me.pa.p = paArr;//疼痛
      me.bp = bloodPressureArr;//血压
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
      // window.console&&console.log(dates);
      // dates  ["11-29", "30", "12-01", "02", "03", "04", "05"]
      // dates  ["12-29", "30", "31", "2019-01-01", "02", "03", "04"]
      var trDatesHtml = '<th colspan="2">日　　期</th>';
      var endDate = sTime.out || sTime.now;
      $.each(dates,function (i,v){
        var canEdit = new Date(endDate).getTime() - new Date(datesB[i]).getTime();//可编辑日期 <= (出院日期 || 当前日期)
        var powerCls= canEdit>=0&&(power=='all' || datesB[i]==sTime.now)?' one-date-edit':'';//编辑权限： power值 =='all'? 可全部编辑 : 只可编辑当天
        trDatesHtml += '<td colspan="6"><div class="one-date'+powerCls+'" rel="'+datesB[i]+'">'+v+'</div></td>';
      });
      $('.tr-dates').html(trDatesHtml);
      $('.em-entryTime').html(me.data.entryTime);
      me.popSheetEdit();
    },
    popSheetEdit : function (){
      var me = this;
      $('.one-date-edit').click(function (){
        var recordDate = $(this).attr('rel');
        $pop.iframePop({
          title : recordDate,
          content : pageUrl.oneDate+'?recordDate='+recordDate+'&inpNumber='+inpNumberVar,
          area : ['850px','630px'],
          sureback : function () {
            me.getOneSheet();
          }
        });
      });
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
        // window.console && console.log('心率：',me.h.pos);
        // window.console && console.log('脉搏：',me.p.pos);
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
              {n:pot.n,v:pot.v1,x:pot.x1,y:pot.y1,xy:pot.xy1},
              {n:pot.n,v:pot.v2,x:pot.x2,y:pot.y2,xy:pot.xy2}
          ]};
          ph.ones.push(one);
          me.drawLine(one);
        });
      }
      // window.console&&console.log(ph.ones);
    },
    tryDrawPC : function (){//描脉搏心率差
      var me = this;
      var pch = me.pch;
      // window.console&&console.log(pch);
      if(pch.p.length){//如果有差异值
        $.each(pch.p,function (i,v){//每个值一条虚线
          var pot = trans.pch(v);
          var one = {
            type:'pch',
            pos:[
              {n:pot.n,v:pot.v1,x:pot.x1,y:pot.y1,xy:pot.xy1},
              {n:pot.n,v:pot.v2,x:pot.x2,y:pot.y2,xy:pot.xy2}
            ]};
            pch.ones.push(one);
            me.drawLine(one);
        });
      }
      // window.console&&console.log(ph.ones);
    },
    renderComment : function(pos){//渲染注释
      var me = this;
      // window.console && console.log(one);
      var txtHtml = '';
      $.each(pos,function (i,v) {
        $('#textWrap').append('<span class="s-sheetTxt" style="position:absolute;left:'+(v.x-4)+'px;top:'+v.y+'px;">'+v.v+'</span>');
      });
      $('#textWrap').append(txtHtml);
    },
    renderTemp35 : function(pos){//体温不升
      var me = this;
      me.renderComment([{x:pos.x-2,y:pos.y+5,v:'不升'}]);
    },
    renderBreathe : function (b){ //渲染呼吸
      // window.console&&console.log(b);
      var breatheHtml = '<th class="th-f" colspan="2">呼吸(次/分)</th>';
      for (i = 0; i <7; i++) {
        var v = b[i];
        if(v){
          var k = 0;
          for (var j = 1; j < 7; j++) {
            if(v[j]){
              breatheHtml += '<td><span class="'+(k%2?'s-even':'s-odd')+'">'+v[j]+'</span></td>';
              k++;
            }else{
              breatheHtml += '<td></td>';
            }
          }
        }else{
          breatheHtml += '<td></td><td></td><td></td><td></td><td></td><td></td>';
        }
      }
      $('.tr-breath').html(breatheHtml);
    },
    renderBloodPressure : function (bp){//渲染血压
      // window.console&&console.log(bp);
      var bpHtml = '<th class="th-f" colspan="2">血压(mmHg)</th>';
      for (i = 0; i <7; i++) {
        var v = bp[i];
        if(v){
          for (var j = 1; j < 4; j++) {
            var vj = v[j];
            if(vj&&vj.diastolic){
              bpHtml += '<td class="td-disy" colspan="2"><div class="one-disy"><img class="img-disy" src="images/sheet/disyline.png" alt="" /><span class="s-di">'+vj.diastolic+'</span><span class="s-sy">'+vj.systolic+'</span></div></td>';
            }else{
              bpHtml += '<td colspan="2"></td>';
            }
          }
        }else{
          bpHtml += '<td colspan="2"></td><td colspan="2"></td><td colspan="2"></td>';
        }

      }
      $('.tr-bloodPressure').html(bpHtml);

    },
    renderOtherVals : function (vals){
      var me = this;
      var  r = me.data.record;
      // window.console&&console.log(vals,r);
      $.each(vals,function (k,v){
        // window.console && console.log(v);
        if(v.type=='dynamic'){v.title = me.data[v.field]};
        var vhtml = '<th class="th-f" colspan="2"><span class="s-title">'+v.title+'</span></th>';
        for (i = 0; i <7; i++) {
          var w = r[i];
          if(w){
            if(w[k]){
              vhtml += '<td colspan="6">'+v.prefix+w[k]+v.suffix+'</td>';
            }else{
              vhtml += '<td colspan="6"></td>';
            }
          }else{
            vhtml += '<td colspan="6"></td>';
          }
        }
        // $.each(r,function (i,w){
        //   if(w[k]){
        //     vhtml += '<td colspan="6">'+v.prefix+w[k]+v.suffix+'</td>';
        //   }else{
        //     vhtml += '<td colspan="6"></td>';
        //   }
        // });
        $('.tr-'+k).html(vhtml);
      });
    },
    drawPaper : function (){
      var me = this;
      me.paper = Raphael("container", me.paperW, me.paperH);
      // me.drawOne(me.lineA);
      // me.drawOne(me.lineB);
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
          posOne.data({p:v}).hover(function (e,x,y){//鼠标经过离开
            var p = this.data('p');
            me.pot.p = p;
            me.pot.one = one;
            st = setTimeout(function() {
              me.showDotPop(x,y);
            },300);
          },function(){
            clearTimeout(st);
          });
        });
        $(document).on('click',function (e){
          var $t = $(e.target);
          if(e.target.nodeName=='circle' || e.target.nodeName==='image'){return;}
          if(!$t.hasClass('dotPopBox') && !$t.parents('.dotPopBox').length){
            me.hideDotPop();
          }
        });
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
          url : baseUrl + '/ui/temperature/aemrTemperature/saveOrUpdate',
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
        var s = pt.image.size;
        r =me.paper.image(pt.image.image,(pot.x-Math.floor(s[0]/2)), (pot.y-Math.floor(s[1]/2)),s[0],s[1]);
      }
      if(pot.t=='circle'||pot.t=='ring'){
        r = me.paper.circle(pot.x, pot.y, pt[pot.t].radius).attr(pt[pot.t]);
      }
      return r;
    },
    drawLine : function (one){
      var me = this;
      var pos = one.pos;
      var posArr = [];
      var lStr = 'M';
      // window.console&&console.log(one,pos);
      if(pos.length){//有坐标值才划线
        // window.console && console.log(one);
        $.each(pos,function (i,v){
          if(one.type=='t'&&v.y>=700){//体温低于35时
            lStr += ',M';
            me.renderTemp35(v);
          }else if(v.tt=='断点'){//类型为断点
            lStr += ',M';
          }else{
            lStr += v.xy+',L';
          };
          // posArr.push(v.xy);
        });
        lStr = lStr.replace('L,','');
      // window.console&&console.log(one,pos,lStr);
        me.paper.path(lStr).attr(point[one.type].line).toBack();
      }
    }
  };
  return back;
});
