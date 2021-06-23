$(function() {


  // windowのサイズ変更された時の処理
  $(window).resize(function() {
    if ($(window).width() >= 700) {
    $('nav').show();
    $('.mask').hide();
  } else {
    $('nav').hide();
    $('.mask').hide();
  }
  })

  // まずはnavスクロールから
  $('nav a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop': position - 80
    }, 300);
    $('#header').removeClass('open');
  });

  //スライダー
  $('.slick').slick({
    autoplay:true,
    autoplaySpeed:5000,
    slidesToShow:2,
    centerMode:true,
    dots:false,
    arrows:false,
    slidesToScroll:1,
    responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      }
    },]
  });


  // ハンバーガ機能
  $('.nav_btn').click(function() {
    // ifの前者は今回いらないけど一応
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
      $('nav').animate({width:'hide'},200);
      $('.mask').hide();
    } else {
      $('#header').addClass('open');
      $('nav').animate({width:'toggle'},200);
      $('.mask').show();
    }
  })

  $('.mask').click(function() {
    $('#header').removeClass('open');
    $('nav').animate({width:'toggle'},200);
    $('.mask').hide();
  })

  // contactの送信処理
  $('form').submit(function() {
    if ($('#name').val() == '') {
      $('.name_err').show();
      return false;
    }  else if ($('#email').val() == '') {
      $('.email_err').show();
      return false;
    }  else if ($('#message').val() == ''){
      $('.message_err').show();
      return false;
    } else {
      alert('送信しました！');
      $('.name_err').hide();
      $('.email_err').hide();
      $('.message_err').hide();
    };
  })
})
