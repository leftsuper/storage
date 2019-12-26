Ext.define('storage.instorage.main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.instorageGrid',
	initComponent: function(){ 
		var me = this;

		var goodsStore = Ext.create('storage.instorage.goodsStore');
		
		var mainPanel = Ext.create('Ext.grid.Panel',{
			height:'100%',
			width:'100%',
			autoScroll:true,
			store:goodsStore,
			border:false,
			selModel:Ext.create('Ext.selection.CheckboxModel'),
			tbar:[
			      {text:'新增商品',iconCls:'brick_add',limitRank:3,handler:function(){
			    	  me.addGoods();
			      }},'-',
			      {text:'商品编辑',iconCls:'brick_edit',limitRank:1,handler:function(){
			    	  me.editGoods();
			      }},'-',
			      {text:'删除商品',iconCls:'brick_delete',limitRank:1,handler:function(){
			    	  me.deleteGoods();
			      }},'-',
			      {text:'商品入库',iconCls:'shift',limitRank:1,handler:function(){
			    	  me.shiftGoods();
			      }},'->',
			      {xtype:'numberfield',fieldLabel:'宽',itemId:'goodsWidth',vtype:'positiveNumber',decimalPrecision:2,
			    	  width:100,labelAlign:'right',labelWidth:20,decimalPrecision:2,enableKeyEvents:true,listeners:{
			    		   'keypress':function(e, t, o){
			    			   if(t.getKey() == t.ENTER) {
			    				  me.search(); 
			    			   }
			    		   }
			    	   }},
			      {xtype:'numberfield',fieldLabel:'长',itemId:'goodsHeight',vtype:'positiveNumber',decimalPrecision:2,
			    	  width:100,labelAlign:'right',labelWidth:20,decimalPrecision:2,enableKeyEvents:true,listeners:{
			    		   'keypress':function(e, t, o){
			    			   if(t.getKey() == t.ENTER) {
			    				  me.search(); 
			    			   }
			    		   }
			    	   }},
			      {xtype:'textfield',fieldLabel:'名称',itemId:'goodsName',width:180,labelAlign:'right',labelWidth:40,
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
					{ header: '颜色',			dataIndex: 'color'		,width:100,renderer:function(v){
						return colorFont(v);
					}},
					{ header: '宽',				dataIndex: 'width'		,width:100},
					{ header: '高',				dataIndex: 'height'		,width:100},
					{ header: '厚度',			dataIndex: 'thickness'	,width:100},
					{ header: '质量(材料质地)',	dataIndex: 'quality'		,width:120,hidden:true	},
					{ header: '库存',			dataIndex: 'inventory'  ,width:120},
					{ header: '单位',			dataIndex: 'unit'		,width:70},
					{ header: '删除标识',			dataIndex: 'isDelete'  ,width:60,hidden:true},
					{ header: '创建者',			dataIndex: 'creator'  		,width:120,hidden:true},
					{ header: '创建时间',			dataIndex: 'createdTime'  	,width:200,hidden:true},
					{ header: '更新者',			dataIndex: 'updator'  		,width:120,hidden:true},
					{ header: '更新时间',			dataIndex: 'updatedTime'  	,width:200,hidden:true}
			      ],
			dockedItems: [{
		        xtype: 'pagingtoolbar',
		        store: goodsStore,   
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
    	
    	var width = me.down('#goodsWidth').getValue();
  	  	var height = me.down('#goodsHeight').getValue();
  	  	var goodsName = me.down('#goodsName').getValue();
    	
    	me.mainPanel.getStore().load({
    		params:{
    			'width':width?width:null,
    			'height':height?height:null,
    			'name':goodsName?goodsName:null
    		}
    	});
    },
    addGoods:function(){
    	var me = this;
    	
    	var goodsEditPanel = Ext.create('storage.instorage.goodsEditPanel');
    	
    	top.createWin(me,'storage.instorage.goodsEditPanel','添加商品', 600, 330);
    	top.myWin.show();
    },
    editGoods:function(){
    	var me = this;
    	
    	var records = me.mainPanel.getSelectionModel().getSelection();
    	
    	if(!records || records.length != 1) {
    		Ext.Msg.alert('警告','请选择一条数据！');
    		return;
    	}
    	
    	top.createWin(me,'storage.instorage.goodsEditPanel','编辑商品', 600, 330);
    	top.myWin.itemPanel.initFormData(records[0]);
    	top.myWin.show();
    },
    deleteGoods:function(){
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
    				url:loadPath + 'goods/delete',
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
    },
    shiftGoods:function(){
    	var me = this;
    	
    	var records = me.mainPanel.getSelectionModel().getSelection();
    	
    	top.createWin(me,'storage.instorage.shiftGoods','商品入库', 700, 450);
    	if(records) {
    		top.myWin.itemPanel.initData(records);
    	}
    	top.myWin.show();
    }	
});