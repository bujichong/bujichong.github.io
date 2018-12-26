$btnExt =  (function () {
    var btnSet = {};
    $(function () {
        // dom ready
       $(".ui-btn").each(function () {
           if(btnSet[this.id]) { throw new Error("按钮组件有重名的ID:" + this.id + "请检查"); }
           btnSet[this.id] = new BtnExt($(this));
        });
    });

   function BtnExt (btn) {
        this.set = btnSet;
        this.el = btn;
        this.url = this.el.attr("url");
    }
    BtnExt.prototype.send = function (cb) {
        var reqUrl = this.url;
        if(!$.trim(reqUrl)) return cb("未配置url");
        $.ajax({
            url : reqUrl,
            type: "POST",
            success : function (res) {
                cb(res);
            },
            error : function (err) {
                cb(err);
            }
        });
        return this;
    }
    BtnExt.prototype.req = function (cb) {
        var self = this;
        self.el.unbind("click");
        self.el.on("click",function () {
            self.send(cb);
        });
        return self;
    }

    return {
        get : function (id) {
            return btnSet[id];
        }
    }

})();
