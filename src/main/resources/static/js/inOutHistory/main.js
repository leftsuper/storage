Ext.define('storage.inOutHistory.main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.inOutHistoryMain',
	initComponent: function(){ 
		var me = this;

		var inOutHistoryStore = Ext.create('storage.inOutHistory.inOutHistoryStore');
		
		var mainPanel = Ext.create('Ext.grid.Panel',{
			height:'100%',
			width:'100%',
			autoScroll:true,
			store:inOutHistoryStore,
			border:false,
			selModel:Ext.create('Ext.selection.CheckboxModel'),
			tbar:[
			      '->',
			      {xtype:'numberfield',fieldLabel:'宽',itemId:'inOutHistoryWidth',vtype:'positiveNumber',decimalPrecision:2,
			    	  width:100,labelAlign:'right',labelWidth:20,decimalPrecision:2,enableKeyEvents:true,listeners:{
			    		   'keypress':function(e, t, o){
			    			   if(t.getKey() == t.ENTER) {
			    				  me.search(); 
			    			   }
			    		   }
			    	   }},
			      {xtype:'numberfield',fieldLabel:'长',itemId:'inOutHistoryHeight',vtype:'positiveNumber',decimalPrecision:2,
			    	  width:100,labelAlign:'right',labelWidth:20,decimalPrecision:2,enableKeyEvents:true,listeners:{
			    		   'keypress':function(e, t, o){
			    			   if(t.getKey() == t.ENTER) {
			    				  me.search(); 
			    			   }
			    		   }
			    	   }},
			      {xtype:'textfield',fieldLabel:'名称',itemId:'inOutHistoryName',width:180,labelAlign:'right',labelWidth:40,
			    	  enableKeyEvents:true,listeners:{
			    		   'keypress':function(e, t, o){
			    			   if(t.getKey() == t.ENTER) {
			    				  me.search(); 
			    			   }
			    		   }
			    	   }},
			      {text:'查询',iconCls:'search',handler:function(){
			    	  me.search();
			      }}
			      ],
			columns: [
			        {xtype: 'rownumberer'},
					{ header: 'id', 			dataIndex: 'id' 			,hidden:true},
					{ header: '名称',			dataIndex: 'name'			,flex:1},
					{ header: '出入库数量',		dataIndex: 'inOutCount'		,width:100},
					{ header: '操作员',			dataIndex: 'creator'  		,width:120},
					{ header: '操作时间',			dataIndex: 'createdTime'  	,width:200}
			      ],
			dockedItems: [{
		        xtype: 'pagingtoolbar',
		        store: inOutHistoryStore,   
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
    	
    	var width = me.down('#inOutHistoryWidth').getValue();
  	  	var height = me.down('#inOutHistoryHeight').getValue();
  	  	var inOutHistoryName = me.down('#inOutHistoryName').getValue();
    	
    	me.mainPanel.getStore().load({
    		params:{
    			'width':width?width:null,
    			'height':height?height:null,
    			'name':inOutHistoryName?inOutHistoryName:null
    		}
    	});
    }
});