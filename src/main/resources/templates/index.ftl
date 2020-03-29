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

    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.easyui.min.js"></script>
    <style>
        body{
        }
        #header{
            height: 200px;
            background-color: #77beff;
        }
        #navigator{
            width: 20%;
        }
        #section{
        }
        #footer{
            height: 35px;
            text-align: center;
            font-size: 20px;
        }
    </style>
</head>
<body class="easyui-layout">
    <div id="header" data-options="region:'north'" ></div>
    <div id="navigator" data-options="region:'west'" title="导航栏">
        <div id="sm" class="easyui-sidemenu" data-options="onSelect:open,data:[{'id':10100,'name':'storage','text':'仓储','iconCls':'icon-save','url':'','children':[{'id':10101,'name':'inventory','text':'库存','iconCls':'icon-shift','url':'/storage/inventory','parentId':10100}]},{'id':10200,'name':'sale','text':'销售','iconCls':'icon-grid','children':[{'id':10201,'name':'order','text':'订单','iconCls':'icon-application','url':'/sale/order','parentId':10200},{'id':10202,'name':'customer','text':'顾客','iconCls':'icon-user','url':'/sale/customer','parentId':10200}]},{'id':10300,'name':'statistics','text':'统计','iconCls':'icon-chart'}]" style="width: 100%"></div>
        <script type="text/javascript">
            function open(item){
                alert(item.url)
            }
        </script>
    </div>
    <div id="section" data-options="region:'center'"></div>
    <div id="footer" data-options="region:'south'">
        Copyright © 2004-2020  华丰塑业版权所有
    </div>
</body>
</html>