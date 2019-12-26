Ext.define('storage.order.detailedOrder', {
	extend:'Ext.panel.Panel',
	alias:'widget.detaildOrder',
	initComponent:function() {
		var me = this;
		
		var orderForm = Ext.create('Ext.form.Panel',{
			region:'center',
			autoScroll:true,
			border:false,
			items:[
				 {xtype:'fieldset',title:'订单信息',width:'100%',collapsible:true,
					   layout:{type:'table',columns:2},defaults:{labelAlign:'left',labelWidth:120,width:300},
					   items:[
					   		{xtype:'textfield',fieldLabel:'订单编号',name:'orderNo',readOnly:true},
					   		{xtype:'numberfield',fieldLabel:'订单金额',name:'orderSum',readOnly:true,margin:'0 0 5 5',width:295},
					   		{xtype:'textfield',fieldLabel:'客户',name:'customer'},
					   		{xtype:'combobox',fieldLabel:'是否打印',name:'isPrint',store:yesOrNoStore,queryMode:'local',margin:'0 0 5 5',
					   			valueField:'code',displayField:'name',readOnly:true,width:295},
					   		{xtype:'textareafield',name:'remark',fieldLabel:'备注',rows:4,colspan:2,autoScroll:true,width:600},
					   		{xtype:'hidden',name:'id'},
							{xtype:'hidden',name:'isDelete'},
							{xtype:'hidden',name:'updator'},
							//{xtype:'datefield',name:'updatedTime',format:'Y-m-d g:i:s'},
							{xtype:'hidden',name:'updatedTime'},
							{xtype:'hidden',name:'creator'},
							{xtype:'hidden',name:'createdTime'}
					   ]
				 }
			],
			buttons:[
			          '->',
			          {text:' 打印',iconCls:'print',handler:function(){
			        	  me.print();
			          }},
			          {text:' 保存',iconCls:'save',handler:function(){
			        	  me.save();
			          }},
			          {text:' 取消',iconCls:'cancel',handler:function(){
			        	  me.up().close();
			          }},
			          '->'
			          ]
		});
		
		var tradeNotesStore = Ext.create('storage.trade.tradeStore');
		
		var tradeNotesMain = Ext.create('Ext.grid.Panel',{
			width:'100%',
			height:'55%',
			autoScroll:true,
			region:'south',
			store:tradeNotesStore,
			border:false,
			selModel:Ext.create('Ext.selection.CheckboxModel'),
			columns: [
			        {xtype: 'rownumberer'},
					{ header: 'id', 			dataIndex: 'id' 			,hidden:true},
					{ header: '商品名称',			dataIndex: 'title'  		,flex:1},
					{ header: '价格',			dataIndex: 'price'  		,width:90},
					{ header: '数量',			dataIndex: 'number'  		,width:90},
					{ header: '总价',			dataIndex: 'count'			,width:140,renderer:function(v,o,record){
						var number = record.data['number'];
						var price = record.data['price'];
						return multiply(number, price);
					}},
					{ header: '删除标识',			dataIndex: 'isDelete'  		,width:50,hidden:true},
					{ header: '创建者',			dataIndex: 'creator'  		,width:120,hidden:true},
					{ header: '创建时间',			dataIndex: 'createdTime'  	,width:200,hidden:true},
					{ header: '更新者',			dataIndex: 'updator'  		,width:120,hidden:true},
					{ header: '更新时间',			dataIndex: 'updatedTime'  	,width:200,hidden:true}
			      ],
			dockedItems: [{
		        xtype: 'pagingtoolbar',
		        store: tradeNotesStore,   
		        dock: 'bottom',
		        displayInfo: true
		    }]
		});
		
		Ext.apply(this,{
			layout:'border',
			orderForm:orderForm,
			tradeNotesMain:tradeNotesMain,
			items:[orderForm,tradeNotesMain]
		});
		
		me.callParent();
	},
	initData:function(record){
		var me = this;
		
		me.orderForm.loadRecord(record);
		var idOrder = record.data['id'];
		me.tradeNotesMain.getStore().load({
			params:{'idOrder':idOrder?idOrder:null},
			scope:this,
			callback: function(records, operation, success) {
				var orderSum = 0;
				Ext.each(records,function(item){
					orderSum += multiply(item.data['price'], item.data['number']);
				});
				me.orderForm.getForm().findField('orderSum').setValue(orderSum);
		    }
		});
	},
	save:function() {
		var me = this;
		
		me.orderForm.getForm().submit({
			url:loadPath + 'trade/saveOrder',
			waitMsg:'正在保存数据...',
			waitTitle:'保存',
			method:'post',
			owner:me,
			success:function(form, action) {
				form.owner.up().up().callObject.search();
				Ext.Msg.alert('提示','保存成功！');
			},
			failure:function(form, action) {
				var responseObj = Ext.decode(action.response.responseText);
				var msg = responseObj.msg;
				Ext.Msg.alert('警告',msg);
			}
		});
	},
	print:function(){
		var me = this;
		
		var isPrint = me.orderForm.getForm().findField('isPrint').getValue();
		
		if(isPrint == 'Y') {
			Ext.MessageBox.confirm('确认','订单已经打印，是否再次打印？',
	    			function(choose){
			    		if(choose == 'yes') {
			    			me.submitForm();
			    		}
			});
		} else {
			me.submitForm();
		}
	},
	submitForm:function() {
		var me = this;
		
		me.orderForm.getForm().submit({
			url:loadPath + 'trade/saveOrder',
			waitMsg:'正在保存数据...',
			waitTitle:'保存',
			method:'post',
			owner:me,
			success:function(form, action) {
				form.owner.up().up().callObject.search();
				top.createWin(this, 'storage.trade.print', '打印预览', 750, 450);
    			top.myWin.itemPanel.idOrder = form.getRecord().data['id'];
    			top.myWin.itemPanel.html = '<iframe src="/storage/trade/toPrintPage?orderId=' + form.getRecord().data['id'] + '" id="printFrame" width="100%" height="100%"></iframe>',
    			top.myWin.show();
			},
			failure:function(form, action) {
				var responseObj = Ext.decode(action.response.responseText);
				var msg = responseObj.msg;
				Ext.Msg.alert('警告',msg);
			}
		});
	}
});