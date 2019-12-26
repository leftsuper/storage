Ext.define('storage.inOutHistory.inOutHistoryModel',{
	extend: 'Ext.data.Model',
    fields: [
			{name: 'id', 				type: 'number',		mapping: 'id'	      },
			{name: 'name',				type: 'string',		mapping: 'name'	      },
			{name: 'inOutCount',		type: 'number',		mapping: 'inOutCount' },
			{name: 'creator',			type: 'string',		mapping: 'creator'	  },
			{name: 'createdTime',		type: 'string',		mapping: 'createdTime'	  }
    ]
});