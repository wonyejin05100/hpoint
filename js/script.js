// btn_top

$(function () {
    // 로고와 하단화살표 클릭시 최상단으로 이동
    $(".logo, .btn_top").on("click", function () {
        $("html, body").stop().animate({
            scrollTop: 0 // 0의 위치
        }, 400) // 0.4초동안
    });
    // 하단 버튼이 스크롤 500픽셀 도달시 나타남
    $(window).scroll(function () {
        if($(this).scrollTop() > 500) {
            $(".btn_top").fadeIn();
        } else{
            $(".btn_top").fadeOut();
        }
    });
});