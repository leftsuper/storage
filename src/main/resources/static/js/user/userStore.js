Ext.define('storage.user.userStore', {
	extend: 'Ext.data.Store',
	alias: 'widget.userStore',
	model:'storage.user.userModel',
	pageSize: 20,
	proxy:{
		type:'ajax',
		url:loadPath + 'user/search',
		method:'post',
		reader: {
            type: 'json',
            root: 'user',
            totalProperty: 'total'
        }
	},
    autoLoad:false
});