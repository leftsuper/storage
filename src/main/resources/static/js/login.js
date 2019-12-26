Ext.onReady(function() {
	
	Ext.create('Ext.form.Panel', {
		title:'用户登录',
		width:400,
		height:260,
		id:'loginPanel',
		bodyStyle:{
			position:'absolute',
			padding:50
		},
		border:true,
		layout:{
			type:'table',
			columns:1
		},
		defaults:{
			labelAlign:'left',
			labelWidth:120
		},
		items:[
		       {xtype:'textfield',fieldLabel:'用户名',itemId:'loginName',name:'loginName',emptyText:'请输入登录名',
		    	   allowBlank:false,enableKeyEvents:true,listeners:{
		    		   'keypress':function(e, t, o){
		    			   if(t.getKey() == t.TAB || t.getKey() == t.ENTER) {
		    				   if(e.validate()) {
			    				   e.up().down('#password').focus();
		    				   }
		    			   }
		    		   }
		    	   }},
		       {xtype:'textfield',fieldLabel:'密码',itemId:'password',name:'password',inputType:'password',
		    	   allowBlank:false,enableKeyEvents:true,listeners:{
		    		   'keypress':function(e, t, o){
		    			   if(t.getKey() == t.ENTER) {
		    				   if(e.validate()) {
		    					   Ext.getCmp('loginPanel').login();
		    				   }
		    			   }
		    		   }
		    	   }}
		       ],
		buttons:[
		         '->',
		         {text:'登录',handler:function(){
		        	 Ext.getCmp('loginPanel').login();
		         }},
		         '->'
		         ],
		renderTo: Ext.getBody(),
		login:function(){
			var form = Ext.getCmp('loginPanel').getForm();
			if(!form.isValid()) {
				Ext.Msg.alert('警告','账号密码不能为空！');
			}
			form.submit({
				url:'http://' + window.location.host + '/storage/user/login',
					waitMsg:'正在与服务器通讯...',
					waitTitle:'登录',
					method:'post',
					success:function(form, action) {
						window.location.href = "index";
					},
					failure:function(form, action, opt) {
						var response = Ext.decode(action.response.responseText);
						Ext.Msg.alert('警告',response.msg);
						return;
					}
		   	});
		}
	});
	
	var height = parseInt(0.25 * window.screen.height);
	var width = parseInt(0.6 * window.screen.width);
	
	Ext.getCmp('loginPanel').setPosition(width, height);
});