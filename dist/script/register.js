"use strict";

/* 


    注册
    此处用的是jQuery2.1.4版本 

    
*/
var $zcxinxi = $('.zcxinxi');
var $reg = $('.reg');
var $user = $('.user');
var $pwd = $('.pwd');
$reg.click(function () {
  if ($('.user').val() == '' || $('.pwd').val() == '') {
    //账号或密码未输入
    $zcxinxi.css('display', 'block');
  } else {
    //账号和密码都有输入时
    $zcxinxi.css('display', 'none');
    var text = $.ajax({
      url: "../data/user.json",
      async: false
    }).responseText;
  }
});