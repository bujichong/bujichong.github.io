"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(_ref) {
  var Vue = _ref.Vue,
      options = _ref.options,
      router = _ref.router,
      siteData = _ref.siteData,
      isServer = _ref.isServer;
  // console.log(siteData.themeConfig)
  var routerSkip = siteData.themeConfig.routerSkip; //	console.log(router.matcher.getRoutes());
  // ...做一些其他的应用级别的优化

  router.beforeEach(function (to, from, next) {
    // console.log(to);
    if (routerSkip && routerSkip.length) {
      routerSkip.forEach(function (url) {
        if (to.path.startsWith(url)) {
          window.location.href = to.path;
          return;
        }
      });
    }

    next();
  });
};

exports["default"] = _default;