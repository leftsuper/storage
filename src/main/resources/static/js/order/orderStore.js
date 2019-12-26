Ext.define('storage.order.orderStore', {
	extend: 'Ext.data.Store',
	alias: 'widget.orderStore',
	model:'storage.order.orderModel',
	pageSize: 20,
	proxy:{
		type:'ajax',
		url:loadPath + 'trade/search',
		method:'post',
		reader: {
            type: 'json',
            root: 'order',
            totalProperty: 'total'
        }
	},
    autoLoad:false
});