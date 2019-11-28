define(['pub'],function () {
  /**
   * @param  {
     *  url : 省市区请求地址
     *  data : 直接赋数据，不通过url远程请求
     *  obj : 处理对象
     * } opt
   */
  var addrLink = function(opt){//省市区联动
    var me = this;
    me.pccData = null;

    if(opt.url){
      $ajax.post({//获取省市区数据
        url : opt.url,
        sync : true,
        callback : function (rst){
          me.pccData = rst;
        }
      });
    }else{
      me.pccData = opt.data;
    }

    me.pccData.unshift({//添加空数据行
      regionCode: '',
      regionName: ''
    });

    $(opt.obj).each(function (){
      me.oneInit(this);
    });

  }

  addrLink.prototype = {
    oneInit : function (o){
      var $o = $(o);
      var $province = $o.find('.province');
      var  $city = $o.find('.city');
      var $county = $o.find('.county');
      this.oneRun($province,$city,$county);
    },
    oneRun : function ($province,$city,$county){
      var me = this;

      var proOpt = $T.data($province);
      $province.combobox($.extend({
        data: me.pccData,
        valueField:'regionCode',
        textField:'regionName',
        editable:false,
        required : true,
        prompt : '省',
        onChange : function(newValue){
          if(!formLoadState){//非form load状态
            $city.combobox("clear");
          }
          me.showCity($city,newValue);
        },
        onSelect : function(record) {
          if(proOpt.nameTxt&&$(proOpt.nameTxt).length){
            $(proOpt.nameTxt).val(record.regionName);
          }
        }
      },proOpt||{}));

      var cityOpt = $T.data($city);
      $city.combobox($.extend({
        valueField:'regionCode',
        textField:'regionName',
        editable:false,
        required : true,
        prompt : '市',
        onChange : function(newValue){
          // $county.combobox("clear");
          me.showCounty($county,String(newValue));
        },
        onSelect : function(record) {
          if(cityOpt.nameTxt&&$(cityOpt.nameTxt).length){
            $(cityOpt.nameTxt).val(record.regionName);
          }
        }
      },cityOpt||{}));

      var countyOpt = $T.data($county);
      $county.combobox($.extend({
        valueField:'regionCode',
        textField:'regionName',
        required : true,
        prompt : '区/县',
        editable:false,
        onSelect : function(record) {
          if(countyOpt.nameTxt&&$(countyOpt.nameTxt).length){
            $(countyOpt.nameTxt).val(record.regionName);
          }
        }
      },countyOpt||{}));
    },
    showCity : function ($city,newValue){
      var me = this;
      var cityData = [{
        regionCode: '',
        regionName: ''
      }];
      var chkedData = null;
      if(newValue){//如果有值
        $.each(me.pccData, function(i, val) {
          if(val.regionCode == newValue){ //判断省份的code 是否与省份的val 相同
            chkedData = val.childs;
          }
        });
        cityData = cityData.concat(chkedData);
      }
      $city.combobox('loadData',cityData);

    },
    showCounty : function ($county,newValue){
      var me = this;
      var couData = [{
        regionCode: '',
        regionName: ''
      }];
      var chkedData = null;
      // debugger;
      if(newValue){//如果有值
        $.each(me.pccData, function(i, val) {
          if(val.regionCode.substr(0,2) == newValue.substr(0, 2)){
            var pro_childs =  val.childs;
            $.each(pro_childs, function(j, proVal) {// 然后 省份循环 寻找与省份对应的城市
              if(proVal.regionCode.substr(0,4) == newValue.substr(0,4)){ //判断省份的code 是否与省份的val 相同
                chkedData = proVal.childs;
              }
            })
          }
        });
        if(chkedData){couData = couData.concat(chkedData);}
      };
      // window.console && console.log(couData);
      $county.combobox('loadData',couData);
    }
  };

  return addrLink;
});
