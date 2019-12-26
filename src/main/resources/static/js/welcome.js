Ext.define('storage.welcome', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.welcome',
	initComponent: function(){ 
		var me = this;
		
		Ext.apply(this,{
			border:true,
			layout:'anchor',
			bodyStyle: {
			    background: '#DFE8F6',
			    padding: '10px'
			},
			html:'<div style="position:relative;top:30%;left:30%"><p style="font-family:楷体;font-size:30px">' + user.name + '  ,欢迎您使用出入库管理系统</p></div>'
		});
		
		me.callParent();
	}
});