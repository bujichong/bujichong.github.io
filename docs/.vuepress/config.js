const nav = require("./nav.js");
module.exports = {
	title: '不羁的空间',
	description: '疏言懒行，卖马为生',
	port: 1025,
	//	theme: 'reco',
	theme: 'vuepress-theme-maker',
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
		'@vuepress-reco/extract-code': {},
		// "vuepress-plugin-auto-sidebar": {
		//   sort: {
		// 	mode: "created_time_asc",
		// 	readmeFirst: true,
		//   },
		//   title: {
		// 	mode: "titlecase",
		// 	map: {
		// 		"/css/":"色彩",
		// 		"/skill/":"技术技巧",
		// 		"/life/":"生活",
		// 	}
		//   },
		//   sidebarDepth:2,
		// }
	},
	themeConfig: {
		routerSkip:  ['/my/','/photo/', '/souni/'],//路由跳过
		blog: {
			directories: [{
				id: 'post',
				dirname: '_post',
				path: '/',
				itemPermalink: '/post/:year/:month/:day/:slug.html',
				frontmatter: {
					title: ''
				},
				pagination: {
					perPagePosts: 10,
					prevText: '',
					nextText: ''
				},
			}],
			frontmatters: [{
					id: "tag",
					keys: ['tag', 'tags'],
					path: '/tags/',
					frontmatter: {
						title: 'Tag'
					},
					pagination: {
						lengthPerPage: 10
					}
				},
				{
					id: "category",
					keys: ['category', 'categories'],
					path: '/categories/',
					frontmatter: {
						title: 'Category'
					},
					pagination: {
						lengthPerPage: 10
					}
				}
			],
			sitemap: {
				hostname: 'https://www.iflong.top',
				exclude: ['/404.html']
			},
			feed: {
				canonical_base: 'https://www.iflong.top',
			},
			//   comment: {
			// 	service: 'valine',
			//     appId: '1oeLbJt8p8rzkCaguAkbm0sp-gzGzoHsz',
			//     appKey: 'jotwOTiL9EkOSYmsp21OcdaM',
			//     placeholder: '请留言',
			// 	avatar : '/images/logo.png',
			//     visitor: true,
			//     enableQQ: true
			//   }
		},
		social: [{
				type: 'email',
				link: 'bujichong@163.com'
			},
			{
				type: 'github',
				link: 'bujichong'
			},
			// {type: 'qq',link: '347408820'},
			// {type: 'feed',link: '/rss.xml'}
		],
		seo: {
			siteTitle: (_, $site) => $site.title,
			title: $page => $page.title,
			description: $page => $page.frontmatter.description,
			author: (_, $site) => $site.themeConfig.author,
			tags: $page => $page.frontmatter.tags,
			twitterCard: _ => 'summary_large_image',
			type: $page => ['articles', '_post', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
			url: (_, $site, path) => ($site.themeConfig.hostname || '') + path,
			image: ($page, $site) => $page.frontmatter.cover && (($site.themeConfig.hostname && !$page.frontmatter.cover.startsWith('http') || '') + $page.frontmatter.cover),
			publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
			modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
		},
		copyright: '© 2020 ❤️ <a target="_blank" href="https://beian.miit.gov.cn/">湘ICP备17016616号</a>',
		copy: {
			copySelector: ['div[class*="language-"] pre', '.friend-link__content div[class*="language-"] pre'], // String or Array
			copyMessage: '代码复制成功', // default is 'Copy successfully and then paste it for use.'
			duration: 1000, // prompt message display time.
			showInMobile: false // whether to display on the mobile side, default: false.
		},


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
			//   category: {
			// 	location: 3, // 在导航栏菜单中所占的位置，默认2
			// 	text: "分类", // 默认 “分类”
			//   },
			//   tag: {
			// 	location: 4, // 在导航栏菜单中所占的位置，默认3
			// 	text: "标签", // 默认 “标签”
			//   },
		},
		nav: [{
				text: "主页",
				link: "/",
				icon: "reco-home"
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
			{
				text: "时间如流水",
				link: "/archives/",
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