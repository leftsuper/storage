Ext.define('storage.user.main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.userGrid',
	initComponent: function(){ 
		var me = this;

		var userStore = Ext.create('storage.user.userStore');
		
		var mainPanel = Ext.create('Ext.grid.Panel',{
			height:'100%',
			width:'100%',
			autoScroll:true,
			store:userStore,
			border:false,
			selModel:Ext.create('Ext.selection.CheckboxModel'),
			tbar:[
			      {text:'新增用户',iconCls:'user_add',handler:function(){
			    	  me.adduser();
			      }},'-',
			      {text:'用户编辑',iconCls:'user_edit',handler:function(){
			    	  me.edituser();
			      }},'-',
			      {text:'删除用户',iconCls:'user_delete',handler:function(){
			    	  me.deleteuser();
			      }},'->',
			      {xtype:'textfield',fieldLabel:'用户名称',itemId:'userName',
			    	  width:170,labelAlign:'right',labelWidth:80},
			      {text:'查询',iconCls:'search',handler:function(){
			    	  me.search();
			      }}
			      ],
			columns: [
			        {xtype: 'rownumberer'},
					{ header: 'id', 		dataIndex: 'id' 		,hidden:true},
					{ header: '姓名',		dataIndex: 'name'		,flex:1},
					{ header: '登陆名',		dataIndex: 'loginName'	,width:200},
					{ header: '权限等级',		dataIndex: 'limitRank'  ,width:200,renderer:function(v){
						return getDataNameByCode(limitStore, v);
					}},
					{ header: '删除标识',			dataIndex: 'isDelete'  ,width:80,hidden:true,renderer:function(v){
						return getDataNameByCode(yesOrNoStore, v);
					}},
					{ header: '创建者',			dataIndex: 'creator'  		,width:120,hidden:true},
					{ header: '创建时间',			dataIndex: 'createdTime'  	,width:200,hidden:true},
					{ header: '更新者',			dataIndex: 'updator'  		,width:120,hidden:true},
					{ header: '更新时间',			dataIndex: 'updatedTime'  	,width:200,hidden:true}
			      ],
			dockedItems: [{
		        xtype: 'pagingtoolbar',
		        store: userStore,   
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
    	
    	var userName = me.down('#userName').getValue();
  	  
    	me.mainPanel.getStore().load({
    		params:{
    			'name':userName?userName:null
    		}
    	});
    },
    adduser:function(){
    	var me = this;
    	
    	var userEditPanel = Ext.create('storage.user.userEditPanel');
    	
    	top.createWin(me,'storage.user.userEditPanel','添加客户', 450, 230);
    	top.myWin.show();
    },
    edituser:function(){
    	var me = this;
    	
    	var records = me.mainPanel.getSelectionModel().getSelection();
    	
    	if(!records || records.length != 1) {
    		Ext.Msg.alert('警告','请选择一条数据！');
    		return;
    	}
    	
    	top.createWin(me,'storage.user.userEditPanel','编辑客户', 450, 230);
    	top.myWin.itemPanel.initFormData(records[0]);
    	top.myWin.show();
    },
    deleteuser:function(){
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
    				url:loadPath + 'user/delete',
    				callObject:me,
    				callback:function(options,success,response) {
    					var responseObj = Ext.decode(response.responseText);
    					if(responseObj.success) {
    						Ext.Msg.alert('提示','数据删除成功！');
    						me.mainPanel.getStore().load();
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