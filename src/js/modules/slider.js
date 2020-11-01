function slider(){
    // $('.testimonials__slider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     infinite: false
    // });


    $('.testimonials__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/Clients-Feedback/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/Clients-Feedback/right-arrow.png"></button>',
    });
}

export default slider;