"use strict";

$('document').ready(function () {
  // 打開選單
  $('.mobile-link').click(function (event) {
    event.preventDefault();
    $('body').toggleClass('open');
  }); //glasses 選單 切換

  $('.menu-opt').click(function (event) {
    event.preventDefault();
    $(this).parent().siblings().find('a').removeClass('menu-active');
    $(this).addClass('menu-active');
    $(".sun").addClass('dn');
    $(".fun").addClass('dn');
    $(".opt").removeClass('dn');
  });
  $('.menu-sun').click(function (event) {
    event.preventDefault();
    $(this).parent().siblings().find('a').removeClass('menu-active');
    $(this).addClass('menu-active');
    $(".opt").addClass('dn');
    $(".fun").addClass('dn');
    $(".sun").removeClass('dn');
  });
  $('.menu-fun').click(function (event) {
    event.preventDefault();
    $(this).parent().siblings().find('a').removeClass('menu-active');
    $(this).addClass('menu-active');
    $(".sun").addClass('dn');
    $(".opt").addClass('dn');
    $(".fun").removeClass('dn');
  });
});
//# sourceMappingURL=all.js.map
