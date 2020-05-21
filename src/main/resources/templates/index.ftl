<!DOCTYPE html>
<html>
<head>
    <title>华丰仓销管理系统</title>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="keywords" content="仓库，仓储，出入库">
    <meta http-equiv="description" content="出入库管理系统">
    <link rel="stylesheet" type="text/css" href="css/easyui.css" />
    <link rel="stylesheet" type="text/css" href="css/icon.css" />
    <link rel="stylesheet" type="text/css" href="css/index.css" />

    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
</head>
<body class="easyui-layout">
    <div id="header" data-options="region:'north'" ></div>
    <div id="navigator" data-options="region:'west'" title="导航栏">
        <div id="menu" class="easyui-sidemenu" data-options="onSelect:open,data:${navigators}" style="width: 100%"></div>
    </div>
    <div id="section" data-options="region:'center'">
        <div id="tabs" class="easyui-tabs" data-options="tools:'#tab-tools'" >
            <div id="begin" title="开始" data-options="closable:true">
                <span id="begin-text">欢迎使用华丰仓销管理系统</span>
            </div>
        </div>
    </div>
    <div id="footer" data-options="region:'south'">
        Copyright © 2004-2020  华丰塑业版权所有
    </div>
</body>
</html>