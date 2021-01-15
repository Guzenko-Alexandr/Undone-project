$(document).ready(function () {
    $('.triggers-tabs__item').click(function (e) {
        e.preventDefault();

        $('.triggers-tabs__item').removeClass('triggers-tabs__item--active');
        $('.content-tabs__item').removeClass('content-tabs__item--active');

        $(this).addClass('triggers-tabs__item--active');
        $('#' + $(this).attr('data-id')).addClass('content-tabs__item--active');
        // console.log($(this).attr('data-id'));
    });

    $('.triggers-tabs__item:first').click();

    $(".picture__img2").mouseenter(function (e) {
        $(".picture__img1").addClass('no-active');

    });

    $(".picture__img2").mouseleave(function (e) {
        $(".picture__img1").removeClass('no-active');

    });


    // $(".picture__link2").mouseenter(function (e) {
    //     $(".picture__img").mouseenter();
    // });

});

