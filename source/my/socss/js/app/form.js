define(function () {
    var back  ={
    init : function () {
      var me = this;
      $('.btn-easyFormSubmit').bind('click',function() {
          var $btn = $(this);
          var $form = $btn.parents('.form-validate');
          var validate = $form.form("validate");
          var back = false;
          if(validate){
            var formData = $T.data($form);//form个性化附加数据
            var loadingIndex = null;//loading容器
            var msg = $btn.attr("msg") || "您确定要提交吗?";//确认框提示信息
            var action = $btn.attr("action") || $form.action;//表单请求地址
            var formSubmitEvent = me.formSubmitEvent(action,formData,loadingIndex);

            layer.confirm(msg, {
              icon: 0, title:false,btnAlign: 'c'
            }, function(index){
                layer.close(index);
                $form.form('submit',formSubmitEvent);
            });
          }
      });

    },
    formSubmitEvent : function (action,formData,loadingIndex) {
      return {
          url: action,
          // iframe: false,
          // ajax : true,
          onSubmit: function(param){
            var callSumbit = true;
            if (formData.beforeCallback){//提交之前事件函数名，多个可用 || 隔开
                var callName = formData.beforeCallback.split('||');
                $.each(callName,function (i,v) {
                    callSumbit = window[v]&&window[v](formData);
                    return callSumbit;//为false提前跳出循环
                });
            }
            // if (formData.beforeCallback) {
            //     callSumbit = window[formData.beforeCallback](formData);
            // };
            loadingIndex = layer.load(0, {shade: false});
            var dataPlus = formData.params ||{};//附加提交表单值
            param = $.extend(param,dataPlus);
            console.log(param);
            return callSumbit;
          },
          success:function(rst){
            if(rst){
              layer.close(loadingIndex);
              try{
                var rst = eval('(' + rst + ')');
                parent.window._refreshParent = true;
                //window.console && console.log(data.callback);
                if (formData.callback){//提交之后事件函数名，多个可用 || 隔开
                    var callName = formData.callback.split('||');
                    $.each(callName,function (i,v) {
                        window[v]&&window[v](rst,formData);
                    });
                }
                if (formData.submitClear)$(formData.submitClear).val("");
                var msg = (rst.tip == 1 ? rst.msg : (rst.state?"信息提交成功":"信息提交失败"));
                if (rst.state) {
                  layer.msg(msg,{icon:1});
                  setTimeout(function(){
                    $pop.closePop();
                  },400);
                }else{
                  layer.alert('<p class="red">对不起，提交数据失败！</p>' + msg,{icon: 2, title:false,btnAlign: 'c'});
                };
              }catch(e){
                window.console&&console.log(e);
                layer.alert('<p class="red">对不起，提交数据失败！</p>请检查网络或联系管理员',{icon: 2, title:false,btnAlign: 'c'});
              }
            }
          }
      };
    },
    test : function () {
      $('.form-validate').form({
          iframe: false,
          onSubmit: function () {
              var fm = $(this), url = fm.attr("action"), data = $T.data(this);
              var rst = fm.form("validate");
              if (rst) {
                  $ajax.post(url, $(this).sovals(), true).done(function (rst) {
                      if (rst.state) {
                          if (data.callback) data.callback(rst);
                          if (data.submitClear) $(data.submitClear).val("");
                          // if (fm.find(".chk_close").is(":checked")) {
                          //     var pLayer = parent.layer, wName = window.name;
                          //     setTimeout(function () {
                          //         var index = pLayer.getFrameIndex(wName);
                          //         pLayer.close(index);
                          //     }, 1000);
                          // }
                      }
                  });
              }
              return false;
          }
      });
    }
  }
  return back;
});
