  function changeColor() {
  var timing = 40;

  var scrollY = window.pageYOffset;
  var body = document.body;

  var trigger1 = document.getElementById('home');
  var trigger2 = document.getElementById('works');
  var trigger3 = document.getElementById('about');
  var trigger4 = document.getElementById('skills');
  var trigger5 = document.getElementById('contact');

  var trigger1Y = trigger1.getBoundingClientRect().top; // ウィンドウ上からの要素の位置
  var trigger2Y = trigger2.getBoundingClientRect().top;
  var trigger3Y = trigger3.getBoundingClientRect().top;
  var trigger4Y = trigger4.getBoundingClientRect().top;
  var trigger5Y = trigger5.getBoundingClientRect().top;

//  if(trigger2Y - timing > 0 && 0 >= trigger1Y - timing) {
//    body.classList.remove('menu-white');
//  } else if(trigger4Y - timing > 0 && 0 >= trigger3Y - timing) {
//    body.classList.remove('menu-white');
//  } else {
//    body.classList.add('menu-white');
//  }
//}
//
//window.addEventListener('scroll', changeColor);

 if(trigger1Y - timing > 0) {
    body.classList.remove('menu-white');
  } else if(trigger2Y - timing > 0) {
    body.classList.remove('menu-white');
  } else if(trigger3Y - timing > 0) {
    body.classList.remove('menu-white');
  } else if(trigger4Y - timing > 0) {
    body.classList.remove('menu-white');
  } else if(trigger5Y - timing > 0) {
    body.classList.remove('menu-white');
  } else {
    body.classList.add('menu-white');
  }
}

window.addEventListener('scroll', changeColor);

//  if(trigger2Y - timing > 0 && 0 >= trigger1Y - timing) {
//    $('#menu li a').classList.add('active');
//  } else if(trigger4Y - timing > 0 && 0 >= trigger3Y - timing) {
//    $('#menu li a').classList.remove('active');
//  } else {
//    body.classList.remove('active');
//  }
//}

$(function(){
    $('#menu li a').each(function(){
        var $href = $(this).attr('href');
        if(location.href.match($href)) {
            $(this).parent('li').addClass('active');
        } else {
            $(this).parent('li').removeClass('active');
        }
    });
});

//$(function(){
//    $('#menu li a').each(function(){
//        var $href = $(this).attr('href');
//        if(location.href.match($href)) {
//            $(this).parent('li').addClass('active');
//        } else {
//            $(this).parent('li').removeClass('active');
//        }
//    });
//});

//    $(document).ready(function() {
//            $('#fullpage').fullpage({
//              anchors: ['home', 'works', 'about', 'skills', 'contact'],
//              menu: '#menu',
//			 navigation:'true',
//            });
//        });

