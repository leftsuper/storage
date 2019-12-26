Ext.define('storage.customer.main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.customerGrid',
	initComponent: function(){ 
		var me = this;

		var customerStore = Ext.create('storage.customer.customerStore');
		
		var mainPanel = Ext.create('Ext.grid.Panel',{
			height:'100%',
			width:'100%',
			autoScroll:true,
			store:customerStore,
			border:false,
			selModel:Ext.create('Ext.selection.CheckboxModel'),
			tbar:[
			      {text:'新增客户',iconCls:'user_add',handler:function(){
			    	  me.addcustomer();
			      }},'-',
			      {text:'客户编辑',iconCls:'user_edit',limitRank:3,handler:function(){
			    	  me.editcustomer();
			      }},'-',
			      {text:'删除客户',iconCls:'user_delete',limitRank:1,handler:function(){
			    	  me.deletecustomer();
			      }},'->',
			      {xtype:'textfield',fieldLabel:'客户名称',itemId:'customerName',
			    	  width:170,labelAlign:'right',labelWidth:80},
			      {text:'查询',iconCls:'search',handler:function(){
			    	  me.search();
			      }}
			      ],
			columns: [
			        {xtype: 'rownumberer'},
					{ header: 'id', 			dataIndex: 'id' 			,hidden:true},
					{ header: '姓名',			dataIndex: 'name'			,width:200},
					{ header: '电话',			dataIndex: 'tel'			,width:200},
					{ header: '地址',			dataIndex: 'address'  		,flex:1}
			      ],
			dockedItems: [{
		        xtype: 'pagingtoolbar',
		        store: customerStore,   
		        dock: 'bottom',
		        displayInfo: true
		    }]
		});
		
		Ext.apply(this,{
			height:'100%',
			width:'100%',
			layout:'fit',
			mainPanel:mainPanel,
			items:[mainPanel]
		});

		me.callParent();
		me.search();
		
    },
    search:function(){
    	var me = this;
    	
    	var customerName = me.down('#customerName').getValue();
  	  
    	me.mainPanel.getStore().load({
    		params:{
    			'name':customerName?customerName:null
    		}
    	});
    },
    addcustomer:function(){
    	var me = this;
    	
    	var customerEditPanel = Ext.create('storage.customer.customerEditPanel');
    	
    	top.createWin(me,'storage.customer.customerEditPanel','添加客户', 600, 230);
    	top.myWin.show();
    },
    editcustomer:function(){
    	var me = this;
    	
    	var records = me.mainPanel.getSelectionModel().getSelection();
    	
    	if(!records || records.length != 1) {
    		Ext.Msg.alert('警告','请选择一条数据！');
    		return;
    	}
    	
    	top.createWin(me,'storage.customer.customerEditPanel','编辑客户', 600, 230);
    	top.myWin.itemPanel.initFormData(records[0]);
    	top.myWin.show();
    },
    deletecustomer:function(){
    	var me = this;
    	
    	var records = me.mainPanel.getSelectionModel().getSelection();
    	
    	if(!records || records.length < 1) {
    		Ext.Msg.alert('警告','请选择数据！');
    		return;
    	}
    	
    	var ids = [];
    	Ext.each(records,function(item){
    		ids.push(item.get('id'));
    	});
    	Ext.MessageBox.confirm('确认','确定要删除这' + ids.length + '条数据吗？',
    			function(choose){
    		if(choose == 'yes') {
    			Ext.Ajax.request({
    				params:{ids:ids.toString()},
    				method:'post',
    				waitMsg:'正在删除中...',
    				url:loadPath + 'customer/delete',
    				callback:function(options,success,response) {
    					var responseObj = Ext.decode(response.responseText);
    					if(responseObj.success) {
    						Ext.Msg.alert('提示','数据删除成功！');
    					} else if(responseObj.failure) {
    						Ext.Msg.alert('警告',responseObj.msg);
    					} else {
    						Ext.Msg.alert('警告','服务器响应错误!');
    					}
    				}
    			});
    		}
    	});
    }
});