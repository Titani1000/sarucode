// ヘッダメニューからのスムーススクロール要素
$('.page_link a[href*="#"]').click(function() {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top;
  $('body,html').animate({scrollTop: pos},500);
  return false;
});

// ハンバーガーメニュー用Activeクラス付与
$(".menubtn").click(function () {
  $(this).toggleClass('active');
  $(".hMenu").toggleClass('panelactive');
});

$(".hMenu a").click(function() {
  $(".menubtn").removeClass('active');
  $(".hMenu").removeClass('panelactive');
  $(".polc")
});