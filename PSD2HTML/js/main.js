$(document).ready(function(){ 
 
//Init wow lib  for features animation
    new WOW().init();
    
 
 window.onload = function() { 
  //Hero1 section animation
        //When the content is reashed   
        $('.js-wp-iphone').waypoint(function (direction) {
             //Animate
            $('.js-wp-iphone').addClass('animated slideInUp');             
        }, {
            offset: '100%'
        });

        //Callback when iphone slideInUp is finished
        $(".js-wp-iphone").bind('oanimationend animationend webkitAnimationEnd', function() { 
            $(".iphone-btn").delay(200).animate( {top: "+=3"}, 250, function() {
                // Animation complete.
                $('.iphone-screen').delay(100).addClass('screen-on');            
            });

            $(".iphone-btn").delay(300).animate( {top: "+=-3"}, 250);
        });
  };
    
});
