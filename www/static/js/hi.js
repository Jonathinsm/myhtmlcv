//PARALLAX

$(window).scroll(function(){
    parallax();
  });
  
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top',-(scrolled*0.1)+'px');
    $('header .content').css('top',50+(scrolled*0.1)+'%');
    $('header .content').css('opacity',1-(scrolled*0.01)/10);
    $('header .content').css('opacity',1-(scrolled*0.01)/10);
  };
  
  $('.IA_window .full_scr').on('click',function(){
    $(this).parents().toggleClass('f_scr');
    
    $("html, body").animate({ scrollTop: $(this).parents().offset().top }, 500);
  });