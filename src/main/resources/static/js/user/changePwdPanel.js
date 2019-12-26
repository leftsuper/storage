Ext.define('storage.user.changePwdPanel', {
	extend: 'Ext.form.Panel',
	alias: 'widget.user',
	initComponent: function(){
		var me = this;
		
		Ext.apply(this,{
			autoScroll:true,
			border:false,
			items:[
			   {xtype:'fieldset',title:'修改密码',width:'100%',
				   layout:{type:'table',columns:1},defaults:{labelAlign:'left',labelWidth:100,width:210},
				   items:[
				   		  {xtype:'textfield',inputType:'password',fieldLabel:'原密码',name:'password',allowBlank:false},
				   		  {xtype:'textfield',inputType:'password',fieldLabel:'新密码',itemId:'newPassword',name:'newPassword',allowBlank:false},
				   		  {xtype:'textfield',inputType:'password',fieldLabel:'重复新密码',itemId:'newPassword2',allowBlank:false},
				   		  {xtype:'textfield',name:'id',hidden:true,value:user.id},
				   ]
			   }],
		 	buttons:['->',
		 		  {text:'保存修改',iconCls:'save',handler:function(){
		 		  		if(!me.getForm().findField('id').getValue()) {
		 		  			Ext.Msg.alert('警告','系统出错，请重新登陆再进行此操作！');
		 		  			return;
		 		  		}
		 		  		if(me.down('#newPassword').getValue() != me.down('#newPassword2').getValue())　{
		 		  			Ext.Msg.alert('警告','两次输入的密码不一致，请重新输入！');
		 		  			me.down('#newPassword').setValue('');
		 		  			me.down('#newPassword2').setValue('');
		 		  			return;
		 		  		}
		 		  		me.getForm().submit({
		 		  			url:loadPath + 'user/changePassword',
							waitMsg:'正在保存数据...',
							waitTitle:'保存',
							method:'post',
							owner:me,
							success:function(form, action) {
								Ext.Msg.alert('提示','保存成功！');
								exit();
							},
							failure:function(form, action) {
								var responseObj = Ext.decode(action.response.responseText);
								var msg = responseObj.msg;
								Ext.Msg.alert('警告',msg);
							}
		 		  		});
		 		  }},
		 		  {text:'取消',iconCls:'cancel',handler:function(){
		 		  		myWin.close();
		 		  }},'->'
		 		  ]
		});
		
		me.callParent();
	}
});