"use strict";

/* header 模块 js */

/* 加载页面时查看是否有用户信息 */
window.onload = function () {
  var user = getCookie('userName');
  var miName = document.querySelector('#miName');
  var topbarInfo = document.querySelector('#topbar-info');
  var topbarLogined = document.querySelector('#topbar-info-logined');

  if (user) {
    topbarInfo.style.display = "none";
    topbarLogined.style.display = "block";
    miName.innerText = user;
  } else {
    topbarInfo.style.display = "block";
    topbarLogined.style.display = "none";
  }
};
/* 登录跳转 */


var login = document.querySelector('#login');

login.onclick = function () {
  window.parent.location.href = './login.html';
};
/* 注册跳转 */


var register = document.querySelector('#register');

register.onclick = function () {
  window.parent.location.href = './register.html';
};
/* 商品详情页跳转 */


var miPhone = document.querySelector('#miPhone');

miPhone.onclick = function () {
  window.parent.location.href = './miPhones.html';
};
/* 退出登录 删除cookie并刷新页面*/


var logout = document.querySelector('#logout');

logout.onclick = function () {
  removeCookie("userName", "/");
  window.parent.location.href = './index.html';
};