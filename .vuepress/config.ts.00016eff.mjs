// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import recoTheme from "vuepress-theme-reco";

// .vuepress/config/sidebar.js
var sidebar_default = {
  "/docs/css_year/index": [],
  "/docs/css_year/2014": [],
  "/docs/css_year/2017": [],
  "/docs/css_year/2018": [],
  "/docs/css_year/2023": [],
  "/docs/js_year/index": [],
  "/docs/js_year/2014": [],
  "/docs/js_year/2015": [],
  "/docs/js_year/2017": [],
  "/docs/js_year/2018": [],
  "/docs/js_year/2019": [],
  "/docs/js_year/2020": [],
  "/docs/js_year/2021": [],
  "/docs/js_year/2023": [],
  "/docs/pcwork/index": [
    {
      "text": "\u9996\u9875",
      "children": [
        "/docs/pcwork/index/index.html"
      ]
    },
    {
      "text": "1.base",
      "children": [
        "/docs/pcwork/1.base/1.files",
        "/docs/pcwork/1.base/2.includeJs",
        "/docs/pcwork/1.base/3.contInit",
        "/docs/pcwork/1.base/4.store",
        "/docs/pcwork/1.base/5.ajax",
        "/docs/pcwork/1.base/6.data",
        "/docs/pcwork/1.base/7.fmtDate",
        "/docs/pcwork/1.base/8.someTools"
      ]
    },
    {
      "text": "2.css",
      "children": [
        "/docs/pcwork/2.css/1.grid",
        "/docs/pcwork/2.css/2.common",
        "/docs/pcwork/2.css/3.icons"
      ]
    },
    {
      "text": "3.datagrid",
      "children": [
        "/docs/pcwork/3.datagrid/1.newGrid",
        "/docs/pcwork/3.datagrid/2.gridMethod",
        "/docs/pcwork/3.datagrid/3.gridEdit"
      ]
    },
    {
      "text": "4.form",
      "children": [
        "/docs/pcwork/4.form/1.rules",
        "/docs/pcwork/4.form/2.sovals",
        "/docs/pcwork/4.form/3.easyvals",
        "/docs/pcwork/4.form/4.dater",
        "/docs/pcwork/4.form/5.combo",
        "/docs/pcwork/4.form/6.numberbox"
      ]
    },
    {
      "text": "5.pop",
      "children": [
        "/docs/pcwork/5.pop/common",
        "/docs/pcwork/5.pop/iframePop",
        "/docs/pcwork/5.pop/popForm",
        "/docs/pcwork/5.pop/popTemForm",
        "/docs/pcwork/5.pop/tabWindow"
      ]
    },
    {
      "text": "6.other",
      "children": [
        "/docs/pcwork/6.other/1.uploader",
        "/docs/pcwork/6.other/2.editor",
        "/docs/pcwork/6.other/3.charts"
      ]
    }
  ],
  "/docs/pcwork/1.base": [
    {
      "text": "\u9996\u9875",
      "children": [
        "/docs/pcwork/index/index.html"
      ]
    },
    {
      "text": "1.base",
      "children": [
        "/docs/pcwork/1.base/1.files",
        "/docs/pcwork/1.base/2.includeJs",
        "/docs/pcwork/1.base/3.contInit",
        "/docs/pcwork/1.base/4.store",
        "/docs/pcwork/1.base/5.ajax",
        "/docs/pcwork/1.base/6.data",
        "/docs/pcwork/1.base/7.fmtDate",
        "/docs/pcwork/1.base/8.someTools"
      ]
    },
    {
      "text": "2.css",
      "children": [
        "/docs/pcwork/2.css/1.grid",
        "/docs/pcwork/2.css/2.common",
        "/docs/pcwork/2.css/3.icons"
      ]
    },
    {
      "text": "3.datagrid",
      "children": [
        "/docs/pcwork/3.datagrid/1.newGrid",
        "/docs/pcwork/3.datagrid/2.gridMethod",
        "/docs/pcwork/3.datagrid/3.gridEdit"
      ]
    },
    {
      "text": "4.form",
      "children": [
        "/docs/pcwork/4.form/1.rules",
        "/docs/pcwork/4.form/2.sovals",
        "/docs/pcwork/4.form/3.easyvals",
        "/docs/pcwork/4.form/4.dater",
        "/docs/pcwork/4.form/5.combo",
        "/docs/pcwork/4.form/6.numberbox"
      ]
    },
    {
      "text": "5.pop",
      "children": [
        "/docs/pcwork/5.pop/common",
        "/docs/pcwork/5.pop/iframePop",
        "/docs/pcwork/5.pop/popForm",
        "/docs/pcwork/5.pop/popTemForm",
        "/docs/pcwork/5.pop/tabWindow"
      ]
    },
    {
      "text": "6.other",
      "children": [
        "/docs/pcwork/6.other/1.uploader",
        "/docs/pcwork/6.other/2.editor",
        "/docs/pcwork/6.other/3.charts"
      ]
    }
  ],
  "/docs/pcwork/2.css": [
    {
      "text": "\u9996\u9875",
      "children": [
        "/docs/pcwork/index/index.html"
      ]
    },
    {
      "text": "1.base",
      "children": [
        "/docs/pcwork/1.base/1.files",
        "/docs/pcwork/1.base/2.includeJs",
        "/docs/pcwork/1.base/3.contInit",
        "/docs/pcwork/1.base/4.store",
        "/docs/pcwork/1.base/5.ajax",
        "/docs/pcwork/1.base/6.data",
        "/docs/pcwork/1.base/7.fmtDate",
        "/docs/pcwork/1.base/8.someTools"
      ]
    },
    {
      "text": "2.css",
      "children": [
        "/docs/pcwork/2.css/1.grid",
        "/docs/pcwork/2.css/2.common",
        "/docs/pcwork/2.css/3.icons"
      ]
    },
    {
      "text": "3.datagrid",
      "children": [
        "/docs/pcwork/3.datagrid/1.newGrid",
        "/docs/pcwork/3.datagrid/2.gridMethod",
        "/docs/pcwork/3.datagrid/3.gridEdit"
      ]
    },
    {
      "text": "4.form",
      "children": [
        "/docs/pcwork/4.form/1.rules",
        "/docs/pcwork/4.form/2.sovals",
        "/docs/pcwork/4.form/3.easyvals",
        "/docs/pcwork/4.form/4.dater",
        "/docs/pcwork/4.form/5.combo",
        "/docs/pcwork/4.form/6.numberbox"
      ]
    },
    {
      "text": "5.pop",
      "children": [
        "/docs/pcwork/5.pop/common",
        "/docs/pcwork/5.pop/iframePop",
        "/docs/pcwork/5.pop/popForm",
        "/docs/pcwork/5.pop/popTemForm",
        "/docs/pcwork/5.pop/tabWindow"
      ]
    },
    {
      "text": "6.other",
      "children": [
        "/docs/pcwork/6.other/1.uploader",
        "/docs/pcwork/6.other/2.editor",
        "/docs/pcwork/6.other/3.charts"
      ]
    }
  ],
  "/docs/pcwork/3.datagrid": [
    {
      "text": "\u9996\u9875",
      "children": [
        "/docs/pcwork/index/index.html"
      ]
    },
    {
      "text": "1.base",
      "children": [
        "/docs/pcwork/1.base/1.files",
        "/docs/pcwork/1.base/2.includeJs",
        "/docs/pcwork/1.base/3.contInit",
        "/docs/pcwork/1.base/4.store",
        "/docs/pcwork/1.base/5.ajax",
        "/docs/pcwork/1.base/6.data",
        "/docs/pcwork/1.base/7.fmtDate",
        "/docs/pcwork/1.base/8.someTools"
      ]
    },
    {
      "text": "2.css",
      "children": [
        "/docs/pcwork/2.css/1.grid",
        "/docs/pcwork/2.css/2.common",
        "/docs/pcwork/2.css/3.icons"
      ]
    },
    {
      "text": "3.datagrid",
      "children": [
        "/docs/pcwork/3.datagrid/1.newGrid",
        "/docs/pcwork/3.datagrid/2.gridMethod",
        "/docs/pcwork/3.datagrid/3.gridEdit"
      ]
    },
    {
      "text": "4.form",
      "children": [
        "/docs/pcwork/4.form/1.rules",
        "/docs/pcwork/4.form/2.sovals",
        "/docs/pcwork/4.form/3.easyvals",
        "/docs/pcwork/4.form/4.dater",
        "/docs/pcwork/4.form/5.combo",
        "/docs/pcwork/4.form/6.numberbox"
      ]
    },
    {
      "text": "5.pop",
      "children": [
        "/docs/pcwork/5.pop/common",
        "/docs/pcwork/5.pop/iframePop",
        "/docs/pcwork/5.pop/popForm",
        "/docs/pcwork/5.pop/popTemForm",
        "/docs/pcwork/5.pop/tabWindow"
      ]
    },
    {
      "text": "6.other",
      "children": [
        "/docs/pcwork/6.other/1.uploader",
        "/docs/pcwork/6.other/2.editor",
        "/docs/pcwork/6.other/3.charts"
      ]
    }
  ],
  "/docs/pcwork/4.form": [
    {
      "text": "\u9996\u9875",
      "children": [
        "/docs/pcwork/index/index.html"
      ]
    },
    {
      "text": "1.base",
      "children": [
        "/docs/pcwork/1.base/1.files",
        "/docs/pcwork/1.base/2.includeJs",
        "/docs/pcwork/1.base/3.contInit",
        "/docs/pcwork/1.base/4.store",
        "/docs/pcwork/1.base/5.ajax",
        "/docs/pcwork/1.base/6.data",
        "/docs/pcwork/1.base/7.fmtDate",
        "/docs/pcwork/1.base/8.someTools"
      ]
    },
    {
      "text": "2.css",
      "children": [
        "/docs/pcwork/2.css/1.grid",
        "/docs/pcwork/2.css/2.common",
        "/docs/pcwork/2.css/3.icons"
      ]
    },
    {
      "text": "3.datagrid",
      "children": [
        "/docs/pcwork/3.datagrid/1.newGrid",
        "/docs/pcwork/3.datagrid/2.gridMethod",
        "/docs/pcwork/3.datagrid/3.gridEdit"
      ]
    },
    {
      "text": "4.form",
      "children": [
        "/docs/pcwork/4.form/1.rules",
        "/docs/pcwork/4.form/2.sovals",
        "/docs/pcwork/4.form/3.easyvals",
        "/docs/pcwork/4.form/4.dater",
        "/docs/pcwork/4.form/5.combo",
        "/docs/pcwork/4.form/6.numberbox"
      ]
    },
    {
      "text": "5.pop",
      "children": [
        "/docs/pcwork/5.pop/common",
        "/docs/pcwork/5.pop/iframePop",
        "/docs/pcwork/5.pop/popForm",
        "/docs/pcwork/5.pop/popTemForm",
        "/docs/pcwork/5.pop/tabWindow"
      ]
    },
    {
      "text": "6.other",
      "children": [
        "/docs/pcwork/6.other/1.uploader",
        "/docs/pcwork/6.other/2.editor",
        "/docs/pcwork/6.other/3.charts"
      ]
    }
  ],
  "/docs/pcwork/5.pop": [
    {
      "text": "\u9996\u9875",
      "children": [
        "/docs/pcwork/index/index.html"
      ]
    },
    {
      "text": "1.base",
      "children": [
        "/docs/pcwork/1.base/1.files",
        "/docs/pcwork/1.base/2.includeJs",
        "/docs/pcwork/1.base/3.contInit",
        "/docs/pcwork/1.base/4.store",
        "/docs/pcwork/1.base/5.ajax",
        "/docs/pcwork/1.base/6.data",
        "/docs/pcwork/1.base/7.fmtDate",
        "/docs/pcwork/1.base/8.someTools"
      ]
    },
    {
      "text": "2.css",
      "children": [
        "/docs/pcwork/2.css/1.grid",
        "/docs/pcwork/2.css/2.common",
        "/docs/pcwork/2.css/3.icons"
      ]
    },
    {
      "text": "3.datagrid",
      "children": [
        "/docs/pcwork/3.datagrid/1.newGrid",
        "/docs/pcwork/3.datagrid/2.gridMethod",
        "/docs/pcwork/3.datagrid/3.gridEdit"
      ]
    },
    {
      "text": "4.form",
      "children": [
        "/docs/pcwork/4.form/1.rules",
        "/docs/pcwork/4.form/2.sovals",
        "/docs/pcwork/4.form/3.easyvals",
        "/docs/pcwork/4.form/4.dater",
        "/docs/pcwork/4.form/5.combo",
        "/docs/pcwork/4.form/6.numberbox"
      ]
    },
    {
      "text": "5.pop",
      "children": [
        "/docs/pcwork/5.pop/common",
        "/docs/pcwork/5.pop/iframePop",
        "/docs/pcwork/5.pop/popForm",
        "/docs/pcwork/5.pop/popTemForm",
        "/docs/pcwork/5.pop/tabWindow"
      ]
    },
    {
      "text": "6.other",
      "children": [
        "/docs/pcwork/6.other/1.uploader",
        "/docs/pcwork/6.other/2.editor",
        "/docs/pcwork/6.other/3.charts"
      ]
    }
  ],
  "/docs/pcwork/6.other": [
    {
      "text": "\u9996\u9875",
      "children": [
        "/docs/pcwork/index/index.html"
      ]
    },
    {
      "text": "1.base",
      "children": [
        "/docs/pcwork/1.base/1.files",
        "/docs/pcwork/1.base/2.includeJs",
        "/docs/pcwork/1.base/3.contInit",
        "/docs/pcwork/1.base/4.store",
        "/docs/pcwork/1.base/5.ajax",
        "/docs/pcwork/1.base/6.data",
        "/docs/pcwork/1.base/7.fmtDate",
        "/docs/pcwork/1.base/8.someTools"
      ]
    },
    {
      "text": "2.css",
      "children": [
        "/docs/pcwork/2.css/1.grid",
        "/docs/pcwork/2.css/2.common",
        "/docs/pcwork/2.css/3.icons"
      ]
    },
    {
      "text": "3.datagrid",
      "children": [
        "/docs/pcwork/3.datagrid/1.newGrid",
        "/docs/pcwork/3.datagrid/2.gridMethod",
        "/docs/pcwork/3.datagrid/3.gridEdit"
      ]
    },
    {
      "text": "4.form",
      "children": [
        "/docs/pcwork/4.form/1.rules",
        "/docs/pcwork/4.form/2.sovals",
        "/docs/pcwork/4.form/3.easyvals",
        "/docs/pcwork/4.form/4.dater",
        "/docs/pcwork/4.form/5.combo",
        "/docs/pcwork/4.form/6.numberbox"
      ]
    },
    {
      "text": "5.pop",
      "children": [
        "/docs/pcwork/5.pop/common",
        "/docs/pcwork/5.pop/iframePop",
        "/docs/pcwork/5.pop/popForm",
        "/docs/pcwork/5.pop/popTemForm",
        "/docs/pcwork/5.pop/tabWindow"
      ]
    },
    {
      "text": "6.other",
      "children": [
        "/docs/pcwork/6.other/1.uploader",
        "/docs/pcwork/6.other/2.editor",
        "/docs/pcwork/6.other/3.charts"
      ]
    }
  ],
  "/docs/skill": [
    {
      "text": "skill",
      "children": [
        "/docs/skill/20160225-windowspassword",
        "/docs/skill/20160304-sqlnote",
        "/docs/skill/20171130-CloudXNS",
        "/docs/skill/20171130-githubkey",
        "/docs/skill/20180808-gitSavePull",
        "/docs/skill/20180809-mongoInstall",
        "/docs/skill/20191129-gitbookSkill"
      ]
    }
  ],
  "/docs/souni/index": [
    {
      "text": "\u9996\u9875",
      "children": [
        "/docs/souni/index/index.html"
      ]
    },
    {
      "text": "1.base",
      "children": [
        "/docs/souni/1.base/0.first",
        "/docs/souni/1.base/01.structure",
        "/docs/souni/1.base/02.style",
        "/docs/souni/1.base/03.router",
        "/docs/souni/1.base/04.store",
        "/docs/souni/1.base/05.api"
      ]
    },
    {
      "text": "2.components",
      "children": [
        "/docs/souni/2.components/0.first",
        "/docs/souni/2.components/btn",
        "/docs/souni/2.components/item",
        "/docs/souni/2.components/num",
        "/docs/souni/2.components/pop",
        "/docs/souni/2.components/popbox",
        "/docs/souni/2.components/reset",
        "/docs/souni/2.components/row",
        "/docs/souni/2.components/soCalendar",
        "/docs/souni/2.components/soCheckbox",
        "/docs/souni/2.components/soForm",
        "/docs/souni/2.components/soGrid",
        "/docs/souni/2.components/soRadio",
        "/docs/souni/2.components/soRegion",
        "/docs/souni/2.components/soSearch",
        "/docs/souni/2.components/soSelect",
        "/docs/souni/2.components/soSheet",
        "/docs/souni/2.components/soSwitch",
        "/docs/souni/2.components/soTime",
        "/docs/souni/2.components/submit",
        "/docs/souni/2.components/toast",
        "/docs/souni/2.components/txt"
      ]
    },
    {
      "text": "3.js",
      "children": [
        "/docs/souni/3.js/0.first",
        "/docs/souni/3.js/01.tools",
        "/docs/souni/3.js/02.ajax",
        "/docs/souni/3.js/03.pop",
        "/docs/souni/3.js/04.rules",
        "/docs/souni/3.js/05.sys"
      ]
    }
  ],
  "/docs/souni/1.base": [
    {
      "text": "\u9996\u9875",
      "children": [
        "/docs/souni/index/index.html"
      ]
    },
    {
      "text": "1.base",
      "children": [
        "/docs/souni/1.base/0.first",
        "/docs/souni/1.base/01.structure",
        "/docs/souni/1.base/02.style",
        "/docs/souni/1.base/03.router",
        "/docs/souni/1.base/04.store",
        "/docs/souni/1.base/05.api"
      ]
    },
    {
      "text": "2.components",
      "children": [
        "/docs/souni/2.components/0.first",
        "/docs/souni/2.components/btn",
        "/docs/souni/2.components/item",
        "/docs/souni/2.components/num",
        "/docs/souni/2.components/pop",
        "/docs/souni/2.components/popbox",
        "/docs/souni/2.components/reset",
        "/docs/souni/2.components/row",
        "/docs/souni/2.components/soCalendar",
        "/docs/souni/2.components/soCheckbox",
        "/docs/souni/2.components/soForm",
        "/docs/souni/2.components/soGrid",
        "/docs/souni/2.components/soRadio",
        "/docs/souni/2.components/soRegion",
        "/docs/souni/2.components/soSearch",
        "/docs/souni/2.components/soSelect",
        "/docs/souni/2.components/soSheet",
        "/docs/souni/2.components/soSwitch",
        "/docs/souni/2.components/soTime",
        "/docs/souni/2.components/submit",
        "/docs/souni/2.components/toast",
        "/docs/souni/2.components/txt"
      ]
    },
    {
      "text": "3.js",
      "children": [
        "/docs/souni/3.js/0.first",
        "/docs/souni/3.js/01.tools",
        "/docs/souni/3.js/02.ajax",
        "/docs/souni/3.js/03.pop",
        "/docs/souni/3.js/04.rules",
        "/docs/souni/3.js/05.sys"
      ]
    }
  ],
  "/docs/souni/2.components": [
    {
      "text": "\u9996\u9875",
      "children": [
        "/docs/souni/index/index.html"
      ]
    },
    {
      "text": "1.base",
      "children": [
        "/docs/souni/1.base/0.first",
        "/docs/souni/1.base/01.structure",
        "/docs/souni/1.base/02.style",
        "/docs/souni/1.base/03.router",
        "/docs/souni/1.base/04.store",
        "/docs/souni/1.base/05.api"
      ]
    },
    {
      "text": "2.components",
      "children": [
        "/docs/souni/2.components/0.first",
        "/docs/souni/2.components/btn",
        "/docs/souni/2.components/item",
        "/docs/souni/2.components/num",
        "/docs/souni/2.components/pop",
        "/docs/souni/2.components/popbox",
        "/docs/souni/2.components/reset",
        "/docs/souni/2.components/row",
        "/docs/souni/2.components/soCalendar",
        "/docs/souni/2.components/soCheckbox",
        "/docs/souni/2.components/soForm",
        "/docs/souni/2.components/soGrid",
        "/docs/souni/2.components/soRadio",
        "/docs/souni/2.components/soRegion",
        "/docs/souni/2.components/soSearch",
        "/docs/souni/2.components/soSelect",
        "/docs/souni/2.components/soSheet",
        "/docs/souni/2.components/soSwitch",
        "/docs/souni/2.components/soTime",
        "/docs/souni/2.components/submit",
        "/docs/souni/2.components/toast",
        "/docs/souni/2.components/txt"
      ]
    },
    {
      "text": "3.js",
      "children": [
        "/docs/souni/3.js/0.first",
        "/docs/souni/3.js/01.tools",
        "/docs/souni/3.js/02.ajax",
        "/docs/souni/3.js/03.pop",
        "/docs/souni/3.js/04.rules",
        "/docs/souni/3.js/05.sys"
      ]
    }
  ],
  "/docs/souni/3.js": [
    {
      "text": "\u9996\u9875",
      "children": [
        "/docs/souni/index/index.html"
      ]
    },
    {
      "text": "1.base",
      "children": [
        "/docs/souni/1.base/0.first",
        "/docs/souni/1.base/01.structure",
        "/docs/souni/1.base/02.style",
        "/docs/souni/1.base/03.router",
        "/docs/souni/1.base/04.store",
        "/docs/souni/1.base/05.api"
      ]
    },
    {
      "text": "2.components",
      "children": [
        "/docs/souni/2.components/0.first",
        "/docs/souni/2.components/btn",
        "/docs/souni/2.components/item",
        "/docs/souni/2.components/num",
        "/docs/souni/2.components/pop",
        "/docs/souni/2.components/popbox",
        "/docs/souni/2.components/reset",
        "/docs/souni/2.components/row",
        "/docs/souni/2.components/soCalendar",
        "/docs/souni/2.components/soCheckbox",
        "/docs/souni/2.components/soForm",
        "/docs/souni/2.components/soGrid",
        "/docs/souni/2.components/soRadio",
        "/docs/souni/2.components/soRegion",
        "/docs/souni/2.components/soSearch",
        "/docs/souni/2.components/soSelect",
        "/docs/souni/2.components/soSheet",
        "/docs/souni/2.components/soSwitch",
        "/docs/souni/2.components/soTime",
        "/docs/souni/2.components/submit",
        "/docs/souni/2.components/toast",
        "/docs/souni/2.components/txt"
      ]
    },
    {
      "text": "3.js",
      "children": [
        "/docs/souni/3.js/0.first",
        "/docs/souni/3.js/01.tools",
        "/docs/souni/3.js/02.ajax",
        "/docs/souni/3.js/03.pop",
        "/docs/souni/3.js/04.rules",
        "/docs/souni/3.js/05.sys"
      ]
    }
  ]
};

// .vuepress/config/navContainer.ts
import { containerPlugin } from "@vuepress/plugin-container";
var colors = [
  "#e0faff",
  "#EAEBFD",
  "#FCEBEB",
  "#e7f2ff",
  "#ECFBEC",
  "#FBF0F8",
  "#FBF3E6",
  "#E1F9F7",
  "#E9EAEF",
  "#F4F8E0"
];
var navContainer_default = [
  containerPlugin({
    //nav 导航容器
    type: "nav",
    render: (tokens, idx, options, env, self) => {
      const { type, info } = tokens[idx];
      const [customType, icon, color] = info.trim().split(" ");
      if (/container\_\w+\_open/g.test(type)) {
        const realC = color || colors[Math.floor(colors.length * Math.random())];
        const bgch = `style="background-color:${realC};"`;
        return `<div class="nav-container ${customType}" ${bgch}>
        <xicons class="xicon" iconSize="28" icon="${icon || "Cube"}" />`;
      }
      if (/container\_\w+\_close/g.test(type)) {
        return "</div>";
      }
      return self.renderToken(tokens, idx, options);
    }
  }),
  containerPlugin({
    //nav 导航组
    type: "nav-group",
    before: (info) => {
      return `<div class="nav-group-container">${info ? `<h2 class="nav-group-title">${info}</h2>` : ""}
`;
    },
    after: () => {
      return "</div>\n";
    }
  })
];

// .vuepress/config/navbar.ts
var navbar = [
  { text: "\u535A\u5BA2", link: "/", icon: "Home" },
  // { text: "文档首页", link: "/docs/index.html", icon: 'DataCenter'},
  // { text: "分类", link: "/categories/shuoming/1/" },
  // { text: "标签", link: "/tags/shuoming/1/" },
  {
    text: "CSS",
    link: "/docs/css_year/index/",
    icon: "CloudSatellite"
  },
  {
    text: "JS",
    link: "/docs/js_year/index/",
    icon: "Explore"
  },
  // {
  //   text: "相册",
  //   link: "/photo/",
  //   icon: 'Explore',
  // },
  {
    text: "\u6587\u6863",
    link: "/docs/index/",
    icon: "DataCenter",
    children: [
      {
        text: "PC\u7AEF\u6846\u67B6\u624B\u518C",
        link: "/docs/pcwork/index/"
        // icon: 'CdArchive',
      },
      {
        text: "uni\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u624B\u518C",
        link: "/docs/souni/index/"
        // icon: 'IbmCloudVpcEndpoints',
      }
    ]
  }
];
var navbar_default = navbar;

// .vuepress/config.ts
var config_default = defineUserConfig({
  title: "\u4E0D\u7F81\u7684\u7A7A\u95F4",
  description: "\u758F\u884C\u61D2\u8A00\uFF0C\u5E74\u8F7B\u65E0\u4E3A\uFF0C\u5356\u9A6C\u4E3A\u751F",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  plugins: [
    mediumZoomPlugin({
      // 配置项
    }),
    ...navContainer_default
    //自定义 nav 容器
  ],
  port: 1208,
  theme: recoTheme({
    catalogTitle: "\u6587\u6863\u76EE\u5F55",
    lastUpdatedText: "\u6700\u540E\u66F4\u65B0\u65F6\u95F4\uFF1A",
    autoSetBlogCategories: true,
    // vuePreviewsDir : './.vuepress/vue-previews',
    // autoAddCategoryToNavbar: true,
    autoSetSeries: true,
    style: "@vuepress-reco/style-default",
    logo: "/images/config/bujichong.jpg",
    author: "bujichong",
    authorAvatar: "/images/config/bujichong.min.jpg",
    docsRepo: "https://github.com/bujichong/bujichong.github.io",
    docsBranch: "master",
    docsDir: "",
    primaryColor: "#269bfa",
    series: sidebar_default,
    navbar: navbar_default
    // bulletin: notice
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  })
  // debug: true,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZ1ZXByZXNzL2NvbmZpZy50cyIsICIudnVlcHJlc3MvY29uZmlnL3NpZGViYXIuanMiLCAiLnZ1ZXByZXNzL2NvbmZpZy9uYXZDb250YWluZXIudHMiLCAiLnZ1ZXByZXNzL2NvbmZpZy9uYXZiYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi93d3cvYnVqaWNob25nLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcd3d3XFxcXGJ1amljaG9uZ1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93d3cvYnVqaWNob25nLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XHJcbmltcG9ydCB7IG1lZGl1bVpvb21QbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1tZWRpdW0tem9vbVwiO1xyXG4vLyBpbXBvcnQgdHlwZSB7IERlZmF1bHRUaGVtZU9wdGlvbnMgfSBmcm9tIFwidnVlcHJlc3NcIjtcclxuaW1wb3J0IHJlY29UaGVtZSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtcmVjb1wiO1xyXG5pbXBvcnQgc2VyaWVzIGZyb20gXCIuL2NvbmZpZy9zaWRlYmFyXCI7XHJcbmltcG9ydCBuYXZDb250YWluZXIgZnJvbSBcIi4vY29uZmlnL25hdkNvbnRhaW5lclwiO1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuL2NvbmZpZy9uYXZiYXJcIjtcclxuaW1wb3J0IG5vdGljZSBmcm9tIFwiLi9jb25maWcvbm90aWNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuICB0aXRsZTogXCJcdTRFMERcdTdGODFcdTc2ODRcdTdBN0FcdTk1RjRcIixcclxuICBkZXNjcmlwdGlvbjogXCJcdTc1OEZcdTg4NENcdTYxRDJcdThBMDBcdUZGMENcdTVFNzRcdThGN0JcdTY1RTBcdTRFM0FcdUZGMENcdTUzNTZcdTlBNkNcdTRFM0FcdTc1MUZcIixcclxuICBoZWFkOiBbW1wibGlua1wiLCB7IHJlbDogXCJpY29uXCIsIGhyZWY6IFwiL2ltYWdlcy9sb2dvLnBuZ1wiIH1dXSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBtZWRpdW1ab29tUGx1Z2luKHtcclxuICAgICAgLy8gXHU5MTREXHU3RjZFXHU5ODc5XHJcbiAgICB9KSxcclxuICAgIC4uLm5hdkNvbnRhaW5lciwgLy9cdTgxRUFcdTVCOUFcdTRFNDkgbmF2IFx1NUJCOVx1NTY2OFxyXG4gIF0sXHJcbiAgcG9ydDogMTIwOCxcclxuICB0aGVtZTogcmVjb1RoZW1lKHtcclxuICAgIGNhdGFsb2dUaXRsZTonXHU2NTg3XHU2ODYzXHU3NkVFXHU1RjU1JyxcclxuICAgIGxhc3RVcGRhdGVkVGV4dDogXCJcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcdTY1RjZcdTk1RjRcdUZGMUFcIixcclxuICAgIGF1dG9TZXRCbG9nQ2F0ZWdvcmllczogdHJ1ZSxcclxuICAgIC8vIHZ1ZVByZXZpZXdzRGlyIDogJy4vLnZ1ZXByZXNzL3Z1ZS1wcmV2aWV3cycsXHJcbiAgICAvLyBhdXRvQWRkQ2F0ZWdvcnlUb05hdmJhcjogdHJ1ZSxcclxuICAgIGF1dG9TZXRTZXJpZXM6IHRydWUsXHJcbiAgICBzdHlsZTogXCJAdnVlcHJlc3MtcmVjby9zdHlsZS1kZWZhdWx0XCIsXHJcbiAgICBsb2dvOiBcIi9pbWFnZXMvY29uZmlnL2J1amljaG9uZy5qcGdcIixcclxuICAgIGF1dGhvcjogXCJidWppY2hvbmdcIixcclxuICAgIGF1dGhvckF2YXRhcjogXCIvaW1hZ2VzL2NvbmZpZy9idWppY2hvbmcubWluLmpwZ1wiLFxyXG4gICAgZG9jc1JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL2J1amljaG9uZy9idWppY2hvbmcuZ2l0aHViLmlvXCIsXHJcbiAgICBkb2NzQnJhbmNoOiBcIm1hc3RlclwiLFxyXG4gICAgZG9jc0RpcjogXCJcIixcclxuICAgIHByaW1hcnlDb2xvcjogXCIjMjY5YmZhXCIsXHJcbiAgICBzZXJpZXMsXHJcbiAgICBuYXZiYXIsXHJcbiAgICAvLyBidWxsZXRpbjogbm90aWNlXHJcblxyXG4gICAgLy8gdmFsaW5lQ29uZmlnIFx1OTE0RFx1N0Y2RVx1NEUwRSAxLnggXHU0RTAwXHU4MUY0XHJcbiAgICAvLyB2YWxpbmVDb25maWc6IHtcclxuICAgIC8vICAgYXBwSWQ6ICd4eHgnLFxyXG4gICAgLy8gICBhcHBLZXk6ICd4eHgnLFxyXG4gICAgLy8gICBwbGFjZWhvbGRlcjogJ1x1NTg2Qlx1NTE5OVx1OTBBRVx1N0JCMVx1NTNFRlx1NEVFNVx1NjUzNlx1NTIzMFx1NTZERVx1NTkwRFx1NjNEMFx1OTE5Mlx1NTRFNlx1RkYwMScsXHJcbiAgICAvLyAgIHZlcmlmeTogdHJ1ZSwgLy8gXHU5QThDXHU4QkMxXHU3ODAxXHU2NzBEXHU1MkExXHJcbiAgICAvLyAgIC8vIG5vdGlmeTogdHJ1ZSxcclxuICAgIC8vICAgcmVjb3JkSVA6IHRydWUsXHJcbiAgICAvLyAgIC8vIGhpZGVDb21tZW50czogdHJ1ZSAvLyBcdTk2OTBcdTg1Q0ZcdThCQzRcdThCQkFcclxuICAgIC8vIH0sXHJcbiAgfSksXHJcbiAgLy8gZGVidWc6IHRydWUsXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L3d3dy9idWppY2hvbmcvLnZ1ZXByZXNzL2NvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcd3d3XFxcXGJ1amljaG9uZ1xcXFwudnVlcHJlc3NcXFxcY29uZmlnXFxcXHNpZGViYXIuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3d3dy9idWppY2hvbmcvLnZ1ZXByZXNzL2NvbmZpZy9zaWRlYmFyLmpzXCI7ZXhwb3J0IGRlZmF1bHQge1xuICBcIi9kb2NzL2Nzc195ZWFyL2luZGV4XCI6IFtdLFxuICBcIi9kb2NzL2Nzc195ZWFyLzIwMTRcIjogW10sXG4gIFwiL2RvY3MvY3NzX3llYXIvMjAxN1wiOiBbXSxcbiAgXCIvZG9jcy9jc3NfeWVhci8yMDE4XCI6IFtdLFxuICBcIi9kb2NzL2Nzc195ZWFyLzIwMjNcIjogW10sXG4gIFwiL2RvY3MvanNfeWVhci9pbmRleFwiOiBbXSxcbiAgXCIvZG9jcy9qc195ZWFyLzIwMTRcIjogW10sXG4gIFwiL2RvY3MvanNfeWVhci8yMDE1XCI6IFtdLFxuICBcIi9kb2NzL2pzX3llYXIvMjAxN1wiOiBbXSxcbiAgXCIvZG9jcy9qc195ZWFyLzIwMThcIjogW10sXG4gIFwiL2RvY3MvanNfeWVhci8yMDE5XCI6IFtdLFxuICBcIi9kb2NzL2pzX3llYXIvMjAyMFwiOiBbXSxcbiAgXCIvZG9jcy9qc195ZWFyLzIwMjFcIjogW10sXG4gIFwiL2RvY3MvanNfeWVhci8yMDIzXCI6IFtdLFxuICBcIi9kb2NzL3Bjd29yay9pbmRleFwiOiBbXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiXHU5OTk2XHU5ODc1XCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvaW5kZXgvaW5kZXguaHRtbFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCIxLmJhc2VcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvMS5maWxlc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvMi5pbmNsdWRlSnNcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzMuY29udEluaXRcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzQuc3RvcmVcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzUuYWpheFwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvNi5kYXRhXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzEuYmFzZS83LmZtdERhdGVcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzguc29tZVRvb2xzXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjIuY3NzXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMi5jc3MvMS5ncmlkXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzIuY3NzLzIuY29tbW9uXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzIuY3NzLzMuaWNvbnNcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiMy5kYXRhZ3JpZFwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzMuZGF0YWdyaWQvMS5uZXdHcmlkXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzMuZGF0YWdyaWQvMi5ncmlkTWV0aG9kXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzMuZGF0YWdyaWQvMy5ncmlkRWRpdFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCI0LmZvcm1cIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vMS5ydWxlc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vMi5zb3ZhbHNcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzMuZWFzeXZhbHNcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzQuZGF0ZXJcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzUuY29tYm9cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzYubnVtYmVyYm94XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjUucG9wXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNS5wb3AvY29tbW9uXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzUucG9wL2lmcmFtZVBvcFwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay81LnBvcC9wb3BGb3JtXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzUucG9wL3BvcFRlbUZvcm1cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNS5wb3AvdGFiV2luZG93XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjYub3RoZXJcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay82Lm90aGVyLzEudXBsb2FkZXJcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNi5vdGhlci8yLmVkaXRvclwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay82Lm90aGVyLzMuY2hhcnRzXCJcbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIFwiL2RvY3MvcGN3b3JrLzEuYmFzZVwiOiBbXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiXHU5OTk2XHU5ODc1XCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvaW5kZXgvaW5kZXguaHRtbFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCIxLmJhc2VcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvMS5maWxlc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvMi5pbmNsdWRlSnNcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzMuY29udEluaXRcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzQuc3RvcmVcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzUuYWpheFwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvNi5kYXRhXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzEuYmFzZS83LmZtdERhdGVcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzguc29tZVRvb2xzXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjIuY3NzXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMi5jc3MvMS5ncmlkXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzIuY3NzLzIuY29tbW9uXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzIuY3NzLzMuaWNvbnNcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiMy5kYXRhZ3JpZFwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzMuZGF0YWdyaWQvMS5uZXdHcmlkXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzMuZGF0YWdyaWQvMi5ncmlkTWV0aG9kXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzMuZGF0YWdyaWQvMy5ncmlkRWRpdFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCI0LmZvcm1cIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vMS5ydWxlc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vMi5zb3ZhbHNcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzMuZWFzeXZhbHNcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzQuZGF0ZXJcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzUuY29tYm9cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzYubnVtYmVyYm94XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjUucG9wXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNS5wb3AvY29tbW9uXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzUucG9wL2lmcmFtZVBvcFwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay81LnBvcC9wb3BGb3JtXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzUucG9wL3BvcFRlbUZvcm1cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNS5wb3AvdGFiV2luZG93XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjYub3RoZXJcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay82Lm90aGVyLzEudXBsb2FkZXJcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNi5vdGhlci8yLmVkaXRvclwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay82Lm90aGVyLzMuY2hhcnRzXCJcbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIFwiL2RvY3MvcGN3b3JrLzIuY3NzXCI6IFtcbiAgICB7XG4gICAgICBcInRleHRcIjogXCJcdTk5OTZcdTk4NzVcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay9pbmRleC9pbmRleC5odG1sXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjEuYmFzZVwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzEuYmFzZS8xLmZpbGVzXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzEuYmFzZS8yLmluY2x1ZGVKc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvMy5jb250SW5pdFwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvNC5zdG9yZVwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvNS5hamF4XCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzEuYmFzZS82LmRhdGFcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzcuZm10RGF0ZVwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvOC5zb21lVG9vbHNcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiMi5jc3NcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay8yLmNzcy8xLmdyaWRcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMi5jc3MvMi5jb21tb25cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMi5jc3MvMy5pY29uc1wiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCIzLmRhdGFncmlkXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMy5kYXRhZ3JpZC8xLm5ld0dyaWRcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMy5kYXRhZ3JpZC8yLmdyaWRNZXRob2RcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMy5kYXRhZ3JpZC8zLmdyaWRFZGl0XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjQuZm9ybVwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzQuZm9ybS8xLnJ1bGVzXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzQuZm9ybS8yLnNvdmFsc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vMy5lYXN5dmFsc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vNC5kYXRlclwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vNS5jb21ib1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vNi5udW1iZXJib3hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiNS5wb3BcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay81LnBvcC9jb21tb25cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNS5wb3AvaWZyYW1lUG9wXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzUucG9wL3BvcEZvcm1cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNS5wb3AvcG9wVGVtRm9ybVwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay81LnBvcC90YWJXaW5kb3dcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiNi5vdGhlclwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzYub3RoZXIvMS51cGxvYWRlclwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay82Lm90aGVyLzIuZWRpdG9yXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzYub3RoZXIvMy5jaGFydHNcIlxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgXCIvZG9jcy9wY3dvcmsvMy5kYXRhZ3JpZFwiOiBbXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiXHU5OTk2XHU5ODc1XCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvaW5kZXgvaW5kZXguaHRtbFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCIxLmJhc2VcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvMS5maWxlc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvMi5pbmNsdWRlSnNcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzMuY29udEluaXRcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzQuc3RvcmVcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzUuYWpheFwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvNi5kYXRhXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzEuYmFzZS83LmZtdERhdGVcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzguc29tZVRvb2xzXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjIuY3NzXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMi5jc3MvMS5ncmlkXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzIuY3NzLzIuY29tbW9uXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzIuY3NzLzMuaWNvbnNcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiMy5kYXRhZ3JpZFwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzMuZGF0YWdyaWQvMS5uZXdHcmlkXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzMuZGF0YWdyaWQvMi5ncmlkTWV0aG9kXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzMuZGF0YWdyaWQvMy5ncmlkRWRpdFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCI0LmZvcm1cIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vMS5ydWxlc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vMi5zb3ZhbHNcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzMuZWFzeXZhbHNcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzQuZGF0ZXJcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzUuY29tYm9cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzYubnVtYmVyYm94XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjUucG9wXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNS5wb3AvY29tbW9uXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzUucG9wL2lmcmFtZVBvcFwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay81LnBvcC9wb3BGb3JtXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzUucG9wL3BvcFRlbUZvcm1cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNS5wb3AvdGFiV2luZG93XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjYub3RoZXJcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay82Lm90aGVyLzEudXBsb2FkZXJcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNi5vdGhlci8yLmVkaXRvclwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay82Lm90aGVyLzMuY2hhcnRzXCJcbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIFwiL2RvY3MvcGN3b3JrLzQuZm9ybVwiOiBbXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiXHU5OTk2XHU5ODc1XCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvaW5kZXgvaW5kZXguaHRtbFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCIxLmJhc2VcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvMS5maWxlc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvMi5pbmNsdWRlSnNcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzMuY29udEluaXRcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzQuc3RvcmVcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzUuYWpheFwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvNi5kYXRhXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzEuYmFzZS83LmZtdERhdGVcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzguc29tZVRvb2xzXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjIuY3NzXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMi5jc3MvMS5ncmlkXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzIuY3NzLzIuY29tbW9uXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzIuY3NzLzMuaWNvbnNcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiMy5kYXRhZ3JpZFwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzMuZGF0YWdyaWQvMS5uZXdHcmlkXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzMuZGF0YWdyaWQvMi5ncmlkTWV0aG9kXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzMuZGF0YWdyaWQvMy5ncmlkRWRpdFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCI0LmZvcm1cIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vMS5ydWxlc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vMi5zb3ZhbHNcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzMuZWFzeXZhbHNcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzQuZGF0ZXJcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzUuY29tYm9cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzYubnVtYmVyYm94XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjUucG9wXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNS5wb3AvY29tbW9uXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzUucG9wL2lmcmFtZVBvcFwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay81LnBvcC9wb3BGb3JtXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzUucG9wL3BvcFRlbUZvcm1cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNS5wb3AvdGFiV2luZG93XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjYub3RoZXJcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay82Lm90aGVyLzEudXBsb2FkZXJcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNi5vdGhlci8yLmVkaXRvclwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay82Lm90aGVyLzMuY2hhcnRzXCJcbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIFwiL2RvY3MvcGN3b3JrLzUucG9wXCI6IFtcbiAgICB7XG4gICAgICBcInRleHRcIjogXCJcdTk5OTZcdTk4NzVcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay9pbmRleC9pbmRleC5odG1sXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjEuYmFzZVwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzEuYmFzZS8xLmZpbGVzXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzEuYmFzZS8yLmluY2x1ZGVKc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvMy5jb250SW5pdFwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvNC5zdG9yZVwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvNS5hamF4XCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzEuYmFzZS82LmRhdGFcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzcuZm10RGF0ZVwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvOC5zb21lVG9vbHNcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiMi5jc3NcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay8yLmNzcy8xLmdyaWRcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMi5jc3MvMi5jb21tb25cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMi5jc3MvMy5pY29uc1wiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCIzLmRhdGFncmlkXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMy5kYXRhZ3JpZC8xLm5ld0dyaWRcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMy5kYXRhZ3JpZC8yLmdyaWRNZXRob2RcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMy5kYXRhZ3JpZC8zLmdyaWRFZGl0XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjQuZm9ybVwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzQuZm9ybS8xLnJ1bGVzXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzQuZm9ybS8yLnNvdmFsc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vMy5lYXN5dmFsc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vNC5kYXRlclwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vNS5jb21ib1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vNi5udW1iZXJib3hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiNS5wb3BcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay81LnBvcC9jb21tb25cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNS5wb3AvaWZyYW1lUG9wXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzUucG9wL3BvcEZvcm1cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNS5wb3AvcG9wVGVtRm9ybVwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay81LnBvcC90YWJXaW5kb3dcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiNi5vdGhlclwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzYub3RoZXIvMS51cGxvYWRlclwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay82Lm90aGVyLzIuZWRpdG9yXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzYub3RoZXIvMy5jaGFydHNcIlxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgXCIvZG9jcy9wY3dvcmsvNi5vdGhlclwiOiBbXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiXHU5OTk2XHU5ODc1XCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvaW5kZXgvaW5kZXguaHRtbFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCIxLmJhc2VcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvMS5maWxlc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvMi5pbmNsdWRlSnNcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzMuY29udEluaXRcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzQuc3RvcmVcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzUuYWpheFwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay8xLmJhc2UvNi5kYXRhXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzEuYmFzZS83LmZtdERhdGVcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMS5iYXNlLzguc29tZVRvb2xzXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjIuY3NzXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvMi5jc3MvMS5ncmlkXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzIuY3NzLzIuY29tbW9uXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzIuY3NzLzMuaWNvbnNcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiMy5kYXRhZ3JpZFwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzMuZGF0YWdyaWQvMS5uZXdHcmlkXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzMuZGF0YWdyaWQvMi5ncmlkTWV0aG9kXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzMuZGF0YWdyaWQvMy5ncmlkRWRpdFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCI0LmZvcm1cIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vMS5ydWxlc1wiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay80LmZvcm0vMi5zb3ZhbHNcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzMuZWFzeXZhbHNcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzQuZGF0ZXJcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzUuY29tYm9cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNC5mb3JtLzYubnVtYmVyYm94XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjUucG9wXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNS5wb3AvY29tbW9uXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzUucG9wL2lmcmFtZVBvcFwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay81LnBvcC9wb3BGb3JtXCIsXG4gICAgICAgIFwiL2RvY3MvcGN3b3JrLzUucG9wL3BvcFRlbUZvcm1cIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNS5wb3AvdGFiV2luZG93XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjYub3RoZXJcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3Bjd29yay82Lm90aGVyLzEudXBsb2FkZXJcIixcbiAgICAgICAgXCIvZG9jcy9wY3dvcmsvNi5vdGhlci8yLmVkaXRvclwiLFxuICAgICAgICBcIi9kb2NzL3Bjd29yay82Lm90aGVyLzMuY2hhcnRzXCJcbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIFwiL2RvY3Mvc2tpbGxcIjogW1xuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcInNraWxsXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9za2lsbC8yMDE2MDIyNS13aW5kb3dzcGFzc3dvcmRcIixcbiAgICAgICAgXCIvZG9jcy9za2lsbC8yMDE2MDMwNC1zcWxub3RlXCIsXG4gICAgICAgIFwiL2RvY3Mvc2tpbGwvMjAxNzExMzAtQ2xvdWRYTlNcIixcbiAgICAgICAgXCIvZG9jcy9za2lsbC8yMDE3MTEzMC1naXRodWJrZXlcIixcbiAgICAgICAgXCIvZG9jcy9za2lsbC8yMDE4MDgwOC1naXRTYXZlUHVsbFwiLFxuICAgICAgICBcIi9kb2NzL3NraWxsLzIwMTgwODA5LW1vbmdvSW5zdGFsbFwiLFxuICAgICAgICBcIi9kb2NzL3NraWxsLzIwMTkxMTI5LWdpdGJvb2tTa2lsbFwiXG4gICAgICBdXG4gICAgfVxuICBdLFxuICBcIi9kb2NzL3NvdW5pL2luZGV4XCI6IFtcbiAgICB7XG4gICAgICBcInRleHRcIjogXCJcdTk5OTZcdTk4NzVcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3NvdW5pL2luZGV4L2luZGV4Lmh0bWxcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiMS5iYXNlXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8xLmJhc2UvMC5maXJzdFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzEuYmFzZS8wMS5zdHJ1Y3R1cmVcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8xLmJhc2UvMDIuc3R5bGVcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8xLmJhc2UvMDMucm91dGVyXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMS5iYXNlLzA0LnN0b3JlXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMS5iYXNlLzA1LmFwaVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCIyLmNvbXBvbmVudHNcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy8wLmZpcnN0XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL2J0blwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9pdGVtXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL251bVwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9wb3BcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvcG9wYm94XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3Jlc2V0XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3Jvd1wiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9zb0NhbGVuZGFyXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvQ2hlY2tib3hcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvc29Gb3JtXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvR3JpZFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9zb1JhZGlvXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvUmVnaW9uXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvU2VhcmNoXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvU2VsZWN0XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvU2hlZXRcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvc29Td2l0Y2hcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvc29UaW1lXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3N1Ym1pdFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy90b2FzdFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy90eHRcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiMy5qc1wiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMy5qcy8wLmZpcnN0XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMy5qcy8wMS50b29sc1wiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzMuanMvMDIuYWpheFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzMuanMvMDMucG9wXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMy5qcy8wNC5ydWxlc1wiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzMuanMvMDUuc3lzXCJcbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIFwiL2RvY3Mvc291bmkvMS5iYXNlXCI6IFtcbiAgICB7XG4gICAgICBcInRleHRcIjogXCJcdTk5OTZcdTk4NzVcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3NvdW5pL2luZGV4L2luZGV4Lmh0bWxcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiMS5iYXNlXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8xLmJhc2UvMC5maXJzdFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzEuYmFzZS8wMS5zdHJ1Y3R1cmVcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8xLmJhc2UvMDIuc3R5bGVcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8xLmJhc2UvMDMucm91dGVyXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMS5iYXNlLzA0LnN0b3JlXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMS5iYXNlLzA1LmFwaVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCIyLmNvbXBvbmVudHNcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy8wLmZpcnN0XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL2J0blwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9pdGVtXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL251bVwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9wb3BcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvcG9wYm94XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3Jlc2V0XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3Jvd1wiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9zb0NhbGVuZGFyXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvQ2hlY2tib3hcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvc29Gb3JtXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvR3JpZFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9zb1JhZGlvXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvUmVnaW9uXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvU2VhcmNoXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvU2VsZWN0XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvU2hlZXRcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvc29Td2l0Y2hcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvc29UaW1lXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3N1Ym1pdFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy90b2FzdFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy90eHRcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiMy5qc1wiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMy5qcy8wLmZpcnN0XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMy5qcy8wMS50b29sc1wiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzMuanMvMDIuYWpheFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzMuanMvMDMucG9wXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMy5qcy8wNC5ydWxlc1wiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzMuanMvMDUuc3lzXCJcbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzXCI6IFtcbiAgICB7XG4gICAgICBcInRleHRcIjogXCJcdTk5OTZcdTk4NzVcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3NvdW5pL2luZGV4L2luZGV4Lmh0bWxcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiMS5iYXNlXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8xLmJhc2UvMC5maXJzdFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzEuYmFzZS8wMS5zdHJ1Y3R1cmVcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8xLmJhc2UvMDIuc3R5bGVcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8xLmJhc2UvMDMucm91dGVyXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMS5iYXNlLzA0LnN0b3JlXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMS5iYXNlLzA1LmFwaVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCIyLmNvbXBvbmVudHNcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy8wLmZpcnN0XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL2J0blwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9pdGVtXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL251bVwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9wb3BcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvcG9wYm94XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3Jlc2V0XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3Jvd1wiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9zb0NhbGVuZGFyXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvQ2hlY2tib3hcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvc29Gb3JtXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvR3JpZFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9zb1JhZGlvXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvUmVnaW9uXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvU2VhcmNoXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvU2VsZWN0XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvU2hlZXRcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvc29Td2l0Y2hcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvc29UaW1lXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3N1Ym1pdFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy90b2FzdFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy90eHRcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiMy5qc1wiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMy5qcy8wLmZpcnN0XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMy5qcy8wMS50b29sc1wiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzMuanMvMDIuYWpheFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzMuanMvMDMucG9wXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMy5qcy8wNC5ydWxlc1wiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzMuanMvMDUuc3lzXCJcbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIFwiL2RvY3Mvc291bmkvMy5qc1wiOiBbXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiXHU5OTk2XHU5ODc1XCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9zb3VuaS9pbmRleC9pbmRleC5odG1sXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjEuYmFzZVwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMS5iYXNlLzAuZmlyc3RcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8xLmJhc2UvMDEuc3RydWN0dXJlXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMS5iYXNlLzAyLnN0eWxlXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMS5iYXNlLzAzLnJvdXRlclwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzEuYmFzZS8wNC5zdG9yZVwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzEuYmFzZS8wNS5hcGlcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiMi5jb21wb25lbnRzXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvMC5maXJzdFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9idG5cIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvaXRlbVwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9udW1cIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvcG9wXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3BvcGJveFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9yZXNldFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9yb3dcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvc29DYWxlbmRhclwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9zb0NoZWNrYm94XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvRm9ybVwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9zb0dyaWRcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvc29SYWRpb1wiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9zb1JlZ2lvblwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9zb1NlYXJjaFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9zb1NlbGVjdFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9zb1NoZWV0XCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvU3dpdGNoXCIsXG4gICAgICAgIFwiL2RvY3Mvc291bmkvMi5jb21wb25lbnRzL3NvVGltZVwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzIuY29tcG9uZW50cy9zdWJtaXRcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvdG9hc3RcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8yLmNvbXBvbmVudHMvdHh0XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIjMuanNcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICBcIi9kb2NzL3NvdW5pLzMuanMvMC5maXJzdFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzMuanMvMDEudG9vbHNcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8zLmpzLzAyLmFqYXhcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8zLmpzLzAzLnBvcFwiLFxuICAgICAgICBcIi9kb2NzL3NvdW5pLzMuanMvMDQucnVsZXNcIixcbiAgICAgICAgXCIvZG9jcy9zb3VuaS8zLmpzLzA1LnN5c1wiXG4gICAgICBdXG4gICAgfVxuICBdXG59IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi93d3cvYnVqaWNob25nLy52dWVwcmVzcy9jb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHd3d1xcXFxidWppY2hvbmdcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZ1xcXFxuYXZDb250YWluZXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3d3dy9idWppY2hvbmcvLnZ1ZXByZXNzL2NvbmZpZy9uYXZDb250YWluZXIudHNcIjsvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcdTgxRUFcdTVCOUFcdTRFNDlcdTVCQjlcdTU2NjhcdUZGMENcdTc1MjhcdTY3NjVcdTZFMzJcdTY3RDNcdTc2ODRcdTVCRkNcdTgyMkFcclxuICogQEVtYWlsOiBidWppY2hvbmdAMTYzLmNvbVxyXG4gKiBARGF0ZTogMjAyMy0wMi0yOCAxNDo0MjoyNVxyXG4gKiBATGFzdEVkaXRvcnM6IFNDLTIwMjAwMjAzMTAzNFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIzLTAzLTA1IDEzOjExOjQ3XHJcbiAqIEBBdXRob3I6IGJ1amljaG9uZ1xyXG4gKi9cclxuaW1wb3J0IHsgY29udGFpbmVyUGx1Z2luIH0gZnJvbSBcIkB2dWVwcmVzcy9wbHVnaW4tY29udGFpbmVyXCI7XHJcblxyXG5jb25zdCBjb2xvcnMgPSBbXHJcbiAgXCIjZTBmYWZmXCIsXHJcbiAgXCIjRUFFQkZEXCIsXHJcbiAgXCIjRkNFQkVCXCIsXHJcbiAgXCIjZTdmMmZmXCIsXHJcbiAgXCIjRUNGQkVDXCIsXHJcblxyXG4gIFwiI0ZCRjBGOFwiLFxyXG4gIFwiI0ZCRjNFNlwiLFxyXG4gIFwiI0UxRjlGN1wiLFxyXG4gIFwiI0U5RUFFRlwiLFxyXG4gIFwiI0Y0RjhFMFwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gIGNvbnRhaW5lclBsdWdpbih7XHJcbiAgICAvL25hdiBcdTVCRkNcdTgyMkFcdTVCQjlcdTU2NjhcclxuICAgIHR5cGU6IFwibmF2XCIsXHJcbiAgICByZW5kZXI6ICh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzZWxmKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRva2VucyxpbmRleCxvcHRpb25zLGVudixzZWxmKTtcclxuICAgICAgY29uc3QgeyB0eXBlLCBpbmZvIH0gPSB0b2tlbnNbaWR4XTtcclxuICAgICAgY29uc3QgW2N1c3RvbVR5cGUsIGljb24sIGNvbG9yXSA9IGluZm8udHJpbSgpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgaWYgKC9jb250YWluZXJcXF9cXHcrXFxfb3Blbi9nLnRlc3QodHlwZSkpIHtcclxuICAgICAgICBjb25zdCByZWFsQyA9XHJcbiAgICAgICAgICBjb2xvciB8fCBjb2xvcnNbTWF0aC5mbG9vcihjb2xvcnMubGVuZ3RoICogTWF0aC5yYW5kb20oKSldO1xyXG4gICAgICAgIGNvbnN0IGJnY2ggPSBgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiR7cmVhbEN9O1wiYDtcclxuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJuYXYtY29udGFpbmVyICR7Y3VzdG9tVHlwZX1cIiAke2JnY2h9PlxyXG4gICAgICAgIDx4aWNvbnMgY2xhc3M9XCJ4aWNvblwiIGljb25TaXplPVwiMjhcIiBpY29uPVwiJHtcclxuICAgICAgICAgIGljb24gfHwgXCJDdWJlXCJcclxuICAgICAgICB9XCIgLz5gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgvY29udGFpbmVyXFxfXFx3K1xcX2Nsb3NlL2cudGVzdCh0eXBlKSkge1xyXG4gICAgICAgIHJldHVybiBcIjwvZGl2PlwiO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZWxmLnJlbmRlclRva2VuKHRva2VucywgaWR4LCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgfSksXHJcbiAgY29udGFpbmVyUGx1Z2luKHtcclxuICAgIC8vbmF2IFx1NUJGQ1x1ODIyQVx1N0VDNFxyXG4gICAgdHlwZTogXCJuYXYtZ3JvdXBcIixcclxuICAgIGJlZm9yZTogKGluZm86IHN0cmluZykgPT4ge1xyXG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJuYXYtZ3JvdXAtY29udGFpbmVyXCI+JHtcclxuICAgICAgICBpbmZvID8gYDxoMiBjbGFzcz1cIm5hdi1ncm91cC10aXRsZVwiPiR7aW5mb308L2gyPmAgOiBcIlwiXHJcbiAgICAgIH1cXG5gO1xyXG4gICAgfSxcclxuICAgIGFmdGVyOiAoKTogc3RyaW5nID0+IHtcclxuICAgICAgcmV0dXJuIFwiPC9kaXY+XFxuXCI7XHJcbiAgICB9LFxyXG4gIH0pLFxyXG5dO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L3d3dy9idWppY2hvbmcvLnZ1ZXByZXNzL2NvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcd3d3XFxcXGJ1amljaG9uZ1xcXFwudnVlcHJlc3NcXFxcY29uZmlnXFxcXG5hdmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd3d3L2J1amljaG9uZy8udnVlcHJlc3MvY29uZmlnL25hdmJhci50c1wiOy8qXHJcbiAqIEBEZXNjcmlwdHRpb246ICBcdTUzNUFcdTVCQTJcdTRFM0JcdTVCRkNcdTgyMkFcclxuICogQEVtYWlsOiBidWppY2hvbmdAMTYzLmNvbVxyXG4gKiBARGF0ZTogMjAyMy0wMy0wMSAxMTowNjozMVxyXG4gKiBATGFzdEVkaXRvcnM6IFNDLTIwMjAwMjAzMTAzNFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIzLTA0LTIyIDE2OjM1OjUxXHJcbiAqIEBBdXRob3I6IGJ1amljaG9uZ1xyXG4gKi9cclxuY29uc3QgbmF2YmFyID0gW1xyXG4gICAgeyB0ZXh0OiBcIlx1NTM1QVx1NUJBMlwiLCBsaW5rOiBcIi9cIiwgaWNvbjogJ0hvbWUnIH0sXHJcbiAgICAvLyB7IHRleHQ6IFwiXHU2NTg3XHU2ODYzXHU5OTk2XHU5ODc1XCIsIGxpbms6IFwiL2RvY3MvaW5kZXguaHRtbFwiLCBpY29uOiAnRGF0YUNlbnRlcid9LFxyXG4gICAgLy8geyB0ZXh0OiBcIlx1NTIwNlx1N0M3QlwiLCBsaW5rOiBcIi9jYXRlZ29yaWVzL3NodW9taW5nLzEvXCIgfSxcclxuICAgIC8vIHsgdGV4dDogXCJcdTY4MDdcdTdCN0VcIiwgbGluazogXCIvdGFncy9zaHVvbWluZy8xL1wiIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiQ1NTXCIsXHJcbiAgICAgIGxpbms6IFwiL2RvY3MvY3NzX3llYXIvaW5kZXgvXCIsXHJcbiAgICAgIGljb246ICdDbG91ZFNhdGVsbGl0ZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIkpTXCIsXHJcbiAgICAgIGxpbms6IFwiL2RvY3MvanNfeWVhci9pbmRleC9cIixcclxuICAgICAgaWNvbjogJ0V4cGxvcmUnLFxyXG4gICAgfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgdGV4dDogXCJcdTc2RjhcdTUxOENcIixcclxuICAgIC8vICAgbGluazogXCIvcGhvdG8vXCIsXHJcbiAgICAvLyAgIGljb246ICdFeHBsb3JlJyxcclxuICAgIC8vIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU2NTg3XHU2ODYzXCIsXHJcbiAgICAgIGxpbms6IFwiL2RvY3MvaW5kZXgvXCIsXHJcbiAgICAgIGljb246ICdEYXRhQ2VudGVyJyxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlBDXHU3QUVGXHU2ODQ2XHU2N0I2XHU2MjRCXHU1MThDXCIsXHJcbiAgICAgICAgICBsaW5rOiBcIi9kb2NzL3Bjd29yay9pbmRleC9cIixcclxuICAgICAgICAgIC8vIGljb246ICdDZEFyY2hpdmUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJ1bmlcdTVDMEZcdTdBMEJcdTVFOEZcdTVGMDBcdTUzRDFcdTYyNEJcdTUxOENcIixcclxuICAgICAgICAgIGxpbms6IFwiL2RvY3Mvc291bmkvaW5kZXgvXCIsXHJcbiAgICAgICAgICAvLyBpY29uOiAnSWJtQ2xvdWRWcGNFbmRwb2ludHMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdmJhcjsiXSwKICAibWFwcGluZ3MiOiAiO0FBQTJQLFNBQVMsd0JBQXdCO0FBQzVSLFNBQVMsd0JBQXdCO0FBRWpDLE9BQU8sZUFBZTs7O0FDSDZQLElBQU8sa0JBQVE7QUFBQSxFQUNoUyx3QkFBd0IsQ0FBQztBQUFBLEVBQ3pCLHVCQUF1QixDQUFDO0FBQUEsRUFDeEIsdUJBQXVCLENBQUM7QUFBQSxFQUN4Qix1QkFBdUIsQ0FBQztBQUFBLEVBQ3hCLHVCQUF1QixDQUFDO0FBQUEsRUFDeEIsdUJBQXVCLENBQUM7QUFBQSxFQUN4QixzQkFBc0IsQ0FBQztBQUFBLEVBQ3ZCLHNCQUFzQixDQUFDO0FBQUEsRUFDdkIsc0JBQXNCLENBQUM7QUFBQSxFQUN2QixzQkFBc0IsQ0FBQztBQUFBLEVBQ3ZCLHNCQUFzQixDQUFDO0FBQUEsRUFDdkIsc0JBQXNCLENBQUM7QUFBQSxFQUN2QixzQkFBc0IsQ0FBQztBQUFBLEVBQ3ZCLHNCQUFzQixDQUFDO0FBQUEsRUFDdkIsc0JBQXNCO0FBQUEsSUFDcEI7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsdUJBQXVCO0FBQUEsSUFDckI7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0Esc0JBQXNCO0FBQUEsSUFDcEI7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsMkJBQTJCO0FBQUEsSUFDekI7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsdUJBQXVCO0FBQUEsSUFDckI7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0Esc0JBQXNCO0FBQUEsSUFDcEI7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0Esd0JBQXdCO0FBQUEsSUFDdEI7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZUFBZTtBQUFBLElBQ2I7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxxQkFBcUI7QUFBQSxJQUNuQjtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxzQkFBc0I7QUFBQSxJQUNwQjtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSw0QkFBNEI7QUFBQSxJQUMxQjtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxvQkFBb0I7QUFBQSxJQUNsQjtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7OztBQ3ZzQkEsU0FBUyx1QkFBdUI7QUFFaEMsSUFBTSxTQUFTO0FBQUEsRUFDYjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUVBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGO0FBRUEsSUFBTyx1QkFBUTtBQUFBLEVBQ2IsZ0JBQWdCO0FBQUE7QUFBQSxJQUVkLE1BQU07QUFBQSxJQUNOLFFBQVEsQ0FBQyxRQUFRLEtBQUssU0FBUyxLQUFLLFNBQVM7QUFFM0MsWUFBTSxFQUFFLE1BQU0sS0FBSyxJQUFJLE9BQU8sR0FBRztBQUNqQyxZQUFNLENBQUMsWUFBWSxNQUFNLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRSxNQUFNLEdBQUc7QUFDdkQsVUFBSSx3QkFBd0IsS0FBSyxJQUFJLEdBQUc7QUFDdEMsY0FBTSxRQUNKLFNBQVMsT0FBTyxLQUFLLE1BQU0sT0FBTyxTQUFTLEtBQUssT0FBTyxDQUFDLENBQUM7QUFDM0QsY0FBTSxPQUFPLDJCQUEyQjtBQUN4QyxlQUFPLDZCQUE2QixlQUFlO0FBQUEsb0RBRWpELFFBQVE7QUFBQSxNQUVaO0FBQ0EsVUFBSSx5QkFBeUIsS0FBSyxJQUFJLEdBQUc7QUFDdkMsZUFBTztBQUFBLE1BQ1Q7QUFDQSxhQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssT0FBTztBQUFBLElBQzlDO0FBQUEsRUFDRixDQUFDO0FBQUEsRUFDRCxnQkFBZ0I7QUFBQTtBQUFBLElBRWQsTUFBTTtBQUFBLElBQ04sUUFBUSxDQUFDLFNBQWlCO0FBQ3hCLGFBQU8sb0NBQ0wsT0FBTywrQkFBK0IsY0FBYztBQUFBO0FBQUEsSUFFeEQ7QUFBQSxJQUNBLE9BQU8sTUFBYztBQUNuQixhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0YsQ0FBQztBQUNIOzs7QUNuREEsSUFBTSxTQUFTO0FBQUEsRUFDWCxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxLQUFLLE1BQU0sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSXRDO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUE7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUE7QUFBQSxNQUVSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBO0FBQUEsTUFFUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFRixJQUFPLGlCQUFROzs7QUh0Q2YsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sbUJBQW1CLENBQUMsQ0FBQztBQUFBLEVBQzFELFNBQVM7QUFBQSxJQUNQLGlCQUFpQjtBQUFBO0FBQUEsSUFFakIsQ0FBQztBQUFBLElBQ0QsR0FBRztBQUFBO0FBQUEsRUFDTDtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sT0FBTyxVQUFVO0FBQUEsSUFDZixjQUFhO0FBQUEsSUFDYixpQkFBaUI7QUFBQSxJQUNqQix1QkFBdUI7QUFBQTtBQUFBO0FBQUEsSUFHdkIsZUFBZTtBQUFBLElBQ2YsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsVUFBVTtBQUFBLElBQ1YsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsY0FBYztBQUFBLElBQ2Q7QUFBQSxJQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBYUYsQ0FBQztBQUFBO0FBRUgsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
