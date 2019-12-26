Ext.define('storage.trade.printConfirm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.printConfirm',
	initComponent: function(){
		var me = this;
		
		var customerStore = Ext.create('storage.customer.customerStore');
		customerStore.load();
		
		var goodsStore = Ext.create('storage.instorage.goodsStore');
		goodsStore.load({
			params:{start:-1}
		});
		
		Ext.apply(this,{
			autoScroll:true,
			border:false,
			goodsStore:goodsStore,
			goodsTxt:'',
			items:[
			       {xtype:'fieldset',title:'订单备注',width:'100%',
			    	   layout:{type:'table',columns:1},defaults:{labelAlign:'left',labelWidth:100,width:280},
			    	   items:[
			    	          {xtype:'combobox',fieldLabel:'客户',name:'customer',itemId:'customerComb',store:customerStore,
			    	        	  queryMode:'local',valueField:'name',displayField:'name'},
			    	        	  {
			    	        	        xtype: 'buttongroup',
			    	        	        title: '快速添加到备注栏',
			    	        	        defaults:{iconCls: 'add',iconAlign: 'left'},
			    	        	        items: [
			    	        	                {text: '覆膜',handler:function(){
			    	        	                	me.addRemark(' 覆膜');
			    	        	                }},
			    	        	                {text: '套内袋',handler:function(){
			    	        	                	me.addRemark(' 套内袋');
			    	        	                }},
			    	        	                {text: '吊舌子',handler:function(){
			    	        	                	me.addRemark(' 吊舌子');
			    	        	                }},
			    	        	                ]
			    	        	    },
							  {xtype:'textareafield',name:'remark',fieldLabel:'备注',rows:4,autoScroll:true,width:460,margin:'5 0 0 0'}
			    	          ]
			       } 
			       ],
			buttons:[
			         '->',
			         {text:'保存并预览打印',iconCls:'print',handler:function(){
			        	 me.openPrintWin();
			         }},
			         {text:'取消订单',iconCls:'cancel',handler:function(){
			        	 me.up().close();
			         }},'->'
			         ]
		});
		
		me.callParent();
	},
	initFormData:function(record) {
		var me = this;
		me.tradeRecords = record;
		me.goodsStore.load({
			params:{start:-1},
			scope:this,
			callback:function(records, response, success) {
				var me = this;

				Ext.each(record,function(item){
					me.goodsTxt += getDataName(me.goodsStore, "id", "name", item.data['idGoods']) + '\n';
				});

				me.getForm().findField('remark').setValue(me.goodsTxt);
			}
		});
	},
	chooseItem:function(value, nameField){
		var me = this;
		
		if(value) {
			me.getForm().findField(nameField).setValue(value);
		}
	},
	openPrintWin:function(){
		var me = this;
		
		var form = me.getForm();
		if(!form.isValid()) {
			Ext.Msg.alert('警告','请检查输入项！');
			return;
		}
		
		var tradeRecords = me.tradeRecords;
		var tradeList = [];
		Ext.each(tradeRecords, function(item){
			tradeList.push(item.getData());
		});
		var tradeJson = {tradeJson:Ext.encode(tradeList)};
		
		form.submit({
			url:loadPath + 'trade/save',
			waitMsg:'正在保存数据...',
			waitTitle:'保存订单',
			method:'post',
			owner:me,
			params:tradeJson,
			success:function(form, action) {
				top.createWin(form.owner, 'storage.trade.print', '打印预览', 750, 450);
				var responseObj = Ext.decode(action.response.responseText);
				var order = responseObj.order;
				var centerPanel = top.view.down('#centerPanel');
				centerPanel.removeAll();
				centerPanel.add(Ext.create('storage.trade.detailedMain'));
				top.myWin.itemPanel.idOrder = order.id;
				top.myWin.itemPanel.html = '<iframe src="/storage/trade/toPrintPage?orderId=' + order.id + '" id="printFrame" width="100%" height="100%"></iframe>',
    			top.myWin.show();
			},
			failure:function(form, action) {
				var responseObj = Ext.decode(action.response.responseText);
				var msg = responseObj.msg;
				Ext.Msg.alert('警告',msg);
			}
		});
	},
	addRemark:function(addStr) {
		var me = this;
		
		if(addStr) {
			var remarkField = me.getForm().findField('remark');
			var flag = true;
			for(var i = 0; i < me.goodsStore.getCount(); i++) {
				if(remarkField.getValue().includes(me.goodsStore.getAt(i).get('name'))) {
					remarkField.setValue(remarkField.getValue().replace(me.goodsStore.getAt(i).get('name'), me.goodsStore.getAt(i).get('name') + addStr));
					flag = false;
				}
			}
			if(flag) {
				remarkField.setValue(remarkField.getValue() + addStr);
			}
		}
	}
});