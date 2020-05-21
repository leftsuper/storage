<table class="easyui-datagrid" id="goods" title="货物管理" style="height: auto;" data-options="
                singleSelect:true,
                autoRowHeight:false,
                pagination:true,
                toolbar:'#toolbar',
                url:'goods/search',method:'get'">
    <thead>
    <tr>
        <th field="id" width="80" align="center">ID</th>
        <th field="name" align="center">名称</th>
        <th field="unit" width="80" align="center">单位</th>
        <th field="classify" width="80" align="center">分类</th>
        <th field="color" width="80" align="center">颜色</th>
        <th field="specification" width="80" align="center">规格</th>
        <th field="material" width="100" align="center">材料</th>
        <th field="thickness" width="100" align="center">厚度</th>
        <th field="inventory" width="100" align="center">库存</th>
    </tr>
    </thead>
</table>
<div id="toolbar" style="padding:2px 5px;">
    <a href="javascript:void(0)" class="easyui-linkbutton" onclick="openWin('#goodsWindow')" data-options="iconCls:'icon-storage-add',plain:true">添加</a>
    <a href="javascript:void(0)" class="easyui-linkbutton" onclick="openWin('#goodsWindow')"  data-options="iconCls:'icon-storage-edit',plain:true">编辑</a>
    <a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-storage-delete',plain:true">删除</a>
    <input class="easyui-textbox" label="名称:" labelAlign="right"/>
    <a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" style="float:right">查询</a>
</div>
<div id="goodsWindow" class="easyui-window" title="商品编辑"
        data-options="modal:true,closed:true,iconCls:'icon-save',
            collapsible: false,minimizable: false,maximizable: false,"
        style="width: 800px;height: 350px;padding: 10px">
    <form id="goodsForm" method="post">
        <div style="margin-bottom:20px">
            <input name="name" class="easyui-textbox" label="名称：" labelPosition="left" data-options="prompt:'例如：60×100编织袋，8公分白皮子'" style="width:60%;">
            <input name="classify" class="easyui-combobox" style="width:30%;" data-options='
					valueField:"value",
					textField:"text",
					groupField:"group",
					url:"goods/classify/combo",
					method:"get",
					label: "类型：",
					labelPosition: "left"
					'>
        </div>
        <div style="margin-bottom:20px">
            <input name="color" class="easyui-textbox" label="颜色：" labelPosition="left" style="width:45%">
            <input name="specification" class="easyui-textbox" label="规格：" labelPosition="left" style="width:45%">
        </div>
        <div style="margin-bottom:20px">
            <input name="material" class="easyui-textbox" label="材料：" labelPosition="left" style="width:45%;">
            <input name="thickness" class="easyui-textbox" label="厚度：" labelPosition="left" style="width:45%;">
        </div>
        <div style="margin-bottom:20px">
            <input name="inventory" class="easyui-numberbox" label="库存：" labelPosition="left" style="width:45%;">
            <select name="unit" class="easyui-combobox" label="单位：" labelPosition="left" style="width:45%;">
                <option>个</option>
                <option>卷</option>
                <option>公斤</option>
                <option>把</option>
                <option>件</option>
            </select>
        </div>
        <input name="id" class="easyui-numberbox" label="库存：" labelPosition="left" style="visibility: hidden">
    </form>
    <div>
        <a href="javascript:void(0)" onclick="submitForm('#goodsForm', 'goosd/save')" class="easyui-linkbutton" iconCls="icon-save" style="width:80px;height:32px;position: relative;left: 45%;">保存</a>
    </div>
</div>