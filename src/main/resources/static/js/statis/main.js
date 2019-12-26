Ext.define('storage.statis.main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.instorageGrid',
	initComponent: function(){
		
		var me = this;
		
		var yearStore = Ext.create('storage.statis.statisYearStore');
		var store = Ext.create('storage.statis.statisStore');
		
		var chart = Ext.create('Ext.chart.Chart', {
            store: store,
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['yData'],
                title: '总金额',
                grid: true,
                minimum: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['xData'],
                grid:true,
		        label: {
		            rotate: {
		                degrees: 315
		            }
		        }
            }],
            series: [{
                type: 'column',
                xField: 'xData',
                yField: 'yData',
                tips: {
                    trackMouse: true,
                    width: 140,
                    height: 28,
                    renderer: function(storeItem, item) {
                      this.setTitle('￥' + rendererThusandMoney(storeItem.get('yData')));
                    }
                },
                listeners:{
                	'itemclick':function(v) {
                		me.search(v.value[0]);
                	}
                }
            }]
        });
		
		Ext.apply(this,{
			layout:'fit',
			autoScroll:true,
			tbar:[
			      {xtype:'combobox',fieldLabel:'查询年份',itemId:'searchYear',queryMode:'local',store:yearStore,valueField:'name',
			    	  displayField:'name',allowBlank:false,margin:'0 0 0 5',labelWidth:90,editable:false},
			      {xtype:'combobox',itemId:'searchMode',queryMode:'local',store:searchModeStore,valueField:'code',
				      displayField:'name',allowBlank:false,margin:'0 5 0 5',editable:false,value:'allYear'},
				  '-',
			      {xtype:'combobox',fieldLabel:'是否打印',itemId:'isPrint',queryMode:'local',store:yesNoAllStore,valueField:'code',
				      displayField:'name',margin:'0 0 0 5',labelWidth:90,width:170,editable:false,value:'Y'},
				  '->',
			      {text:'查询',iconCls:'search',handler:function() {
			    	  me.search();
			      }}
			      ],
			chart:chart,
			searchYear:'',
			searchMonth:'',
			items:[chart]
		});
		
		me.callParent();
	},
	search:function(searchMonth) {
		var me = this;
		
		if(!me.down('#searchYear').validate()) {
			Ext.Msg.alert('警告','请检查选择项！');
			return;
		}
		var searchYear = me.down('#searchYear').getValue();
		var searchMode = me.down('#searchMode').getValue();
		var isPrint = me.down('#isPrint').getValue();
		
		var month;
		if(searchMonth && searchMonth.indexOf('月') >= 0) {
			month = searchMonth.replace('月','');
		} else if(searchMonth) {
			var searchDay = searchMonth>10?searchMonth:'0'+searchMonth; 
			var searchOrderNo = me.searchYear + me.searchMonth + searchDay;
			var centerPanel = top.view.down('#centerPanel');
			var orderPanel = Ext.create('storage.order.main');
			orderPanel.down('#orderNo').setValue(searchOrderNo);
			centerPanel.removeAll();
			centerPanel.add(orderPanel);
			return;
		}
		
		me.chart.getStore().load({
			params:{
				'searchYear':searchYear?searchYear:null,
				'searchMode':searchMode?searchMode:null,
				'searchMonth':month?month:null,
				'isPrint':isPrint?isPrint:null
			}
		});
		me.searchYear = searchYear;
		me.searchMonth = month>10?month:'0'+month;
	}
});