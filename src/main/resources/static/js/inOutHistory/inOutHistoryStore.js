Ext.define('storage.inOutHistory.inOutHistoryStore', {
	extend: 'Ext.data.Store',
	alias: 'widget.inOutHistoryStore',
	model:'storage.inOutHistory.inOutHistoryModel',
	pageSize: 20,
	proxy:{
		type:'ajax',
		url:loadPath + 'inOutHistory/search',
		method:'post',
		reader: {
            type: 'json',
            root: 'inOutHistory',
            totalProperty: 'total'
        }
	},
    autoLoad:false
});