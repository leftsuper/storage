Ext.define('storage.trade.print', {
	extend:'Ext.panel.Panel',
	alias:'widget.print',
	initComponent:function() {
		var me = this;
		
		Ext.apply(this,{
			height:'100%',
			width:'100%',
			border:false,
			autoScroll:true,
			layout:'anchor',
			buttons:[
			      '->',
			      {text:'确认打单',iconCls:'print',handler:function(){
			    	  me.printList();
			      }},
			      {text:'取消',iconCls:'cancel',handler:function(){
			    	  me.up().close();
			      }},
			      '->'
			      ]
		});
		
		me.callParent();
	},
	printList:function(){
		var me = this;
		
		Ext.Ajax.request({
			params:{idOrder:me.idOrder},
			url:loadPath + 'trade/print',
			method:'post',
			callObject:me,
			callback:function(options,success,response) {
				top.myWin.close();
			}
		});
		var printFrame = getDomById('printFrame').contentWindow;
		printFrame.focus();
		printFrame.print();
	},
	getFrameDomById:function(id){
		var printFrame = getDomById('printFrame').contentWindow;
		if(id) {
			return printFrame.document.getElementById(id);
		}
		return;
	}
});