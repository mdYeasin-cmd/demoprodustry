$(function(){

    // Main Menu Collapse JavaScript Start
    $('#nav_menu_toggler').on('click', function(){
        $('.logo').toggleClass('active');
        $('.nav_item_contianer').toggleClass('active');
    })
    // //Main Menu Collapse JavaScript End

    // Slick Activation JavaScript Start
    $('.banner_item_wrapper').slick({
        prevArrow: $('#prev_arrow'),
        nextArrow: $('#next_arrow')
    });
    $('.service_item_container').slick({
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Portfolio Section JavaScript Start
    $('.portfolio_item_wrapper').slick({
        slidesToShow: 4,
        arrows: false
    });
    // //Portfolio Section JavaScript End
    // //Slick Activation JavaScript End

    // CounterUp Activation JavaScript Start
    $('.countUp').counterUp();
    // //CounterUp Activation JavaScript End
})