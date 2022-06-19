$(".carousel1,.carousel2,.carousel3").owlCarousel({
    margin: 20,
    loop: ( $('.carousel1,.carousel2,.carousel3').length > 10 ),
    autoplay: false,
    responsive: {
        0:{
            items:1,
            nav: false
        },
        360:{
            items:2,
            nav: false
        },
        768:{
            items:3,
            nav: false
        },
        992:{
            items:4,
            nav: false
        },
        1200:{
            items:5,
            nav: false
        }
    }
});
$(".rec").owlCarousel({
    center: true,
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items:1,
            nav: false
        },
        505:{
            items:2,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        }
    }
});
