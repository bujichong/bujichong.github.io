define(['raphael','./temSheet/point','./temSheet/trans'],function (Raphael,point,trans) {
  // window.console&&console.log(point,trans);
    var back  ={
    init : function () {//入口
      var me = this;
      // window.console&&console.log($.rules);
      window.console&&console.log('init');
      me.drawPaper();
      me.getData(function (){
        me.getVals();//设置各个值
        me.getDates();//设置日期
        me.transAndDrawPos(me.t);//体温
        me.transAndDrawPos(me.h);//心率
        me.transAndDrawPos(me.p);//脉搏
        me.tryDrawPH(me.ph);//脉搏心率差
        me.renderBreathe(me.b);//呼吸
        me.renderBloodPressure(me.bp);//血压
        me.renderOtherVals(me.ohterV);//渲染其他普通值(单日单字段)
        me.potEdit();//点编辑
      });
    },
    data : null,//暂存返回data
    paper : null,
    // date : '',//暂存日期 如： 2018-12-29
    paperW : 840, paperH : 800,
    t : {//体温
      title : '体温',
      type : 't',
      p : [],
      pos : [],//缓存坐标
      line : null//缓存线对象
    },
    p : {//脉搏
      title : '脉搏',//标题文案
      type : 'p',
      p : [],
      pos : [],//缓存坐标
      line : null//缓存线对象
    },
    h : {//心率
      title : '心率',//标题文案
      type : 'h',
      p : [],
      pos : [],//缓存坐标
      line : null//缓存线对象
    },
    ph : {//脉搏心率差
      type : 'ph',
      p : [],
      ones : []
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
      stoolFrequency : {
        title : '大便次数(次)',
        prefix : '',
        suffix : ''
      },
    },
    getData : function (callback){
      var me = this;
      $ajax.post('json/sheet1.js').done(function (res){
        // window.console&&console.log(res);
        if(res.code=='200'){
          me.data = res.data;
          callback();
        }
      });
    },
    getVals : function (){//组装体温数据
      var me = this;
      var r = me.data.record;
      var tempArr = [],//体温
          pulseArr = [],//脉搏
          heartRateArr = [],//心率
          phArr = [],//脉搏心率差集
          breatheArr = [],//呼吸
          bloodPressureArr = []//血压
      $.each(r,function (i,v){
        $.each(v.temperature,function (k,w){
          w.num = i*6+k*1;
          tempArr.push(w);
        });
        var hv = v.heartRate;
        $.each(v.pulse,function (k,w){
          var num = i*6+k*1;
          pulseArr.push({num:num,value:w});
          if(hv[k]!==w){//如果心率和脉搏值不同，则加入
            phArr.push({num:num,v1:w,v2:hv[k]});
          }
        });
        $.each(v.heartRate,function (k,w){
          heartRateArr.push({num:i*6+k*1,value:w})
        });

        breatheArr.push(v.breathe);
        bloodPressureArr.push(v.bloodPressure);
      });
      me.t.p = tempArr;//体温
      me.p.p = pulseArr;//脉搏
      me.h.p = heartRateArr;//心率
      me.ph.p = phArr;//心率脉搏差
      me.b = breatheArr;//呼吸
      me.bp = bloodPressureArr;//血压
    },
    getDates :  function (){//设置日期
      var me = this;
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
      // window.console&&console.log(dates);
      // dates  ["11-29", "30", "12-01", "02", "03", "04", "05"]
      // dates  ["12-29", "30", "31", "2019-01-01", "02", "03", "04"]
      var trDatesHtml = '<th colspan="2">日　　期</th>';
      $.each(dates,function (i,v){
        trDatesHtml += '<td colspan="6"><div class="one-date" rel="'+datesB[i]+'">'+v+'</div></td>';
      });
      $('.tr-dates').html(trDatesHtml);
      me.popSheetEdit();
    },
    popSheetEdit : function (){
      var data = {
        inpNumber : '1212',//住院号
        recordDate: '',
        numberOfWeek: 1
      }
      $('.one-date').click(function (){
        data.recordDate = $(this).attr('rel');
        window.console&&console.log(data);
        $pop.iframePop({
          title : data.recordDate,
          content : 'medcord-tempeSheetEdit.html?'+$.param(data),
          area : ['840px','600px']
        });
      });
    },
    transAndDrawPos : function (one){//转换并描点
      var me = this;
      var p = one.p;
      $.each(p,function (i,v){
        var pot = trans[one.type](v);
        pot.v&&one.pos.push(pot);
      });
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
    renderBreathe : function (b){ //渲染呼吸
      // window.console&&console.log(b);
      var breatheHtml = '<th class="th-f" colspan="2">呼吸(次/分)</th>';
      $.each(b,function (i,v){
        var k = 0;
        for (var j = 1; j < 7; j++) {
          if(v[j]){
            breatheHtml += '<td><span class="'+(k%2?'s-even':'s-odd')+'">'+v[j]+'</span></td>';
            k++;
          }else{
            breatheHtml += '<td></td>';
          }
        }
      });
      // window.console&&console.log(breatheHtml);
      $('.tr-breath').html(breatheHtml);
    },
    renderBloodPressure : function (bp){//渲染血压
      // window.console&&console.log(bp);
      var bpHtml = '<th class="th-f" colspan="2">血压(mmHg)</th>';
      $.each(bp,function (i,v){
        for (var j = 1; j < 4; j++) {
          var vj = v[j];
          // window.console&&console.log(vj);
          if(vj&&vj.diastolic){
            bpHtml += '<td class="td-disy" colspan="2"><div class="one-disy"><img class="img-disy" src="'+disylineUrl+'" alt="" /><span class="s-di">'+vj.diastolic+'</span><span class="s-sy">'+vj.systolic+'</span></div></td>';
          }else{
            bpHtml += '<td colspan="2"></td>';
          }
        }
      });
      $('.tr-bloodPressure').html(bpHtml);

    },
    renderOtherVals : function (vals){
      var me = this;
      var  r = me.data.record;
      // window.console&&console.log(vals,me.data);
      $.each(vals,function (k,v){
        var vhtml = '<th class="th-f" colspan="2"><span class="s-title">'+v.title+'</span></th>';
        $.each(r,function (i,w){
          if(w[k]){
            vhtml += '<td colspan="6">'+v.prefix+w[k]+v.suffix+'</td>';
          }else{
            vhtml += '<td colspan="6"></td>';
          }
        });
        $('.tr-'+k).html(vhtml);
      });
    },
    drawPaper : function (){
      var me = this;
      me.paper = Raphael("container", me.paperW, me.paperH);
      // me.drawOne(me.lineA);
      // me.drawOne(me.lineB);
    },
    hideDotPop : function (){
      $('.dotPopBox').css({top:-800,left:-800});
    },
    drawOne : function (one){
        var me = this;
        var pos = one.pos;
        me.drawLine(one);
        $.each(pos,function (i,v){
          // var st = null;
          var posOne = me.drawPot(v,one);
          // window.console&&console.log(v);
          window.console&&console.log(posOne);
          if(posOne){
            posOne.data({p:v}).click(function (e,x,y){
                // this.remove();//删除当前点
                // me.delOneItem(v,pos);//从点数组中删除当前点
                // me.hideDotPop();
                // one.line.remove();//删除线
                // me.drawLine(one);//重新划线
            }).hover(function (e,x,y){//鼠标经过离开
              var p = this.data('p');
              me.pot.cur = this;
              me.pot.p = p;
              me.pot.one = one;
              st = setTimeout(function() {
                $(".pot-v-time").html(p.n);
                $(".pot-temp-t").html(p.tt);
                $(".pot-v-temp").html(p.v);
                $('.dotPopBox').css({top:y-40,left:x+10});
              },200);
            },function (){
              // st&&clearTimeout(st);
              // me.hideDotPop();
            });

          }
        });
        $(document).on('click',function (e){
          var $t = $(e.target);
          if(!$t.hasClass('dotPopBox') && !$t.parents('.dotPopBox').length){
            me.hideDotPop();
          }
        });
    },
    pot : { cur : null , p : null ,one : null},
    potEdit : function (){
      var me = this;

      $('.btn-pot-cooling').on('click',function (){
        $pop.popTemForm({
          temId : 'potCoolingTem',
          temData : {
            time : me.pot.p.n,
            temp : me.pot.p.v
          },
          area : ['320px','220px'],
          afterSubmit : function(rst){
            console.log(rst);
          }
        });
      });

      $('.btn-pot-edit').on('click',function (){
        $pop.popTemForm({
          temId : 'potEditTem',
          temData : {
            time : me.pot.p.n,
            temp : me.pot.p.v
          },
          area : ['320px','220px'],
          afterSubmit : function(rst){
            console.log(rst);
          }
        });
      });

      $('.btn-pot-del').on('click',function (){
        me.hideDotPop();
        var one = me.pot.one;
        me.pot.cur.remove();//删除当前点
        me.delOneItem(me.pot.p,one.pos);//从点数组中删除当前点
        me.hideDotPop();
        one.line.remove();//删除线
        me.drawLine(one);//重新划线
      });
    },
    drawPot : function (pot,one){
      var me = this;
      var r = null;
      var pt = point[one.type];
      // window.console&&console.log(pt);
      if(pot.t=='image'){
        var s = pt.image.size;
        r =me.paper.image(pt.image.image,(pot.x-Math.floor(s[0]/2)), (pot.y-Math.floor(s[1]/2)),s[0],s[1]);
      }
      if(pot.t=='circle'||pot.t=='ring'){
        r = me.paper.circle(pot.x, pot.y, pt[pot.t].radius).attr(pt[pot.t]);
      }
      window.console&&console.log(r);
      return r;
    },
    drawLine : function (one){
      var me = this;
      var pos = one.pos;
      var posArr = [];
      var lStr = 'M';
      $.each(pos,function (i,v){
        if(v.y<700){
          lStr += v.xy+',L';
        }else if(v.tt=='断点'){//类型为断点
          lStr += ',M';
        }else{
          lStr += ',M';
        }
        // posArr.push(v.xy);
      });
      lStr = lStr.replace('L,','');
      // window.console&&console.log(pos,lStr);
      one.line = me.paper.path(lStr).attr(point[one.type].line).toBack();
    },
    delOneItem : function (item,pots){
      var me = this;
      $.each(pots,function(i,v){
        if(v == item){
          pots.splice(i,1);
        }
      });
    }
  }
  return back;
});
