Ext.define('storage.instorage.goodsStore', {
	extend: 'Ext.data.Store',
	alias: 'widget.goodsStore',
	model:'storage.instorage.goodsModel',
	pageSize: 20,
	proxy:{
		type:'ajax',
		url:loadPath + 'goods/search',
		method:'post',
		reader: {
            type: 'json',
            root: 'goods',
            totalProperty: 'total'
        }
	},
    autoLoad:false
});