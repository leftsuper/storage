
function getDataName(store, valueField, displayField, value) {
	for(var i = 0; i < store.getCount(); i++) {
		if(value == store.getAt(i).get(valueField)) {
			return store.getAt(i).get(displayField);
		}
	}
	return null;
}

function getDataNameByCode(store, value) {
	for(var i = 0; i < store.getCount(); i++) {
		if(value == store.getAt(i).get('code')) {
			return store.getAt(i).get('name');
		}
	}
	return null;
}

//商品名称
var goodsTypeStore = Ext.create('Ext.data.Store', {
	 fields:['name'],
     data : [
         {name:'编织袋'},
         {name:'塑料袋'},
         {name:'纸袋'},
         {name:'自封袋'},
         {name:'线'},
         {name:'打包带'},
         {name:'缝纫机'}
     ]
 });

//颜色
var colorStore = Ext.create('Ext.data.Store', {
	 fields:['name'],
     data : [
         {name:'灰色'},
         {name:'黄色'},
         {name:'透明'},
         {name:'白色'},
         {name:'蓝色'},
         {name:'绿色'},
         {name:'黑色'},
         {name:'红色'},
         {name:'橘红色'}
     ]
 });

//厚度
var thicknessStore = Ext.create('Ext.data.Store', {
	fields:['name'],
    data : [
            {name:'普通'},
            {name:'厚'},
            {name:'特厚'}
            ]
}); 

//是否
var yesOrNoStore = Ext.create('Ext.data.Store', {
	 fields:['name','code'],
     data : [
         {code:'Y',name:'是'},
         {code:'N',name:'否'}
     ]
 });

//是否全部
var yesNoAllStore = Ext.create('Ext.data.Store',{
	fields:['name','code'],
	data:[
	      {code:'Y',name:'是'},
          {code:'N',name:'否'},
          {code:'ALL',name:'全部显示'}
	      ]
});

//质量(材料质地)
var qualityStore = Ext.create('Ext.data.Store', {
	 fields:['name'],
	 data : [
        {name:'旧料'},
        {name:'新料'},
        {name:'全新料'}
     ]
});

//计量单位
var unitStore = Ext.create('Ext.data.Store', {
	 fields:['name'],
	 data : [
       {name:'个'},
       {name:'件'},
       {name:'斤'},
       {name:'kg'},
       {name:'台'},
       {name:'桶'},
       {name:'捆'},
       {name:'卷'},
       {name:'瓶'},
       {name:'袋'}
    ]
});

//计量单位
var pagingSizStore = Ext.create('Ext.data.Store', {
	fields:['name'],
	data : [
	        {name:20},
	        {name:50},
	        {name:100},
	        {name:200},
	        {name:500},
	        {name:1000},
	        {name:1500}
	        ]
});

//搜索模式
var searchModeStore = Ext.create('Ext.data.Store', {
	fields:['code','name'],
	data : [
	        {code:'allYear',name:'全年'},
	        {code:'firstHalf',name:'上半年'},
	        {code:'secondHalf',name:'下半年'},
	        {code:'firstSeason',name:'第一季度'},
	        {code:'secondSeason',name:'第二季度'},
	        {code:'thirdSeason',name:'第三季度'},
	        {code:'forthSeason',name:'第四季度'}
	        ]
});

//权限
var limitStore = Ext.create('Ext.data.Store', {
	 fields:['code','name'],
	 data : [
      {code:1,name:'一级权限'},
      {code:2,name:'二级权限'},
      {code:3,name:'三级权限'},
      {code:4,name:'四级权限'},
      {code:5,name:'五级权限'}
   ]
});