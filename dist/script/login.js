"use strict";

/*  */

/* 登录 */
var login = document.querySelector('#login-btn');
var box = document.querySelector('#error-box');

login.onclick = function () {
  var userVal = user.value;
  var pwdVal = pwd.value;
  /* 基本逻辑 */

  if (userVal == '' || pwdVal == '') {
    //账号或密码未输入
    event.preventDefault();
    box.style.display = 'block';
  } else {
    //账号和密码都有输入时
    box.style.display = 'none';
  }
}; // 


function set() {
  var user = document.querySelector('#user');
  var pwd = document.querySelector('#pwd');
  setCookie({
    key: "userName",
    val: user.value,
    day: 7,
    path: "/"
  });
}

;