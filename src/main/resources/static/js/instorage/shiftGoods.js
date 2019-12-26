Ext.define('storage.instorage.shiftGoods', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.shiftGoods',
	initComponent: function(){
		var me = this;
		
		var instorageStore = Ext.create('Ext.data.Store',{
			model:'storage.instorage.goodsModel'
		});
		
		var goodsStore = Ext.create('storage.instorage.goodsStore');
		goodsStore.load({
			params:{start:-1}
		});
		
		Ext.apply(this,{
			autoScroll:true,
			border:true,
			itemId:'shiftGoods',
			store:Ext.data.StoreManager.lookup(instorageStore),
			selModel:Ext.create('Ext.selection.CheckboxModel'),
		    selType: 'cellmodel',
		    plugins: [
		        Ext.create('Ext.grid.plugin.CellEditing', {
		            clicksToEdit: 1
		        })
		    ],
		    tbar:[
		          {xtype:'combobox',itemId:'goodsId',fieldLabel:'商品',store:goodsStore,queryMode:'local',labelWidth:70,margin:'0 5 0 5',width:260,
		        	  valueField:'id',displayField:'name',allowBlank:false,forceSelection:true},
		          {xtype:'numberfield',itemId:'addCount',fieldLabel:'入库数量',labelWidth:90,vtype:'positiveNumber',width:170,allowBlank:false,decimalPrecision:4},'->',
		          {text:'添加到入库单',iconCls:'add',handler:function(){
		        	  me.addGoods();
		          }}
		          ],
			columns:[
			        { header:'商品id',dataIndex:'id',hidden:true,width:70},
					{ header:'商品名称', dataIndex:'name', flex:1},
					{ header:'单位', dataIndex:'unit', width:50,align:'center'},
					{ header:'入库数量', width:80, dataIndex:'addCount', field:{xtype:'numberfield',decimalPrecision:4,vtype:'positiveNumber'}},
					{ header:'当前库存', dataIndex:'inventory', width:120},
					{ width:120,renderer:function(v, cellObj, rawObj){
						return '<a href="javascript:void(0);" onclick="delColumn('+ cellObj.recordIndex +')"><img src="images\/delete.png"/></a>&nbsp;&nbsp;';
					}}
					],
			buttons:[
			         '->',
			         {text:'入库',iconCls:'shift',handler:function(){
			        	 me.shift();
			         }},
			         {text:'重置',iconCls:'reset',handler:function(){
			        	 me.resetGrid();
			         }},
			         {text:'取消',iconCls:'cancel',handler:function(){
			        	 me.up().close();
			         }},
			         '->'
			         ]
		});
		
		me.callParent();
	},
	initData:function(records){
		var me = this;
		
		me.getStore().loadRecords(records);
	},
	addGoods:function(){
		var me = this;
		
		if(!me.down('#goodsId').validate() || !me.down('#addCount').validate()) {
			Ext.Msg.alert('警告','请检查输入项！');
			return;
		}
		var select = me.down('#goodsId').lastSelection;
		var goods = select[0].data;
		for(var i = 0; i < me.getStore().getCount(); i++) {
			if(me.getStore().getAt(i).get('id') == goods.id) {
				Ext.Msg.alert('警告','入库单中已有相同商品，请勿重复添加！');
				me.down('#goodsId').setValue(null);
				me.down('#addCount').setValue(0);
				return;
			}
		}
		var goodsModel = Ext.create('storage.instorage.goodsModel',goods);
		goodsModel.data.addCount = me.down('#addCount').getValue();
		me.getStore().add(goodsModel);
	},
	shift:function(){
		var me = this;
		
		var flag = true;
		var json = [];
		store = me.getStore();
		for(var i = 0; i < store.getCount(); i++) {
			var id = store.getAt(i).get('id');
			var addCount = store.getAt(i).get('addCount');
			if(isNaN(id) || id < 1) {
				flag = false;
			} else if(isNaN(addCount) || addCount <= 0) {
				flag = false;
			} else {
				json.push({id:id,addCount:addCount});
			}
		}
		
		if(flag) {
			Ext.MessageBox.confirm('确认','确认无误？开始商品入库？',function(choose){
	    		if(choose == 'yes') {
	    			me.confirmRequest(json);
	    		}
	    	});
		} else {
			Ext.MessageBox.confirm('警告','检测到入库数据中有空数据，是否强行入库？(空数据将不会入库)',function(choose){
				if(choose == 'yes') {
					me.confirmRequest(json);
	    		}
			});
		}
	},
	confirmRequest:function(json){
		var me = this;
		Ext.Ajax.request({
			params:{goodsJson:Ext.encode(json)},
			method:'post',
			waitMsg:'正在删除中...',
			url:loadPath + 'goods/inStorage',
			callObject:me,
			callback:function(options,success,response) {
				var responseObj = Ext.decode(response.responseText);
				if(responseObj.success) {
					Ext.Msg.alert('提示','商品入库成功！');
					me.up().callObject.mainPanel.getStore().load();
					me.up().close();
				} else if(responseObj.failure) {
					Ext.Msg.alert('警告',responseObj.msg);
				} else {
					Ext.Msg.alert('警告','服务器响应错误!');
				}
			}
		});
	}
});