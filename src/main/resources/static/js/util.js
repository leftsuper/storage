//访问路径
var loadPath = 'http://' + window.location.host + '/storage/';

// 所有界面的弹窗，保证唯一性并方便调用
top.createWin = function(callObject, path, title, width, height) {
	if(path) {
		var itemPanel = Ext.create(path);
	}

	if (top.myWin) {
		top.myWin.destroy();
		top.myWin = null;
	}
	top.myWin = Ext.create('Ext.window.Window', {
		title : title,
		height : height,
		width : width,
		layout : 'fit',
		modal : true,
		callObject : callObject,
		itemPanel : itemPanel,
		closeAction : 'hide',
		items : [ itemPanel ]
	});
};

/**
 * 以下为Ext原生组件重写
 */
// form.panel样式
Ext.override(Ext.form.Panel,{
	bodyStyle: {
	    background: '#DFE8F6',
	    padding: '5px'
	},
	border:false
});

//rownumberer
Ext.override(Ext.grid.RowNumberer,{
	width:35
});

Ext.override(Ext.data.Store,{
	listeners:{
		'load':function() {
			if(this.lastOptions.params) {
				this.proxy.extraParams = this.lastOptions.params;
			}
		}
	}
});

// numberfield精确度
Ext.override(Ext.form.field.Number,{
	decimalPrecision:0
});

Ext.apply(Ext.form.field.VTypes, {
    positiveNumber:  function(v) {
    	if(v > 0) {
    		return true;
    	}
    	return false;
    },
    positiveNumberText: '必须是正数'
});

//为form表单中必填项添加红色*号标志
Ext.override(Ext.form.field.Base,{     
	// 针对form中的基本组件
	initComponent:function(){
		if(this.allowBlank!==undefined && !this.allowBlank){
			if(this.fieldLabel){
				this.fieldLabel += '<font color=red>*</font>';
			}
		}
		if(this.forceSelection!==undefined && this.forceSelection){
			if(this.fieldLabel){
				this.fieldLabel += '<font color=green>^</font>';
			}
		}
		this.callParent(arguments);}
});

Ext.override(Ext.container.Container,{
	//针对form中的容器组件     
	initComponent:function(){
		if(this.allowBlank!==undefined && !this.allowBlank){
			if(this.fieldLabel){                 
				this.fieldLabel += '<font color=red>*</font>'; 
				}       
			}
		if(this.forceSelection!==undefined && this.forceSelection){
			if(this.fieldLabel){
				this.fieldLabel += '<font color=green>^</font>';
				}
			}
		this.callParent(arguments);
		} 
});

//分页栏
Ext.override(Ext.toolbar.Paging,{
	items:['-',
           {xtype:'label',text:'每页'},
           {xtype:'combobox',store:pagingSizStore,queryMode:'local',editable:false,displayField:'name',
           		valueField:'name',value:20,width:70,margin:'0 5 0 5',listeners:{
           			'select':function(comb, records) {
           				var pageStore = comb.up().up().getStore();
           				pageStore.pageSize = records[0].get('name');
           				pageStore.load();
           			}
           		}},
           {xtype:'label',text:'条'}
           ]
});

//请求相应时间
Ext.Ajax.timeout = 20000;
//ajax异步请求拦截
Ext.Ajax.on('requestcomplete',checkUserSessionStatus, this);     
function checkUserSessionStatus(conn,response,options){     
    //Ext重新封装了response对象     
	var sessionStatus = response.getResponseHeader('sessionstatus');
    if(sessionStatus == 'timeout'){
    	Ext.Msg.alert('警告','由于你长时间未操作系统，请重新登录系统！',function(){
    		window.location.href = "login";
    	});
    } else if(sessionStatus == 'nullUser') {
    	Ext.Msg.alert('警告','由于你长时间未操作系统，请重新登录系统！',function(){
    		window.location.href = "login";
    	});
    }
}  

//按钮权限控制
Ext.override(Ext.button.Button,{
	initComponent:function(){
		if(this.limitRank){
			if(user.limitRank > this.limitRank) {
				this.hidden = true;
			}
		}
		this.callParent(arguments);
	} 
});


/**
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * 以下为全局公共方法
 */

// 千分位分隔符
function rendererThusandMoney(v) {  
    if(isNaN(v)){  
        return v;  
    }  
    v = (Math.round((v - 0) * 100)) / 100;  
    v = (v == Math.floor(v)) ? v + ".00" : ((v * 10 == Math.floor(v * 10)) ? v  
            + "0" : v);  
    v = String(v);  
    var ps = v.split('.');  
    var whole = ps[0];  
    var sub = ps[1] ? '.' + ps[1] : '.00';  
    var r = /(\d+)(\d{3})/;  
    while (r.test(whole)) {  
        whole = whole.replace(r, '$1' + ',' + '$2');  
    }  
    v = whole + sub;  
      
    return v;  
} 

//获取dom元素
function getDomById(id) {
	if(id && '' != id) {
		return document.getElementById(id);
	}
	return;
}

//退出
function exit() {
	window.location.href = "exit"; 
}
//修改密码
function changPassword() {
	top.createWin(null,'storage.user.changePwdPanel','修改密码', 450, 230);
    top.myWin.show();
}

function addColumn(modelPath){
	var me = top.myWin.itemPanel;
	if(modelPath) {
		me.getStore().add(Ext.create(modelPath));
	}
	return;
}

function delColumn(recordIndex){
	var me = top.myWin.itemPanel;
	
	if(recordIndex || recordIndex >= 0) {
		me.getStore().removeAt(recordIndex);
		me.view.refresh();
	}
	
	return;
}

function resetColumn(index){
	var me = top.myWin.itemPanel;
	
	me.getStore().getAt(index).data = {};
	me.view.refresh();
}

//颜色显示
function colorFont(v) {
	if(!v) {
		return '';
	} else if(v.indexOf('灰色') >= 0) {
		return '<font color=gray>' + v + '</font>';
	} else if(v.indexOf('绿色') >= 0) {
		return '<font color=green>' + v + '</font>';
	} else if(v.indexOf('黄色') >= 0) {
		return '<font color=#CDCD00>' + v + '</font>';
	} else if(v.indexOf('红色') >= 0) {
		return '<font color=red>' + v + '</font>';
	} else if(v.indexOf('蓝色') >= 0) {
		return '<font color=blue>' + v + '</font>';
	} else {
		return v;
	}
}

//数字乘法问题
function multiply(v1, v2) {
	if(v1 && v2) {
		return parseFloat(parseFloat(v1 * v2).toFixed(2));
	}
	return 0;
}