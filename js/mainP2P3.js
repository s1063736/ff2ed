//tab控制
$(function(){
    
    $(".P2P3tab-title li.active").each(function () {
        var tablink = $(this).find("a").data("tablink");
        $('#'+tablink).show().siblings(".P2P3tab-inner").hide();
    });
    
    $(".P2P3tab-title li").on('click',function () {
        $('#'+$(this).find("a").data("tablink")).show().siblings(".P2P3tab-inner").hide();
        $(this).addClass("active").siblings(".active").removeClass("active");
    });
});

//3-2link01跳轉
  
$("#3-2link01,#3-2link02").on('click',function (e) {
  $('#exchange_details').trigger('click');
  $("html,body").animate({scrollTop: 1750});
});


//回頂層
// 向下滑動200px出現按扭
$('.Top').hide();
$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('.Top').show();
    } else {
        $('.Top').hide();
    }
  });
 
// 點擊後返回頂部
$(".Top").on('click',function (e) {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
    );
  });