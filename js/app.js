// sticky menu on scroll 

$(document).ready(function(){
    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".stick").addClass("stickyAdd");
        }else{
            $(".stick").removeClass("stickyAdd");
        }
    });

    // preloader 

    $(window).on('load', function(){
        $('.preloader').addClass('complete')
    })

    // typing

    var typing = new Typed('.typing', {

        strings: [
            'SAJJ',
            'a Developer',
            'a Designer',
            'a Digital Marketer'
          ],
            startDelay: 1000,
            typeSpeed: 100,
            backSpeed: 100,
            smartBackspace: true,
            loop: true,
            loopCount: Infinity,
      });

      
    //   progress

    var waypoint = new Waypoint({
        element: document.getElementById('expId'),
        handler: function() {
            var progress = document.querySelectorAll('.progress-bar');

            progress[0].setAttribute("style", "width: 100%; transition: 1s all");
            progress[1].setAttribute("style", "width: 95%; transition: 1.5s all");
            progress[2].setAttribute("style", "width: 92%; transition: 1.7s all");
            progress[3].setAttribute("style", "width: 90%; transition: 2s all");
            progress[4].setAttribute("style", "width: 95%; transition: 2.3s all");
            progress[5].setAttribute("style", "width: 82%; transition: 2.5s all");
            progress[6].setAttribute("style", "width: 85%; transition: 2.8s all");
        
        },
        offset: '90%'
      });

    //   owl

    $(".owl-carousel").owlCarousel({
        loop:  true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,
    });

    
    var filterizr  = $('.filter-container').filterizr({
        animationDuration: .5,
    })

    
});


    
