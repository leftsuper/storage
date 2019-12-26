Ext.define('storage.trade.detailedMain', {
	extend:'Ext.panel.Panel',
	alias:'widget.detailedMain',
	requires:['storage.trade.tradeModel'],
	initComponent:function() {
		var me = this;
		
		var goodsStore = Ext.create('storage.instorage.goodsStore');
		goodsStore.load({
			params:{start:-1}
		});
		
		var formPanel = Ext.create('Ext.form.Panel',{
			region:'north',
			width:'100%',
			border:true,
		    items:[
		           {xtype:'fieldset',title:'商品信息',collapsible: true,width:'100%',
		        	   layout:{type:'table',columns:2},defaults:{labelAlign:'left',labelWidth:170,width:410,bodyStyle: 'padding:20px'},
		        	   items:[
			   		           {xtype:'combobox',name:'idGoods',fieldLabel:'商品名称',store:goodsStore,allowBlank:false,colspan:2,forceSelection:true,
			   			    	   valueField:'id',displayField:'name',queryMode:'local',emptyText:'请选择商品',listeners:{
			   			    		   'select':function(o,v){
			   			    			   me.down('#inventoryLabel').setText('(当前库存：' + v[0].get('inventory') + v[0].get('unit') + ')');
			   			    			   //me.down('#number').setMaxValue(v[0].get('inventory'));
			   			    		   },
			   			    		   'beforequery':function(e,o){
			   			    			   var combo = e.combo;
			   			    			   if(!e.forceAll){
			   			    				   var value = e.query;
			   			    				   combo.store.filterBy(function(record,id){
			   			    					   var text = record.get(combo.displayField);
			   			    					   return (text.indexOf(value)!=-1);
			   			    				   });
			   			    				   combo.expand();
			   			    				   return false;
			   			    			   }
			   			    		    }
			   			    	   }},
			   			       {xtype:'numberfield',name:'price',fieldLabel:'商品价格(元/每单位)',allowBlank:true,value:0},
			   			       {xtype:'container',layout:'hbox',margin:'0 0 5 10',width:410,
			   			    	   items:[
			   						      {xtype:'numberfield',name:'number',itemId:'number',fieldLabel:'数量',allowBlank:false,labelAlign:'left',
			   							    	labelWidth:80,width:210,vtype:'positiveNumber',decimalPrecision:2,enableKeyEvents:true,listeners:{
			   						    		   'keypress':function(e, t, o){
			   						    			   if(t.getKey() == t.ENTER) {
			   						    				  me.addList(); 
			   						    			   }
			   						    		   }
			   						    	   }},
			   						      {xtype:'label',text:'(当前库存：0个)',itemId:'inventoryLabel',width:200,margin:'5 0 0 5'}
			   			    	          ]}
			   			       ]
		           }],
		      buttons:[
		               '->',
		               {xtype:'button',text:'添加到订单',iconCls:'application_add',handler:function(){
					 	  me.addList();
					   }},'->'
		               ]
		});
		
		var tradeListStore = Ext.create('Ext.data.Store',{
			model:'storage.trade.tradeModel',
			data:[]
		});
		var gridPanel = Ext.create('Ext.grid.Panel',{
			region:'center',
			height:'70%',
			width:'100%',
			title:'订单列表',
			iconCls:'application',
			border:true,
			autoScroll:true,
			selModel:Ext.create('Ext.selection.CheckboxModel'),
			plugins: [
				        Ext.create('Ext.grid.plugin.CellEditing', {
				            clicksToEdit: 1
				        })
				    ],
			store:tradeListStore,
			tbar:[
			      {text:'删除',iconCls:'application_delete',handler:function(){
			    	  me.deleteNote();
			      }},'-',
			      {text:'确认订单',iconCls:'print_add',handler:function(){
			    	  me.printList();
			      }}
			      ],
			columns:[
					{xtype: 'rownumberer'},
					{ header: '商品名称',	 			dataIndex: 'idGoods' 		,flex:1,renderer:function(v){
						return getDataName(goodsStore, 'id', 'name', v);
					}},
					{ header: '单位',				dataIndex: 'unit'			,width:80,renderer:function(v,o,record){
						var idGoods = record.data['idGoods'];
						return getDataName(goodsStore, 'id', 'unit', idGoods);
					}},
					{ header: '商品价格',				dataIndex: 'price'			,width:120, field:{xtype:'numberfield',decimalPrecision:4,vtype:'positiveNumber'}},
					{ header: '数量',				dataIndex: 'number'			,width:120, field:{xtype:'numberfield',decimalPrecision:2,vtype:'positiveNumber'}},
					{ header: '总价',				dataIndex: 'count'			,width:200,renderer:function(v,o,record){
						var number = record.data['number'];
						var price = record.data['price'];
						return multiply(number, price);
					}}
					]
		});
		
		Ext.apply(this,{
			layout:'border',
			title:'售卖打单',
			iconCls:'print',
			formPanel:formPanel,
			gridPanel:gridPanel,
			goodsStore:goodsStore,
			items:[formPanel,gridPanel]
		});
		
		me.callParent();
	},
	getMainForm:function(){
		var me = this;
		
		return me.formPanel.getForm();
	},
	chooseItem:function(value, nameField){
		var me = this;
		
		if(value) {
			me.getForm().findField(nameField).setValue(value);
		}
	},
	addList:function(){
		var me = this;
		
		var form = me.getMainForm();
		var idGoods = form.findField('idGoods').getValue();
		if(!form.isValid()) {
			Ext.Msg.alert('警告','请检查输入项！');
			return;
		}
		if(getDataName(me.gridPanel.getStore(),'idGoods','idGoods',idGoods)) {
			Ext.Msg.alert('警告','商品重复，请重新选择！');
			form.reset();
			me.down('#inventoryLabel').setText('(当前库存：0个)');
			return;
		}
		me.gridPanel.getStore().add(Ext.create('storage.trade.tradeModel',form.getFieldValues()));
	},
	deleteNote:function(){
		var me = this;
		
		var records = me.gridPanel.getSelectionModel().getSelection();
    	
    	if(!records || records.length < 1) {
    		Ext.Msg.alert('警告','请选择数据！');
    		return;
    	}
    	
    	var items = [];
    	Ext.each(records,function(item){
    		items.push(item);
    	});
    	Ext.MessageBox.confirm('确认','确定要删除这' + items.length + '条数据吗？',
    			function(choose){
    		if(choose == 'yes') {
    			me.gridPanel.getStore().remove(items);
    		}
    	});
	},
	printList:function(){
		var me = this;
		
		if(me.gridPanel.store.getCount() < 1) {
			Ext.Msg.alert('警告','订单列表为空，请添加商品清单后再进行打单操作！');
			return;
		}
		
		var records = me.gridPanel.getStore().data.items;
		top.createWin(me, 'storage.trade.printConfirm', '保存订单', 600, 260);
		top.myWin.itemPanel.initFormData(records);
		top.myWin.show();
	}
});