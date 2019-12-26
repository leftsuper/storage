Ext.define('storage.order.main', {
	extend:'Ext.panel.Panel',
	alias:'widget.orderGrid',
	initComponent:function() {
		var me = this;
		
		var orderStore = Ext.create('storage.order.orderStore');
		
		var mainPanel = Ext.create('Ext.grid.Panel',{
			height:'100%',
			width:'100%',
			autoScroll:true,
			store:orderStore,
			border:false,
			selModel:Ext.create('Ext.selection.CheckboxModel'),
			tbar:[
			      {text:'打印订单',iconCls:'print',handler:function(){
			    	  me.print();
			      }},
			      '->',
			      {xtype:'combobox',itemId:'isPrint',fieldLabel:'是否打印',labelAlign:'right',labelWidth:75,width:160,store:yesNoAllStore,
			    	  queryMode:'local',displayField:'name',valueField:'code',editable:false,margin:'0 5 0 0',value:'ALL'},
			      {xtype:'textfield',itemId:'orderNo',fieldLabel:'订单号',labelAlign:'right',labelWidth:60,width:150,enableKeyEvents:true,listeners:{
		    		   'keypress':function(e, t, o){
		    			   if(t.getKey() == t.ENTER) {
		    				  me.search(); 
		    			   }
		    		   }
		    	   }},
			      {xtype:'numberfield',itemId:'width',fieldLabel:'货物信息',labelAlign:'right',labelWidth:75,width:150,
			    	  vtype:'positiveNumber',decimalPrecision:2,enableKeyEvents:true,listeners:{
		    		   'keypress':function(e, t, o){
		    			   if(t.getKey() == t.ENTER) {
		    				  me.search(); 
		    			   }
		    		   }
		    	   }},
			      {xtype:'label',text:'宽'},
			      {xtype:'numberfield',itemId:'height',width:65,vtype:'positiveNumber',decimalPrecision:2,enableKeyEvents:true,listeners:{
		    		   'keypress':function(e, t, o){
		    			   if(t.getKey() == t.ENTER) {
		    				  me.search(); 
		    			   }
		    		   }
		    	   }},
			      {xtype:'label',text:'长'},
			      {xtype:'textfield',itemId:'name',width:180,enableKeyEvents:true,listeners:{
		    		   'keypress':function(e, t, o){
		    			   if(t.getKey() == t.ENTER) {
		    				  me.search(); 
		    			   }
		    		   }
		    	   }},
			      {text:'查询',iconCls:'search',handler:function(){
			    	  me.search();
			      }}
			      ],
			columns: [
			        {xtype: 'rownumberer'},
					{ header: 'id', 			dataIndex: 'id' 			,hidden:true},
					{ header: '订单号',			dataIndex: 'orderNo'		,width:150,renderer:function(v){
							return '<a href="javascript:void(0)">' + v + '</a>';
						},
						listeners:{
							'click':function(){
								me.openDetailedOrder();
							}
						}},
					{ header: '是否打印',			dataIndex: 'isPrint'		,width:80,align:'center',renderer:function(v){
						if(v == 'Y') {
							return '<font color="green">是</font>';
						} else {
							return '<font color="red">否</font>';
						}
					}},
					{ header: '客户',			dataIndex: 'customer'		,width:120},
					{ header: '备注',			dataIndex: 'remark'			,flex:1},
					{ header: '删除标识',			dataIndex: 'isDelete'  		,width:50,hidden:true},
					{ header: '创建者',			dataIndex: 'creator'  		,width:120,hidden:true},
					{ header: '创建时间',			dataIndex: 'createdTime'  	,width:200,hidden:true},
					{ header: '更新者',			dataIndex: 'updator'  		,width:120,hidden:true},
					{ header: '更新时间',			dataIndex: 'updatedTime'  	,width:200,hidden:true}
			      ],
				dockedItems: [{
			        xtype: 'pagingtoolbar',
			        store: orderStore,   
			        dock: 'bottom',
			        displayInfo: true
			    }]
			});
		
		Ext.apply(this,{
			height:'100%',
			width:'100%',
			layout:'fit',
			mainPanel:mainPanel,
			items:[mainPanel],
		    listeners:{
		    	'added':function(pnl){
					pnl.search();
				}
		    }
		});
		
		me.callParent();
	},
	search:function(){
		var me = this;
		
		var isPrint = me.down('#isPrint').getValue();
		var orderNo = me.down('#orderNo').getValue();
		var width = me.down('#width').getValue();
		var height = me.down('#height').getValue();
		var name = me.down('#name').getValue();
		
		
		me.mainPanel.getStore().load({
			params:{
				'isPrint':isPrint?isPrint:null,
				'orderNo':orderNo?orderNo:null,
				'width':width?width:null,
				'height':height?height:null,
				'name':name?name:null
			}
		});
	},
	openDetailedOrder:function(record){
		var me = this;
		
		var records = me.mainPanel.getSelectionModel().getSelection();
    	
		if(records[0]) {
			top.createWin(me,'storage.order.detailedOrder','订单详情', 700, 500);
			top.myWin.itemPanel.initData(records[0]);
    		top.myWin.show();
		}
	},
	print:function(){
		var me = this;
		var records = me.mainPanel.getSelectionModel().getSelection();
    	
    	if(!records || records.length != 1) {
    		Ext.Msg.alert('警告','请选择一条数据！');
    		return;
    	}
		var idOrder = records[0].data['id'];
		var isPrint = records[0].data['isPrint'];
		
		if(isPrint == 'Y') {
			Ext.MessageBox.confirm('确认','订单已经打印，是否再次打印？',
	    			function(choose){
			    		if(choose == 'yes') {
			    			top.createWin(this, 'storage.trade.print', '打印预览', 750, 450);
			    			top.myWin.itemPanel.idOrder = idOrder;
			    			top.myWin.itemPanel.html = '<iframe src="/storage/trade/toPrintPage?orderId=' + idOrder + '" id="printFrame" width="100%" height="100%"></iframe>',
			    			top.myWin.show();
			    		}
			});
		} else {
			top.createWin(this, 'storage.trade.print', '打印预览', 750, 450);
			top.myWin.itemPanel.idOrder = idOrder;
			top.myWin.itemPanel.html = '<iframe src="/storage/trade/toPrintPage?orderId=' + idOrder + '" id="printFrame" width="100%" height="100%"></iframe>',
			top.myWin.show();
		}
	}
});