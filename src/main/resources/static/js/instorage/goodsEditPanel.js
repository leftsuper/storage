Ext.define('storage.instorage.goodsEditPanel', {
	extend: 'Ext.form.Panel',
	alias: 'widget.inStorage',
	initComponent: function(){
		var me = this;
		
		Ext.apply(this,{
			autoScroll:true,
			border:false,
			items:[
				   {xtype:'fieldset',title:'商品信息',width:'100%',
					   layout:{type:'table',columns:2},defaults:{labelAlign:'left',labelWidth:100,width:410},
					   items:[
							{xtype:'textfield',name:'name',fieldLabel:'商品名称',allowBlank:false,colspan:2},
							{xtype:'combobox',fieldLabel:'商品类型',name:'type',itemId:'typeCombo',store:goodsTypeStore,colspan:2,
								   valueField:'name',displayField:'name',queryMode:'local',value:'编织袋',
								   listeners:{
									   'change':function(obj, newValue){
										   if(newValue) {
											   me.changeGoodsName();
										   }
									   }
								   }},
							{xtype:'combobox',name:'thickness',fieldLabel:'厚度',store:thicknessStore,value:'普通',width:205,
								valueField:'name',displayField:'name',queryMode:'local',
								listeners:{
									'change':function(obj, newValue){
										if(newValue) {
											me.changeGoodsName();
										}
									}
								}},
						    {xtype:'combobox',name:'quality',itemId:'qualityCombo',fieldLabel:'材质',store:qualityStore,width:175,
							    valueField:'name',displayField:'name',queryMode:'local',labelWidth:60,margin:'0 0 5 30',value:'旧料'},
							{xtype:'container',layout:'hbox',margin:'0 0 5 0',colspan:2,
								   items:[
								          {xtype:'numberfield',name:'width',fieldLabel:'规格',maxValue:1000,minValue:0,labelAlign:'left',
										    	labelWidth:100,width:205,decimalPrecision:2,listeners:{
												'change':function(o,newVal){
													if(newVal) me.changeGoodsName();
												}
										  }},
										  {xtype:'label',text:'(宽:cm) ×',width:70,margin:'5 0 0 3'},
								          {xtype:'numberfield',name:'height',maxValue:10000,minValue:0,width:80,decimalPrecision:2,listeners:{
												'change':function(o,newVal){
													if(newVal) me.changeGoodsName();
												}
										  }},
								          {xtype:'label',text:'(长:cm)',margin:'5 0 0 3'}
								          ]},
					        {xtype:'combobox',name:'color',itemId:'colorCombo',fieldLabel:'颜色',store:colorStore,width:205,
								   valueField:'name',displayField:'name',queryMode:'local',value:'灰色',
								   listeners:{
									   'change':function(obj, newValue){
										   if(newValue) {
											   me.changeGoodsName();
										   }
									   }
								 }},
							{xtype:'combobox',name:'unit',fieldLabel:'单位',store:unitStore,value:'个',labelWidth:60,margin:'0 0 5 30',
								valueField:'name',displayField:'name',queryMode:'local',width:175},
							{xtype:'numberfield',name:'inventory',fieldLabel:'库存',colspan:2,value:0,decimalPrecision:4},
							{xtype:'hidden',name:'id'},
							{xtype:'hidden',name:'isDelete'},
							{xtype:'hidden',name:'updator'},
							//{xtype:'datefield',name:'updatedTime',format:'Y-m-d g:i:s'},
							{xtype:'hidden',name:'updatedTime'},
							{xtype:'hidden',name:'creator'},
							{xtype:'hidden',name:'createdTime'}
							]
				   }],
		    buttons:[
		          '->',
		          {text:' 保存',iconCls:'save',handler:function(){
		        	  me.save();
		          }},
		          {text:' 取消',iconCls:'cancel',handler:function(){
		        	  me.up().close();
		          }},
		          '->'
		          ]
		});
		
		me.callParent();
	},
	chooseItem:function(value, nameField){
		var me = this;
		
		if(value) {
			me.getForm().findField(nameField).setValue(value);
		}
	},
	initFormData:function(record){
		var me = this;
		
		if(!record) {
			return;
		}
		
		me.getForm().loadRecord(record);
	},
	save:function(){
		var me = this;
		
		if(!me.getForm().isValid()) {
			Ext.Msg.alert('警告','请检查输入项！');
			return;
		}
		me.up().close();
		me.getForm().submit({
			url:loadPath + 'goods/save',
			waitMsg:'正在保存数据...',
			waitTitle:'保存',
			method:'post',
			owner:me,
			success:function(form, action) {
				form.owner.up().callObject.search();
				Ext.Msg.alert('提示','保存成功！');
			},
			failure:function(form, action) {
				var responseObj = Ext.decode(action.response.responseText);
				var msg = responseObj.msg;
				Ext.Msg.alert('警告',msg);
			}
		});
	},
	changeGoodsName:function(){
		var me = this;
		
		var width = me.getForm().findField('width').getValue();
		var w = width?width + '宽 ':'';
		var height = me.getForm().findField('height').getValue();
		var h = height?height + '长 ':'';
		var color = me.getForm().findField('color').getValue();
		var c = color?color + ' ':'';
		var type = me.getForm().findField('type').getValue();
		var thickness = me.getForm().findField('thickness').getValue();
		var t = thickness?thickness + ' ':'';
		
		if(type) {
			me.getForm().findField('name').setValue(w + h + c + t + type);
		}
	}
});