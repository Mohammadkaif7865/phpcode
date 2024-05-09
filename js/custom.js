$(function(){
  AOS.init();
  window.addEventListener('load', AOS.refresh);
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 1) {
          $(".header").addClass("sticky");
      } else {
        $(".header").removeClass("sticky");
      }
  });
});
$(function(){
   $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 80) $('.go-top').addClass('active');
        if (scrolled < 80) $('.go-top').removeClass('active');
    });
    $(function () {
        $('.go-top').on('click', function () {
            $("html, body").animate({
                scrollTop: "0"
            }, 500);
        });
    });
});
$(function(){
  $('.btnMenu').click(function(event){
     event.stopPropagation();
    $('.mobileMenu').toggleClass('active');
  });
  $('.btnClose').click(function(){
     $('.mobileMenu').removeClass('active');
  });
  $('.innerPopup').click(function(event){
    event.stopPropagation(); 
  });
  $(document).click(function(){
    $('body').css('overflow', 'auto');
    $('.menuPopup').fadeOut();
    $('.innerPopup').animate({right:'-100%'});
  });
  $('.tabLink').click(function(){
      $('.tabLink').removeClass('active');
      $('.itemTab').hide();
      $('.rightMenuImg img').hide();
      $(this).addClass('active');
      var getData = $(this).attr('data-tab');
      var addData = $('.tabContent').attr('data-content', getData);
      var storeData = $('.tabContent').attr('data-content');
      if (getData == storeData){
        $('#'+getData).show();
      
      }
    });
    $('.headerTab').click(function(){
      $(this).parents('.mobileItemTab').toggleClass('active').siblings('.mobileItemTab').removeClass('active');
    });
});
$(document).ready(function (){
  $('.rightIndustries').slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows:false
        }
      }
    ]
  });
});
$(document).ready(function (){
  $('.testimonialSlider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows:false
        }
      }
    ]
  });
});
$(function(){
  $('.itemFaqs h4').click(function(){
    $(this).parents('.itemFaqs').toggleClass('active').siblings('.itemFaqs').removeClass('active');
  })
});


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
$(function(){
    var a = 0;
    $(window).scroll(function() {
      if($('.counter')[0]) {
          var oTop = $('.counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
              $('.counter-value').each(function() {
                var $this = $(this),
                  countTo = $this.attr('data-count');
                $({
                  countNum: $this.text()
                }).animate({
                    countNum: countTo
                  },
      
                  {
      
                    duration: 1000,
                    easing: 'swing',
                    step: function() {
                      $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                      $this.text(this.countNum);
                      //alert('finished');
                    }
      
                  });
              });
              a = 1;
            }
      }

  });
});
$(document).ready(function (){
  $('.innerSlider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    vertical: true,
    verticalScrolling: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
$(function(){
  var a = 0;
  $(window).scroll(function() {
    if($('.counter')[0]) {
        var oTop = $('.counter').offset().top - window.innerHeight;
          if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function() {
              var $this = $(this),
                countTo = $this.attr('data-count');
              $({
                countNum: $this.text()
              }).animate({
                  countNum: countTo
                },
    
                {
    
                  duration: 1000,
                  easing: 'swing',
                  step: function() {
                    $this.text(Math.floor(this.countNum));
                  },
                  complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                  }
    
                });
            });
            a = 1;
          }
    }

  });
});
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+1
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.sidebarService a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.sidebarService ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
 // var YourDiv = $(".scroll");
 // var YourDiv2 = $(".scroll2");
 //    $(window).scroll(function() {
 //        var scroll = $(window).scrollTop();
 //        // Here You can add your conditions according to your requirments
 //        if (scroll == YourDiv.offset().top ) {
 //            YourDiv.addClass('paddingTop');
 //        } 
 //        else if (scroll == YourDiv2.offset().top ) {
 //            YourDiv2.addClass('paddingTop');
 //        } 
 //        else{
 //          YourDiv.removeClass('paddingTop');
 //        }
 //    });