define(["template","easygridEdit"],function(template,$e){
    var back  ={
        init : function () {

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
    }

    return back;
});