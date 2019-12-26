Ext.define('storage.instorage.goodsModel',{
	extend: 'Ext.data.Model',
    fields: [
			{name: 'id', 				type: 'number',		mapping: 'id'	      },
			{name: 'name',				type: 'string',		mapping: 'name'	      },
			{name: 'type',				type: 'string',		mapping: 'type'	      },
			{name: 'color',				type: 'string',		mapping: 'color'	  },
			{name: 'width',				type: 'string',		mapping: 'width'	  },
			{name: 'height',			type: 'string',		mapping: 'height'     },
			{name: 'quality',			type: 'string',		mapping: 'quality'    },
			{name: 'unit',				type: 'string',		mapping: 'unit'    	  },
			{name: 'inventory',			type: 'number',		mapping: 'inventory'  },
			{name: 'thickness',			type: 'string',		mapping: 'thickness'  },
			{name: 'isDelete',			type: 'string',		mapping: 'isDelete'   },
			{name: 'creator',			type: 'string',		mapping: 'creator'	  },
			{name: 'createdTime',		type: 'string',		mapping: 'createdTime'},
			{name: 'updator',			type: 'string',		mapping: 'updator'    },
			{name: 'updatedTime',		type: 'string',		mapping: 'updatedTime'}
    ]
});