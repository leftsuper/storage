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
    <link rel="stylesheet" type="text/css" href="css/sidemenu_style.css">

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
        <#--<div id="sm" class="easyui-sidemenu" data-options="data:data"></div>
        <script type="text/javascript">
            var data = [{
                text: 'Forms',
                iconCls: 'icon-save',
                state: 'open',
                children: [{
                    text: 'Form Element'
                },{
                    text: 'Wizard'
                },{
                    text: 'File Upload'
                }]
            },{
                text: 'Mail',
                iconCls: 'aaa',
                selected: true,
                children: [{
                    text: 'Inbox'
                },{
                    text: 'Sent'
                },{
                    text: 'Trash',
                    children: [{
                        text: 'Item1'
                    },{
                        text: 'Item2'
                    }]
                }]
            },{
                text: 'Layout',
                iconCls: 'bbb',
                children: [{
                    text: 'Panel'
                },{
                    text: 'Accordion'
                },{
                    text: 'Tabs'
                }]
            }];

            function toggle(){
                var opts = $('#sm').sidemenu('options');
                $('#sm').sidemenu(opts.collapsed ? 'expand' : 'collapse');
                opts = $('#sm').sidemenu('options');
                $('#sm').sidemenu('resize', {
                    width: opts.collapsed ? 60 : 200
                })
            }
        </script>-->
    </div>
    <div id="section" data-options="region:'center'"></div>
    <div id="footer" data-options="region:'south'">
        Copyright © 2004-2020  华丰塑业版权所有
    </div>
</body>
</html>