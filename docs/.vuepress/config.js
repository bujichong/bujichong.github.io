const nav = require("./nav.js");
module.exports = {
	title: '不羁的空间',
	description: '疏言懒行，卖马为生',
	port: 1025,
//	theme: 'reco',
//	theme: 'vuepress-theme-maker',
	locales: {
		// 键名是该语言所属的子路径
		// 作为特例，默认语言可以使用 '/' 作为其路径。
		'/': {
		lang: 'zh-CN',
		},
	},
	head: [
		['meta', {
			name: 'viewport',
			content: 'width=device-width,initial-scale=1,user-scalable=no'
		}],
		['link', {
			rel: 'icon',
			href: '/images/logo.png'
		}]
	],
	plugins: {
		'one-click-copy':{
			copyMessage: '拷贝成功，可以粘贴啦~'
		},
		'@vuepress-reco/extract-code': {},
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
		routerSkip:  ['/my/','/photo/', '/souni/', '/zvue/'],//路由跳过
		type: "blog", //选择类型博客
		fullscreen: true,
		author: '不羁虫',
		huawei: true,
		dateFormat: 'YYYY-MM-DD',
		displayAllHeaders: true,
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
			   category: {
			 	location: 3, // 在导航栏菜单中所占的位置，默认2
			 	text: "分类", // 默认 “分类”
			   },
			   tag: {
			 	location: 4, // 在导航栏菜单中所占的位置，默认3
			 	text: "标签", // 默认 “标签”
			   },
		},
		nav: [{
				text: "主页",
				link: "/",
				icon: "reco-home"
			},
			{
				text: "时间如流水",
				link: "/timeline/",
				icon: "reco-date"
			},
			{
				text: "相册",
				link: "/photo/indexGallery.html",
				icon: "reco-date"
			},
			{
				text: "soUni手册",
				link: "/souni/index.html",
				icon: "reco-date"
			},
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