<?php
//声明编码格式 
header('content-type:text/html;charset="utf-8"');
//链接数据库
$link = mysql_connect("localhost", "root", "123456");

//2.判断是否链接成功
if(!$link){
    echo "数据库连接失败";
    exit;//停止后续所有代码
}

//3.设置字符集
mysql_set_charset("utf8");

//4.选择数据库
mysql_select_db("xxx");

//5.准备sql语句
$sql="select * from users";

//获取前台的传送过来数据
$res=mysql_query($sql);

//创建一个空数组，用于存放前台的数据
$arr=array();

while($row=mysql_fetch_assoc($res)){
    array_push($arr,$row);
}

echo json_encode($arr);

mysql_close($link);
?>