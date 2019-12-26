Ext.define('storage.customer.customerModel',{
	extend: 'Ext.data.Model',
    fields: [
			{name: 'id', 				type: 'number',		mapping: 'id'	      },
			{name: 'name',				type: 'string',		mapping: 'name'	      },
			{name: 'address',			type: 'string',		mapping: 'address'	  },
			{name: 'tel',				type: 'string',		mapping: 'tel'		  },
			{name: 'isDelete',			type: 'string',		mapping: 'isDelete'   },
			{name: 'creator',			type: 'string',		mapping: 'creator'	  },
			{name: 'createdTime',		type: 'string',		mapping: 'createdTime'},
			{name: 'updator',			type: 'string',		mapping: 'updator'    },
			{name: 'updatedTime',		type: 'string',		mapping: 'updatedTime'}
    ]
});