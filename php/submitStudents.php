<?php 
	header("Content-type:text/html;charset=utf-8");
	//统一发返回格式
	$responseData = array("code" => 0, "message" => "");
	//取出传过来的数据
	$username = $_POST["username"];
	$password = $_POST['password'];
	$id = $_POST["id"];

	//简单的验证
	if(!$username){
		$responseData["code"] = 1;
		$responseData["message"] = "用户名不能为空";
		echo json_encode($responseData);
		exit;
	}
	if(!$password){
		$responseData["code"] = 2;
		$responseData["message"] = "密码不能为空";
		echo json_encode($responseData);
		exit;
	}
	if(!$id){
		$responseData["code"] = 3;
		$responseData["message"] = "修改的用户不存在";
		echo json_encode($responseData);
		exit;
	}
	
	
	//链接数据库
	$link = mysql_connect("localhost", "root", "123456");

	//2、判断是否连接成功
	if(!$link){
		
		$responseData["code"] = 3;
		$responseData["message"] = "数据库链接失败";
		echo json_encode($responseData);
		exit; //终止后续所有的代码
	}

	//3、设置字符集
	mysql_set_charset("utf8");

	//4、选择数据库
	mysql_select_db("xxx");


	//5、判断用户名是否重名
	$sql = "SELECT * FROM users WHERE username='{$username}' AND id!={$id}";

	$res = mysql_query($sql);
	$row = mysql_fetch_assoc($res);
	if($row){
		$responseData["code"] = 4;
		$responseData["message"] = "用户名重名，不能修改";
		echo json_encode($responseData);
		exit; //终止后续所有的代码
	}
	//md5加密
	$str = md5(md5(md5($password)."xxx")."yyy");
	
	$sql2 = "UPDATE users SET username='{$username}',password='{$str}' WHERE id={$id}";

	$res2 = mysql_query($sql2);
	if($res2){
		$responseData["message"] = "修改成功";
		echo json_encode($responseData);
	}else{
		$responseData["code"] = 5;
		$responseData["message"] = "用户名修改失败，请重试";
		echo json_encode($responseData);
		exit; //终止后续所有的代码
	}
	mysql_close($link);
?>