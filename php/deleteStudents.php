<?php
//声明编码格式 
header('content-type:text/html;charset="utf-8"');

//统一发返回格式
$responseData=array("code"=>0,"message"=>"");

$id=$_GET["id"];

//1.链接数据库
$link=mysql_connect("localhost","root","123456");

//判断数据库是否链接成功
if(!$link){
    $responseData["code"] = 1;
    $responseData["message"] = "数据库链接失败";
    //返回到前台页面你
    echo json_encode($responseData);
    exit;
}

//3.设置字符集
mysql_set_charset("utf8");
//4.选择数据库
mysql_select_db("xxx");

//5.准备sql语句
$sql = "DELETE FROM users WHERE id={$id}";

//发送sql语句
$res=mysql_query($sql);
//判断是否删除成功
if(!$res){
    $responseData["code"] = 2;
    $responseData["message"] = "删除用户数据失败";
    //返回到前台页面你
    echo json_encode($responseData);
}else{
    $responseData["message"] = "删除用户数据成功";
    //返回到前台页面你
    echo json_encode($responseData);
}


//关闭数据库
mysql_close($link);
?>