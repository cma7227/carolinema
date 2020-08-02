$(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });
    //isotope
    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

})

$(document).ready(function() {
    
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var type = new Typed(".typed", {
        strings: ["Administrative Assistant", "Web Designer", "Digital Illustrator"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

 
    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition - 50}, "slow")
    });
    
    $("[data-fancybox]").fancybox();


    // make filter for isotope
    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        //stop doing anything else!
        return false;
    });

    
});

