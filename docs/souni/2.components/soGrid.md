---
title: "so-grid"
author: bujichong
subSidebar: true
categories:
- components
tags:
- components
comments: true
---

>**so-grid组件** 是 ipad 端展示数据的表格，接口简洁清晰。

## 代码示例
**模板代码**：
```vue
<so-grid ref="grid" :cols="cols" :url="url" :params="params" @onClickRow="clickRow" @onClickCell="clickCell" @onCheck="checkItem" @onCheckAll="checkAll" :pagenav="true" :checkbox="true">
    <view slot="header">
    	...
    </view> 
</so-grid>
```

**js代码**：
```javascript
...
data(){
  return{
      url : '/api/userlist',
      params : {type:2},
      cols : [
          {title: '姓名',field: 'name',width:100}, 
          {title: '年龄',field: 'age',width:80}, 
          {title: '地址',field: 'address',width:260,align:'left'}, 
          {title: '电话',field: 'phone',width:120}, 
          {title: '日期',field: 'date',width:120,formatter:({value,rowIndex,colIndex,row})=>{
              return this.$t.fmtDate(value,'yyyy-MM-dd');
          }},
      ],
  }  
},
metods:{
    loadData(){
        this.$refs.grid.loadData(this.colsData);
    },
    refreshGrid(){//
        this.$refs.grid.refresh();
    },
	getD(){//
	    console.log('getChecked:',this.$refs.grid.getChecked());
	    console.log('getSelected:',this.$refs.grid.getSelected());
	    console.log('getData:',this.$refs.grid.getData());
	    console.log('getRows:',this.$refs.grid.getRows());
	},
	clickRow(index,row){//点击 row
	    // console.log(index,row);
	    console.log(this.$refs.grid.getSelected());
	},
	clickCell(data){//点击单元格
	    console.log(data);
	},
	checkAll(checkedAll){//选择全部
	    console.log(checkedAll);
	},
	checkItem(value,index,row){
	    // console.log(value,index,row)
	    console.log(this.$refs.grid.getChecked());//取选择项
	},
	onScrollToTop(){//滚到顶部行事件
	    console.log('滚动到顶部了...')
	},
	onScrollToBottom(){//滚到底部执行事件
	    console.log('滚动到底部了...')
	}
}
...
```



## Props

| 参数            | 说明                         | 类型          | 默认值        | 可选值 |
| --------------- | ---------------------------- | ------------- | ------------- | ------ |
| col             | 列配置                       | Array         | []            |        |
| colAutoFit      | 列是否自适应屏幕宽           | Boolean       | false         | true   |
| ajaxType        | 请求类型，默认post           | String        | 'post'        | 'get'  |
| url             | 请求url                      | String        | ''            | -      |
| params          | 请求参数                     | Object        | {}            | -      |
| emptyMsg        | 无信息提示                   | String        | '暂无信息...' | -      |
| data            | grid数据                     | Array,Object  | []            | -      |
| defColWidth     | 列默认宽（不设置宽度的时候） | String,Number | 160           | -      |
| colBorderRight  | 是否显示列右边框             | Boolean       | false         | true   |
| rownumbers      | 是否显示行号                 | Boolean       | true          | false  |
| rownumbersWidth | 行号宽度                     | String,Number | 40            | -      |
| pagenav         | 是否显示分页                 | Boolean       | true          | false  |
| pageStart       | 请求起始页                   | Number,String | 1             | -      |
| pageSize        | 分页每页数量                 | Number,String | 20            | -      |
| checkbox        | 是否需要checkbox             | Boolean       | false         | true   |
| checkDisabled   | 禁用checkbox                 | Boolean       | false         | true   |
| checkOnSelect   | select 行时同时check row     | Boolean       | true          | false  |
| showRefresh     | 有分页时是否显示刷新按钮     | Boolean       | false         | true   |
| initQuery       | 是否直接请求数据，开启才请求 | Boolean       | true          | false  |

## col 选项

| 参数      | 说明                                                         | 类型     | 默认值   | 可选值         |
| --------- | ------------------------------------------------------------ | -------- | -------- | -------------- |
| title     | 列标题                                                       | String   | ''       | -              |
| field     | 列数据对应字段，暂不支持子对象                               | String   | ''       | -              |
| width     | 列宽，默认160rpx                                             | String   | '160rpx' | -              |
| formatter | format 值，必须要有 return ,参数：Function({value,rowIndex,colIndex,row}) | Function | -        | -              |
| align     | 对齐方式，默认是 居中                                        | String   | 'center' | 'left','right' |

## Events

| 方法名           | 说明                                      | 参数                         |
| ---------------- | ----------------------------------------- | ---------------------------- |
| onLoadSuccess    | 当数据加载完执行                          | Function({rows,total})       |
| onClickRow       | 点击行事件                                | Function(index,row)          |
| onClickCell      | 点击单元格事件                            | Function(cellData)           |
| onCheckAll       | 勾选全部时事件                            | Function(cecked)             |
| onCheck          | 勾选行                                    | Function(value,name,rowData) |
| onScrollToTop    | table滚动到顶部执行事件                   | null                         |
| onScrollToBotton | table滚动到底部执行事件                   | null                         |
| onScrollToLeft   | table滚动到最左侧(当有横向滚动时)执行事件 | null                         |
| onScrollToRight  | table滚动到最左侧(当有横向滚动时)执行事件 | null                         |


## Method

| 数名        | 说明                     | 参数                           |
| ----------- | ------------------------ | ------------------------------ |
| scrollToTop | table滚动到顶部          | null                           |
| refresh     | 刷新grid，不翻页         | null                           |
| loadData    | 直接加载数据             | Function(data);  |
| load        | 重新加载数据             | Function({data,params,url})    |
| reload      | 重新加载(不改变当前page) | Fnction({data,params,url})     |
| getData     | 获取数据                 | Function(rows,total)           |
| getRows     | 获取行数据               | Function(rowData)      |
| getSelected | 获取被选择数据           | Function({index,rows})  |
| getChecked  | 获取被勾选数据           | Function({indexs,rows}) |

## slots

| 名称    | 说明                     | 参数          |
| ------- | ------------------------ | ------------- |
| header  | 插入表格上方             | null          |
| footer  | 插入表格下方             | null          |
| navbar  | 插入底部nav中            | null          |
| itemOps | row操作 slot，单击时显示 | item(row数据) |

