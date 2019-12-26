Ext.define('storage.trade.tradeEditPanel', {
	extend: 'Ext.form.Panel',
	alias: 'widget.inStorage',
	initComponent: function(){
		var me = this;
		
		Ext.apply(this,{
			autoScroll:true,
			border:false,
			layout: {
		        type: 'table',
		        columns: 2
		    },
		    defaults:{
		    	labelAlign:'left',
		    	labelWidth:100,
		    	width:410
		    },
			items:[
			       {xtype:'textfield',name:'name',fieldLabel:'商品名称',maxLength:25,value:'编织袋',allowBlank:false,width:310},
			       {xtype:'combobox',itemId:'nameCombo',editable:false,store:goodsNameStore,displayField:'name',width:95,
			    	   valueField:'name',queryMode:'local',emptyText:'可在此选择',
			    	   listeners:{
			    		   'select':function(o){
			    			   me.chooseItem(o.getValue(), 'name');
			    		   }
			    	   }},
			       {xtype:'textfield',name:'color',fieldLabel:'颜色',maxLength:25,value:'灰色',width:310},
			       {xtype:'combobox',itemId:'colorCombo',editable:false,store:colorStore,displayField:'name',width:95,
			    	   valueField:'name',queryMode:'local',emptyText:'可在此选择',
			    	   listeners:{
			    		   'select':function(o){
			    			   me.chooseItem(o.getValue(), 'color');
			    		   }
			    	   }},
			       {xtype:'container',layout:'hbox',margin:'0 0 5 0',colspan:2,
			    	   items:[
			    	          {xtype:'numberfield',name:'width',fieldLabel:'规格',maxValue:1000,minValue:0,labelAlign:'left',
			    			    	labelWidth:100,width:190},
			    			  {xtype:'label',text:'(宽：cm) X',width:80,margin:'5 0 0 5'},
			    	          {xtype:'numberfield',name:'height',maxValue:10000,minValue:0,width:80},
			    	          {xtype:'label',text:'(长：cm)',margin:'5 0 0 5'}
			    	          ]},
			       {xtype:'textfield',name:'quality',fieldLabel:'质量',maxLength:25,value:'旧料',width:310},
			       {xtype:'combobox',itemId:'qualityCombo',editable:false,store:qualityStore,displayField:'name',width:95,
			    	   valueField:'name',queryMode:'local',emptyText:'可在此选择',
			    	   listeners:{
			    		   'select':function(o){
			    			   me.chooseItem(o.getValue(), 'quality');
			    		   }
			    	   }},
			       {xtype:'numberfield',name:'inventory',fieldLabel:'库存',minValue:0,colspan:2},
			       {xtype:'hidden',name:'id'},
			       {xtype:'hidden',name:'isDelete'},
			       {xtype:'hidden',name:'updator'},
			       //{xtype:'datefield',name:'updatedTime',format:'Y-m-d g:i:s'},
			       {xtype:'hidden',name:'updatedTime'},
			       {xtype:'hidden',name:'creator'},
			       {xtype:'hidden',name:'createdTime'}
			       ],
		    bbar:[
		          '->',
		          {text:' 保存',iconCls:'save',handler:function(){
		        	  me.save();
		          }},'-',
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
		
		me.up().close();
		me.getForm().submit({
			url:loadPath + 'goodsSave',
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
	}
});