var $util = {
    down: function (url, param, method) {//下载方法
        var inputs = [];
        if (!method) {
            method = !param ? "get" : "post";
        }
        if (param) {
            $.each(param, function (k, v) {
                inputs.put($T.format("<input type='hidden' name='#{name}' value='#{value}'>", {name: k, value: v}));
            });
        }
        if (!$('_exprotBox').length) {
            $('<div id="_exportBox" class="hide"></div>').append("<iframe id='export_frame' name='export_frame'></iframe>")
                .append('<form action="' + url + '" method="' + (method || 'post') + '" target="export_frame">' + inputs.join('') + '</form>')
                .appendTo('body');
        } else {
            $("#_exportBox form").html(inputs.join(''));
        }
        $("#_exportBox form").submit();
    },
    excel: function (url, titles, fields, param) {//导出excel，需要后台对应配置
        param = param || {};
        $.applyIf(param, {
            _start: 0,
            _pagin: 1,
            _limit: 6000,
            _export_titles: titles.join(","),
            _export_fields: fields.join(",")
        });
        var frame = $("#export_frame");
        if (frame.length == 0) {
            frame = $("<iframe id='export_frame' class='hide' name='export_frame' style='display:none'></iframe>");
            $('body').append(frame);
        }
        // if (Ext.isIE) frame.src = Ext.SSL_SECURE_URL;
        var form = $("#export_form");
        if (form.length == 0) {
            form = $("<form method='post' id='export_form' target='export_frame' class='hide'></form>");
            $('body').append(form);
            if ($.browser.msie)
                document.frames["export_frame"].name = "export_frame";
        }
        form.attr("action", url);
        $.each(param, function (k, v) {
            form.append($T.format(
                "<input type='hidden' name='#{name}' value='#{value}'>", {
                    name: k,
                    value: v
                }));
        });
        form.submit().html("");
    },
    tabs: function (tab, events, cfg) {
        events = events || [];
        $(tab).tabs({
            onSelect: function (t, ix) {
                //console.log("init tab" + ix);
                $('.tabs', this).attr('class', 'tabs tab-state-' + ix);
                var init = $(this).attr("data-init" + ix);
                if (!init) {
                    var fn = events[ix];
                    if (fn && $.isFunction(fn))fn();
                    $(this).attr("data-init" + ix, true);
                }
            }
        });
    },
/*
合并列方法
grid,
data:数据,
aStr:值相同的字段,
bStr:需要合并的字段(不设置，则使用aStr)
 */
    gridMergeCols : function (grid,data,aStr,bStr) {
        if (data&&data.rows.length) {
        var bStr = bStr?bStr:aStr;
        var merges =[{index:0}];
        var ix = 0;
        var span = 0;
          var nowStr = data.rows[0][aStr];
          $.each(data.rows,function (i,v) {
            if (v[aStr]!= nowStr) {
                ix++;
                merges[ix] = {index:i};
                merges[ix-1].rowspan = span;
                span = 1;
                nowStr = v[aStr];
            }else{
              span++;
            };
          });
          merges[ix].rowspan = span;
          //window.console && console.log('merges 数组：',merges);

          for(var i=0; i<merges.length; i++){
                if(merges[i].rowspan>1){
                  if (bStr instanceof Array) {//如果有多个字段，为数组
                      $.each(bStr,function(j,v){
                        $(grid).datagrid('mergeCells',{
                          index: merges[i].index,
                          field: v,
                          rowspan: merges[i].rowspan
                        });
                      });
                  }else{//单个字段，字符串
                    $(grid).datagrid('mergeCells',{
                      index: merges[i].index,
                      field: bStr,
                      rowspan: merges[i].rowspan
                    });
                  };
                }
            }
        };
    },
};


var $pop = {
    alertType : {
        warning: {icon:0},
        success : {icon:1},
        err : {icon:2},
        ask : {icon:3}
    },
    alert : function (msg,yes,opt,type) {//icon: {0:'叹号',1:'对勾',2:'叉叉',3:'问号'}
        var me = this;
        if(typeof yes === 'object'&&yes !== null) {
            opt = yes;
            yes = null;
        };
        var type = type?type:'warning';
        var opt = $.extend({title:false,btnAlign: 'c'},me.alertType[type],opt||{});
        return layer.alert(msg,opt,yes);
    },
	warning : function(msg,yes,opt){
    return $pop.alert(msg,yes,opt);
  },
  success : function(msg,yes,opt){
    return $pop.alert(msg,yes,opt,'success');
  },
  err : function(msg,yes,opt){
    return $pop.alert(msg,yes,opt,'err');
  },
  ask : function(msg,yes,opt){
    return $pop.alert(msg,yes,opt,'ask');
  },
  msgType :{
    warning: {icon:0},
    success : {icon:1,skin:'layui-layer-msg layer-msg-success'},
    err : {icon:2,skin:'layui-layer-msg layer-msg-err'},
    ask : {icon:3,skin:'layui-layer-msg layer-msg-ask'}
  },
  msg : function (msg,end,opt,type) {//icon: {0:'叹号',1:'对勾',2:'叉叉',3:'问号'}
        var me = this;
        var o = opt;
        if((typeof end === 'object'&&end !== null)||(typeof end === 'number')) {
            o = opt = end;
            end = null;
        };
        if(typeof opt === 'number'){
            o = {};
            o.time = opt;
        }
        var type = type?type:'warning';
        var opt = $.extend({time:2000},me.msgType[type],o);
        return layer.msg(msg , opt , end)
  },
  confirm : function (msg,yes,cancel,opt) {//icon: {0:'叹号',1:'对勾',2:'叉叉',3:'问号'}
      var msg = msg || '你确定此操作吗？';
      var opt = $.extend({icon: 0, title:false,btnAlign: 'c'},opt||{});
      return layer.confirm(msg , opt ,yes,cancel);
  },
  tips : function (content, follow, options) {
    return  layer.tips(content, follow, options);
  },
  load : function (icon, options){
      return layer.load(icon, options);
  },
  close : function (index){
      layer.close(index);
  },
  newTabWindow : function (tabTitle,url,unselected) {
    window.top.eyeIndex&&window.top.eyeIndex.addTab(tabTitle,url,unselected);
  },
  closeTabWindow : function (tabTitle){
    var tabTitle = tabTitle || $(document).attr("title");
    //window.console && console.log(tabTitle);
    window.top.eyeIndex&&window.top.eyeIndex.closeTab(tabTitle);
  },
  iframePop : function (opt,grid) {//pop的方式打开iframePop
      window._refreshParent = false;
      if (typeof(opt)=='string') {
          opt = {content:opt};
      };
      var layerOpt = $.extend({//layer
        type: 2,
        title :'提示',
        // content:url,
        area :['100%', '100%']
      },opt||{});
        layerOpt.end = function (){
	        opt.end&&opt.end();
	        if (grid&&window._refreshParent){
	            if(grid instanceof Array){
	                $.each(grid,function (i,v) {
	                    $grid.reload(v);
	                })
	            }else{
	                $grid.reload(grid);
	            }
	        }
	        window._refreshParent&&opt.sureback&&opt.sureback();
      };
      return layer.open(layerOpt);
  },
  closePop : function (opt) {//统一的关闭pop方法
      var opt = $.extend({
          popIndex : null,
          callback : function () {},
          refreshGrid : false
      },opt||{});

      if (opt.popIndex) {//如果关闭当前window下的pop
          opt.callback();
          layer.close(opt.popIndex);
          return;
      }else{//关闭父级pop
          var p = parent.window;

          if (opt.refreshGrid) {
              p._refreshParent = true;
          };

          try {//试运行callback
              opt.callback(p);
          } catch (e) {
              //window.console && console.log(e);
          }

          try {//试关闭open
            var index = parent.layer.getFrameIndex(window.name);
            p.layer.close(index);
          } catch (e) {
              //window.console && console.log(e);
          }
      };
  },
  popForm : function (opt) {//pop form, opt是所有参数
      var opt =$.extend({
          target : null,//需要弹出的对象class或者id
          zIndex : 100000,//这里设置主要为了改变组件重叠显示的冲突问题
          refreshGrid : true,//是否刷新grid
          grid : 'gridBox',//需要刷新grid的id
          width : 400,height:300,//pop宽高
          beforePop : function ($formBox) {},//弹窗之前的事情
          beforeSubmit : null,//function (formData,$form){}
          afterSubmit : null//提交之后的事件, function (rst,$formBox) {}
      },opt||{});
      var temPop;
      var $formBox = $(opt.target);
      // window.console && console.log($formBox.find('.form-validate').attr("data-opt"));
      var rad = Math.floor(Math.random()*100000000000);
      var beforeSubmitPopFormName = 'beforeSubmitPopForm'+rad;
      var submitPopFormName = 'submitPopForm'+rad;
      $formBox.find('.form-validate').attr("data-opt","{'beforeCallback':'"+beforeSubmitPopFormName+"','callback':'"+submitPopFormName+"'}");
      opt.beforePop($formBox);
      temPop = layer.open($.extend({
          type:1,
          zIndex : opt.zIndex,
          area:[opt.width+'px',opt.height+'px'],
          content : $formBox,
          end: function () {
              // $formBox.clear();
          }
      },opt));
      $formBox.find('.btn-closePop').click(function () {
          layer.close(temPop);
      });

      window[beforeSubmitPopFormName] =  function (formData,$form) {
        return opt.beforeSubmit?opt.beforeSubmit(formData,$form,temPop):true;
      };
      window[submitPopFormName] = function (rst) {
          if (rst.code=='200'||rst.code=='201') {
              layer.close(temPop);
              if (opt.refreshGrid) {$grid.reload(opt.grid);};
              opt.afterSubmit&&opt.afterSubmit(rst,$formBox);
          };
      }

      return temPop;//返回layer的序列
  },
  reloginOpt : {
    title : null,
    type: 1,
    closeBtn : 0,
    zIndex:1000,
    content : '<div class="reloginPop"><form class="soform form-reloginPop form-enter pad-t10" method="post"  action="/login"><input type="hidden" name="ajax" value="true"/><div class="pad-20 pad-b0"><p class="pad-l20 pad-b20 bold red">业务操作超时，请重新输入账号信息：</p><p class="pad-l20 pad-r20 pad-b10"><input type="text" class="txt txt-popLoginName" name="username" placeholder="请输入用户名" /></p><p class="pad-l20 pad-r20"><input type="password" class="txt txt-popLoginPassword" name="password" placeholder="请输入密码" /></p><p class="row-btn pad-t20"><button type="button" class="btn btn-primary btn-popLoinIn">确认登录</button><button type="button" class="btn btn-popLoginOut">注销退出</button></p></div></form></div>',
    area : ['350px','210px'],
    success : function (layero, index) {
      layero.find('.btn-popLoginOut').click(function () {
        window.location.href="login.html";
      });

      var $form = layero.find('.form-reloginPop');
      layero.find('.txt-popLoginName').validatebox({
        required: true,
        missingMessage: '请输入用户名'
      });
      layero.find('.txt-popLoginPassword').validatebox({
        required: true,
        missingMessage: '请输入密码'
      });
      layero.find('.btn-popLoinIn').click(function () {
        //window.console && console.log($form);
        var passValidate = $form.form('validate');
        if(passValidate){
          var sData = $form.sovals();
          $ajax.post('/login',sData).done(function (rst) {
            if(rst.code==='200'||rst.code==='201'){
              layer.msg('登录成功，欢迎回来~',{icon:1});
              layer.close(index);
            }
          });
        }
      });
    }
  },
  reLogin : function(){
    var me = this;
    if(!$('.reloginPop').length) {
      layer.open(me.reloginOpt);
    }
  },
  popGrid: function (opt,target) {//弹窗grid
      opt = opt || {};
      if (!opt.url && !opt.code) {
          $pop.alert("请配置表格数据源参数url或者code");
          return;
      }
      if (!opt.code && !opt.gridId) {
          $pop.alert("请配置表格数据参数gridId");
          return;
      }
      var data = opt || {};
      data.gridCfg = data.gridCfg ||{};
      var gridId = data.gridId || 'grid_' + data.code.replace(/[\^@]/g, '')
          , url = data.url || "/sys/widget/grid.htm?_code=" + encodeURIComponent(data.code)
          , init = $('#' + gridId).length > 0;
          data.gridCfg.singleSelect = data.gridCfg.singleSelect  || !data.muti;
      var muti = !data.gridCfg.singleSelect;
          //window.console && console.log(muti);
      if (init && $('#pop_' + gridId).length == 0) $pop.alert("请另外指定gridId," + gridId + "已存在!");
      if (!init) {
          var searchName = data.searchName || 'searchValue';
          var searchLabel = data.searchLabel || '';
          var boxTpl = "<div id='pop_{gridId}' style='display:none'>"+
          "<form class='form-inline popGridHead pad10'>"+
          "<div class='form-group'><input type='text' class='txt' name='"+searchName+"' placeholder='"+searchLabel+"'><button type='button' class='btn btn-small btn-primary fnSearch'>查 询</button> </div>"+
          "<button type='button' class='btn btn-warning fnSure"+(muti?'':' none')+"'>确 定</button>"+
              // "<span><input type='button' class='btn btn-submit fnSearch' value='查 询' /></span>"+
              // "<input type='button' class='btn btn-submit fnSure' value='确 定' />"+
          "</form>"+
          "<div class='pad-l10 pad-r10 pad-b5'><div id='{gridId}'></div></div></div>";
          $('body').append($T.format(boxTpl, {gridId: gridId}));
      }

      var boxOpt = {
          type :1,
          title: muti?'选择后点击确定按钮':'请双击选择行',
        area : ['500px','494px'],
          content: $('#pop_' + gridId)
      };
      $.extend(true, boxOpt, data.boxOpt || {});
      if (boxOpt.width) {boxOpt.area[0] = boxOpt.width+'px'};
      if (boxOpt.height) {boxOpt.area[1] = boxOpt.height+'px'};
      //清除验证的tooltip
      // var $form = $(target).parents('.form-validate');
      // if ($form) {
      //     $form.find(".form-validate .txta,:input").tooltip("destroy");
      // };
      $pop[gridId] = layer.open(boxOpt);
      if (!init) {
          var valueId = data.valueId, textId = data.textId
          ,valueVal = data.valueVal||'id', textVal = data.textVal||'text'
              , gridCfg = {height: (boxOpt.height - 90), width: '100%'};
          $.extend(true, gridCfg, data.gridCfg || {});
          gridCfg.columns = gridCfg.columns || data.cols;
          if (!gridCfg.columns && data.code) {
              var cType = data.code.replace(/[\^@]/g, '');
              if (!$cols[cType]) {
                $pop.alert('请在param.js里面定义' + cType + '表格列信息!');
                  return;
              }
              gridCfg.columns = $cols[cType];
          }
          if (!gridCfg.columns) {
            $pop.alert("请配置表格列信息!");
              return;
          }
          gridCfg.pageSize = 10;
          gridCfg.fitColumns = (opt.fitCol?opt.fitCol:true);
          gridCfg.onDblClickRow = function (index, row) {
              //window.console && console.log(textId,valueId,row);
              if (valueId)$('#' + valueId).val(row[valueVal]);
              if (textId)$('#' + textId).val(row[textVal]);
              if (boxOpt.onOk)boxOpt.onOk([row]);
              layer.close($pop[gridId]);
              if(data.values){
                  $.each(data.values,function (key,val) {
                      $('#'+key).val(row[val]);
                  });
              }
              // $pop[gridId].removePop();
          }
          $grid.newGrid('#' + gridId, gridCfg);
          $('.fnSearch', '#pop_' + gridId).click(function () {
              var ps = $('#pop_' + gridId).find('.popGridHead').sovals();
              $grid.load('#' + gridId, ps);
          });
          if (muti) {
              $('.fnSure', '#pop_' + gridId).show().click(function () {
                  var rows = muti ? ($('#' + gridId).datagrid("getChecked") || []) : [$('#' + gridId).datagrid("getSelected")];
                  var id = [], text = [];
                  for (var i = 0; i < rows.length; i++) {
                      var row = rows[i];
                      id.push(row[valueVal]);
                      text.push(row[textVal]);
                  }
                  if (valueId)$('#' + valueId).val(id.join(','));
                  if (textId)$('#' + textId).val(text.join(','));
                  if (boxOpt.onOk)boxOpt.onOk(rows);
                  layer.close($pop[gridId]);
              });
          };

      }
      var params = data.gridParams || data.params || {};
      if (typeof(params) == "function") {
          params = params();
      }
      var urlParams = data.urlParams || '';
      if (typeof(urlParams) == "function") {
          urlParams = urlParams();
      }
      // urlParams = $T.parseParam(urlParams);
      params.$url = url;
      if (urlParams) {params.$url = params.$url+urlParams};
      $grid.load('#' + gridId, params);
  }
};

$pop.alert.warning = $pop.alert;
$pop.alert.success = $pop.success;
$pop.alert.err = $pop.err;
$pop.alert.ask = $pop.ask;

$pop.msg.warning = function (msg,end,opt){
    return $pop.msg(msg,end,opt);
}
$pop.msg.success = function (msg,end,opt){
    return $pop.msg(msg,end,opt,'success');
}
$pop.msg.err = function (msg,end,opt){
    return $pop.msg(msg,end,opt,'err');
}
$pop.msg.ask = function (msg,end,opt){
    return $pop.msg(msg,end,opt,'ask');
}


var $grid = {
    getRows: function (grid) {//获取rows
        return $(grid).datagrid("getData").rows;
    },
    load: function (grid, param) {//grid 更新参数后load，返回第一页
        param = param || {};
        var ui = $(grid).attr("data-ui");
        if (ui == 'datagrid') {
            if (param.$url) $(grid).datagrid("options").url = param.$url;
            $(grid).datagrid("load", param);
        } else {
            if (param.$url)$(grid).treegrid("options").url = param.$url;
            $(grid).treegrid("load", param);
        }
    },
    reload: function (grid, param) {//grid 更新参数后reload，保留在刷新前的页码
        var $grid = $(grid);
        var ui = $grid.attr("data-ui");
        if (ui == 'datagrid') {
            $grid.datagrid("reload", param);
        } else {
            if($grid.hasClass('tree')){
                $grid.tree("options").queryParams = param;
                $grid.tree("reload");
            }else{
                $(grid).treegrid("reload", param);
            };
        }
    },
    clear: function (grid) {//grid 清空数据
        $(grid).datagrid("loadData", []);
    },
    deleteSelected: function (grid) {//grid 删除选择行
        //指定idField
        var rows = $(grid).datagrid("getSelections");
        for (var i = 0; i < rows.length; i++) {
            var inx = $(grid).datagrid("getRowIndex", rows[i]);
            $(grid).datagrid("deleteRow", inx);
        }
        $(grid).datagrid("clearSelections");
    },
    newGrid: function (grid, cfg) {//二次封装的grid方法，cfg参数相当于easyui的参数对象，具体方法请参考api手册
        if (!$(grid).length) {
            $pop.alert("页面不存在" + grid,null,{icon: 2, title:false,btnAlign: 'c'});
            return;
        }
        var $g = $(grid);
        var top = $g.position().top;
        var gridCfg = {
            fitColumns: true,//自动列款
            singleSelect: true,//单选
            pagination: true,
            pageSize: 20,
            pageList: [10, 20, 50, 100, 200, 500],
            autoRowHeight: true,
            striped: true,//单双背景
            rownumbers: true,
            width: '100%',
            // auto : true,//自动刷新
            // excel : false,//导出excel
            loadMsg : '拼命加载中，请稍候...',
            fitHeight: true,//自动适应窗口高度
            height: $(window).height()-top,
            onLoadError : function (err) {//加载错误事件
              var rst = err.responseJSON;
              //window.console && console.log(err);
              if(rst.timeout&&rst.timeout===301){
                $pop.reLogin();
                return;
              }
              var msg = rst.msg || '数据请求失败！';

              $pop.alert(msg,null,{icon: 2, title:false,btnAlign: 'c'});
              // $pop.msg(msg);
            }
        };
        $.extend(true, gridCfg, cfg);
        var titles = [], fields = [];
        var $gridP = null;
        if (gridCfg.fitParent) {
          $gridP = $g.parent();
          gridCfg.height = $gridP.height();
        };
        if (gridCfg.offset&&gridCfg.height!=='auto') gridCfg.height += gridCfg.offset;
        // gridCfg.height = gridCfg.height;
        var colLen = gridCfg.columns.length;
        for (var i = 0; i < colLen; i++) {
            var cols = gridCfg.columns[i];
            $.each(cols, function (inx, col) {
                if (col.checkbox)return;
                $.applyIf(col, {align: 'center'});
                if (col.format) {
                    col.formatter = function (v, r, inx) {
                        return v ? $.fmtDate(col.format, v) : '';
                    }
                }
                if (!col.width)col.width = 60;
                if (col.title && col.field) {
                    titles.push(col.title);
                    fields.push(col.field);
                }
                if (col.editor) {
                    col.styler = function (v, r, inx) {
                        return {'class': 'x-editor'};
                    }
                }
              // if (col.price) {
              //   col.align = 'right';
              //   col.formatter=function(r){
              //     if(r!==undefined){return Number(r).toFixed(2);}
              //   }
              // }
              //   if(col.titletip){
              //       col.formatter=function(r){
              //         if(r){return '<span class="nowrap" title="'+r+'">'+r+'</span>';}
              //
              //        }
              //   }
            });
        }
        // gridCfg.tempLoadSuccess = gridCfg.onLoadSuccess;
        // gridCfg.onLoadSuccess = function (data) {
        //   if(!data || !data.rows || data.rows.length==0){
        //     var _self = $(this);
        //     var colsL = _self.datagrid('getColumnFields').length;
        //     window.console && console.log(cols);
        //     var field = gridCfg.columns[0][0].field;
        //     var appendRow = {};
        //     appendRow[field] = '<div style="text-align:center;color:#999">暂无相关记录！</div>' ;
        //     window.console && console.log(field,colLen);
        //     _self.datagrid('appendRow', appendRow).datagrid('mergeCells', { index: 0, field: field, colspan: colsL })
        //   }
        //   gridCfg.tempLoadSuccess(data);
        // }
        //console.log("初始化" + grid, gridCfg);
        if (gridCfg.toolbar)gridCfg.toolbar = $grid.initToolBar(grid, gridCfg.toolbar);
        if (gridCfg.tools){
            var toolsId = $grid.initTools(grid, gridCfg.tools);
            gridCfg.toolbar = '#'+toolsId;
        };
        if (gridCfg.treeField) {
            gridCfg.pagination = false;
            gridCfg.animate = false;
            $g.treegrid(gridCfg);
            $g.attr("data-ui", "treegrid");
        } else {
            $g.datagrid(gridCfg);
            $g.attr("data-ui", "datagrid");
        }

        var pager = $g.datagrid('getPager'), btns = [];
        if (cfg.excel) {
            btns.push({
                iconCls: 'icon-excel',
                handler: function () {
                    var ps = $g.datagrid("options").queryParams;
                    $util.excel(cfg.excel, titles, fields, ps);
                }
            });
        }

        if (cfg.auto) {
            var btnAutoId = $g.attr("id") + "_auto", auto = cfg.auto;
            auto = (auto === true) ? 60 * 1000 : auto * 1000;
            btns.push({
                id: btnAutoId,
                handler: function () {
                    var btn = $(this);
                    var taskId = btn.attr("data-task");
                    if (!taskId) {
                        taskId = setInterval(function () {
                            $grid.reload(grid);
                        }, auto);
                        btn.attr("data-task", taskId);
                        btn.addClass("icon-autofreshing");
                    } else {
                        clearInterval(taskId);
                        btn.removeAttr("data-task");
                        btn.removeClass("icon-autofreshing");
                    }
                }
            });
            $('#' + btnAutoId).addClass("icon-autofresh icon-autofreshing");
            $('#' + btnAutoId).click();
        }

        if (btns.length > 0) {
            pager.pagination({buttons: btns});
        }
        if (gridCfg.height !== 'auto' && gridCfg.fitHeight) {
          $(window).resize(function () {
              var wh = $(window).height();
              var gridTop = $g.parents('.datagrid').position().top;
              var gridH = wh - gridTop;
              if (gridCfg.fitParent) {
                gridH = $gridP.height();
              }
              // window.console && console.log(gridTop);
              $g.datagrid('resize',{height:(gridH+gridCfg.offset)});
          });
        };

    },
    renderTools : function (grid,btnArr,$par,singerMode) {
      var $gridO = $(grid);
       $.each(btnArr, function (i, opt) {
          //iconCls:'icon-add',text:'新增',url:'form.html',noMax: true,popHeight:350,title:'用户信息-新增'
          var o= $.extend({
              iconCls :'plus',//默认按钮图标
              // btnCls : 'default',//默认按钮类型
              btnCls : '',//按钮自定义cls
              text : '新增',//按钮文本
              btnTitle : null,//按钮标题
              url : null,//请求地址
              popMax : false,//是否最大化
              popWidth : 560,//弹窗宽度
              popHeight : 300,//弹窗高度
              ajaxMsg : '你确定提交此操作吗？',
              title : '信息窗口',//默认弹窗标题
              check:false,//是否返回是check的值，即勾选行，默认返回select的值，即选择行
              notNull : false,//不能不选择行
              onlyOne : false,//只能选择一行
              newWin : false,//在新窗口打开
              ajax : false,//ajax事件
              post : false,//ajax改为 post参数方式
              endBack : function () {},
              ajaxBack : function (data) {},
              click : function () {}
          },opt||{});
          // var $btn = $('<span class="btn s-tool'+(singerMode?" s-tool-singer":"")+' btn-default"><b class="icon icon-'+o.iconCls+'"></b> '+o.text+'</span>');
          var $btn = $('<span class="s-tool '+o.btnCls+' '+(singerMode?" s-tool-singer":"")+'"'+(o.btnTitle?'title="'+o.btnTitle+'"':'')+'><b class="icon icon-'+o.iconCls+'"></b> '+o.text+'</span>');
          $btn.click(function () {
              var _self = $(this);
              var rows = $gridO.datagrid(o.check?"getChecked":"getSelections");
              if (o.notNull && rows.length == 0) {
                  if (o.notNull === true) o.notNull = "请选择记录!";
                  layer.msg(o.notNull,{icon:0});
                  // $.sobox.warning(o.notNull);
                   _self.blur();
                  return;
              }
              if (o.onlyOne && rows.length != 1) {
                  if (o.onlyOne === true)o.onlyOne = "请选择需要操作的一条记录!";
                  layer.msg(o.onlyOne,{icon:0});
                  // $.sobox.warning(o.onlyOne);
                   _self.blur();
                  return;
              }
              var url = o.url;
              if (url) {
                  if (typeof url == 'function') {
                      url = url();
                  };
                  if (o.post) {
                      if (o.post.constructor !== String) {o.post = 'id=id'};//默认取id
                      var map= [];
                      if (rows.length>0) {
                          var ps = [],keyArr = [];
                          ps = o.post.split('&');
                          for (var c = 0; c < ps.length; c++) {
                              keyArr.push(ps[c].split('='));
                              // map[keyArr[c][0]]=[];
                          }
                          for (var i = 0; i < rows.length; i++) {
                              var tt = rows[i];
                              for (var j = 0; j < ps.length; j++) {
                                  map.push(keyArr[j][0]+'='+tt[keyArr[j][1]]);
                              }
                          }
                          map = map.join('&');

                      };
                  }else{
                      var ps = [], re = /\{(\w+)\}/g, c, map = {};
                      while (c = re.exec(url)) {
                          ps.push(c[1]);
                          map[c[1]] = [];
                      }
                      if (ps.length > 0 && rows.length > 0) {
                          for (var i = 0; i < rows.length; i++) {
                              var tt = rows[i];
                              for (var j = 0; j < ps.length; j++) {
                                  map[ps[j]].push(tt[ps[j]]);
                              }
                          }
                          for (var k in map) {
                              map[k] = map[k].join(",");
                          }
                          url = $T.format(url, map);
                      }
                  };
                  // window.console && console.log(url);
                  // window.console && console.log(map);
                  if(o.newWin){
                      window.open(url);
                      _self.blur();
                      return;
                  }
                  if (o.ajax) {
                      var ajaxData = o.post?map:{};
                      $ajax.post(url, ajaxData, o.ajaxMsg).done(function (rst) {
                          o.ajaxBack(rst);
                          if (rst.code==='200'||rst.code==='201') {
                              $grid.reload(grid);
                          }
                      });
                      _self.blur();
                  } else {
                      window._refreshParent = false;
                      var areaVal = o.popMax?['100%', '100%']:[(o.popWidth+'px') || '560px',(o.popHeight+'px') || '300px'];
                      layer.open({//layer
                        type: 2,
                        title : o.title,
                        content:url,
                        area :areaVal,
                        end : function () {
                            if (window._refreshParent){
                              $grid.reload(grid);
                              o.endBack();
                            }
                        }
                      });
                      _self.blur();
                  }
              }else{
                  if (o.onlyOne) {rows = rows[0]};
                  if (o.click) {
                      o.click($gridO,rows);
                      _self.blur();
                      return;
                  };
              }
          });
          $par.append($btn);
       });
      // return $par;
    },
    initTools : function (grid,cfg) {//newGrid的分支方法，初始化工具栏
      var me = this;
      var randomId = 'tool-'+Math.ceil(Math.random()*100000000);
      var $wrap = $('<div id="'+randomId+'" class="baseToobar"></div>');
      var $gridO = $(grid);
      // window.console && console.log(cfg);
      if (cfg[0] instanceof Array) {
          $.each(cfg,function (h,btnArr) {
              var $btnGroup = $('<div class="item-group toolGroup"></div>');
              me.renderTools(grid,btnArr,$btnGroup);
              $wrap.append($btnGroup);
          });
      }else{
          me.renderTools(grid,cfg,$wrap,true);
      };
      var $none = $('<div class="none"></div>');
      $none.append($wrap);
      $('body').append($none);
      return randomId;
    },
    initToolBar: function (grid, cfg) {//newGrid的分支方法，初始化工具栏方式2
      $.each(cfg, function (i, opt) {
          if (opt == '-')return;
          if (!opt.handler) {
              opt.handler = function () {
                  var _self = $(this);
                  var rows = $(grid).datagrid(opt.check?"getChecked":"getSelections");
                  if (opt.notNull && rows.length == 0) {
                      if (opt.notNull === true) opt.notNull = "请选择记录!";
                      layer.msg(opt.notNull,{icon:0});
                      // $.sobox.warning(opt.notNull);
                      _self.blur();
                      return;
                  }
                  if (opt.onlyOne && rows.length != 1) {
                      if (opt.onlyOne === true)opt.onlyOne = "请选择需要操作的一条记录!";
                      layer.msg(opt.onlyOne,{icon:0});
                      _self.blur();
                      // $.sobox.warning(opt.onlyOne);
                      return;
                  }
                  var url = opt.url;
                  if (url) {
                      var ps = [], re = /\{(\w+)\}/g, c, map = {};
                      while (c = re.exec(url)) {
                          ps.push(c[1]);
                          map[c[1]] = [];
                      }
                      if (ps.length > 0 && rows.length > 0) {
                          for (var i = 0; i < rows.length; i++) {
                              var tt = rows[i];
                              for (var j = 0; j < ps.length; j++) {
                                  map[ps[j]].push(tt[ps[j]]);
                              }
                          }
                          for (var k in map) {
                              map[k] = map[k].join(",");
                          }
                          url = $T.format(url, map);
                      }
                      if(opt.newWin){
                          window.open(url);
                          _self.blur();
                          return;
                      }
                      if (opt.ajax) {
                          $ajax.post(url, {}, true).done(function (rst) {
                          if (rst.code==='200'||rst.code==='201') {
                                  $grid.reload(grid);
                              }
                          });
                          _self.blur();
                      } else {
                          window._refreshParent = false;
                          opt.popWidth = opt.popWidth || 560;
                          opt.popHeight = opt.popHeight || 300;
                          var areaVal = opt.popMax?['100%', '100%']:[(opt.popWidth+'px'),(opt.popHeight+'px')];
                          layer.open({//layer
                            type: 2,
                            title : opt.title,
                            content:url,
                            area :areaVal,
                            end : function () {
                                if (window._refreshParent)$grid.reload(grid);
                            }
                          });
                          _self.blur();
                      }
                  } else {
                      if (opt.onlyOne) {rows = rows[0]};
                      if (opt.click){
                          opt.click($(grid), rows);
                          _self.blur();
                      };
                  }
              }
          }
      });
      return cfg;
    }
};


var $form = {
    /**
     * 页面表格查询功能绑定，主要用在列表的搜索栏
     */
    search: function (btnCls) {
        var cls = btnCls || '.so-search';
        if ($(cls).length) {
            $(cls).each(function () {
                var _self = $(this);
                var data = $T.data(this);
                var scope = data.scope;
                if (scope != null ){
                    _self.click(function () {
                        if (!$(scope).form('validate')) {
                            return;
                        }
                        if (data.beforeSearch){
                            var state = window[data.beforeSearch]($(scope));
                            if(!state){return;}
                        }
                        var param = $(scope).sovals(), gridId = data.grid;
                        if (data.tab) {
                            var sli = $('li.tabs-selected', data.tab), inx = $('.tabs li', data.tab).index(sli);
                            gridId += (inx + 1);
                        }
                        $grid.load(gridId, param);
                        return false;
                    });
                }
            });
        }
    },
    soGeitPinyin : function(txtCls){
      var cls = txtCls || '.so-pinyin';
      if($(cls).length){
        $(cls).each(function () {
          var _self = $(this);
          var data = $T.data(this);
          // window.console && console.log(data);
          var target  = data.target;
          if($(target).length){
            var $target = $(target);
            _self.blur(function () {
              var txt = $.trim($(this).val());
              if (txt.length) {
                $ajax.post(data.url, {input:txt}).done(function (rst) {
                  $target.val(rst.pinyin);
                });
              } else {
                $target.val(txt);
              }
            });
          }
        });
      }
    },
    formAEnterFun : function(callback,formCls,firstFocus){//表单输入框回车事件支持
      setTimeout(function () {
          var $form = $(formCls?formCls:'.form-enter');
          $form.find('.textbox-text').each(function (){
            var _self = $(this);
            var $sourInput = _self.parents('.textbox').prev('.required');//查找源对象是否有class required
            if ($sourInput.length) {_self.addClass('required')};
          });

          $form.find(':text').blur(function () {
            $(this).val($.trim($(this).val()));
          });

          var $input = $form.find(':input,.btn-easyFormSubmit').filter(':visible');
          $input.keydown(function(e) {
              if (e.keyCode == 13) {
                  if ($(this).hasClass('btn-easyFormSubmit')) {return;};
                  var ix = $input.index(this);
                  // window.console && console.log(ix);
                  $input.eq(ix+1).focus();
                  return false;
              };
          });
          // $form.find('.textbox-text').focus(function () {//获取焦点时自动下拉
          //   var $prev = $(this).parents('.combo').prev();
          //   if ($prev.hasClass('easyui-combogrid')||$prev.hasClass('easyui-combobox')||$prev.hasClass('easyui-combotree')) {
          //     $prev.combo('showPanel');
          //   }
          // });

          firstFocus&&$input&&$input.eq(0).focus();//如果开启首输入自动获得焦点则执行
          callback&&callback();
          $('.tooltip').remove();
      },400);
    },
    formAEnterFunB : function (callback,formCls) {//表单输入框回车事件支持，部分特殊输入框的处理

      setTimeout(function () {//重置输入框回车事件

          var $form = $(formCls?formCls:'.form-enter');

          $form.find('.textbox-text').each(function (){
            var _self = $(this);
            var $sourInput = _self.parents('.combo').prev('.required');
            if ($sourInput.length) {_self.addClass('required')};
          });

          var $input = $form.find(':input.required,.btn-easyFormSubmit').filter(':visible');
          //$("input:disabled")
          // window.console && console.log($input);
          $input.keydown(function(e) {//required输入框进入获取下一焦点
              if (e.keyCode == 13) {
                  if ($(this).hasClass('btn-easyFormSubmit')) {return;};
                  var ix = $input.index(this);
                  // window.console && console.log(ix);
                  $input.eq(ix+1).focus();
                  return false;
              };
          });

          $form.find('.textbox-text').focus(function () {//获取焦点时自动下拉
            var $prev = $(this).parents('.combo').prev();
            if ($prev.hasClass('easyui-combogrid')||$prev.hasClass('easyui-combobox')||$prev.hasClass('easyui-combotree')) {
              $prev.combo('showPanel');
            }
          });
          $input&&$input.eq(0).focus();
          // window.console && console.log($input.eq(0));
          callback&&callback();
      },500);
    },
    soDate : function(cls,opt){
      var dateFmtType = {
        date : 'yyyy-MM-dd',
        time : 'yyyy-MM-dd HH:mm:ss',
        month : 'yyyy-MM'
      }
      $(cls).addClass('Wdate').each(function () {
        var _self = $(this);
        var data = $.extend(true,{
          type : 'date',
          dateFmt : 'yyyy-MM-dd',
          minDate:'1920-01-01',
          maxDate:'2060-01-01',
          errDealMode : 1,//自动纠错
          inline : false
        },opt||{},$T.data(_self) || {});

        if (_self.hasClass('inline')|| data.inline) {
          var sw = 100;
          if(data.type=='time'){sw = 160;}
          _self.css('width', sw);
        };

        data.dateFmt = data.format || dateFmtType[data.type];
        if(data.maxDate instanceof Date){
          data.maxDate = $.fmtDate(data.dateFmt,data.maxDate);
        }
        if(data.minDate instanceof Date){
          data.minDate = $.fmtDate(data.dateFmt,data.minDate);
        }
        // if (_self.hasClass('required')) {};
        // window.console && console.log(data);
        _self.click(function () {

          WdatePicker(data);
        });
      });
    },
    reset : function (formCls) {
      $(formCls).form('reset');
    },
    clickResetForm : function (btnCls) {
        $(btnCls).click(function () {
            var $form = $(this).parents('form');
            $form.form('reset');
        });
    },
    /**
     * 页面控件初始化集合
     */
    someMix: function ($par) {
        var me = this;
        var $par = $par? $($par) : $('body');
        $T.placeHolder.init();//对低版本浏览器placeholder属性的兼容

        if($('.so-pinyin').length){//获取拼音输入框初始化
          me.soGeitPinyin();
        }
        if ($('.so-date').length) {//日期控件初始化
          me.soDate('.so-date');
        }
        if ($('.so-rangeDate').length) {//日期范围控件初始化
            me.rangeDate();
        }
        if($('.so-weekDate').length){//日期选择周控件初始化
          me.rangeWeek();
        }

        // if ($(".so-form .btn-cancel").length) {
        //     $(".so-form .btn-cancel").click(function () {
        //         $pop.closePop();
        //     });
        // }
        if ($(".btn-cancel").length) {//表单里的关闭按钮，关闭事件
            $(".btn-cancel").click(function () {
                $pop.closePop();
            });
        }
        if ($(".btn-resetForm").length) {//重置表单
            me.clickResetForm('.btn-resetForm');
        }
        if ($(".btn-closePop").length) {//表单里的关闭按钮，关闭事件
            $(".btn-closePop").click(function () {
                $pop.closePop();
            });
        }
        if ($('.form-enter').length) {//回车替代tab事件
          me.formAEnterFun();
          // me.formAEnterFunB();
        };

      // 下拉框初始化
      if ($(".so-select").length) {//初始化soSelect
        $(".so-select").soSelect();
      }

        if ($('.drop').length) {//drop通过rel来初始化选择值
            $('.drop').each(function () {
                var v = $(this).attr('rel');
                if (v) {$(this).val(v);};
            })
        };
        if ($('.op-newTab').length) {
          $('.op-newTab').click(function () {
            var _self = $(this);
            var title = _self.attr('title') || _self.text();
            var url = _self.attr('rel');
            $pop.newTabWindow(title,url);
            return false;
          });
        };

        if ($(':input[noNull],.required').length) {//时间和选择控件对应的必填输入框添加必填小三角样式
            $(':input[noNull],.required').each(function () {
              var _self = $(this);
              // if (_self.hasClass('so-time') || _self.hasClass('so-date')) {
              //     _self.addClass('txt-requireDate');
              // }
              if (_self.hasClass('so-choice') || _self.hasClass('so-pop')) {
                  _self.addClass('so-requirePop');
              }
            });
        }

        if ($('.so-drop').length) {//简单的easyui下拉控件初始化
            $('.so-drop').each(function () {
                var _self = $(this);
                var url = _self.attr('url');
                var required = _self.hasClass('required');
                _self.css({width:'100%'}).combobox({
                    url:url,
                    valueField:'value',
                    textField:'text',
                    onBeforeLoad : function (d) {
                        if (required) {
                            var $newTxt = _self.next('.combo').find('.textbox-text');
                            // _self.next('.combo').addClass('required');
                            //window.console && console.log($newTxt);
                            $newTxt.attr('placeholder','请选择...').addClass('required {required:true,messages:{required:"此项为必选"}}');
                            // .rules("add",{required:true});
                        };
                    }
                });
            });
        };

        if ($('.so-pop').length) {//sopop控件初始化，慢慢被easyui的comb控件替换，保留是为了兼容一些旧的事件
            $('.so-pop').each(function () {
                var _self = $(this);
                var rdm = Math.floor(Math.random()*1000000);
                var myOpt = $T.data(_self);

                if (myOpt.type=='tree') {
                    var pData = $.extend({
                        // type: null,//'tree'
                        url : null,//json url
                        valueId : null,
                        valuePid : null,
                         selectedId : null,
                        width:'400px',height:'300px',
                        title : '请双击选择',
                        value:'text',
                        justLeaf: false,
                        data : null,
                        flatData : true,
                        onDblClick : function (node) {}
                    },myOpt||{});

                $('body').append('<div id="popTreeP-'+rdm+'" class="pad15 none"><ul id="ul-Tree-'+rdm+'"></ul></div>');
                var alreadyRenderTree = false,treePop= null;
                  _self.click(function() {
                    treePop = layer.open({
                        type: 1,
                        content: $('#popTreeP-'+rdm),
                        area : [pData.width,pData.height],
                        title :pData.title,
                        btn:null
                      });

                        var treeOpt = {
                            animate : true,
                            lines : true,
                            url : pData.url,
                            data : pData.data,
                            flatData: pData.flatData,
                            onDblClick : function (node) {
                                //window.console && console.log(node);
                                if (pData.justLeaf&&node.children!=null) {return false;};
                                  _self.val(node[pData.value]);
                                   pData.selectedId = node.id;
                                  if (pData.valueId) {$('#'+pData.valueId).val(node.id)};
                                  if (pData.valuePid&&node.pid) {$('#'+pData.valuePid).val(node.pid)};
                                  layer.close(treePop);
                                  pData.onDblClick(node);
                            },
                            onLoadSuccess : function (node,data) {
                                pData.data = data;
                            }
                      }

                        if (!alreadyRenderTree) {
                            $('#ul-Tree-'+rdm).tree(treeOpt);
                            alreadyRenderTree = true;
                        }

                  });

                };

            if (myOpt.type =='grid') {//初始化popGrid
                 _self.click(function() {
                    myOpt.textId = myOpt.textId || this.name;
                    $pop.popGrid(myOpt,this);
                });
            };

          });
      };
    },
    rangeWeek : function ($weeker,opt) {
        var me = this;
        var $weeker =$weeker?$($weeker) : $('.so-weekDate');
        require(['moment'],function (moment) {

            var defOpt = {
                  locale :{
                    separator: ' 至 ',
                    format : 'YYYY-MM-DD'
                  },
                  weekPacker : true,
                  prevNextBtn : false,
                  beginStr : 'Begin',
                  endStr : 'End',
                  readonly : true,
                  width: 180,
                  // showCustomRangeLabel : false,
                  // alwaysShowCalendars:true,
                  autoApply : true,//日期范围不用确认，自动选择
                  linkedCalendars: false,//两个日历不一起联动，保证可以选择两个月以上的日期
                  // showDropdowns : true,//日期显示下拉框
                  alwaysShowCalendars : true,
                  singleDatePicker: true,
                  // showWeekNumbers:true,
                  minDate:'1920-01-01',
                  maxDate:'2060-01-01',
                  opens:'center',
                  autoUpdateInput : false,//关闭输入框自动赋值
                  init : function () {},
                  callback : function () {}
              };

              $weeker.each(function () {
                  var _self  = $(this);
                  var data = $.extend(true,defOpt,opt,$T.data(this)||{});
                  _self.width(data.width);//设置宽度
                  if(data.readonly){_self.attr('readonly','readonly');};//设置只读

                  var format = data.locale.format;
                  data.minDate = moment(data.minDate).day(0); //最小可选择日设置为当前日期的周日
                  data.maxDate = moment(data.maxDate).day(6);//最大可选择日设置为当前日期的周六


                  var txtVal = data.value?data.value : new Date();//初始化输入框值
                  var txtValArr = getWeekByday(data.value,format);
                  data.startDate = moment(txtValArr.start);
                  data.endDate = moment(txtValArr.end);

                  var  dataName = _self.attr('name');
                  var sname = dataName+data.beginStr;
                  var ename = dataName+data.endStr;
                  var rangeD = '<input type="hidden" id="'+sname+'" name="'+sname+'"><input type="hidden" id="'+ename+'" name="'+ename+'">';
                  _self.after(rangeD);
                  //window.console && console.log(data);
                  _self.daterangepicker(data,function(s,e,label){
                    dropPicker.call(this,s,e,label,_self,data,sname,ename);
                  });

                  if(data.prevNextBtn){
                      var $prevBtn = $('<span class="btn btn-small"><i class="icon icon-chevron_left"></i></span>');
                      var $nextBtn = $('<span class="btn btn-small"><i class="icon icon-chevron_right"></i></span>');
                      _self.before($prevBtn);
                      _self.after($nextBtn);

                      $prevBtn.click(function () {//上一周
                          prevNextE(_self,data,sname,ename,0);
                      });

                      $nextBtn.click(function () {//下一周
                          prevNextE(_self,data,sname,ename,1);
                      });
                  }

                // if (data.value) {//初始化输入框值

                setRangeDate(_self,txtValArr.start,txtValArr.end);
                _self.val(txtValArr.start + data.locale.separator + txtValArr.end);
                $('#'+sname).val(txtValArr.start);
                $('#'+ename).val(txtValArr.end);
                data.init.call(_self,moment(txtValArr.start),moment(txtValArr.end),data);
                // };
              });

              function prevNextE(_self,data,sname,ename,eType){//eType 0:prev,1:next;
                  var format = data.locale.format;
                  var separator = data.locale.separator;
                  var v = _self.val().split(separator);
                  var optype = ['subtract','add'][eType];//新日期是减还是加操作
                  v[0] = moment(v[0])[optype](7,'day');
                  v[1] = moment(v[1])[optype](7,'day');
                  var setIf = !eType? (v[0].diff(data.minDate)>=0):(data.maxDate.diff(v[1])>=0);//可设置值条件是(1?小于最大值:大于最小值)
                  if(setIf){//如果 prev : 大于最小日期, next:小于最大日期，即在日期范围内才可重置取值
                        _self.daterangepicker($.extend(data,{
                              startDate : v[0],
                              endDate : v[1]
                            }),function(s,e,label){
                              dropPicker.call(this,s,e,label,_self,data,sname,ename);
                        });
                        setRangeDate(_self,v[0],v[1]);
                        data.callback.call(_self,v[0],v[1],data);
                        v[0] = v[0].format(format);
                        v[1] = v[1].format(format);
                        $('#'+sname).val(v[0]);//赋值隐藏input
                        $('#'+ename).val(v[1]);
                        _self.val(v.join(separator));
                  }
              }
              function setRangeDate($o,start,end){//能为控件添加日期范围，用默认的data方式只能添加起始日期
                $o.data('daterangepicker').setStartDate(start);
                $o.data('daterangepicker').setEndDate(end);
              }

              function dropPicker(s,e,label,_self,data,sname,ename) {
                  var sday = s.day();//获取当前周几，周日为0，周一为1，周二为2，类推
                  var startDay,endDay;
                  var format = data.locale.format;
                  var separator = data.locale.separator;
                    startDay = s.day(0).format(format);//本周日
                    endDay = e.day(6).format(format);//本周六
                    setRangeDate(_self,startDay,endDay);
                  _self.val(startDay + separator + endDay);
                  $('#'+sname).val(startDay);//赋值隐藏input
                  $('#'+ename).val(endDay);
                  // window.console && console.log(this);
                  data.callback.call(_self,s,e,data);
              }

              function getWeekByday (day,format) {
                  var sday = moment(day).day();//获取当前周几，周日为0，周一为1，周二为2，类推
                  var week = {
                    start : null,
                    end : null
                  }
                    week.start = moment(day).day(0).format(format); //本周日
                    week.end = moment(day).day(6).format(format); //本周六
                  // window.console && console.log(week);
                  return week;
              }

          });

    },
    rangeDate : function ($range,opt) {
      var $range =$range?$($range) : $('.so-rangeDate');
        require(['moment'],function (moment) {
            var dateVals = {
              today : {s: moment() , e: moment()},
              yesterday : {
                s: moment().subtract(1, 'days') ,
                e: moment()
              },
              week : {
                s: moment().subtract(6, 'days') ,
                e: moment()
              },
              month : {
                s: moment().subtract(30, 'days') ,
                e: moment()
              },
              thisMonth : {
                s: moment().startOf('month'),
                e: moment().endOf('month')
              },
              prevMonth : {
                s: moment().subtract(1, 'month').startOf('month'),
                e: moment().subtract(1, 'month').endOf('month')
              }
            }
            var ranges = {
                '今天': [moment(), moment()],
                '昨天': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                '最近一周': [moment().subtract(6, 'days'), moment()],
                '最近30天': [moment().subtract(29, 'days'), moment()],
                '当月': [moment().startOf('month'), moment().endOf('month')],
                '上个月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
              }
              var defOpt = {
                    // singleDatePicker : singleDatePicker,
                    // startDate: moment().subtract(6, 'days'),
                    // endDate: moment(),
                    // showWeekNumbers :true,
                    // showCustomRangeLabel : false,
                    // alwaysShowCalendars:true,
                    // showDropdowns : true,//日期显示下拉框
                    format : 'YYYY-MM-DD',//默认格式
                    readonly:true,
                    timePicker : false,//带不带时间选择
                    single : false,//是否单日历
                    auto : true,//是否自动填写，不带清空输入框功能
                    minDate : '1920-01-01',
                    maxDate : '2060-01-01',
                    beginStr : 'Begin',
                    endStr : 'End',
                    val : null,//初始值，在dateVals中选择
                    autoApply : true,//日期范围不用确认，自动选择
                    linkedCalendars: false,//两个日历不一起联动，保证可以选择两个月以上的日期
                    ranges : ranges,
                    autoUpdateInput : true,
                    alwaysShowCalendars : true,
                    opens : 'center',
                    init : function () {},
                    callback : function () {}
                };
              $range.each(function () {
                var _self  = $(this);
                var data = $.extend(true,defOpt,opt||{},$T.data(this)||{});
                var format = data.format;
                data.singleDatePicker = data.singleDatePicker || data.single;//是否单选日期
                if(data.timePicker){data.timePicker24Hour= true;}
                if(data.readonly){_self.attr('readonly','readonly');}

                data = $.extend({
                  locale :{
                    separator: ' 至 ',
                    format : format,
                    cancelLabel: '清空'
                  }
                },data||{});
                if(data.width){_self.width(data.width);}

                if (!data.singleDatePicker) {//如果是选取范围，这里需要插入隐藏域来获取值
                  var  dataName = _self.attr('name');
                  var sname = dataName+data.beginStr;
                  var ename = dataName+data.endStr;
                  var rangeD = '<input type="hidden" class="'+sname+'" name="'+sname+'"><input type="hidden" class="'+ename+'" name="'+ename+'">';
                  _self.after(rangeD);
                };

                var val = data.val || 'today';

                var valtype = typeof(val);
                var $beginTxt = _self.next('.'+sname);
                var $endTxt = $beginTxt.next('.'+ename);
                if(valtype==='string'){
                  data.startDate = dateVals[val].s;
                  data.endDate = dateVals[val].e;
                }else if(valtype ==='object'){
                  data.startDate = moment().subtract(-val[0]*1, 'days');
                  data.endDate = moment().subtract(-val[1]*1, 'days');
                }
                var s = data.startDate.format(format),e = data.endDate.format(format);
                if (data.singleDatePicker) {//range初始化值
                  (!data.auto)&&_self.val(s);
                }else{
                  (!data.auto)&&_self.val( s + data.locale.separator + e);
                  $beginTxt.val(s);
                  $endTxt.val(e);
                }
                //window.console && console.log(s,e);
                data.init.call(_self);

                // window.console && console.log(data);
                if(data.auto){
                    _self.daterangepicker(data,function (s,e,label) {
                      if (!data.singleDatePicker) {
                        var stxt = s.format(format),etxt = e.format(format);
                          if(!data.auto){
                            _self.val( stxt + data.locale.separator + etxt)
                          }
                          $beginTxt.val(stxt);
                          $endTxt.val(etxt);
                      }
                      //window.console && console.log(this,s,e,label,_self);
                      data.callback.call(this,s,e,label,_self);
                    });
                }else{//是否自动填写，不带清空输入框功能
                  data.autoApply = false;
                  data.autoUpdateInput = false;
                  _self.daterangepicker(data);
                  _self.on('apply.daterangepicker', function(ev, picker) {
                        var s = picker.startDate,e = picker.endDate;
                        var stxt = s.format(format),etxt = e.format(format);
                         if (data.singleDatePicker) {
                              $(this).val(stxt);
                          }else{
                              $(this).val( stxt + data.locale.separator + etxt);
                              $beginTxt.val(stxt);
                              $endTxt.val(etxt);
                          }
                          data.callback.call(picker,s,e,picker.chosenLabel,_self);
                  });
                  _self.on('cancel.daterangepicker', function(ev, picker) {
                          $(this).val('');
                         if (!data.singleDatePicker) {
                            $beginTxt.val('');
                            $endTxt.val('');
                          }
                  });
                }
              });
          })
    },
    /**
     * 统一的表单验证
     */
     validate : function ($par) {
        var me = this;
        var $par = $par? $($par) : $('body');
        function submitFn(btn) {
          var $btn = $(btn);
          var $pForm = $btn.parents('.form-validate');
          var validate = $pForm.form("validate");
          if(validate){
            /*
              可配参数有(可以加在 按钮上，也可以加在form的data-opt中，按钮属性优先)：
              action : form提交地址，按钮上如果有action，按钮属性优先
              noconfirm : 不需要确认框就提示 为'true'执行，非布尔值
              msg : 自定义提示框信息，非 noconfirm状态显示
              noclosepop : 提交成功后，不执行关闭pop弹窗
              arrMode : 为'true'时， name相同的值以数组的形式返回，默认以 , 隔开的字符串
              ajaxJson : ajax方式提交表单数据

              data-opt中还可以配置 beforeCallback 与 callback(表单提交前、后返回事件)，值为全局里的函数名，多个函数用 || 隔开
             */
            var formData = $T.data($pForm);//form个性化附加数据
            var action = $btn.attr("action") || $pForm.attr('action') || formData.action;//表单请求地址
            var noconfirm = $btn.attr("noconfirm") || formData.noconfirm;//获取不弹窗提示确认，只能为true才不提示
            var msg = $btn.attr("msg") || formData.msg ||  "您确定要提交吗?";//确认框提示信息
            var noclosepop = $btn.attr("noclosepop") || formData.noclosepop;//表单提交后是否自动关闭弹窗
            var arrMode = $btn.attr("arrMode") || formData.arrMode;
            noclosepop = (noclosepop==='true'?true:false);
            msg = noconfirm==='true'? false : msg;
            arrMode = (arrMode==='true'?true:false);
            var jsonData = $btn.attr("json") || formData.json;
            var sendData = $pForm.sovals(!arrMode);

            var callSumbit = true;
            if (formData.beforeCallback){//提交之前事件函数名，多个可用 || 隔开
              var callName = formData.beforeCallback.split('||');
              $.each(callName,function (i,v) {
                callSumbit = window[v]&&window[v](formData,$pForm,sendData);
                return !!callSumbit;//为false提前跳出循环
              });
            }
            if (!callSumbit) {return;};

            formData = $T.data($pForm);//beforeCallback可能改变formData，这里重新获得一次
            // window.console && console.log(formData);

            sendData = $.extend(sendData,formData.params ||{});
            // window.console && console.log(jsonData);
            $btn.unbind('click');
            $ajax.post(action,sendData,{tip:msg,jsonData:jsonData,callback:function(){
                $btn.bind('click',function(){submitFn(this)});
              },cancelback:function(){
                $btn.bind('click',function(){submitFn(this)});
              },errback:function(){
                $btn.bind('click',function(){submitFn(this)});
              }}).done(function (rst) {
              if (rst.code==='200'||rst.code==='201') {
                //window.console && console.log(formData.callback);
                if (formData.callback){//提交之后事件函数名，多个可用 || 隔开
                  var callName = formData.callback.split('||');
                  $.each(callName,function (i,v) {
                    window[v]&&window[v](rst,formData);
                  });
                }
                if (formData.submitClear)$(formData.submitClear).val("");
                if(!noclosepop){//如果没有禁用关闭弹窗，则关闭自身
                  parent.window._refreshParent = true;
                  setTimeout(function(){
                    $pop.closePop();
                  },400);
                }

              }
              if (rst.code==='200'&&!msg) {
                layer.msg('信息提交成功',{icon:1,time: 1000});
              };
            });
          }
        }
       $('.btn-easyFormSubmit',$par).bind('click',function () {
         submitFn(this);
       });

     },
    wdDate: function (cls) {//日期范围选择组件
        cls = cls || '.wd_date';
        if (!$(cls).length) {
        } else {
            var start = $(cls).find("#" + $(cls).attr("data-start"));
            var end = $(cls).find("#" + $(cls).attr("data-end"));
            var target = $($(cls).attr("data-bind"));//关联按钮会触发
            if (end.length == 0)end = start;
            $(".first", cls).click(function () {
                var startDate = new Date(start.val().replace(/-/g, '/'));
                startDate.setDate(1);
                start.val($.fmtDate('yyyy-MM-dd', startDate));
                if (target.length)target.click();
            });
            $(".prev", cls).click(function () {
                var startDate = new Date(start.val().replace(/-/g, '/'));
                startDate.setDate(startDate.getDate() - 1);
                start.val($.fmtDate('yyyy-MM-dd', startDate));
                if (target.length)target.click();
            });
            $(".next", cls).click(function () {
                var endDate = new Date(end.val().replace(/-/g, '/'));
                endDate.setDate(endDate.getDate() + 1);
                end.val($.fmtDate('yyyy-MM-dd', endDate));
                if (target.length)target.click();
            });
            $(".last", cls).click(function () {
                var endDate = new Date(end.val().replace(/-/g, '/'));
                endDate.setMonth(endDate.getMonth() + 1);
                endDate.setDate(0);
                end.val($.fmtDate('yyyy-MM-dd', endDate));
                if (target.length)target.click();
            });
        }
    }
};

$(function () {
    $form.someMix();//存放比较零碎的
    $form.validate();
    $form.search();
});
