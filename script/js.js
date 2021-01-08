$(document).ready(function () {
    $('.triggers-tabs__item').click(function (e) {
        e.preventDefault();

        $('.triggers-tabs__item').removeClass('triggers-tabs__item--active');
        $('.content-tabs__item').removeClass('content-tabs__item--active');

        $(this).addClass('triggers-tabs__item--active');
        $($(this).attr('href')).addClass('content-tabs__item--active');


    });

    $('.triggers-tabs__item:first').click();

    // $(".flex-a").mouseenter(function (e) {
    //     $(".flex-a").removeClass("flex-a1");
    // })

    // $(".flex-a1").handlerOut("")

    $(".picture__link2").mouseenter(function (e) {
        $(".picture__link1").addClass('no-active');
    });

    $(".picture__link2").mouseleave(function (e) {
        $(".picture__link1").removeClass('no-active');
    });
    // $(".flex-a1").mouseenter(function (e) {
    //     $(".flex-a").addClass('flex-a1');
    // }

});

