Ext.define('storage.errorPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.errorPanel',
	initComponent: function(){ 
		var me = this;
		
		Ext.apply(this,{
			border:true,
			layout:'fit',
			bodyStyle: {
			    background: '#DFE8F6',
			    padding: '10px'
			},
			items:[
			       {xtype:'text',text:'error'}
			       ]
		});
		
		me.callParent();
	}
});