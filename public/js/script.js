$(document).ready(function () {
    $('.reviews__slider').slick({
        slidesToShow: 3,
        infinite: false,
        centerMode: true,
        centerPadding: '0px',
        slickGoTo: 1,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 541,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.reviews__slider').slick('slickGoTo', 1);

    $('.qest__open').click(function () {
        let id = $(this).attr('id');
        $('#content' + id).toggleClass('content-active');
    });

    $('.mobile-menu__burger').click(function () {
        $('.mobile-menu__wrapper').toggleClass('active-menu');
        $('.mobile-menu__burger').toggleClass('mobile-menu__burger-active');
        $('body').toggleClass('body-scroll');
    });
});
