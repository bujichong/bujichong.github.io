define(function () {
    var back  ={
      init : function () {

        $('#loading-mask').hide();
        $grid.newGrid("#grid-l-card",{
            fit: true,
            pagination : false,
            // fitColumns : false,
            columns:[[
              {title:'卡类型',field:'cardkind',width:80},
              {title:'卡号',field:'cardno',width:80},
              {title:'状态',field:'state',width:80},
              {title:'发卡机构',field:'hos',width:80},
              {title:'发卡时间',field:'time',width:140,format:'yyyy-MM-dd'},
              {title:'发卡人',field:'man',width:80},
              {title:'备注',field:'remark',width:80}
            ]],
            onLoadSuccess : function () {
            },
            url:'json/card.js',
            height: 'auto'
            // ,offset :-55
        });

        $grid.newGrid("#grid-l-contact",{
            fit: true,
            pagination : false,
            // fitColumns : false,
            columns:[[
              {title:'患者称谓',field:'id',width:80},
              {title:'联系人姓名',field:'name',width:80},
              {title:'证件编码',field:'code',width:160},
              {title:'联系方式',field:'addr',width:80},
              {title:'证件类型',field:'cardtype',width:80},
              {title:'登记机构',field:'regpart',width:140},
              {title:'登记人',field:'regter',width:80},
              {title:'登记时间',field:'regtime',width:80,format:'yyyy-MM-dd'},
              {title:'备注',field:'remark',width:80}
            ]],
            onLoadSuccess : function () {
            },
            url:'json/contact.js',
            height: 'auto'
            // ,offset :-55
        });

        $grid.newGrid("#grid-l-money",{
            fit: true,
            pagination : false,
            // fitColumns : false,
            columns:[[
              {title:'交易时间',field:'dotime',width:80},
              {title:'交易类型',field:'dotype',width:80},
              {title:'交易单号',field:'dpno',width:80},
              {title:'交易场景',field:'dopalce',width:80},
              {title:'交易金额',field:'domoney',width:80},
              {title:'余额',field:'money',width:80},
              {title:'创建时间',field:'creattime',width:80,format:'yyyy-MM-dd'},
              {title:'创建医院',field:'fromhospital',width:80}
            ]],
            onLoadSuccess : function () {
            },
            url:'json/money.js',
            height: 'auto'
            // ,offset :-55
        });

        $grid.newGrid("#grid-l-prompt",{
            fit: true,
            pagination : false,
            // fitColumns : false,
            columns:[[
              {title:'提示内容',field:'content',width:120},
              {title:'备注',field:'remark',width:200},
              {title:'录入医院',field:'hospital',width:120},
              {title:'录入人',field:'inputer',width:80},
              {title:'录入时间',field:'inputtime',width:140,format:'yyyy-MM-dd HH:mm:ss'}
            ]],
            onLoadSuccess : function () {
            },
            url:'json/prompt.js',
            height: 'auto'
            // ,offset :-55
        });

        // $grid.newGrid("#grid-l-change",{
        //     fit: true,
        //     pagination : false,
        //     // fitColumns : false,
        //     // singleSelect : false,
        //     columns:[[
        //       // {title:'id',field:'id',checkbox:true,width:80},
        //       {title:'门诊号',field:'men',width:80},
        //       {title:'号别',field:'notype',width:80},
        //       {title:'科室',field:'part',width:100},
        //       {title:'医生',field:'doctor',width:80},
        //       {title:'就诊类别',field:'kind',width:80}
        //     ]],
        //     onLoadSuccess : function () {
        //     },
        //     url:'json/clist.js',
        //     height: 'auto'
        //     // ,offset :-55
        // });


        // $grid.newGrid("#grid-l-clist",{
        //     fit: true,
        //     pagination : false,
        //     // fitColumns : false,
        //     singleSelect : false,
        //     columns:[[
        //       {title:'id',field:'id',checkbox:true,width:80},
        //       {title:'门诊号',field:'men',width:80},
        //       {title:'号别',field:'notype',width:80},
        //       {title:'科室',field:'part',width:100},
        //       {title:'医生',field:'doctor',width:80},
        //       {title:'就诊类别',field:'kind',width:80}
        //     ]],
        //     onLoadSuccess : function () {
        //     },
        //     url:'json/clist.js',
        //     height: 'auto'
        //     // ,offset :-55
        // });


        var sideDataOpt = function(opt){
          return $.extend({
            // singleSelect : false,
            fit: true,
            pagination : false,
            fitColumns : false,
            columns:[[
              // {title:'id',field:'id',hidden:true},
              {title:'操作',field:'id',width:(opt.stype==='1')?90:60,formatter: function (value,row,index) {
                return '<span class="s-icon s-icon-op icon-share fs14 blue" title="退号"></span> '+((opt.stype==='1')?'　<span class="s-icon s-icon-op icon-loop fs14 green" title="换号"></span> ':'');
              }},
              {title:'挂号单号',field:'no',width:80},
              {title:'姓名',field:'name',width:80},
              {title:'性别',field:'sex',width:80},
              {title:'时间',field:'time',width:140,format:'yyyy-MM-dd HH:mm:ss'},
              {title:'年龄',field:'age',width:80},
              {title:'号别',field:'kind',width:120},
              {title:'科室',field:'part',width:120},
              {title:'医生',field:'doctor',width:80}
            ]],
            onLoadSuccess : function () {
            },
            url:'json/booking.js',
            height: 'auto'
          },opt||{});
        };

        $grid.newGrid("#grid-r-box",sideDataOpt({stype:'1'}));
        $grid.newGrid("#grid-r-box-2",sideDataOpt({stype:'2',url:'json/booking2.js'}));


        $('.btn-contact-repair').click(function  () {
          $util.iframePop({
            title : '修改联系人信息',
            content : 'userContact.html',
            area :['600px','350px']
          },'#grid-l-contact');
        });

        $('.btn-usertip-repair').click(function () {
          $util.iframePop({
            title : '修改联系人信息',
            content : 'userTip.html',
            area :['600px','280px']
          },'#grid-l-prompt');
        });

        $('.clinicOne').click(function () {
          var popc = layer.confirm('该患者是否确认挂林丁  主任医师的专科号<br />应收金额 <b>合计<span class="red"> 22 </span>元</b>', {icon: 0, title:null}, function(index){
              layer.close(index);
            });
        });

        $('.clinicO').click(function () {
          var popc = layer.confirm('该患者是否确认挂林丁  主任医师的专科号<br />应收金额 <b>合计<span class="red"> 22 </span>元</b>', {icon: 0, title:null}, function(index){
              layer.close(index);
            });
        });

      }
    };
    return back;
});