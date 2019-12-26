Ext.define('storage.Navigation', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.Navigation',
	initComponent: function(){ 
	    var me = this;
	    
		var store = Ext.create('Ext.data.TreeStore', {
			root: {
				expanded: true,
				children: [
					{text: '商品', expanded: true, qtitle:'storage.instorage.main', children: [
					    {text:'库存信息',  leaf:true, qtitle:'storage.instorage.main',limitRank:5,children:[]},
  						{text:'售卖打单', leaf: true, qtitle:'storage.trade.detailedMain',iconCls:'print',limitRank:3},
						{text:'销售记录', leaf: true, qtitle:'storage.order.main',limitRank:1},
						{text:'出入库历史记录', leaf: true, qtitle:'storage.inOutHistory.main',limitRank:1}
					]},
					{text:'人员', expanded: true, qtitle:'storage.customer.main', children: [
					    {text:'客户管理', leaf: true, qtitle:'storage.customer.main',limitRank:5},
					    {text:'系统人员管理', leaf:true, qtitle:'storage.user.main',limitRank:1}
					]},
					{text:'数据统计', leaf: true, qtitle:'storage.statis.main',limitRank:1,iconCls:'chart'}
				]
			}
		});
		
		me.destroyLimitNode(store.getRootNode());
		
	    Ext.apply(this, {
			border:false,
			autoscroll:true,
			store: store,
			rootVisible: false,
			renderTo: Ext.getBody(),
			listeners:{
				'itemclick':function(v,a){
					var me = v.up();
					me.link(a.data['qtitle']);
				},
				'afterRender':function(me,a){
					me.destroyLimitNode(me.getRootNode());
				}
			}
		});
		me.callParent();
    },
	link:function(path){
		var me = this;

		var mainPanel;
		if(path) {
			mainPanel = Ext.create(path);
		} else {
			mainPanel = Ext.create('storage.errorPanel');
		}
		
		var centerPanel = top.view.down('#centerPanel');
		centerPanel.removeAll();
		centerPanel.add(mainPanel);
	},
	destroyLimitNode:function(node){
		var me = this;
		var childnodes = node.childNodes;
		for(var i=0;i<childnodes.length;i++){  //从节点中取出子节点依次遍历
			var rootnode = childnodes[i];
			if(user.limitRank > rootnode.raw.limitRank) {
				//直接干掉节点不予显示
				childnodes.splice(i,1);
				i--;
			} else if(rootnode.childNodes.length>0){  //判断子节点下是否存在子节点
				me.destroyLimitNode(rootnode);    //如果存在子节点  递归
			}
		}
	}
});
	