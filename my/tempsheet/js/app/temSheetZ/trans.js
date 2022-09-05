define(function () {
  var tTType = ['','腋温','口温','肛温'],tPType ={
      '腋温' : 'image',
      '口温' : 'circle',
      '肛温' : 'ring'
  };
//    ['','image','circle','ring'];
  var trans = {
    c : function(pot){
      var x = pot.num*20-15;
      var y = 2;
      return {
        n : pot.num,
        v : pot.value,
        t : 'comment',
        tt : '注释',
        x : x,
        y : y
      };
    },
    t : function (pot){//体温
        var x = pot.num*20-10;
        var y = 800-(pot.value*10-340)*10;
        return {
            n : pot.num,
            v : pot.value,
            pc : pot.pc,
            t : tPType[pot.name],//点类型
            tt : pot.name,//标题
            x : x,//x坐标
            y : y,//y坐标
            xy : x+' '+y
        }
    },
    p : function (pot){//脉搏
        var x = pot.num*20-10;
        var y = 800 - (pot.value-20)*5;
        return{
            n : pot.num,
            v : pot.value,
            t : 'circle',//点类型
            tt : '脉搏',//标题
            x : x,
            y : y,
            xy : x+' '+y
        }
    },
    h : function (pot){//心率
        var x = pot.num*20-10;
        var y = 800 - (pot.value-20)*5;
        var t = pot.self?'ring':'';

        return{
            n : pot.num,
            v : pot.value,
            t : t,//点类型
            tt : '心率',//标题
            x : x,
            y : y,
            xy : x+' '+y
        }
    },
    pc : function (pot){//物理降温
      var x = pot.num*20-10;
      var y = 800-(pot.value*10-340)*10;
      return {
        n : pot.num,
        v : pot.value,
        temV : pot.temV,
        temT : pot.temT,
        t : 'ring',//点类型
        tt : '物理降温',//标题
        x : x,//x坐标
        y : y,//y坐标
        xy : x+' '+y
      }
    },
    pch : function (pot){//体温-物理降温集
      var x = pot.num*20-10;
      var y1 = 800-(pot.v1*10-340)*10;
      var y2 = 800-(pot.v2*10-340)*10;
      return {
        n : pot.num,
        v1 : pot.v1,
        v2 : pot.v2,
        x1:x,
        y1:y1,
        xy1 : x+' '+y1,
        x2:x,
        y2:y2,
        xy2 : x+' '+y2
      }
    },
    ph : function (pot){//脉搏心率差
        var x = pot.num*20-10;
        var y1 = 800 - (pot.v1-20)*5;
        var y2 = 800 - (pot.v2-20)*5;
        return {
            n : pot.num,
            v1 : pot.v1,
            v2 : pot.v2,
            x1:x,
            y1:y1,
            xy1 : x+' '+y1,
            x2:x,
            y2:y2,
            xy2 : x+' '+y2
        }
    },
    pa : function (pot){//疼痛
      var x = pot.num*20-10;
      var y = 800 - pot.value*10;
      return{
        n : pot.num,
        v : pot.value,
        t : 'ring',//点类型
        tt : '疼痛',//标题
        x : x,
        y : y,
        xy : x+' '+y
      }
    }
  };
  return trans;
});
