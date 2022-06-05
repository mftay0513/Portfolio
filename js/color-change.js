$(function(){
  var secArr = new Array();
  var current = -1;
  /* ここに背景色を順に記述する*/
  var secColor = new Array('#98e3ff','#f4dcac', '#f8c8c8', '#d3c6fe' ,'#4854aa');
  $('.block').each(function (i) {
      secArr[i] = $(this).offset().top;
  });
  function chengeBG(secNum) {
      if (secNum != current) {
          current = secNum;
          $('.block-bg').css({backgroundColor: secColor[current]});
      }
  }
  $(window).on('load scroll resize',function(){
      for (var i = secArr.length-1; i>=0; i--) {
          if ($(window).scrollTop() > secArr[i]){
              chengeBG(i);
              break;
          }
      }
  });
});