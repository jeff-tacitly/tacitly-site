$(document).ready(function() {
    // header section
    $(".menu_toggleBtn,.header_backDrop").click(function() {
        $(".header").toggleClass("active_header");
    });
});
$(window).on('load', function(){
    if(typeof AOS !== 'undefined'){
        AOS.init({
            easing: 'ease',
            duration: 1000,
            once:true
        });
    }
});
