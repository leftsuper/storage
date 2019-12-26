Ext.define('storage.dictModel',{
	extend: 'Ext.data.Model',
    fields: [
			{name: 'code',			type: 'string',		mapping: 'code'},
			{name: 'name',			type: 'string',		mapping: 'name'}
    ]
});