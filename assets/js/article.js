$(window).on('load', function () {
    // tabs
    $('.js-tabs-list li').eq('0').addClass('active');
    $('.tabs .tab').eq('0').addClass('active');

    $('.js-tabs-list li').click(function () {
        num = $(this).index();
        $('.js-tabs-list li').removeClass('active');

        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');
        $('.tabs .tab').eq(num).addClass('active')
    })
    //drop down list
    $('.drop-down-init').click(function (event) {
        event.preventDefault();
        checks = $(this).hasClass('active');
        $('.drop-down').hide(200);
        $('.drop-down-init').removeClass('active');
        if(!checks) {
            $(this).toggleClass('active');
            $(this).siblings('.drop-down').toggle(200);
        }
    });

    $('.drop-down li').click(function (event) {

        $(this).parents('.drop-down').toggle(200);
        $(this).parents('.drop-down').siblings('.drop-down-init').toggleClass('active');
    });


    if (device.mobile() || device.tablet()) {
        $('.events ').css("display", "none");
        $('.content.block-center').addClass('mobile');
    }
});