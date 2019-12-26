Ext.define('storage.customer.customerEditPanel', {
	extend: 'Ext.form.Panel',
	alias: 'widget.customer',
	initComponent: function(){
		var me = this;
		
		Ext.apply(this,{
			autoScroll:true,
			border:false,
			items:[
				   {xtype:'fieldset',title:'客户信息',width:'100%',
					   layout:{type:'table',columns:2},defaults:{labelAlign:'left',labelWidth:100,width:410},
					   items:[
							{xtype:'textfield',name:'name',fieldLabel:'姓名',allowBlank:false,colspan:2},
							{xtype:'textfield',name:'tel',fieldLabel:'联系方式',colspan:2},
							{xtype:'textfield',name:'address',fieldLabel:'地址',colspan:2},
							{xtype:'hidden',name:'id'},
							{xtype:'hidden',name:'isDelete'},
							{xtype:'hidden',name:'updator'},
							{xtype:'hidden',name:'updatedTime'},
							{xtype:'hidden',name:'creator'},
							{xtype:'hidden',name:'createdTime'}
							]
				   }],
		    buttons:[
		          '->',
		          {text:' 保存',iconCls:'save',handler:function(){
		        	  me.save();
		          }},
		          {text:' 取消',iconCls:'cancel',handler:function(){
		        	  me.up().close();
		          }},
		          '->'
		          ]
		});
		
		me.callParent();
	},
	chooseItem:function(value, nameField){
		var me = this;
		
		if(value) {
			me.getForm().findField(nameField).setValue(value);
		}
	},
	initFormData:function(record){
		var me = this;
		
		if(!record) {
			return;
		}
		
		me.getForm().loadRecord(record);
	},
	save:function(){
		var me = this;
		
		me.up().close();
		me.getForm().submit({
			url:loadPath + 'customer/save',
			waitMsg:'正在保存数据...',
			waitTitle:'保存',
			method:'post',
			owner:me,
			success:function(form, action) {
				form.owner.up().callObject.search();
				Ext.Msg.alert('提示','保存成功！');
			},
			failure:function(form, action) {
				var responseObj = Ext.decode(action.response.responseText);
				var msg = responseObj.msg;
				Ext.Msg.alert('警告',msg);
			}
		});
	}
});