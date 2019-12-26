Ext.onReady(function() {

	var navigation = Ext.create('storage.Navigation');
	var welcomePanel = Ext.create('storage.welcome');

    top.view = Ext.create('Ext.Viewport', {
        layout: {
            type: 'border',
            padding: 5
        },
        defaults: {
            split: true
        },
        items: [{
            region: 'north',
            split: true,
            height: 170,
			id:'northPanel',
			layout:'vbox',
			itemId:'northPanel',
			bodyStyle:{
				'background-image':'url(images\/north.jpg)',
				'background-size':'cover'
			},
			items:[
	   			   {xtype:'button',itemId:'changePwdBtn',text:'修改密码',iconCls:'user_edit',margin:'75 0 0 ' + window.screen.width * 0.8,handler:function(){changPassword();}},
	   			   {xtype:'button',itemId:'exitBtn',text:'退出系统',iconCls:'cancel',margin:'10 0 0 '+ window.screen.width * 0.8,handler:function(){exit();}}
			       ]
            //html:'<a href="javascript:void(0);" onclick="exit()" style="position:relative;left:85%;top:20%"><font color=white size="4">退出系统</font></a>',
        },{
            region: 'west',
            collapsible: true,
            split: true,
            width: '20%',
			title:'导航栏',
			id:'westPanel',
			itemId:'westPanel',
            items:[navigation]
        },{
        	xtype:'panel',
            region: 'center',
            layout: 'fit',
			id:'centerPanel',
			itemId:'centerPanel',
			items:[welcomePanel]
        },{
        	xtype:'panel',
        	region:'south',
        	id:'southPanel',
        	height:'20px',
        	bodyStyle: {
        	    background: '#DFE8F6'
        	},
			html:'<div style="text-align:center">Copyright © leftsuper Inc. All Rights Reserved</div>'
        }]
    });
    
});