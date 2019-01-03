define(["easygridEdit"],function ($e) {
    var back  ={
        init : function (o) {
            var $str = o.$str,$$ = o.$$;

            $grid.newGrid("#navGridBox",{
                // fitParent: true,
                pagination : false,
                fitColumns : false,
                singleSelect : false,
                rownumbers : false,
                columns:[[
                  {title:'id',field:'id',checkbox:true,width:80},
                  {title:'病人类型',field:'ptType',width:60},
                  {title:'住院号',field:'inhosNo',width:70},
                  {title:'姓名',field:'name',width:60},
                  {title:'科室',field:'dept',width:70},
                  {title:'手术名称',field:'ssname',width:140,align:'left'}
                ]],
                onClickRow : function (index,row) {
                },
                onLoadSuccess : function () {
                },
                url:'json/opArrangeVoid.js',
                // height: 'auto',
                offset :0
              });


                var selData = null;
                $('#dropCostItem').combogrid({//费用项目下拉
                    panelWidth:570,
                    panelHeight : 'auto',
                    panelMaxHeight : 182,
                    striped:true,
                    mode : 'remote',
                    idField:'costItem',
                    textField:'costItem',
                    // editable : false,
                    limitToList : true,
                    reversed : true,
                    url:'json/costManageVoid.js',
                    columns:[[
                        {title:'收费项目',field:'costItem',width:200},
                        {title:'规格',field:'rule',width:110},
                        {title:'数量',field:'num',width:80},
                        {title:'单位',field:'unit',width:80},
                        {title:'单价',field:'price',width:80}
                    ]],
                    onSelect : function (val,record){
                        selData = record;
                    },
                    onHidePanel : function () {//下拉给相关赋值
                        console.log(selData);
                      $('#costRule').val(selData.rule);
                      $('#costUnit').val(selData.unit);
                      $('#costNum').numberspinner('setValue',selData.num);
                      $('#costPrice').numberspinner('setValue',selData.price);
                      $('#costMoney').val((selData.price*1000*selData.num*1000/1000000).toFixed(2));
                    },
                    required:true
                });



              var griNowdData = null;//暂存datagrid数据
              $grid.newGrid("#gridBox",{
                  // fitParent: true,
                  pagination : false,
                  fitColumns : false,
                // singleSelect : false,
                  columns:[[
                    {title:'id',field:'id',hidden:true,width:80},
                    {title:'操作',field:'op',width:70,formatter: function (v,row,index) {
                        return '<span class="s-op s-op-edit icon icon-edit" rel="'+index+'" title="编辑"></span>&nbsp;&nbsp;&nbsp;<span class="s-op s-op-del icon icon-del" rel="'+row.id+'" title="删除"></span>';
                      }},
                    {title:'状态',field:'state',width:80},
                    {title:'患者姓名',field:'name',width:70},
                    {title:'收费项目',field:'costItem',width:140},
                    {title:'规格',field:'rule',width:110},
                    {title:'数量',field:'num',width:60},
                    {title:'单位',field:'unit',width:80},
                    {title:'单价',field:'price',width:80},
                    {title:'金额',field:'money',width:80},
                    {title:'医保类型',field:'baoType',width:80},
                    // {title:'适应症',field:'bing',width:80},
                    {title:'开立科室',field:'dept',width:80},
                    {title:'开立医生',field:'doctor',width:60}
                    // {title:'备注',field:'remarks',width:120}
                  ]],
                  onClickRow : function (index,row) {
                  },
                  onLoadSuccess : function (data) {
                    griNowdData = data;
                  },
                  url:'json/costManageVoid.js',
                  // height: 'auto',
                  offset :-55
              });

              $('.btn-useTemp').click(function (){
                //   $pop.iframePop({
                //       title:'调用模板',
                //       content : 'costTemp.html',
                //       area : ['880px','500px']
                //   },['#gridBox']);

                    $page.load('js/testT.html',{
                        loadPageBack : function (page){
                            var $page = page.$page;
                            var popPage = $pop.open({
                                title:'调用模板',
                                content : $page,
                                area : ['880px','500px'],
                                end : function (){
                                    $page.remove();
                                }
                            });
                            return popPage;
                        }
                    });

              });

              $('.cont-grid-box').on('click','.s-op-del',function (){
                  var id = $(this).attr('rel');
                  $ajax.post('json/true.js',{id:id},{
                      tip: '你确定要删除此费用记录？',
                      success:function (rst){
                          $('#gridBox').datagrid('reload');
                      }
                  })
              });

              $('.cont-grid-box').on('click','.s-op-edit',function (){
                var idx = $(this).attr('rel');
                var rowData = griNowdData.rows[idx];
                $('.form-entryCost').form('load',rowData);
              });


              $('.btn-formClear').click(function () {
                $('.form-entryCost').form('reset');
              });

              window.afterSubmitCost = function(rst){
                //   window.console&&console.log(rst);
                $('.form-entryCost').form('reset');
                $('#gridBox').datagrid('reload');
              }

        }
    }
    return back;
});