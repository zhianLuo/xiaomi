<?php
/* 
    xiaomi登录页接口

*/
header('Content-Type:text/html;charset=utf-8');

//获取数据
$userName = $_GET["userName"];
$pwd = $_GET["userPwd"];


// 1.连接数据库
$link = mysqli_connect('localhost','root','123456','h5-2002');
if (!$link) {
    die('连接失败：'.mysqli_connect_error());
}
// echo "OK—数据库连接成功！";
// 2.设置编码
mysqli_set_charset($link,'utf8');

// echo "连接成功";
// 3.执行sql语句，插入数据，返回true或false
$sql ="select * from xiaomiusers where userName = '$userName' and userPwd = '$pwd'"; 
$result = mysqli_query($link,$sql);
$arr = mysqli_fetch_array($result);

if ($arr) {
   $cookie =  setcookie("userName","$userName",time()+60*60*24,"/");
    echo "<script>alert('登录成功！');location.href = '../html/index.html';</script>";  
}else{
    echo "<script>alert('登录失败！');location.href = '../html/login.html';</script>";
}

// echo '登录成功！';

// 4.关闭数据库连接
mysqli_close($link);

?>
