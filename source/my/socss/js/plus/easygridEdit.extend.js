define(['pub'],function(){
  var edit = {
    eIndex : undefined,//当前编辑指针
    outEndInit : false,
    disableAdd : function (grid) {
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      $(grid).data('disadd',true);
    },
    canAdd : function (grid) {
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      $(grid).data('disadd',false);
    },
    disableEdit : function (grid){
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      $(grid).data('disedit',true);
    },
    canEdit : function (grid) {
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      $(grid).data('disedit',false);
    },
    outClickEndEdit : function (grid,onEndEdit) {
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      // window.console && console.log('outClickEndEdit running');
        $(document).on('click',function(e) {
          // window.console && console.log(e);
          var $p = $(e.target).parents('.datagrid-btable');
          var $p2 = $(e.target).parents('.datebox-calendar-inner');
            if(!$p.length && !$p2.length){
                me.endEditing(grid,onEndEdit);
                // window.console && console.log('click end');
            }
        });
    },
    validateGrid : function (grid,o) {//不进入编辑状态对grid的数据有效性进行验证
      var me = this;
      var o = o ||{};
      var grid = grid || '#gridBox';//默认值 #gridBox
      if (!me.endEditing(grid)){return false;}
      var rows = !o.checked?$(grid).datagrid('getData').rows:$(grid).datagrid('getChecked');
      var opt = $(grid).datagrid('options').columns;
      var fieldArr = [];
      $.each(opt,function () {//轮询columns，提取field和对应的验证条件
        var _self = this;
          $.each(_self , function (i,v) {
            if (v.editor&&v.editor.options) {
              var txtOpt = v.editor.options;
              var txtO = {};
              if (txtOpt.required) {
                txtO.required = true;
              };
              if (txtOpt.validType) {
                txtO.validType = txtOpt.validType;
              };
              // window.console && console.log(txtO.required,txtO.validType);
              if (txtO.required || txtO.validType) {
                txtO.field = v.field;
                fieldArr.push(txtO);
              };
            };
          });
      });
      if (fieldArr.length) {//如果有编辑和验证条件，开始进行验证
        var errRowIndex = -1;
        $.each(rows, function (j,row) {
            var vh = true;
            $(grid).datagrid('selectRow', j);
            $.each(fieldArr, function (i,v) {
                var val = row[v.field];
                var validate,v1=true,v2 =true;
                if (v.required&&(val===''||val===undefined)) {v1 =  false;};//必填
                if (v.validType) {//validdType验证
                	if(v.validType instanceof Array){
                		$.each(v.validType, function (k,m){
                    		var validOpt = m.split(/\[|\]/);
                            // window.console && console.log(validOpt);
                            var validRule = validOpt[0];
                            var validParam = validOpt[1]?eval('['+validOpt[1]+']'):'';
                            // window.console && console.log(validOpt[1],validParam);
                            v2 = v2 && $.fn.validatebox.defaults.rules[validRule].validator.call(null,val,validParam);
                    	});
                	}
                	else{
                		var validOpt = v.validType.split(/\[|\]/);
                        // window.console && console.log(validOpt);
                        var validRule = validOpt[0];
                        var validParam = validOpt[1]?eval('['+validOpt[1]+']'):'';
                        // window.console && console.log(validOpt[1],validParam);
                        v2 = v2 && $.fn.validatebox.defaults.rules[validRule].validator.call(null,val,validParam);
                	}
                };
                validate = v1&&v2;
                if (!validate) {
                    // window.console && console.log(j,row.item_name);
                    errRowIndex = j;//获取到第一个错误行的index
                     //window.console && console.log(errRowIndex);
                    vh = false;
                    return false;
                };
              });
             return vh;
        });
        if (errRowIndex>-1) {
        	//找到 grid对应的 datagrid-view2，对应的错误行的第一个td
          var $p = $(grid).prev('div').find('.datagrid-btable').find('tr').eq(errRowIndex).find('td').eq(0).click();//trgiier错误行，进入编辑状态
          return false;//返回失败
        };
        $(grid).datagrid('clearSelections');
      };
      return true;
    },
    endEditing : function(grid,onEnd){//结束编辑
      
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      var $grid = $(grid);
      var disedit = $grid.data('disedit');
      var eIndex = $grid.data('eindex');
      var unvalidate = $('body').data('unValidEdit');
      if (unvalidate) {return true;}
      if (disedit) {return false;}
      if (eIndex == undefined){return true;}
      if ($grid.datagrid('validateRow', eIndex)){
        $grid.datagrid('endEdit', eIndex);//结束编辑
        $grid.datagrid('unselectRow', eIndex);//取消当前行选中状态
        $grid.removeData('eindex');//清除index
        // me.eIndex = undefined;
        if(onEnd){
            onEnd();
        }
        // window.console && console.log('end doing');
        return true;
      } else {
        $grid.parent('.datagrid-view').find('.datagrid-row-editing').find('.validatebox-invalid:first').focus();
        return false;
      }
    },
    ifEndEdit : function (fn,grid) {//判断是否处在编辑状态，编辑状态退出执行事件
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      if (me.endEditing(grid)){
        fn&&fn();
      }else{
        layer.msg('请完成编辑！',{icon:0});
        // $pop.msg('请完成编辑！');
      }
    },
    getGridData : function (grid) {//获取grid当前行数据
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      var rows = null;
      me.ifEndEdit(function () {
        rows = $(grid).datagrid('getRows');
      },grid);
      return rows;
    },
    getChanges : function(grid){//获取grid edit的变化
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      var rows = null;
      me.ifEndEdit(function () {
        rows = $(grid).datagrid('getChanges');
      },grid);
      return rows;
    },
    rejectChanges : function(grid){//放弃编辑
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      $(grid).datagrid('rejectChanges');
    },
    delRows : function(grid,selected){//删除row，checked : true|false => getChecked|getSelections
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      var rows;
      // if (me.endEditing(grid)){
        if(Object.prototype.toString.call(selected) === '[object Array]'){
          rows = selected;
        }else{
          rows= $(grid).datagrid(selected?"getSelections":"getChecked");
        }
        // window.console&&console.log(rows);
        if(rows.length){
          $.each(rows,function(){
            var ix = $(grid).datagrid('getRowIndex',this)
            $(grid).datagrid('deleteRow',ix);
          });
        }else{
          $pop.msg('请'+(selected?'选择':'勾选')+'需要删除的行！');
        }
      // }
    },
    getTxt : function (target,cellkey) {//获取同行的另一个字段
        var $tar = $(target);
        var $tr = $tar.parents('.datagrid-row');
        return $tr.find('td[field="'+cellkey+'"]').find('input');
    },
    getVal : function (target,cellkey) {//获取同行的另一个字段
        var $tar = $(target);
        var $tr = $tar.parents('.datagrid-row');
        return $tr.find('td[field="'+cellkey+'"]').find('input').val();
    },
    setVal : function (target,cellkey,val) {//设置同行的另一个字段
        var $tar = $(target);
        var $tr = $tar.parents('.datagrid-row');
        $tr.find('td[field="'+cellkey+'"]').find('input').val(val);
    },
    addNewRow : function(opt){//增加新的行
      //debugger;
      var me = this;
      var o = $.extend({
        grid : '#gridBox',// 对应的grid，默认为#gridBox
        focusField : null,//默认focus的字段
        canAdd : true,//行末尾回车是否可以新增行
        rowCanEdit : null,//function ($row,o.index) {}判断某行是否可以编辑，如果有函数return true才可以编辑，否则不可以编辑
        onEnterNextRow : null,//回车换行回调函数
        onBeforeEdit : function (index,$grid) {},
        onEndEdit : null,//当行退出编辑时执行
        initData : {}//新增行初始化默认数据
      },opt||{});
      var initD = $.extend(true, {}, o.initData);
      var canAdd = (!$(o.grid).data('disadd'))&&o.canAdd;
      if (canAdd&&me.endEditing(o.grid,o.onEndEdit)){
        $(o.grid).datagrid('appendRow',initD);
        var ix = $(o.grid).datagrid('getRows').length-1;
        me.editRow({
          grid : o.grid,
          index : ix,
          focusField : o.focusField,
          rowCanEdit : o.rowCanEdit,
          onEnterNextRow : o.onEnterNextRow,
          onBeforeEdit : o.onBeforeEdit,
          onEndEdit : o.onEndEdit,//当行退出编辑时执行
          initData : initD
        });
        
        return ix;
      }
    },
    editRow : function(opt){//编辑行
      var o = $.extend(true,{
        grid : '#gridBox',//对应的grid，默认为#gridBox
        index : null,//行index
        cellField : null,//当前cell 的field
        focusField : null,//默认focus的字段
        canAdd : true,//行末尾回车是否可以新增行
        rowCanEdit : null,//function ($row,o.index) {}判断某行是否可以编辑，如果有函数return true才可以编辑，否则不可以编辑
        onEnterNextRow : null,//回车换行回调函数
        onBeforeEdit : function (index,$grid) {},
        onEndEdit : null,//当行退出编辑时执行
        initData : {}//新增行初始化默认数据
      },opt||{});
      var me = this;
      //window.console && console.log(o.grid);
      // window.console&&console.log(o.cellField);
      var $grid = $(o.grid);
      var outEndInit = $grid.data('outendedit');
      if(!outEndInit){//外部点击结束编辑
        me.outClickEndEdit(o.grid,o.onEndEdit);
        $grid.data('outendedit',true);
        // me.outEndInit = true;
      };
      // window.console&&console.log(me.eIndex,index);
      var eIndex = $grid.data('eindex');
      if (eIndex != o.index){

          var $gridWrap = $grid.parent('.datagrid-view');
          var $row = $gridWrap.find('.datagrid-row[datagrid-row-index="'+o.index+'"]');
          var canedit = $row.attr('canedit');//获取是否被合并不能编辑
          if (canedit==='merge') {//合并后的行不允许编辑，会造成列错乱
            layer.msg('合并后的行不能编辑！',{offset:'t'});
            return false;
          };

          if(o.rowCanEdit  && !o.rowCanEdit($grid.datagrid('getRows')[o.index],o.index)){//如果不满足行可以编辑条件，退出编辑
              // o.index = o.index+1;
              // if($grid.datagrid('getRows')[o.index]){//如果下一行存在，跳到下一行编辑
              //   me.editRow(o);
              // }
              return false;
          }
          if (me.endEditing(o.grid,o.onEndEdit)){//如果通过验证可以结束上一次编辑
            var rowLen = $grid.datagrid('getRows').length;
            // window.console&&console.log('index:'+index+',rowLen:'+rowLen);
            if(o.index>=rowLen){//如果行号大于现在所有行，此行不存在
              // me.addNewRow(o.focusField,o.grid,o.initData);
              if (o.canAdd) {
                  me.addNewRow({
                    grid: o.grid,
                      focusField : o.focusField,
                      canAdd : o.canAdd,
                      onEnterNextRow : o.onEnterNextRow,
                      onBeforeEdit : o.onBeforeEdit,
                      onEndEdit : o.onEndEdit,//当行退出编辑时执行
                      initData : o.initData
                  });
              };
            }else{//此行存在
                $grid.datagrid('selectRow', o.index).datagrid('beginEdit', o.index);//开启选中行编辑
                eIndex = o.index;
                 $grid.data('eindex',o.index);
                 o.onBeforeEdit(eIndex,$grid);
                // window.console && console.log(eIndex);
              var ed = $grid.datagrid('getEditor', { index: eIndex, field: o.cellField});
              if (!ed) { ed = $grid.datagrid('getEditor', { index: eIndex, field: o.focusField })}
                if (ed) {
                    var $t = $(ed.target);
                    if ($t.hasClass('combo-f')||$t.hasClass('textbox-f')) {
                      $t = $t.parents('.x-editor').find('.textbox-text');
                    };
                    $t.focus();//选中行第一个字段focus

                    // var $txt = $("input.datagrid-editable-input");
                    var $txt = $gridWrap.find(".datagrid-row-editing input:visible,.datagrid-row-editing textarea:visible").filter(function () {
                      if ($(this).hasClass('txt-editable-readonly')) {return false;};
                      return true;
                    });

                    // var $txt = $(".datagrid-row-editing .datagrid-editable-input,.datagrid-row-editing .textbox-text")
                    // window.console && console.log($txt);
                    $txt.each(function(i,v){
                      $(this).keyup(function(e){//绑定输入框keyup
                        if(e.keyCode==13){//回车到下一个输入框事件
                          var $next = $txt.eq(i+1);
                          if($next&&$next.length){//不是最后一个输入框
                            if($next.hasClass('combobox-f')){$next = $txt.eq(i+2)};//跳过下拉控件的隐藏输入框
                            $next.focus();
                          }else{//最后一个输入框，跳到下一行
                              // if (o.canAdd) {
                                  var ix = eIndex+1;
                                  o.index = ix;
                                  //window.console&&console.log('最后输入框事件...',ix);
                                  // window.console && console.log(o.initData);
                                  if (o.onEnterNextRow) {
                                    if (o.onEnterNextRow(o,$(this))) {me.editRow(o)};
                                  }else{
                                    me.editRow(o);
                                  };
                                  //$('.datagrid-row-selected').removeClass('datagrid-row-selected');
                              // };
                          }
                        }
                      });
                    });
                    return eIndex;
                }else{
                  window.console && console.log('焦点字段不存在或没有设置为编辑状态！');
                };
              }
          } else {
              $grid.datagrid('selectRow', eIndex);
              $('.validatebox-invalid,.textbox-invalid .textbox-text',$gridWrap).each(function(i,v){//所有没有通过验证的输入框
                if(i===0){$(this).focus();return false;}//第一个被focus
              });
          }

        };
    },
    setCellsVal : function (index,data,grid) {
      var grid = grid || '#gridBox';//默认值 #gridBox
      var  $grid = $(grid);
      $.each(data,function (k,v) {
          var $cell = $grid.datagrid('getEditor', {index:index,field:k});
          if($cell){
            $cell.actions.setValue($cell.target,v);
          }
      });
    },
    getCellVals : function (fields,grid) {
      var grid = grid || '#gridBox';//默认值 #gridBox
      var  $grid = $(grid);
      var index = $grid.prev().find('.datagrid-row-editing').attr('datagrid-row-index')*1;
      var seled = $grid.datagrid('getRows')[index];
      if(!index&&(index!==0)){
        seled = $grid.datagrid('getSelected');
        index = $grid.datagrid('getRowIndex',seled);
      }
      var isString = typeof(fields) === 'string';
      if(isString){fields = [fields];}
      var vals = {};
      vals.index = index;
      $.each(fields,function (i,v) {
          var $cell = $grid.datagrid('getEditor', {index:index,field:v});
          if($cell)
        	  vals[v] = $cell.actions.getValue($cell.target);
          else{
        	  vals[v] = seled[v];
          }
      });
      return isString?vals[fields]:vals;
    },
    setCellVals : function (data,grid) {
      var grid = grid || '#gridBox';//默认值 #gridBox
      var  $grid = $(grid);
      var index = $grid.prev().find('.datagrid-row-editing').attr('datagrid-row-index');
      if(!index&&(index!==0)){
        var seled = $grid.datagrid('getSelected');
        index = $grid.datagrid('getRowIndex',seled);
      }
      $.each(data,function (k,v) {
          var $cell = $grid.datagrid('getEditor', {index:index,field:k});
          if($cell){
            $cell.actions.setValue($cell.target,v);
          }
      });
    },
    getGroupFieldByRow : function (opt) {//根据row信息返回field，主要用在有成组行，返回对应组行的所有field信息，默认返回数组
       var o = $.extend({
          grid : '#gridBox',//grid的id
          row : null,//需要传入被选择的行数据
          groupIds: 'groupId',//组标识
          field : 'id',//需要返回的field
          returnString : false,//返回格式是否是字符串，默认为数组
       },opt||{});
       //debugger;
        var  $grid = $(o.grid);
        var groupArr = [];
        if(o.row[o.groupIds]){
            var rowsData = $grid.datagrid('getRows');
            $.each(rowsData,function (i,v) {
                if(v[o.groupIds] == o.row[o.groupIds]){
                    groupArr.push(v[o.field]);
                }
            });
        }else{
          groupArr.push(o.row[o.field]);
        }
        return o.returnString?groupArr.join(','):groupArr;
    },
    getUDRow : function (type,grid,ix,len) {
        var me = this;
        var rix = null;
        if(type=='up'){
            while(ix>=0){
              var todown = $(grid).datagrid('getData').rows[ix];
              if(todown.rowMerge){
                ix--;
              }else{
                rix = ix;
                break;
              }
            }
        }

        if(type=='down'){
            while(ix<len){
              var todown = $(grid).datagrid('getData').rows[ix];
              if(todown.rowMerge){
                ix++;
              }else{
                rix = ix;
                break;
              }
            }
        }
        return rix;
    },
    _sortRow : function (index, type, grid) {//排序
      var me = this;
      if ("up" == type) {
        if (index != 0) {
           // var todownIx = index-1;

            var toup = $(grid).datagrid('getData').rows[index];
            if(toup.rowMerge){
              $pop.msg('不能移动已经合并过的组！');
              return false;
            }
            var todownIx = me.getUDRow('up',grid,index-1);
            if(todownIx!==null){
                var todown = $(grid).datagrid('getData').rows[todownIx];
                $(grid).datagrid('getData').rows[index] = todown;
                $(grid).datagrid('getData').rows[todownIx] = toup;
                $(grid).datagrid('refreshRow', index);
                $(grid).datagrid('refreshRow', todownIx);
                $(grid).datagrid('selectRow', todownIx);
              }
        }
      } else if ("down" == type) {
          var rows = $(grid).datagrid('getRows').length;
          if (index != rows - 1) {
              var todown = $(grid).datagrid('getData').rows[index];
              if(todown.rowMerge){
                  $pop.msg('不能移动已经合并过的组！');
                  return false;
              }
              var toupIx = me.getUDRow('down',grid,index+1,rows);
              if(toupIx!==null){
                  var toup = $(grid).datagrid('getData').rows[toupIx];
                  $(grid).datagrid('getData').rows[toupIx] = todown;
                  $(grid).datagrid('getData').rows[index] = toup;
                  $(grid).datagrid('refreshRow', index);
                  $(grid).datagrid('refreshRow', toupIx);
                  $(grid).datagrid('selectRow', toupIx);
              }
          }
      }
    },
    _nbSortRow : function (grid) {
        var me = this;
        var grid = grid || '#gridBox';//默认值 #gridBox
        var  $grid = $(grid);

        var chkedRows = $grid.datagrid("getChecked");
        var firstIx = $grid.datagrid("getRowIndex",chkedRows[0]);
        var rowsData = $grid.datagrid("getRows");
        // window.console && console.log('所有行数据：',rowsData,' ；被选择行数据：',chkedRows,'；被选择第一行index：',firstIx);
        // $grid.datagrid("loadData",chkedRows);
        var checkedIxArr = [];
        $.each(chkedRows,function (i,v) {
          if(i>0){
            checkedIxArr.push($grid.datagrid("getRowIndex",v));
          }
        });
        // window.console && console.log(checkedIxArr);
        var chkedLen = checkedIxArr.length;
        if(chkedLen>0){
            for (var i = chkedLen-1; i >= 0; i--) {
              rowsData.splice(checkedIxArr[i], 1);
            };
            for (var i = chkedLen ; i > 0; i--) {
              //window.console && console.log(i);
              rowsData.splice(firstIx+1,0,chkedRows[i]);
            };
        }
        // window.console && console.log(rowsData);
        $grid.datagrid("loadData",rowsData);
        callback&&callback(chkedRows);
        return chkedRows;
    },
    sgNO :0,
    getSgNO : function(groupNO,grid){
      var me = this;
      me.sgNO = 0;
      var grid = grid || '#gridBox';
      var $grid = $(grid);
      var rows = $grid.datagrid('getRows');
      $.each(rows,function (i, v) {
        var n = v[groupNO];
        if(n&&n*1>me.sgNO){me.sgNO =n*1;}
      });
    },
    sortMergeRows: function (opt) {
        var me = this;
        var o = $.extend({
          grid : '#gridBox',//grid
          groupNO : null,//为成组添加序列号
          merge : false,//是否合并对应的行
          callback : null//返回事件
        },opt||{});
        var  $grid = $(o.grid);
        var chkedRows = $grid.datagrid("getChecked");
        if(o.merge&&(!me.ifCanMerge(chkedRows))){//如果需要合并，判断是否可以合并
          return false;
        }
        // window.console && console.log(o);
        var firstIx = $grid.datagrid("getRowIndex",chkedRows[0]);
        // var rowsData = $grid.datagrid("getRows");
        // window.console && console.log('所有行数据：',rowsData,' ；被选择行数据：',chkedRows,'；被选择第一行index：',firstIx);
        $.each(chkedRows,function (i,v) {
            if(i>0){
              var ix = $grid.datagrid("getRowIndex",v);
              $grid.datagrid("deleteRow",ix);
            }
        });
        var chkedLen = chkedRows.length;
        if(chkedLen>1){
            if(o.groupNO){
              me.getSgNO(o.groupNO,o.grid);
              //window.console && console.log(me.sgNO);
              me.sgNO++;
              chkedRows[0][o.groupNO] = me.sgNO;
            }
            for (var i = chkedLen-1; i > 0; i--) {
              // window.console && console.log(i);
              if(o.groupNO){
                chkedRows[i][o.groupNO] = me.sgNO;
              }
              $grid.datagrid("insertRow",{
                index : firstIx+1,
                row : chkedRows[i]
              });
            };
        }

        if(o.merge){
            me.mergeRowsCells($.extend({
                grid : o.grid,
                data : chkedRows
            },o.merge ||{}));
        }

        $grid.datagrid('clearChecked');
        // window.console && console.log(rowsData);
        o.callback&&o.callback(chkedRows);
        return chkedRows;
    },
    moveRowUp : function (grid) {//往上
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      me.ifEndEdit(function () {
        var row = $(grid).datagrid('getSelected');
        var index = $(grid).datagrid('getRowIndex', row);
        me._sortRow(index, 'up', grid);
      },grid);
    },
    moveRowDown : function (grid) {//往下
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      me.ifEndEdit(function () {
        var row = $(grid).datagrid('getSelected');
        var index = $(grid).datagrid('getRowIndex', row);
        me._sortRow(index, 'down', grid);
      },grid);
    },
    getMoveRows : function (opt) {
      var me = this;
      var o = $.extend({
          grid : '#gridBox',//grid
          groupIds : 'groupId',//成组的标识
          move : 'up',
          callback : null//返回事件
      },opt||{});
      var $grid = $(o.grid);
      var row = $grid.datagrid('getSelected');
      if(row&&row[o.groupIds]){
        var groupId = row[o.groupIds];
        var rows =$grid.datagrid('getRows');
        var ix = $grid.datagrid('getRowIndex',row);
        var otherRow = rows[o.move=='up'?(ix-1):(ix+1)];
        if(otherRow&&otherRow[o.groupIds]===groupId){
          var returnRows = o.move=='up'?[otherRow,row]:[row,otherRow];
          var nowIx = o.move=='up'?(ix-1):(ix+1);
          o.callback&&o.callback(returnRows,nowIx);
          return {data:returnRows,index:nowIx};
        }else{
          $pop.msg(o.move=='up'?'已经是组内第一条了！':'已经是组内最后一条了！');
        }
      }else{
          $pop.msg('只能移动同组内的医嘱');
      }
    },
    ifCanMerge : function (rows) {
        if(rows.length<=1){
            $pop.msg('请选择多行进行合并！');
            return false;
        }
        var canMerge = true;
        $.each(rows,function (i,v) {
            if(v.rowMerge){
                canMerge = false;
                return false;
            }
        });
        if(!canMerge) {
            $pop.msg('不能合并已经合并过的组！');
        };
        return canMerge;
    },
    initMergeRows : function (opt) {//根据数据初始化合并行成组
      var me = this;
      var o = $.extend({
          grid : '#gridBox',//grid
          groupIds : 'groupId',//成组的标识
          data : {},//如果有data，则直接使用data
          groupKeys : null,//成组key
          markMerge : false,//页面有合并拆分操作，需开启markMerage
          strArr : null,//需要合并的字段，为数组
          callback : null//返回事件
      },opt||{});

      var  $grid = $(o.grid);
       var rows = o.data.rows || $grid.datagrid("getData").rows;
       var groupO = {};
       $.each(rows,function (i,v) {
           if(v[o.groupIds]){
              var groupId = o.groupKeys?v[o.groupKeys]+v[o.groupIds]:v[o.groupIds];//如果有多出来的成组key
              if(groupId){//如果成组
                  if(!groupO[groupId]){
                   groupO[groupId] = [];
                  }
                  groupO[groupId].push(v);
              }
           }
       });
        // window.console && console.log(groupO);
       $.each(groupO,function (k,v) {
         // window.console && console.log(k);
         me.mergeRowsCells($.extend(o,{data:v,needMsg:false}));
       });
    },
    getCheckedRows : function (opt) {
      var me = this;
      var o = $.extend({
          grid : '#gridBox',//grid
          callback : null//返回事件
      },opt||{});
      var  $grid = $(o.grid);
       var checked = $grid.datagrid("getChecked");
       var rows = $grid.datagrid("getData").rows;
       var realChecked = [];
       // window.console && console.log(checked);
       if(checked.length){
          $.each(checked,function (i,v) {
            // window.console && console.log(v);
            if(!v.mergeLength){realChecked.push(v);}
            if(v.mergeLength>1){
                realChecked.push(v);
                var rowIx = $grid.datagrid('getRowIndex',v);
                for (var i = 1; i < v.mergeLength; i++) {
                  realChecked.push(rows[rowIx+i]);
                };
            }
          });
          // window.console && console.log(checked);
          o.callback&&o.callback(realChecked,$grid);
          return realChecked;
       }else{
          $pop.msg('没有选择任何行！');
          return [];
       }
    },
    mergeRowsCells : function (opt) {//合并行单元格
      var me = this;
      var o = $.extend({
          grid : '#gridBox',//grid
          strArr : [],//需要合并的字段，为数组
          data : null,
          callback : null,//返回事件
          markMerge : true,//为false的时候，不做标记，加快执行效率，页面有合并拆分操作，需设为true开启markMerage
          needMsg :true
      },opt||{});

      var  $grid = $(o.grid);


      me.ifEndEdit(function () {
          var rows = o.data || $grid.datagrid("getChecked");
          // window.console && console.log(rows);
          if (rows&&rows.length>1) {
            // var canMerge = me.ifCanMerge(rows);
            // if(!canMerge) {return false;};
            var rowLen = rows.length;
            var firstIx = null;
            var $gridWrap = $grid.parent('.datagrid-view');

            var cellCommonData = {};//同组后，将合并值设置为第一行数据的对应值
            if(o.strArr&&o.strArr.length){
              $.each(o.strArr,function(j,v){
                cellCommonData[v] = rows[0][v];
              });
            }
            $.each(rows,function (i,v) {
                var ix = $grid.datagrid('getRowIndex',v);
                if(o.markMerge){
                    var rowData = $.extend(true,{
                      rowMerge : true,
                      mergeLength : i===0?rowLen:1
                    },cellCommonData ||{});
                    $grid.datagrid('updateRow',{
                      index : ix,
                      row : rowData
                    });
                }
                var $row = $gridWrap.find('.datagrid-row[datagrid-row-index="'+ix+'"]');
                $row.find('.s-rowGroup').addClass('groupThis');
                if(i>0){//隐藏checkbox
                    $row.find(':checkbox').hide();
                }else{
                  firstIx = ix;
                  $row.find('.s-rowGroup').addClass('groupThisFirst');
                }
                if(i == (rows.length-1)){
                  $row.find('.s-rowGroup').addClass('groupThisLast');
                }
            });
            !o.data&&$grid.datagrid('clearChecked');
            if(o.strArr&&o.strArr.length){
                $.each(o.strArr,function(j,v){
                    $grid.datagrid('mergeCells',{
                        index: firstIx,
                        field: v,
                        rowspan: rowLen
                    });
                });
              }
          }else{
              if(o.needMsg){layer.msg('请选择需要合并的多行！',{icon:0})};
          };
      },o.grid);
    },
    splitRowsCells : function (opt) {//拆分已合并的单元格
      var me = this;
      var o = $.extend({
          grid : '#gridBox',//grid
          groupNO : null,//是否需要重置groupNO，需要则填写对应字段名，null则不需要
          data : null,
          callback : null//返回事件
      },opt||{});

      var  $grid = $(o.grid);

      var rows = o.data || $grid.datagrid("getChecked");
      // window.console && console.log(rows);
      // var $gridWrap = $grid.parent('.datagrid-view');
      if (rows&&rows.length) {
          $.each(rows, function (i,v) {
              var ni = $grid.datagrid("getRowIndex",v);
              // var $tr = $gridWrap.find('.datagrid-row[datagrid-row-index="'+ni+'"]');
              var mergeLength = v.mergeLength;//获取合并了多少行
              if (mergeLength) {
                for (var i = 0; i < mergeLength; i++) {//根据当前行往下找行并刷新
                  // var $row = $gridWrap.find('.datagrid-row[datagrid-row-index="'+ni+'"]');
                  var temR = {
                    rowMerge : false,
                    mergeLength : 1
                  };
                  if(o.groupNO){temR[o.groupNO]='';}
                  $grid.datagrid('updateRow',{
                      index : ni,
                      row : temR
                  });
                  $grid.datagrid("refreshRow" , ni );
                  ni++;
                };
              };
          });
          $grid.datagrid('clearChecked');
          o.callback&&o.callback();
      }else{
          layer.msg('请选择拆分行！',{icon:0});
      };
    }
  }
  return edit;
});
