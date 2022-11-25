<?php
//声明编码格式 
header('content-type:text/html;charset="utf-8"');

//统一发返回格式
$responseData=array("code"=>0,"message"=>"");

//取出传过来的数据
$username=$_POST["username"];
$password=$_POST["password"];
$addTime=$_POST["addTime"];

//简单验证
if(!$username){
    $responseData["code"]=1;
    $responseData["message"]="用户名不能为空";
    echo json_encode($responseData);
    exit;
}

if(!$password){
    $responseData["code"]=2;
    $responseData["message"]="密码不能为空";
    echo json_encode($responseData);
    exit;
}

//1.连接数据库
$link=mysql_connect("localhost" ,"root" ,"123456");

//2.判断是否连接成功
if(!$link){
    echo "链接失败";
    $responseData["code"]=3;
    $responseData["message"]="数据库连接失败";
    echo json_encode($responseData);
    exit;//终止所有代码
}

//3.设置字符集
mysql_set_charset("utf8");

//4.选择数据库
mysql_select_db("xxx");

//5.准备sql语句，在准备sql语句前需要先进行验证用户名是否重名
$sql1="select * from users where username='{$username}'";

//6.发送sql语句
$res=mysql_query($sql1);

//7.取出一行数据
$row=mysql_fetch_assoc($res);
if($row){
    //用户名重名
    $responseData["code"]=4;
    $responseData["message"]="用户已经存在";
    echo json_encode($responseData);
    exit;//终止所有代码
}
    //md5加密
    $str=md5(md5(md5($password)."xxx")."yyy");

    //准备sql语句插入到数据库中
    $sql2="insert into users(username,password,create_time) values('{$username}','{$str}','{$addTime}')";

    //返回布尔值
    $res=mysql_query($sql2);
    if(!$res){
        $responseData["code"]=5;
        $responseData["message"]="注册失败";
        echo json_encode($responseData);
    }else{
        $responseData["message"]="注册成功";
        echo json_encode($responseData);
    }

    mysql_close($link);
?>