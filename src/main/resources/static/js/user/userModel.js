Ext.define('storage.user.userModel',{
	extend: 'Ext.data.Model',
    fields: [
			{name: 'id', 				type: 'number',		mapping: 'id'	      },
			{name: 'name',				type: 'string',		mapping: 'name'	      },
			{name: 'loginName',			type: 'string',		mapping: 'loginName'  },
			{name: 'password',			type: 'string',		mapping: 'password'	  },
			{name: 'limitRank',			type: 'number',		mapping: 'limitRank'	  },
			{name: 'isDelete',			type: 'string',		mapping: 'isDelete'   },
			{name: 'creator',			type: 'string',		mapping: 'creator'	  },
			{name: 'createdTime',		type: 'string',		mapping: 'createdTime'},
			{name: 'updator',			type: 'string',		mapping: 'updator'    },
			{name: 'updatedTime',		type: 'string',		mapping: 'updatedTime'}
    ]
});