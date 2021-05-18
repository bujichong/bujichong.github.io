export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
	// console.log(siteData.themeConfig)
	let {routerSkip} = siteData.themeConfig;
	// console.log(routerSkip);
  // ...做一些其他的应用级别的优化
    router.beforeEach((to, from, next) => {
		// console.log(to);
		if(routerSkip && routerSkip.length){
			routerSkip.forEach(url=>{
				if(to.path.startsWith(url)){
					window.location.href = to.path;
					return;
				}
			})
		}	
		next();
    })
}