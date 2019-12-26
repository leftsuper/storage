Ext.define('storage.statis.statisStore', {
	extend: 'Ext.data.Store',
	alias: 'widget.statisStore',
	model:'storage.statis.statisModel',
	pageSize: 20,
	proxy:{
		type:'ajax',
		url:loadPath + 'statis/search',
		method:'post',
		reader: {
            type: 'json',
            root: 'statis'
        }
	},
    autoLoad:false
});