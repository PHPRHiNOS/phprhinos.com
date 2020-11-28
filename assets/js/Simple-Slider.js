$(function(){

    // Initializing the swiper plugin for the slider.
    // Read more here: http://idangero.us/swiper/api/

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        speed: 500,
        grabCursor : true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 1000
    });
});

$("#logo").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#hero").offset().top
    }, 1000, "easieEaseOutQuart");
});

$("#li-why-php-rhinos").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#our-speciality").offset().top - 50
    }, 1000, "easieEaseOutQuart");
});

$("#li-features").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#features").offset().top - 150
    }, 1000, "easieEaseOutQuart");
});

$("#li-customers").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#customers").offset().top - 150
    }, 1000, "easieEaseOutQuart");
});
