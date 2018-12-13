/*menu-bar*/
$(window).scroll(function() {
  var now = $(this).scrollTop();
  if (now > 100) {
    $(".menu-bar").fadeIn("slow");
  } else {
    $('.menu-bar').fadeOut('slow');
    $('#menu-btn span').css('background-color','#fff');
    $('.title-logo p').css('color','#fff');
  }
});


/*slick*/
$(function(){
  $('.slick-photo').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    dots: true,
    swipe: true
    });
});

/*ピックアップメニュー*/
$(function(){
  $('.menu-slick').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    /*レスポンシブ（1280以下のデバイス）*/
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },{
      /*レスポンシブ（980以下のデバイス）*/
      breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },{
    /*レスポンシブ（５９９以下のデバイス）*/
      breakpoint: 599,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '95px'
      }
    }]
  });
});

/*tab-menu*/
$(function() {
  $("ul.panel li:not(" + $("ul.tab li a.selected").attr("href") + ")").hide();
  $("ul.tab li a").click(function() {
    $("ul.tab li a.selected").removeClass("selected");
    $(this).addClass("selected");
    $("ul.panel li").fadeOut('fast');
    $($(this).attr("href")).fadeIn('slow');
    return false;
  });
});

/*page-top-btn*/
$(function(){
  $(window).scroll(function() {
    var now = $(this).scrollTop();
    if (now > 600) {
      $("#page-top-btn").fadeIn("slow");
    } else {
      $('#page-top-btn').fadeOut('slow');
    }
});
});



$('#page-top-btn').click(function() {
  $('html,body').animate({
    scrollTop: 0
  }, 'slow');
});

/*modal-window*/
$(function() {
  $('#menu-btn').click(function() {
    $(this).toggleClass('active');
    if ($('#menu-btn').attr('class') == 'active') {
      $('#modal-menu,#modal-overlay').fadeIn('slow');
      $('#page-top-btn').fadeOut('fast');
      $('.menu-bar').fadeOut('fast');
      $('html,body').css('overflow','hidden');
    } else {
      $('#modal-menu,#modal-overlay').fadeOut('slow');
      $('html,body').removeAttr('style');
    }
    return false;
  });
});

$(function() {
  $('#modal-menu li a').click(function() {
    $('#modal-menu,#modal-overlay').fadeOut('fast');
    $('#menu-btn').removeClass('active');
    $('html,body').removeAttr('style');
  });
});
