$btnSearch =  (function () {

    var btnSet = {};
    $(function () {
        // dom ready
       $(".search-btn").each(function () {
           if(btnSet[this.id]) { throw new Error("按钮组件有重名的ID:" + this.id + "请检查"); }
           btnSet[this.id] = new BtnSearch($(this));
        });
    });

     function BtnSearch (dom) {
        this.set = btnSet;
        this.el = dom;
        this.url = this.el.attr("url");
        this.ipt = this.el.find(".txt");
        this.btn = this.el.find(".btn");
        this.isOpen = false;

        this.selectRowIdx = -1;

        this.onGridSelect = function () {};
        this.onLoadSuccess= function () {};
        this.$grid = null;
        var self = this;
        var init = function () {
            self.$pop= $("<div class='searchPop' />");
            self.$gridbox = $("<div class='searchgrid' />");
            self.$pop.append(self.$gridbox);
            $("body").append(self.$pop);

            setTimeout(function () {
                self.$grid = self.$gridbox.datagrid({
                    fit: true,
                    pagination : true,
                    pageSize: 10,
                    // method : "get",
                    columns:[[
                        {title:'id',field:'id',width:80,hidden:true},
                        {title:'accountBalance',field:'accountBalance',width:80,hidden:true},
                        {title:'sex',field:'sex',width:80,hidden:true},
                        {title:'姓名',field:'name',width:60},
                        {title:'性别',field:'sexName',width:50},
                        {title:'出生日期',field:'birthday',width:110 , formatter: function(value,row,index){
                            return value.substring(0,10);
                        }},
                        {title:'联系电话',field:'tel1',width:100},
                        {title:'身份证号',field:'idNumber',width:180},
                        {title:'联系地址',field:'contactsAddr',width:180,align:'left'}
                    ]],
                    onClickRow : function (idx,row) {
                        self.hide();
                        self.onGridSelect(idx,row);
                        // window.console && console.log(row);
                        // hideInfoSearchBox();
                        // $('#tabsA').tabs('select',0);
                        // $('.form-userInfo').form('load',row);
                        // //cardAddValidate();
                        //
                        // patientId = row.id;
                    },
                    // onBeforeLoad : function(param){
                    //     if(!param.searchValue){
                    //         return false;
                    //     }
                    // },
                    onLoadSuccess : function (d) {
                        self.onLoadSuccess(d);
                    },
                    // url: self.url, //'${base}/ui/outp/patientInfo/search'
                    height: 'auto'
                    // ,offset :-55
                });
            },500);
        };
        init();

        // event
        //  this.ipt.keyup(function(event){
        //      if(event.keyCode ==13){
        //          self.open();
        //      }
        //  });


         $(document).keyup(function (e) {
             // 回车打开 下来弹出层
             //  todo 需要增加 判断是否已经打开 如果打开则需要选中行

             if (e.keyCode == 13) {
                 // console.log(self.ipt.is(':focus'));
                 if(self.isOpen && self.selectRowIdx > -1  ) {
                     var row = self.$gridbox.datagrid("getSelected");
                     self.hide();
                     self.onGridSelect(self.selectRowIdx,row);
                 } else {
                     if(self.ipt.is(':focus')) {
                         // console.log(self.ipt.is(':focus'));
                         self.open();
                         self.ipt.blur();
                         return false;
                     }

                 }

             } else if ( e.keyCode== 38 || e.keyCode== 40 ){

                 // 上下键盘控制选中行
                 // 上38  下40

                 self.keyUpSelectRow(e.keyCode);
             }

         });
         this.btn.on("click",function () {
            self.open();
        });
        //
        $(document).on('click',function (e) {

            if( e.target !== self.btn[0]   && self.$pop.is(":visible") && !$.contains(self.$pop[0], e.target) ) {
                self.hide();
            }

        });


    };
    // BtnSearch.prototype.
    BtnSearch.prototype.open = function () {
        var result = this.search();
        if(!result) return;
        var o =  this.el.offset();
        o.top += this.ipt.height();
        this.$pop.css({ left : o.left , top : o.top });
        this.isOpen = true;
        return this;
    }
    BtnSearch.prototype.hide = function () {
        this.$pop.css("left","-999999px");
        this.isOpen = false;
        this.selectRowIdx = -1;
        return this;
    }

    BtnSearch.prototype.search = function () {
        var self = this;
        var val = $.trim(self.ipt.val());
        if( val == "" )  return false;
        this.$gridbox.datagrid({
            url: self.url,
            queryParams:{
                searchValue :  this.ipt.val()
            },
            onLoadSuccess : function () {
             //   self.$gridbox.datagrid("selectRow", self.selectRowIdx);
            }
        });

        // this.$gridbox.datagrid('load',{ searchValue :  this.ipt.val() });
        return this;
    }
    BtnSearch.prototype.onSelect = function (cb) {
        this.onGridSelect = cb;
        return this;
    }
    BtnSearch.prototype.onLoad = function (cb) {
        this.onLoadSuccess = cb;
        return this;
    }
    BtnSearch.prototype.keyUpSelectRow = function (keyCode) {
        if(!this.isOpen) return;
        this.$gridbox.datagrid("clearSelections");
        var rows = this.$gridbox.datagrid('getRows');
        var maxLen = rows.length - 1;

            if(keyCode == 38 && this.selectRowIdx > 0 ) {
                this.selectRowIdx--;
            } else   if(keyCode == 40 &&  this.selectRowIdx < maxLen )  {
                this.selectRowIdx++;
            }


        this.$gridbox.datagrid("selectRow",this.selectRowIdx);
    }







    return {
        get : function (id) {
            return btnSet[id];
        }
    }

})();
