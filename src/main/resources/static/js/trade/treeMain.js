Ext.define('storage.trade.treeMain', {
	extend:'Ext.panel.Panel',
	alias:'widget.tradeGrid',
	initComponent:function() {
		var me = this;

		var tradeStore = Ext.create('storage.trade.orderStore');
		var pageStore = Ext.create('storage.trade.orderPageStore');
		pageStore.on('load',function(store, records, obj){
			me.search(store.lastOptions.start,store.lastOptions.limit)
		});
		
		var mainPanel = Ext.create('Ext.tree.Panel', {
			width:500,
			height:300,
			renderTo:Ext.getBody(),
			useArrows:true,
			rootVisible:false,
			store:tradeStore,
			multiSelect:true,
			tbar:[
			      '->',
			      {xtype:'combobox',fieldLabel:'是否打印',labelAlign:'right',labelWidth:60,width:140,store:yesOrNoStore,
			    	  queryMode:'lcoal',displayField:'name',valueField:'code',editable:false,margin:'0 5 0 0'},
			      {xtype:'textfield',fieldLabel:'订单号',labelAlign:'right',labelWidth:40,width:150},
			      {text:'查询',iconCls:'search',handler:function(){
			    	  me.search();
			      }}
			      ],
			columns:[
			         {xtype:'treecolumn', text:'标题', flex:2, sortable:true, dataIndex:'title'},
			         {text:'ID', width:100, sortable:true, dataIndex:'id', hidden:true},
			         {text:'idGoods', width:100, dataIndex:'idGoods', sortable:true, hidden:true},
			         {text:'客户', width:150, dataIndex:'customer', sortable:true},
			         {text:'价格', width:100, dataIndex:'price', sortable:true,renderer:function(v){
			        	 if(!isNaN(v) && v == 0) {
			        		 return null;
			        	 } 
			        	 return v;
			         }},
			         {text:'数量', width:200, dataIndex:'number', sortable:true,renderer:function(v){
			        	 if(!isNaN(v) && v == 0) {
			        		 return null;
			        	 } 
			        	 return v;
			         }},
			         {text:'总价', width:200, dataIndex:'number', sortable:true,renderer:function(v,a,b,c){
			         	 debugger;
			         }},
			         {text:'是否删除', width:100, dataIndex:'isDelete', sortable:true, hidden:true},
			         {text:'创建时间', width:100, dataIndex:'createdTime', sortable:true, hidden:true},
			         {text:'修改时间', width:100, dataIndex:'updatedTime', sortable:true, hidden:true}
			         ],
			dockedItems: [{
		        xtype: 'pagingtoolbar',
		        store: pageStore,   
		        dock: 'bottom',
		        displayInfo: true
		    }]
		});

		Ext.apply(this, {
			height:'100%',
			width:'100%',
			layout:'fit',
			mainPanel:mainPanel,
			items:[ mainPanel ]
		});
		
		me.callParent();
		pageStore.load();
		//me.search();
	},
	search:function(start, limit) {
		var me = this;

		me.mainPanel.getStore().load({
			params:{
				'start':start?start:null,
				'limit':limit?limit:null
			}
		});
	}
});