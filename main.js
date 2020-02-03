$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $(".main");
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top - 46) {
                $("#header").css('background-color', 'rgb(0,0,0)');
                $("#header").css('top', '0');
            } else {
                $('#header').css('background-color', 'transparent');
            }
        });
    }
});