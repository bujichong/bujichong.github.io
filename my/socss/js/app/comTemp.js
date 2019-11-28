define(["easygridEdit"],function ($e) {
    var back  ={
        init : function (o) {
            var $str = o.$str,$$ = o.$$;

              $grid.newGrid($$(".navGridBox"),{
                fitParent: true,
                pagination : false,
                fitColumns : false,
                // singleSelect : false,
                rownumbers : true,
                columns:[[
                //   {title:'id',field:'id',checkbox:true,width:80},
                  {title:'模板名称',field:'ssname',width:140,align:'left'}
                ]],
                onClickRow : function (index,row) {
                    $$(".gridBox").datagrid('load',{id:row.id});
                },
                onLoadSuccess : function () {
                },
                url:'json/opArrangeVoid.js',
                // height: 'auto',
                offset :-2
              });


              $grid.newGrid($$('.gridBox'),{
                  fitParent: true,
                  pagination : false,
                  fitColumns : true,
                  singleSelect : false,
                  checkOnSelect : false,
                  selectOnCheck : false,
                  columns:[[
                    {title:'id',field:'id',checkbox:true,width:80},
                    {title:'收费项目',field:'costItem',width:190,align:'left'},
                    {title:'规格',field:'rule',width:140},
                    {title:'单价',field:'price',width:80},
                    {title:'数量',field:'num',width:60,editor:{type:'diy',options:{validType:'sInt["预计购入价必须为大于0的正整数"]',required:true,missingMessage:'请填写预计购入价'}}},
                    {title:'单位',field:'unit',width:80}
                  ]],
                  onClickCell : function (index, field, value){
                    editIndex = $e.editRow({
                        grid : $$('.gridBox'),
                        index :index,
                        cellField : field,
                        focusField :'num'
                    });
                  },
                  onLoadSuccess : function () {
                  },
                  url:'json/costManageVoid.js',
                  // height: 'auto',
                  offset :-2
              });

              $$('.btn-sure').click(function (){
                    var chkedRow = $$(".gridBox").datagrid('getChecked');
                    window.console&&console.log(chkedRow);
                    if(chkedRow.length){
                        $ajax.post({
                            url : 'json/true.js',
                            data : {chkedRow:chkedRow},
                            jsonData : true,
                            success:function(){
                                $('#gridBox').datagrid('reload');
                                $pop.close(o.loadOpt);
                            }
                        });
                    }else{
                        $pop.msg.warning('请选择模板行！');
                    }
                    return false;

              });
              $$('.btn-cancel').click(function (){
                $pop.close(o.loadOpt);
              });
        }
    }
    return back;
});