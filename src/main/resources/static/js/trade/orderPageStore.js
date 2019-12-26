Ext.define('storage.trade.orderPageStore', {
	extend: 'Ext.data.Store',
	alias: 'widget.orderPageStore',
	model:'storage.trade.tradeModel',	
	pageSize: 10,
	proxy:{
		type: 'ajax',
        url: loadPath + 'trade/allSearch',
        method:'post',
		reader: {
            type: 'json',
            root: 'children',
            totalProperty: 'total'
        }
	},
    autoLoad:false
});