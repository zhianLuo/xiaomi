"use strict";

/*  */

/* 登录 */
var login = document.querySelector('#login-btn');
var box = document.querySelector('#error-box');
var user = document.querySelector('#user');
var pwd = document.querySelector('#pwd');

login.onclick = function () {
  var xhr = new XMLHttpRequest();
  var userVal = user.value;
  var pwdVal = pwd.value;
  xhr.open('get', '../data/user.json', true);
  xhr.send(null);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        var jsonObj = JSON.parse(xhr.responseText);
        var temp = false;
        var _user = '';

        for (var key in jsonObj) {
          if (userVal == key && pwdVal == jsonObj[key]) {
            // console.log("请求成功")
            temp = true;
            _user = key;
          }
        }

        if (temp) {
          // console.log("账户密码正确");
          window.location.href = './index.html';
          /* 需要设置一个cookie 提供给index页面   */

          setCookie({
            key: "userName",
            val: _user,
            days: 7,
            path: '/'
          });
        } else {
          box.style.display = 'block'; // console.log("账户或密码错误")
        }
      } else {
        alert('数据请求失败');
      }
    }
  };
}; // 设置cookie


function setCookie(options) {
  if (!options.key || !options.val) {
    throw new Error('设置失败，key和val是必填参数！');
  }

  options.domain = options.domain || '';
  options.path = options.path || '';
  options.days = options.days || 0;

  if (options.days !== 0) {
    var d = new Date();
    d.setDate(d.getDate() + options.days);
    document.cookie = options.key + '=' + escape(options.val) + '; domain=' + options.domain + '; path=' + options.path + '; expires=' + d;
  } else {
    document.cookie = options.key + '=' + escape(options.val) + '; domain=' + options.domain + '; path=' + options.path;
  }
}