$(".owl-carousel").owlCarousel({
    autoplay:true,
    nav:true,
    loop:true,
    items:5,
    
    responsive: {
        0 : {
            items:1,
            dots:true
        },
        485 : {
            items:2,
            dots:true
        },
        728 : {
            items:3,
            dots:false
        },
        960 : {
            items: 4,
            dots:true
        },
        1200 : {
            items : 5,
            dots:true
        },
        1354 : {
            items: 5,
            dots:true
        }
    },
});