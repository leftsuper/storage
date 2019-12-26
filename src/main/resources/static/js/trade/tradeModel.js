Ext.define('storage.trade.tradeModel',{
	extend: 'Ext.data.Model',
    fields: [
			{name: 'id', 				type: 'number',		mapping: 'id'	      },
			{name: 'idGoods',			type: 'number',		mapping: 'idGoods'	  },
			{name: 'price',				type: 'number',		mapping: 'price'	  },
			{name: 'number',			type: 'number',		mapping: 'number'	  },
			{name: 'isDelete',			type: 'string',		mapping: 'isDelete'   },
			{name: 'creator',			type: 'string',		mapping: 'creator'	  },
			{name: 'createdTime',		type: 'string',		mapping: 'createdTime'},
			{name: 'updator',			type: 'string',		mapping: 'updator'    },
			{name: 'updatedTime',		type: 'string',		mapping: 'updatedTime'},
			{name: 'title',				type: 'string',		mapping: 'title'}
    ]
});