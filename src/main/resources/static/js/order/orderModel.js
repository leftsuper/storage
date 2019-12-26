Ext.define('storage.order.orderModel',{
	extend: 'Ext.data.Model',
    fields: [
			{name: 'id', 				type: 'number',		mapping: 'id'	      },
			{name: 'orderNo',			type: 'string',		mapping: 'orderNo'	  },
			{name: 'isPrint',			type: 'string',		mapping: 'isPrint'	  },
			{name: 'customer',			type: 'string',		mapping: 'customer'	  },
			{name: 'remark',			type: 'string',		mapping: 'remark'	  },
			{name: 'isDelete',			type: 'string',		mapping: 'isDelete'   },
			{name: 'creator',			type: 'string',		mapping: 'creator'	  },
			{name: 'createdTime',		type: 'string',		mapping: 'createdTime'},
			{name: 'updator',			type: 'string',		mapping: 'updator'    },
			{name: 'updatedTime',		type: 'string',		mapping: 'updatedTime'}
    ]
});