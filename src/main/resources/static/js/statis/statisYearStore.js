Ext.define('storage.statis.statisYearStore', {
	extend: 'Ext.data.Store',
	alias: 'widget.statisYearStore',
	model:'storage.dictModel',
	pageSize: 20,
	proxy:{
		type:'ajax',
		url:loadPath + 'statis/searchYear',
		method:'post',
		reader: {
            type: 'json',
            root: 'year'
        }
	},
    autoLoad:true
});