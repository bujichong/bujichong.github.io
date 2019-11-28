define(["template"],function(template){
    var back  ={
        init : function () {
            var tablen = $('.content-one').length;
            function changeTabState(state){
                for(var i = 1;i <tablen;i++){
                    $('#tabs').tabs(state,i);
                }
            }

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
    }

    return back;
});