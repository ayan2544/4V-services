$(document).ready(function() {

   $(this).scrollTop(0);

 // ********************** datahub scrollspy tab

        $('.data-hub-wrapper').scrollSpy({
          target: $('.data-hub-menu a'),
          fixed:true,
        }).scroll();

      //   $('.content-wrapper').scrollSpy({
      //   target: $('.menu a'),
      //   fixed:true,
      // }).scroll();

 // ********************** getting outerheight of hedaer-banner-wrapper element ********************

  const headBanElHeight = Math.floor($('.home-head-ban-wrapper').outerHeight());
  // console.log(headBanElHeight);

    $(window).scroll(function() {
            stickyHeader();

            console.log(headBanElHeight)
            const scrollPos = Math.floor($(this).scrollTop()+1)
            if(scrollPos >= headBanElHeight){
        console.log('yes');
        $('body.home-body').css('overflow' , 'visible');
    }

        });
        function stickyHeader() {
          const scrollPos = Math.floor($(this).scrollTop()+1)

         if (scrollPos >= headBanElHeight){
                 $('body').addClass("sticky"); 
         } else { 
             $('body').removeClass("sticky"); 
         } 
    }
   // **********************  menu ********************

    $('#menu2').slicknav();

    // **********************  scroll to btm ***********

    $('.scroll-to-bottom').click(function(e) {

        e.preventDefault();
        console.log('hery');
        $('body.home-body').css('overflow' , 'visible');
        $('html,body').animate({scrollTop: headBanElHeight},500);
    })

    // **********************  msnvsn tab *************

      $('.tabs-nav a').click(function() {

      // Check for active
      $('.tabs-nav li').removeClass('active');
      $(this).parent().addClass('active');

      // Display active tab
      let currentTab = $(this).attr('href');
      $('.tabs-content>div').hide(300);
      $(currentTab).show(300);

      return false;
    });


      // **********************  desktop side menu *************
       $(".menu").click(function(){

          $(this).toggleClass('menuactive');

          if($(".sideMenuHolder").hasClass('active')){
            $(".sideMenuHolder").removeClass('active');
            $(".sideMenuHolder").addClass('deactive');
          }
          else{
             $(".sideMenuHolder").addClass('active');
            $(".sideMenuHolder").removeClass('deactive');
          }
       });


       // **********************  submenu ****************
        $(".hashchild a").click(function(){
          $(this).parents(".menulist").addClass('menuactive');
          $(this).parents(".hashchild").addClass('subactive');
        }); 
        $(".menuback").click(function(){
          $(this).parents(".menulist").removeClass('menuactive');
          $(this).parents(".hashchild").removeClass('subactive');
        }); 



        // **********************  Side Search ******************

        $(".search").click(function(){ 
          if($(".searchBoxHolder").hasClass('deactive')){
            $(".searchBoxHolder").removeClass('deactive'); 
            $(".searchBoxHolder").addClass('active'); 
          }
          else{
            $(".searchBoxHolder").addClass('active'); 
          }
       })

        $(".searchCross").click(function(){ 
          if($(".searchBoxHolder").hasClass('active')){
            $(this).parents(".searchBoxHolder").removeClass('active');
            $(this).parents(".searchBoxHolder").addClass('deactive');
          }
          else{ 
           
           $(this).parents(".searchBoxHolder").addClass('deactive');
          }
       })

 // **********************Banner slider
 // ********************** banner content slider **********************

    $('.ban-left-slider').slick({
          dots: true,
          infinite: false,
          fade: true,
          cssEase: 'linear',
          autoplay: true,
          autoplaySpeed: 8000,
          speed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.ban-image-slider',
          responsive: [
            {
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
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });

// ********************** banner image slider *********************

        $('.ban-image-slider').slick({
          dots: true,
          fade: true,
          cssEase: 'linear',
          infinite: false,
          autoplay: true,
          autoplaySpeed: 8000,
          speed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.ban-left-slider',
          responsive: [
            {
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
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });

// ********************** banner image slider **********************

        $('.ban-slider-scrollbar').slick({
          dots: false,
          infinite: false,
          autoplay: true,
          autoplaySpeed: 8000,
          speed: 100,
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: $('.ban-image-slider, .ban-left-slider'),
          responsive: [
            {
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
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });


// ********************* case studies slider ************************

        $('.case-study-slider').slick({
          dots: false,
          infinite: false,
          autoplay: false,
          autoplaySpeed: 4000,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="" /></button>',
          nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="" /></button>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
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
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });

// ********************** filter ************************

        $(document).ready(function(){
          $(".filter .list").click(function(){
            const dataValue = $(this).attr("data-filter")
            if(dataValue == "all-items"){
              $(".item").show()
            }else{
              $(".item").not("." + dataValue).hide()
              $(".item").filter("." + dataValue).show()
            }
          }) 
        })
        $(".filter .list").click(function(){
          $(this).addClass("active").siblings().removeClass("active")
        })


        // number count for stats, using jQuery animate

        $('.counting').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
          {
            duration: 3000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
          });   
        });

// ********************** Event Slider *********************

        $('.events_slider').slick({
          dots: false,
          infinite: false,
          fade: true,
          cssEase: 'linear',
          autoplay: false,
          autoplaySpeed: 6000,
          speed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-up.svg" alt="" /></button>',
          nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-down.svg" alt="" /></button>',
          responsive: [
            {
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
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });


 // ********************** Other industries slider *****************

        $('.indus-slider').owlCarousel({
            loop:true,
            margin:10,
            nav: false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:false
                }
            }
        })

// ********************** line clamp *********************

        $('.readmore-fire').on('click', function(){
            $('#'+$(this).attr('data-target')).addClass('expanded');
            if($(this).hasClass('readmore')){
              $('.readmore-fire[data-target="'+$(this).attr('id')+'"]').not(this).hide();
            }else{
              $(this).hide();
            }
          });

// ********************** Testimonial Slider *********************

        $('.test-slider').slick({
          dots: false,
          infinite: false,
          fade: true,
          cssEase: 'linear',
          autoplay: false,
          autoplaySpeed: 4000,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="" /></button>',
          nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="" /></button>',
          responsive: [
            {
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
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });

 // ********************** Countdown *************************
      (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;

        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "09/30/",
            birthday = dayMonth + yyyy;
        
        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
          birthday = dayMonth + nextYear;
        }
        //end
        
        const countDown = new Date(birthday).getTime(),
            x = setInterval(function() {    

              const now = new Date().getTime(),
                    distance = countDown - now;

              document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

              //do something later when date is reached
              if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
              }
              //seconds
            }, 0)
        }());
      // End countdown

      // ********************** filter *********************      

        $(document).ready(function(){
          $(".filter .list").click(function(){
            const dataValue = $(this).attr("data-filter")
            if(dataValue == "all-items"){
              $(".item").show()
            }else{
              $(".item").not("." + dataValue).hide()
              $(".item").filter("." + dataValue).show()
            }
          }) 
        })
        $(".filter .list").click(function(){
          $(this).addClass("active").siblings().removeClass("active")
        })



        // number count for stats, using jQuery animate

        $('.counting').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {

            duration: 3000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });  

      




// end jQuery/JS
});