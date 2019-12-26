Ext.define('storage.customer.customerStore', {
	extend: 'Ext.data.Store',
	alias: 'widget.customerStore',
	model:'storage.customer.customerModel',
	pageSize: 20,
	proxy:{
		type:'ajax',
		url:loadPath + 'customer/search',
		method:'post',
		reader: {
            type: 'json',
            root: 'customer',
            totalProperty: 'total'
        }
	},
    autoLoad:false
});