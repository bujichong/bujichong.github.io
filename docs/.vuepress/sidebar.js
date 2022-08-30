const {getChildren} = require("./autosidebar");
console.log(getChildren('./docs/','frame'));
module.exports={
	'/frame/':[{
		title: '指南',
		collapsable: false,
		sidebarDepth: 2,
		children: getChildren('./docs/','frame')
	}],
	'components':[{
		title: '组件',
		collapsable: false,
		sidebarDepth: 2,
		children: getChildren('./docs/','components')
	}],
	'/js/':[{
		title: 'Js',
		collapsable: false,
		sidebarDepth: 2,
		children: getChildren('./docs/','js')
	}],
	'/': ['']
}
