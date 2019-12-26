Ext.define('storage.user.userEditPanel', {
	extend: 'Ext.form.Panel',
	alias: 'widget.user',
	initComponent: function(){
		var me = this;
		
		Ext.apply(this,{
			autoScroll:true,
			border:false,
			items:[
				   {xtype:'fieldset',title:'客户信息',width:'100%',
					   layout:{type:'table',columns:2},defaults:{labelAlign:'left',labelWidth:100,width:260},
					   items:[
							{xtype:'textfield',name:'name',fieldLabel:'姓名',allowBlank:false,colspan:2},
							{xtype:'textfield',name:'loginName',fieldLabel:'登陆名',allowBlank:false,colspan:2},
							{xtype:'combobox',store:limitStore,queryMode:'local',displayField:'name',valueField:'code',editable:false,
								name:'limitRank',fieldLabel:'权限等级',colspan:2,value:5,allowBlank:false},
							{xtype:'hidden',name:'id'},
							{xtype:'hidden',name:'isDelete'},
							{xtype:'hidden',name:'updator'},
							//{xtype:'datefield',name:'updatedTime',format:'Y-m-d g:i:s'},
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
		
		me.getForm().submit({
			url:loadPath + 'user/save',
			waitMsg:'正在保存数据...',
			waitTitle:'保存',
			method:'post',
			owner:me,
			success:function(form, action) {
				form.owner.up().callObject.search();
				me.up().close();
				Ext.Msg.alert('提示','保存成功！');
			},
			failure:function(form, action) {
				var responseObj = Ext.decode(action.response.responseText);
				var msg = responseObj.msg;
				Ext.Msg.alert('警告',msg);
				form.owner.getForm().findField('loginName').setValue('');
			}
		});
	}
});