define(["template","easygridEdit"],function(template,$e){
    var back  ={
        init : function () {
            window.console&&console.log(11);
            var nowPtId = null;
            var tabPtId = [null,null,null,null,null];

            var fangInit = true;
            var dgeInit = true;
            $('#tabs').tabs({
                onSelect : function (title,index) {
                    window.console && console.log(title,index);
                    if (index ===1&&dgeInit) {
                        stationDegInit();
                        dgeInit = false;
                    };
                    if (index ===2&&fangInit) {
                        stationFangInit();
                        fangInit = false;
                    };

                    changeHTab();
                }
            });



            function changeHTab () {
                var tab = $('#tabs').tabs('getSelected');
                var index = $('#tabs').tabs('getTabIndex',tab);
                if (nowPtId!== tabPtId[index]) {
                    tabPtId[index] = nowPtId;
                    changeEvent[index]();
                };
            }

            var changeEvent = [//tab切换事件集合
                function listChange() {//患者列表
                window.console && console.log('listChange run');
                },
                function degChange() {//诊断
                window.console && console.log('degChange run');
                },
                function fangChange() {//医嘱
                window.console && console.log('fangChange run');
                $('#detailsGridBox').datagrid('reload',{id:nowPtId});
                $('.btn-oneFormReset').click();
                },
                function indexChange() {//首页
                // window.console && console.log('behosChange run');
                // $('#beHosGridBox').datagrid('reload',{id:nowPtId});
                // $('.btn-onebeHosFormReset').click();
                },
                function cfdpChange() {//护理记录
                window.console && console.log('cfdpChange run');
                }
            ];


            var tablen = $('.content-one').length;
            function changeTabState(state){
                for(var i = 1;i <tablen;i++){
                    $('#tabs').tabs(state,i);
                }
            }

        /* 患者列表初始化 */
        function stationListInit(){
            var disTab = true;
            //切换患者视图
            $('.btn-sel-d').click(function (){
                var ix = $(this).attr('rel');
                // window.console&&console.log(ix);
                $('.btn-sel-d').removeClass('btn-primary');
                $(this).addClass('btn-primary');
                $('.ptListview').addClass('hidden').eq(ix).removeClass('hidden')
            });

            //切换患者范围
            $('.btn-sel-c').click(function (){
                var ptKind = $(this).attr('rel');
                // window.console&&console.log(ptKind);
                $('.btn-sel-c').removeClass('btn-primary');
                $(this).addClass('btn-primary');
                $grid.reload('#gridBox-pt',{ptKind:ptKind});
            });

            $grid.newGrid("#gridBox-pt",{
                // fit: true,
                checkOnSelect : false,
                selectOnCheck : false,
                // singleSelect : false,
                // ctrlSelect : true,
                // pagination : false,
                fitColumns : false,
                columns:[[
                  {title:'id',field:'id',hidden:true},
                  {title:'科室',field:'costKind',hidden:true},
                  {title:'姓名(床号)',field:'costKindName',width:150},
                  {title:'名称',field:'applyScope',width:250},
                  {title:'规格',field:'applyScope',width:150},
                  {title:'价格',field:'applyScope',width:150},
                   {title:'数量',field:'applyScope',width:150}
                ]],
                onBeforeLoad : function (param) {
                },
                onLoadSuccess : function (data) {

                },
                url:'/json/costsMaintain.js',
                method: 'get',
                // height: 'auto',
                offset :-82
            });

            $(".card_list").on("click","li",function () {
                var _self = $(this);
                _self.siblings("li").removeClass("onSelect");
                _self.addClass("onSelect");
                nowPtId = _self.attr('id').split('-')[2];
                if(disTab){
                    disTab = false;
                    changeTabState('enableTab');
                }
            });
            changeTabState('disableTab');
        }

        stationListInit();

        //诊断初始化函数
        function stationDegInit () {
              var dgeHtml = template('pageDgeTem',{});
              $('.stationDgeBox').html(dgeHtml);

              var dgeInitData = {
                dept : '白内障科',
                optioner : '李白',
                dgeType : '1',
                maybe : '0'
              };

              var dgeEditIndex = null;
              $grid.newGrid("#detailsDgeGridBox",{
                  tools:[
                    [{iconCls:'plus_sign',text:'新增',title:'新增',click:function(){
                      dgeInitData.dgeType = $('#detailsDgeGridBox').datagrid('getRows').length?'0':'1';
                      $e.addNewRow({
                        grid :'#detailsDgeGridBox',
                        focusField : 'dgeName',
                        initData : dgeInitData,
                        onEnterNextRow : function (opt) {
                          dgeGridEnterNext();
                        }
                      });
                      dgeEditIndex = $('#detailsDgeGridBox').datagrid('getRows').length-1;
                    }},
                    {iconCls:'trash',btnCls:'danger',text:'删除',click:function (){
                        $e.delRows('#detailsDgeGridBox');
                      }},
                      {iconCls:'flag',text:'设为主要诊断',click:function (){
                          $e.ifEndEdit(function () {
                              var rows = $('#detailsDgeGridBox').datagrid("getSelections");
                              if (rows.length) {
                                var ix = $('#detailsDgeGridBox').datagrid("getRowIndex",rows[0]);
                                var allData = $('#detailsDgeGridBox').datagrid('getRows');
                                $.each(allData,function (i,v) {
                                  v.dgeType = (i == ix)?'1':'0';
                                });
                                $('#detailsDgeGridBox').datagrid('loadData',allData);
                                // window.console && console.log(allData);
                              }else{
                                $pop.msg('请选择需要设为主要诊断的行！');
                              };

                          },'#detailsDgeGridBox');

                      }}
                    ]
                  ],
                  // fitParent: true,
                  // fit: true,
                  checkOnSelect : false,
                  selectOnCheck : false,
                  // singleSelect : false,
                  ctrlSelect : true,
                  autoRowHeight : true,
                  pagination : false,
                  fitColumns : false,
                  // showFooter : true,
                  columns:[[
                    {title:'',field:'ck',checkbox:true},
                    {title:'诊断名称',field:'dgeName',width:180,editor:{
                        type:'combogrid',
                        options:{
                          panelWidth:540,
                          striped:true,
                          mode : 'remote',
                          idField:'dgeName',
                          textField:'dgeName',
                          // editable : false,
                          limitToList : true,
                          reversed : true,
                          url:'json/stationDgeList.js',
                          columns:[[
                              {title:'诊断名称',field:'dgeName',width:180},
                              {title:'病种',field:'disease',width:80},
                              {title:'诊断描述',field:'dgeDis',width:180},
                              {title:'诊断编码',field:'dgeCode',width:80}
                          ]],
                          onSelect : function (val,record){
                              // window.console && console.log(gridData);
                              var newData = {
                                disease : record.disease,
                                dgeDis : record.dgeDis,
                                dgeCode : record.dgeCode
                              };
                              // window.console && console.log(newData);
                              $e.setCellsVal(dgeEditIndex,newData,'#detailsDgeGridBox');//更新需要同步的单元格值
                          },
                          onChange : function () {
                            dgeEditIndex = $(this).parents('tr.datagrid-row').attr('datagrid-row-index');
                          },
                          required:true
                        }
                      }
                    },
                    {title:'病种',field:'disease',width:80,editor:{type:'readonly'}},
                    {title:'诊断描述',field:'dgeDis',width:180,editor:{type:'text'}},
                    {title:'诊断类型',field:'dgeType',width:80,formatter:function (v,row,index) {
                        return ['<span class="grey">次要</span>','<span class="red">主要</span>'][v];
                      }},
                    {title:'眼别',field:'whichEye',width:80,formatter:function (v,row,index) {
                        return ['','左眼','右眼','双眼'][v];
                      },editor:{type:'combobox',options:{
                          valueField: 'value',
                          textField: 'label',
                          limitToList : true,
                          reversed : true,
                          data: [{
                                label: '左眼',
                                value: '1'
                              },{
                                label: '右眼',
                                value: '2'
                              },{
                                label: '双眼',
                                value: '3'
                              }],
                          missingMessage : '请选择眼别',
                          required : true
                      }}},
                    {title:'诊断编码',field:'dgeCode',width:80,editor:{type:'readonly'}},
                    {title:'疑似诊断',field:'maybe',width:80,formatter:function (v,row,index) {
                        return v*1?'<span class="yellow">是</span>':'否';
                      },editor:{type:'combobox',options:{
                          valueField: 'value',
                          textField: 'label',
                          limitToList : true,
                          reversed : true,
                          data: [{
                                label: '否',
                                value: '0'
                              },{
                                label: '是',
                                value: '1'
                          }],
                          missingMessage : '请确定是否疑似诊断',
                          required : true
                      }}},
                    {title:'诊断科室',field:'dept',width:80},
                    {title:'诊断人',field:'optioner',width:80}
                  ]],
                  onClickCell : function (index, field, value){
                    dgeEditIndex = $e.editRow({
                      grid :'#detailsDgeGridBox',
                      index :index,
                      cellField : field,
                      focusField :'dgeName',
                      initData : dgeInitData,
                      onEnterNextRow : function (opt) {
                          dgeGridEnterNext();
                      }
                    });
                  },
                  onLoadSuccess : function (data) {

                  },
                  // url:'json/stationDgeList.js',
                  // height: dh
                  offset :-150
              });

              $grid.newGrid("#oftenDgeGrid",{
                  pagination : false,
                  fitColumns : true,
                  showHeader : false,
                  columns:[[
                    // {title:'id',field:'id',checkbox:true},
                    {title:'诊断名称',field:'dgeName',width:180}
                  ]],
                  onLoadSuccess : function (data) {

                  },
                  onClickRow : function (index,row) {
                    dgeInitData.dgeType = $('#detailsDgeGridBox').datagrid('getRows').length?'0':'1';
                    var insertData = $.extend(true,{},dgeInitData,row);
                    dgeEditIndex = $e.addNewRow({
                        grid :'#detailsDgeGridBox',
                        index :index,
                        focusField :'dgeName',
                        initData : insertData,
                        onEnterNextRow : function (opt) {
                          dgeGridEnterNext();
                        }
                    });
                  },
                  url:'json/stationDgeList.js',
                  // height: 'auto',
                  offset : -150
              });

              function dgeGridEnterNext () {
                  dgeInitData.dgeType = $('#detailsDgeGridBox').datagrid('getRows').length?'0':'1';
                  $e.addNewRow({
                      grid :'#detailsDgeGridBox',
                      focusField : 'dgeName',
                      initData : dgeInitData
                  });
                dgeEditIndex = $('#detailsDgeGridBox').datagrid('getRows').length-1;
              };

              $('.btn-dgeSave').click(function () {
                 // var saveData = $e.getChanges('#detailsDgeGridBox');//只获取变化数据
                 var saveData = $e.getGridData('#detailsDgeGridBox');//获取所有数据
                // window.console && console.log(saveData);
                if (saveData.length) {
                  window.console && console.log(saveData);
                }else{
                  $pop.msg('请填写诊断数据~');
                };
              });

        }



          function stationFangInit () {
              //初始化
              var fangHtml = template('pageFangTem',{});
              $('.stationFangBox').html(fangHtml);
              $('.form-AddOneItem').find('.easyui-combobox').combobox();
              $form.soDate($('.form-AddOneItem').find('.txt-date'));
              $('.form-AddOneItem').find('.txt-validate').validatebox();
              $('.form-AddOneItem').find('.easyui-numberspinner').numberspinner();
              $form.formAEnterFun(null,'.form-AddOneItem');
              $form.validate('.form-AddOneItem');

              var $subTabs = $('.stationFangBox .s-subtab');
              $subTabs.click(function (){
                var ix = $subTabs.index(this);
                $subTabs.removeClass('s-subtab-now');
                $(this).addClass('s-subtab-now');
                $('.subContBox').addClass('subContBoxHide').eq(ix).removeClass('subContBoxHide');
              });

              $('.contentName').combogrid({
                  panelWidth:960,
                  striped:true,
                  mode : 'remote',
                  idField:'item_name',
                  textField:'item_name',
                  limitToList : true,
                  reversed : true,
                  url:'json/purchaseDPlan.js',
                  columns:[[
                      {title:'药品名称',field:'item_name',width:180},
                      {title:'规格',field:'specifs',width:80},
                      {title:'生产厂家',field:'manufac_name',width:180},
                      {title:'单位',field:'unit',width:80},
                      {title:'全院库存',field:'kc',width:80},
                      {title:'消耗数量',field:'xhsh',width:80},
                      {title:'目标库存',field:'mbkc',width:80},
                      {title:'警戒库存',field:'jjkc',width:80},
                      // {title:'预计购入价',field:'purchase_price',width:80,editor:{type:'readonly'}},
                      {title:'预计购入数量',field:'apply_qty',width:100},
                      {title:'预计购入金额',field:'apply_money',width:100},
                      {title:'预计单价',field:'apply_celljg',width:80},
                      {title:'供应商',field:'apply_company',width:80},
                      {title:'备注',field:'remark',width:80}
                  ]],
                  onSelect : function (val,record){
                    window.console&&console.log(val,record);
                    $('#fangRule').val(record.specifs);
                    $('#fangDoseUnit').val(record.unit);
                    $('#fangUnit').val(record.unit);
                    $('#fangState').val(record.unit);
                    $('#fangNo').val(record.unit);
                  },
                  required:true
              });

              var fangGState={
                showCost :false,
                showCostB : false
              };
              var dh = $('.stationFangBox').height()-236;
              $grid.newGrid("#detailsGridBox",{
                tools:[
                    [
                        {iconCls:'trash',text:'删除',click:function (){

                            var checkedData = $e.getCheckedRows({grid : '#detailsGridBox'});
                            var canDelete = true;
                            var isFixed = false;
                            $.each(checkedData,function (i,v) {
                                if(v.canDelete != '1'){ canDelete = false; }
                                if(v.isFixed * 1 > 0){ isFixed = true; }
                            });
                            if(canDelete){
                                if(isFixed){
                                    //删除医嘱中有固定套餐的医嘱
                                    $ajax.post('/ui/outp/recipe/delOrders',JSON.stringify(checkedData),"选择了固定套餐中的医嘱，整个固定套餐医嘱将一起删除？",true).done(function (rst) {
                                        if (rst.code==='200'||rst.code==='201') {
                                            $("#detailsGridBox").datagrid('reload');
                                        };
                                    });
                                }else{
                                    $ajax.post('/ui/outp/recipe/delOrders',JSON.stringify(checkedData),true,true).done(function (rst) {
                                        if (rst.code==='200'||rst.code==='201') {
                                            $("#detailsGridBox").datagrid('reload');
                                        };
                                    });
                                }
                            }else{
                                $pop.alert('数据正在修改或者是申请单医嘱，不能删除！');
                            }
                        }}
                    ],
                    [{iconCls:'shrink2',text:'同组',click:function() {
                        //debugger;
                        var groupData = $('#detailsGridBox').datagrid('getChecked');
                        var canMerge = true;
                        var isFixed = false;
                        $.each(groupData,function (i,v) {
                            if(v.recipeKind != 1 && v.recipeKind != 2 && v.recipeKind != 3){canMerge=false;return false;}
                            if(v.isFixed * 1 > 0){isFixed=true;return false;}
                        });
                        if(!canMerge){
                            $pop.alert('选择了非药品医嘱，不能同组！');
                            return false;
                        }
                        if(isFixed){
                            $pop.alert('选择了固定套餐中的医嘱，不能同组！');
                            return false;
                        }
                        if($e.ifCanMerge(groupData)){
                            $ajax.post('/ui/outp/recipe/addCombiSeq',JSON.stringify(groupData),true,true).done(function (rst) {
                                if (rst.code==='200'||rst.code==='201') {
                                    $('#detailsGridBox').datagrid('reload');
                                };
                            });
                        }
                    }
                    },{iconCls:'enlarge2',text:'拆分', click : function() {
                        var enData = $e.getCheckedRows({grid : '#detailsGridBox'});
                        var canLarge = true;//combiSeq
                        $.each(enData,function (i,v) {
                            if(v.combiSeq===''){canLarge=false;return false;}
                        });
                        if(canLarge){
                            $ajax.post('/ui/outp/recipe/cancelCombiSeq',JSON.stringify(enData),true,true).done(function (rst) {
                                if (rst.code==='200'||rst.code==='201') {
                                    $('#detailsGridBox').datagrid('reload');
                                };
                            });
                        }else{
                            $pop.alert('请选择可以拆分的数据行！');
                        }

                    }
                    }],
                    [
                        {iconCls:'arrow-up',text:'向上',onlyOne:true,notNull:'请选择你要移动的记录！',click:function(){
                            debugger;
                            var rowData = $e.getMoveRows({grid:'#detailsGridBox',groupIds:'combiSeq',move:'up'});
                            //window.console&&console.log(rowData);
                            if(rowData&&rowData.data){
                                $ajax.post('/ui/outp/recipe/exchange',JSON.stringify(rowData.data),null,true).done(function (rst) {
                                    if (rst.code==='200'||rst.code==='201') {
                                        $('#detailsGridBox').datagrid('reload');
                                        selectRowIndex = rowData.index;
                                    };
                                });
                            }

                        }}
                        ,{iconCls:'arrow-down',text:'向下',onlyOne:true,notNull:'请选择你要移动的记录！',click:function(){
                        var rowData = $e.getMoveRows({grid:'#detailsGridBox',groupIds:'combiSeq',move:'down'});
                        if(rowData&&rowData.data){
                            $ajax.post('/ui/outp/recipe/exchange',JSON.stringify(rowData.data),null,true).done(function (rst) {
                                if (rst.code==='200'||rst.code==='201') {
                                    $('#detailsGridBox').datagrid('reload');
                                    selectRowIndex = rowData.index;
                                };
                            });
                        }
                    }}
                    ]
                ],
                  // fitParent: true,
                  // fit: true,
                  checkOnSelect : false,
                  selectOnCheck : false,
                  // singleSelect : false,
                  ctrlSelect : true,
                  pagination : false,
                  fitColumns : false,
                  // showFooter : true,
                  columns:[[
                    {title:'id',field:'id',checkbox:true},
                    {title:'操作',field:'op',width:80,formatter: function (v,row,index) {
                    return '<span class="s-op s-op-pause s-op-unuse icon-blocked" title="作废"></span>&nbsp;&nbsp;&nbsp;<span class="s-op s-op-del s-op-stop icon-switch" title="停止"></span>&nbsp;&nbsp;&nbsp;<span class="s-op s-op-uneye icon-uneye" title="屏蔽"></span>'
                    //'<span class="s-op s-op-up icon-arrow-up" title="向上"></span> <span class="s-op s-op-down icon-arrow-down" title="向下"></span>'
                    }},
                    {title:'',field:'group',width:25,formatter : function (v,row,index) {
                      return '<span class="s-rowGroup"></span>';
                    }},
                    {title:'医嘱内容',field:'content',width:180},
                    {title:'规格',field:'rule',width:120},
                    {title:'剂量',field:'dose',width:80},
                    {title:'剂量单位',field:'doseUnit',width:100},
                    {title:'给药途径',field:'drugChanel',width:80},
                    {title:'眼别',field:'whichEye',width:80},
                    {title:'频率',field:'frequency',width:80},
                    {title:'滴速',field:'speed',width:80},
                    {title:'天数',field:'days',width:80},
                    {title:'总量',field:'total',width:80},
                    {title:'单位',field:'unit',width:80},
                    {title:'执行科室',field:'section',width:80},
                    {title:'附加执行科室',field:'subsection',width:80},
                    {title:'状态',field:'state',width:80},
                    {title:'单号',field:'no',width:120}
                  ]],
                  rowStyler:function(index,row){
                    if (row.canEdit===false){
                      return 'background-color:#eee;color:#999;';
                    }
                  },
                  onCheck : function (index,row) {
                    if(row.canEdit===false){
                      $(this).datagrid('uncheckRow',index);
                    }
                  },
                  onSelect : function (index,row) {
                    // if(row.canEdit===false){
                    //   $(this).datagrid('unselectRow',index);
                    // }
                  },
                  onCheckAll : function (rows) {
                    $.each(rows,function (i,v) {
                        if(v.canEdit===false){
                          $('#detailsGridBox').datagrid('uncheckRow',i);
                        }
                    })
                  },
                  onBeforeLoad : function (param) {
                    // if (!param.id) {
                    //   return false;
                    // };
                  },
                  onClickRow : function (index,row) {
                  // window.console && console.log(fangGState.showCost);
                    if (fangGState.showCost) {//如果开启了显示费用面版
                      var cts = $e.getGroupFieldByRow({
                          grid : '#detailsGridBox',
                          groupIds : 'groupId',
                          row : row,
                          field : 'content',
                          returnString : true
                      });
                        $('#detailsCostGridBox').datagrid('reload',{
                            id : cts
                        });
                      };
                  },
                  onLoadSuccess : function (data) {
                    $(this).parent('.datagrid-view').find(".datagrid-header-check").html("");
                    $e.initMergeRows({
                        grid:'#detailsGridBox',
                        strArr : ['rule','dose','doseUnit']
                    });
                  },
                  url:'json/stationFang.js',
                  height: dh
                  // offset :-62
              });



              $grid.newGrid("#detailsGridBoxB",{
                tools:[
                    [
                        {iconCls:'trash',text:'删除',click:function (){

                            var checkedData = $e.getCheckedRows({grid : '#detailsGridBoxB'});
                            var canDelete = true;
                            var isFixed = false;
                            $.each(checkedData,function (i,v) {
                                if(v.canDelete != '1'){ canDelete = false; }
                                if(v.isFixed * 1 > 0){ isFixed = true; }
                            });
                            if(canDelete){
                                if(isFixed){
                                    //删除医嘱中有固定套餐的医嘱
                                    $ajax.post('/ui/outp/recipe/delOrders',JSON.stringify(checkedData),"选择了固定套餐中的医嘱，整个固定套餐医嘱将一起删除？",true).done(function (rst) {
                                        if (rst.code==='200'||rst.code==='201') {
                                            $("#detailsGridBoxB").datagrid('reload');
                                        };
                                    });
                                }else{
                                    $ajax.post('/ui/outp/recipe/delOrders',JSON.stringify(checkedData),true,true).done(function (rst) {
                                        if (rst.code==='200'||rst.code==='201') {
                                            $("#detailsGridBoxB").datagrid('reload');
                                        };
                                    });
                                }
                            }else{
                                $pop.alert('数据正在修改或者是申请单医嘱，不能删除！');
                            }
                        }}
                    ],
                    [{iconCls:'shrink2',text:'同组',click:function() {
                        //debugger;
                        var groupData = $('#detailsGridBoxB').datagrid('getChecked');
                        var canMerge = true;
                        var isFixed = false;
                        $.each(groupData,function (i,v) {
                            if(v.recipeKind != 1 && v.recipeKind != 2 && v.recipeKind != 3){canMerge=false;return false;}
                            if(v.isFixed * 1 > 0){isFixed=true;return false;}
                        });
                        if(!canMerge){
                            $pop.alert('选择了非药品医嘱，不能同组！');
                            return false;
                        }
                        if(isFixed){
                            $pop.alert('选择了固定套餐中的医嘱，不能同组！');
                            return false;
                        }
                        if($e.ifCanMerge(groupData)){
                            $ajax.post('/ui/outp/recipe/addCombiSeq',JSON.stringify(groupData),true,true).done(function (rst) {
                                if (rst.code==='200'||rst.code==='201') {
                                    $('#detailsGridBoxB').datagrid('reload');
                                };
                            });
                        }
                    }
                    },{iconCls:'enlarge2',text:'拆分', click : function() {
                        var enData = $e.getCheckedRows({grid : '#detailsGridBox'});
                        var canLarge = true;//combiSeq
                        $.each(enData,function (i,v) {
                            if(v.combiSeq===''){canLarge=false;return false;}
                        });
                        if(canLarge){
                            $ajax.post('/ui/outp/recipe/cancelCombiSeq',JSON.stringify(enData),true,true).done(function (rst) {
                                if (rst.code==='200'||rst.code==='201') {
                                    $('#detailsGridBoxB').datagrid('reload');
                                };
                            });
                        }else{
                            $pop.alert('请选择可以拆分的数据行！');
                        }

                    }
                    }],
                    [
                        {iconCls:'arrow-up',text:'向上',onlyOne:true,notNull:'请选择你要移动的记录！',click:function(){
                            debugger;
                            var rowData = $e.getMoveRows({grid:'#detailsGridBoxB',groupIds:'combiSeq',move:'up'});
                            //window.console&&console.log(rowData);
                            if(rowData&&rowData.data){
                                $ajax.post('/ui/outp/recipe/exchange',JSON.stringify(rowData.data),null,true).done(function (rst) {
                                    if (rst.code==='200'||rst.code==='201') {
                                        $('#detailsGridBoxB').datagrid('reload');
                                        selectRowIndex = rowData.index;
                                    };
                                });
                            }

                        }}
                        ,{iconCls:'arrow-down',text:'向下',onlyOne:true,notNull:'请选择你要移动的记录！',click:function(){
                        var rowData = $e.getMoveRows({grid:'#detailsGridBoxB',groupIds:'combiSeq',move:'down'});
                        if(rowData&&rowData.data){
                            $ajax.post('/ui/outp/recipe/exchange',JSON.stringify(rowData.data),null,true).done(function (rst) {
                                if (rst.code==='200'||rst.code==='201') {
                                    $('#detailsGridBoxB').datagrid('reload');
                                    selectRowIndex = rowData.index;
                                };
                            });
                        }
                    }}
                    ]
                ],
                  // fitParent: true,
                  // fit: true,
                  checkOnSelect : false,
                  selectOnCheck : false,
                  // singleSelect : false,
                  ctrlSelect : true,
                  pagination : false,
                  fitColumns : false,
                  // showFooter : true,
                  columns:[[
                    {title:'id',field:'id',checkbox:true},
                    {title:'操作',field:'op',width:80,formatter: function (v,row,index) {
                    return '<span class="s-op s-op-pause s-op-unuse icon-blocked" title="作废"></span>&nbsp;&nbsp;&nbsp;<span class="s-op s-op-uneye icon-uneye" title="屏蔽"></span>'
                    //'<span class="s-op s-op-up icon-arrow-up" title="向上"></span> <span class="s-op s-op-down icon-arrow-down" title="向下"></span>'
                    }},
                    {title:'',field:'group',width:25,formatter : function (v,row,index) {
                      return '<span class="s-rowGroup"></span>';
                    }},
                    {title:'医嘱内容',field:'content',width:180},
                    {title:'规格',field:'rule',width:120},
                    {title:'剂量',field:'dose',width:80},
                    {title:'剂量单位',field:'doseUnit',width:100},
                    {title:'给药途径',field:'drugChanel',width:80},
                    {title:'眼别',field:'whichEye',width:80},
                    {title:'频率',field:'frequency',width:80},
                    {title:'滴速',field:'speed',width:80},
                    {title:'天数',field:'days',width:80},
                    {title:'总量',field:'total',width:80},
                    {title:'单位',field:'unit',width:80},
                    {title:'执行科室',field:'section',width:80},
                    {title:'附加执行科室',field:'subsection',width:80},
                    {title:'状态',field:'state',width:80},
                    {title:'单号',field:'no',width:120}
                  ]],
                  rowStyler:function(index,row){
                    if (row.canEdit===false){
                      return 'background-color:#eee;color:#999;';
                    }
                  },
                  onCheck : function (index,row) {
                    if(row.canEdit===false){
                      $(this).datagrid('uncheckRow',index);
                    }
                  },
                  onSelect : function (index,row) {
                    // if(row.canEdit===false){
                    //   $(this).datagrid('unselectRow',index);
                    // }
                  },
                  onCheckAll : function (rows) {
                    $.each(rows,function (i,v) {
                        if(v.canEdit===false){
                          $('#detailsGridBoxB').datagrid('uncheckRow',i);
                        }
                    })
                  },
                  onBeforeLoad : function (param) {
                    // if (!param.id) {
                    //   return false;
                    // };
                  },
                  onClickRow : function (index,row) {

                    // window.console && console.log(fangGState.showCostB);
                    if (fangGState.showCostB) {//如果开启了显示费用面版
                      var cts = $e.getGroupFieldByRow({
                          grid : '#detailsGridBoxB',
                          groupIds : 'groupId',
                          row : row,
                          field : 'content',
                          returnString : true
                      });
                        $('#detailsCostGridBoxB').datagrid('reload',{
                            id : cts
                        });
                      };
                  },
                  onLoadSuccess : function (data) {
                    $(this).parent('.datagrid-view').find(".datagrid-header-check").html("");
                    $e.initMergeRows({
                        grid:'#detailsGridBoxB',
                        strArr : ['rule','dose','doseUnit']
                    });
                  },
                  url:'json/stationFang.js',
                  height: dh
                  // offset :-62
              });


              var wh = $(window).height();
              var showCodeH = wh>900?250:156;

              $grid.newGrid("#detailsCostGridBox",{
                  // fitParent: true,
                  // checkOnSelect : false,
                  // selectOnCheck : false,
                  // singleSelect : false,
                  // ctrlSelect : true,
                  pagination : false,
                  fitColumns : true,
                  columns:[[
                    // {title:'id',field:'id',checkbox:true},
                    {title:'收费项目',field:'costItem',width:220},
                    {title:'规格',field:'rule',width:80},
                    {title:'单位',field:'unit',width:80},
                    {title:'数量',field:'num',width:80},
                    {title:'单价',field:'price',width:80},
                    {title:'金额',field:'totalprice',width:80},
                    {title:'执行科室',field:'section',width:80},
                    {title:'项目编码',field:'itemCode',width:110}
                  ]],
                  onBeforeLoad : function (param) {
                    if (!param.id) {
                      return false;
                    };
                  },
                  onLoadSuccess : function (data) {

                  },
                  url:'json/stationFangCost.js',
                  height: showCodeH-4
              });


              $grid.newGrid("#detailsCostGridBoxB",{
                  // fitParent: true,
                  // checkOnSelect : false,
                  // selectOnCheck : false,
                  // singleSelect : false,
                  // ctrlSelect : true,
                  pagination : false,
                  fitColumns : true,
                  columns:[[
                    // {title:'id',field:'id',checkbox:true},
                    {title:'收费项目',field:'costItem',width:220},
                    {title:'规格',field:'rule',width:80},
                    {title:'单位',field:'unit',width:80},
                    {title:'数量',field:'num',width:80},
                    {title:'单价',field:'price',width:80},
                    {title:'金额',field:'totalprice',width:80},
                    {title:'执行科室',field:'section',width:80},
                    {title:'项目编码',field:'itemCode',width:110}
                  ]],
                  onBeforeLoad : function (param) {
                    if (!param.id) {
                      return false;
                    };
                  },
                  onLoadSuccess : function (data) {

                  },
                  url:'json/stationFangCost.js',
                  height: showCodeH-4
              });


              $('.btn-oneFormReset').click(function () {
                var formCls = $(this).attr('rel');
                resetAddOneItem(formCls);
              });

                function resetAddOneItem(formCls){
                    $('.'+formCls).form('reset');
                    $('.'+formCls).find('.txt-hidden').val('');
                }
        //detailsGridBox
        //detailsCostGridBox

              function showCodeE(handler,gridbox,grid,costState){
                    var $gridbox = $(gridbox),$grid = $(grid);
                    $(handler).click(function () {
                    var _self = $(this);
                    if (_self.hasClass('hideCode')) {
                        _self.removeClass('hideCode');
                        var h = $gridbox.height();
                        $grid.datagrid('resize', {height:h+showCodeH});
                      fangGState[costState]  = false;
                        // $('#detailsCostGridBox').datagrid('loadData',{});
                    }else{
                        _self.addClass('hideCode');
                        var h = $gridbox.height();
                        $grid.datagrid('resize', {height:h-showCodeH});
                      fangGState[costState]  = true;
                    };

                });
              }

              showCodeE('#showCodeHandlerA','#gridFangBoxA','#detailsGridBox','showCost');
              showCodeE('#showCodeHandlerB','#gridFangBoxB','#detailsGridBoxB','showCostB');


              window.formAddOneItem = function (optData,$form) {
                var formData = $form.sovals();
                // window.console && console.log(formData);
                $('#detailsGridBox').datagrid('appendRow',formData);
                resetAddOneItem('form-AddOneItem');
              }


              window.formAddOneItemB = function (optData,$form) {
                var formData = $form.sovals();
                // window.console && console.log(formData);
                $('#detailsGridBoxB').datagrid('appendRow',formData);
                resetAddOneItem('form-AddOneItemB');
              }

              $('.pageFangR .handlerAreaSide').click(function () {
                  var _self = $(this);
                  var ex = _self.hasClass('extend');
                  if(ex){
                      _self.removeClass('extend');
                      $('.pageFangR').removeClass('pageFangR-show');
                  }else{
                      _self.addClass('extend');
                      $('.pageFangR').addClass('pageFangR-show');
                  };
              });

              $('.pageFangL').on('click',function () {
                  $('.pageFangR .handlerAreaSide').removeClass('extend');
                  $('.pageFangR').removeClass('pageFangR-show');
              });




              var $tabLi = $('.likeTabsC li');//树切换
              $tabLi.click(function () {
                var ix = $tabLi.index(this);
                $tabLi.removeClass('now');
                $(this).addClass('now');
                $('.tabCont').addClass('tabContHide').eq(ix).removeClass('tabContHide');
                return false;
              });


              $grid.newGrid("#oftenFangGrid",{
                  pagination : false,
                  fitColumns : false,
                  showHeader : false,
                  columns:[[
                    // {title:'id',field:'id',checkbox:true},
                    {title:'操作',field:'op',width:35,formatter: function (v,row,index) {
                        return '<span class="s-op s-op-del s-op-delFItem icon-del" rel="'+row.id+'" title="删除"></span>';
                    }},
                    {title:'诊断名称',field:'dgeName',width:105}
                  ]],
                  onLoadSuccess : function (data) {
                    $('.s-op-delFItem').click(function (){
                        var id = $(this).attr('rel');
                        $ajax.post('json/true.js',{id:id},'你确定删除此记录吗？').done(function (rst) {
                          // window.console && console.log(rst);
                          if (rst.code==='200'||rst.code==='201') {
                              $('#oftenFangGrid').datagrid('reload');
                          };
                      });
                    });

                  },
                  onClickRow : function (index,row) {
                    window.console&&console.log(row);
                  },
                  url:'json/stationDgeList.js',
                  // height: 'auto',
                  offset : -75
              });

              //治疗方案树初始化
              $('#ul-kindTree').tree({
                  animate : true,
                  lines : true,
                  url:'json/groupTree.js',
                  flatData: true,
                  onClick : function (node) {
                    treeClickNode(node,'请选择治疗方案明细');
                  }
              });


              function treeClickNode(node,title){
                //window.console && console.log(node);
                // if(node.pid==null || node.pid=='' || node.pid=='dept'){
                //   return false;
                // }
                // var id = node.id;
                // var visitNumber = $('#curRegNumber').val();
                // var patientId = $('#curPatientId').val();
                // var patientName = $('#curPatientName').val();
                // $pop.iframePop({
                //   title : title,
                //   content : encodeURI('${base}/ui/outp/doctorStation/selectTemplDetail?id='+id+'&visitNumber='+visitNumber+'&patientId='+patientId+'&patientName='+patientName),
                //   area : ['880px','550px']
                // },'#detailsGridBox');

              var id = node.id;
              $pop.iframePop({
                title : title,
                content : 'FangPopTem.html?id='+id,
                area : ['880px','550px']
              },'#detailsGridBox');

              }



              $(window).resize(function () {
                  var whh = $(window).height();
                  showCodeH = whh>900?250:156;
                  toggleCostGrid('#showCodeHandlerA','#detailsGridBox','#detailsCostGridBox','showCost');
                  toggleCostGrid('#showCodeHandlerB','#detailsGridBoxB','#detailsCostGridBoxB','showCostB');
              });

            // showCodeE('#showCodeHandlerA','#gridFangBoxA','#detailsGridBox',showCost);
            // showCodeE('#showCodeHandlerB','#gridFangBoxB','#detailsGridBoxB',showCostB);

              window.toggleCostGrid =  function (handler,mainGrid,costGrid,costState,toggle){
                var $handler = $(handler),$mainGrid= $(mainGrid),$costGrid=$(costGrid);
                  var h = $('.stationFangBox').height()-236;
                  var hide = $handler.hasClass('hideCode');
                  var handle = toggle?!hide:hide;
                  // window.console && console.log(handle);
                  if(handle){
                      setTimeout(function () {
                        $handler.addClass('hideCode');
                        $mainGrid.datagrid('resize', {height:h-showCodeH});
                        $costGrid.datagrid('resize', {height:showCodeH});
                      },100);
                      var selectedRow = $mainGrid.datagrid('getSelected');
                      if(selectedRow){
                          var ids = $e.getGroupFieldByRow({
                              grid : mainGrid,
                              groupIds : 'combiSeq',
                              row : selectedRow,
                              field : 'tempId',
                              returnString : true
                          });
                            $costGrid.datagrid('reload',{
                              id :ids
                          });

                      }
                    fangGState[costState] = true;
                  }else{
                      setTimeout(function () {
                        $handler.removeClass('hideCode');
                        $mainGrid.datagrid('resize', {height:h});
                        $costGrid.datagrid('resize', {height:showCodeH});
                      },100);
                    fangGState[costState] = false;
                      try{
                        $costGrid.datagrid('loadData',{});
                      }catch(e){
                          //window.console&&console.log(e);
                      }
                  }

              }




              $('.btn-fangSave').click(function () {
                var saveData = $('#detailsGridBox').datagrid('getData');
                window.console && console.log(saveData);
              });

              $('.btn-fangRefund').click(function () {
                  $pop.iframePop({
                      title : '处方退费',
                      content : 'workstationFangReturnCost.html',
                      area : ['780px','500px']
                  },'#detailsGridBox');
              });

              $('.btn-fangCheckApply').click(function () {
                  $pop.iframePop({
                      title : '检查申请',
                      content : 'examineApply.html',
                      area : ['780px','530px']
                  });
              });

              $('.btn-fangTestApply').click(function () {
                  $pop.iframePop({
                      title : '检验申请',
                      content : 'checkApply.html',
                      area : ['780px','530px']
                  });
              });

              $('.btn-fangOpApply').click(function () {
                  $pop.iframePop({
                      title : '手术申请',
                      // area : ['780px','600px'],
                      content : 'operationApply.html'
                  });
              });

              $('.btn-fangEditScheme').click(function () {
                  $pop.iframePop({
                      title : '编辑治疗方案',
                      // area : ['780px','600px'],
                      content : 'workstationFangEditTem.html'
                  });
              });

            }




        }
    }

    return back;
});