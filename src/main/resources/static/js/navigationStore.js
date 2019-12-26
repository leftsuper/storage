Ext.define('storage.navigationStore', {
	extend: 'Ext.data.TreeStore',
	alias: 'widget.orderStore',
	folderSort : true,
	autoLoad:false,
	proxy: {
        type: 'ajax',
        url: loadPath + 'navigation/search',
        method:'post',
        reader:{
        	type:'json',
        	root:'children'
        }
	}
});