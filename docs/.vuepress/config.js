const nav = require("./nav.js");
//const { nav, sidebar } = getConfig({
//	multipleSideBar : false,
//	addReadMeToFirstGroup: false,
//	maxLevel : 3
//});
//console.log(nav, sidebar);
module.exports = {
	title: '不羁的空间',
	port : 1025,
	dest : 'public',
//	theme: 'reco',
	head: [
		['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
		['link', { rel: 'icon', href: '/images/logo.png' }]
	],
	plugins: {
		'@vuepress-reco/extract-code':{},
		"vuepress-plugin-auto-sidebar": {
		  sort: {
			mode: "created_time_asc",
			readmeFirst: true,
		  },
		  title: {
			mode: "titlecase",
			map: {
				"/css/":"色彩",
				"/skill/":"技术技巧",
				"/life/":"生活",
			}
		  },
		  sidebarDepth:2,
		}
	},
	themeConfig: {
		type: "blog", //选择类型博客
		fullscreen: true,
		author: '不羁虫',
		huawei: true,
		dateFormat: 'YYYY-MM-DD',
		displayAllHeaders : true,
		logo: '/images/logo.png',
		authorAvatar: '/images/logo.png',
		subSidebar: 'auto',
		noFoundPageByTencent: false,
		record: '湘ICP备17016616号',
		recordLink: 'https://beian.miit.gov.cn/',
		cyberSecurityRecord: '湘ICP备17016616号',
		cyberSecurityLink: 'https://beian.miit.gov.cn/',
//		sidebar,
		blogConfig: {
		//   category: {
		// 	location: 3, // 在导航栏菜单中所占的位置，默认2
		// 	text: "分类", // 默认 “分类”
		//   },
		//   tag: {
		// 	location: 4, // 在导航栏菜单中所占的位置，默认3
		// 	text: "标签", // 默认 “标签”
		//   },
		},
		nav: [
			{ text: "主页", link: "/", icon: "reco-home" },
			{ text: "时间如流水", link: "/timeline/", icon: "reco-date" },
//			{"text": "色彩","link": "/color/"},
//			{"text": "CSS","link": "/css/"},
//			{"text": "JS","link": "/js/"},
//			{"text": "生活","link": "/life/"},
//			{"text": "技巧","link": "/skill/"},
			//...nav
		],
	},
	base: '/', // 这是部署到github相关的配置
	markdown: {
		lineNumbers: true
	}
}