<!DOCTYPE html>
<html>
<head>
    <base href="<%=basePath%>">

    <title>华丰仓销管理系统</title>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="keywords" content="仓库，仓储，出入库">
    <meta http-equiv="description" content="出入库管理系统">
    <style>
        body{
            margin:0px;
            padding:0px;
            font-family:sans-serif;
            background-size:cover;
            font-family: 宋体;
        }
        .box{
            position:absolute;
            top:40%;
            left:70%;
            transform:translate(-50%,-50%);
            /*实现块元素百分比下居中*/
            width:450px;
            padding:50px;
            background: rgba(0,0,0,.8);
            box-sizing:border-box;
            box-shadow: 0px 15px 25px rgba(0,0,0,.5);
            border-radius:15px;
        }
        .box h2{
            margin:0 0 30px;
            padding:0;
            color: #fff;
            text-align:center;
        }
        .box .inputbox{
            position:relative;
        }
        .box .inputbox input{
            width: 100%;
            padding:10px 0;
            font-size:24px;
            color:#fff;
            letter-spacing: 1px;
            margin-bottom: 30px;
            border:none;
            border-bottom: 1px solid #fff;
            outline:none;
            background: transparent;
        }
        .box .inputbox label{
            position:absolute;
            top:0px;
            left:0px;
            padding:10px 0;
            font-size: 16px;
            color:#fff;
            pointer-events:none;
            transition:.5s;
        }
        .box .inputbox input:focus ~ label,
        .box .inputbox input:valid ~ label
        {
            top:-18px;
            left:0;
            color:#03a9f4;
            font-size:20px;
        }
        .box input[type="submit"]
        {
            background: transparent;
            border:none;
            outline:none;
            font-size: 20px;
            color:#fff;
            background: #03a9f4;
            padding:15px 20px;
            cursor: pointer;
            border-radius:10px;
        }
    </style>

</head>

<body>
<div style="position: absolute;top: 5%;left: 30%;font-family: 微软雅黑;font-size: 30px">
    华丰塑业仓销管理系统
</div>
<div style="position: absolute;top: 15%;height: 50%;width: 100%;background-color: #dbf4ec"></div>
<img src="img/storage.jpg" style="position: absolute;top: 15%;left: 15%;height: 50%;"/>
<div class="box">
    <h2>登陆</h2>
    <form>
        <div class="inputbox">
            <input type="text" name="" required="">
            <label>账号</label>
        </div>
        <div class="inputbox">
            <input type="password" name=" " required="">
            <label>密码</label>
        </div>
        <input type="submit" name="" value="submit">
    </form>
</div>
</body>
</html>