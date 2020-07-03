"use strict";

/* 2-banner 轮播图 */
window.onload = function () {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    // vertical垂直切换选项
    loop: true,
    // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination'
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    } // 如果需要滚动条

    /* scrollbar: {
        el: '.swiper-scrollbar',
    }, */

  });
};
/* var mySwiper = new Swiper('.swiper-container', {
    // autoplay:true,//等同于以下设置
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    direction: 'horizontal',
    loop: true,

    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
}) */