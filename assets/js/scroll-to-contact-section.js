$(".navigation-clean.navbar-light .navbar-nav .nav-link.contact-us-link").click(function() {  
  $('html, body').animate({
        scrollTop: $("#contact-us").offset().top
    }, 1000);
});