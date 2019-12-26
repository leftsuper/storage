Ext.define('storage.trade.tradeStore', {
	extend: 'Ext.data.Store',
	alias: 'widget.tradeStore',
	model:'storage.trade.tradeModel',
	pageSize: 20,
    autoLoad:false,
	proxy:{
		type:'ajax',
		url:loadPath + 'trade/tradeSearch',
		method:'post',
		reader: {
            type: 'json',
            root: 'tradeNotes',
            totalProperty: 'total'
        }
	}
});