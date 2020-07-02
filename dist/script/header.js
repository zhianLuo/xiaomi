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

var login = document.querySelector('#login');

login.onclick = function () {
  window.parent.location.href = './login.html';
};

var register = document.querySelector('#register');

register.onclick = function () {
  window.parent.location.href = './register.html';
}; // 获取cookie


function getCookie(key) {
  var arr1 = document.cookie.split('; '); //所有cookie分割出来的数组

  var arr2 = []; //每一个cookie分割出来的key和value

  for (var i = 0, len = arr1.length; i < len; i++) {
    arr2 = arr1[i].split('=');

    if (arr2[0] === key) {
      return unescape(arr2[1]);
    }
  }

  return null;
}