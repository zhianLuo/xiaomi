"use strict";

window.onload = function () {
  var user = getCookie('userName');
  console.log(user);
};
/* 2-banner 轮播图 */


var mySwiper = new Swiper('.swiper-container', {
  // autoplay:true,//等同于以下设置
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true
  },
  direction: 'horizontal',
  loop: true,
  // 如果需要分页器
  pagination: '.swiper-pagination',
  // 如果需要前进后退按钮
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev' // 如果需要滚动条
  // scrollbar: '.swiper-scrollbar',

}); // 获取cookie

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