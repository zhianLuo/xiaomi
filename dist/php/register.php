<?php
/* 
    xiaomi注册页接口

*/
header('Content-Type:text/html;charset=utf-8');

//获取数据
$userName = $_GET["userName"];
$pwd = $_GET["passWord"];


// 1.连接数据库
$link = mysqli_connect('localhost','root','123456','h5-2002');
if (!$link) {
    die('连接失败：'.mysqli_connect_error());
}
// echo "OK—数据库连接成功！";
// 2.设置编码
mysqli_set_charset($link,'utf8');

// 3.执行sql语句，插入数据，返回true或false
$sql = "insert into xiaomiusers (userName,userPwd) values ('$userName','$pwd')";

$res = mysqli_query($link,$sql);
if (!$res) {
    // 
    echo "<script>alert('注册失败！');location.href = '../html/register.html';</script>";
}else{
    echo "<script>alert('注册成功！');location.href = '../html/login.html';</script>";
}

// echo '添加成功！';

// // 4.关闭数据库连接
mysqli_close($link);

?>
