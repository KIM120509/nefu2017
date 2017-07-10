$(function(){
    var $FirstListUl=$("#first_list .first_line ul,#first_list .second_line ul");
    var $ListSignSpan=$("#list_sign span");
    $ListSignSpan.on("tap",function(){
        $(this).addClass("select").siblings().removeClass("select");
        $FirstListUl.css({
            left:-$(this).index()*$FirstListUl.width()/2
        });
    });
    $FirstListUl.on("swipeleft", function(){
        $ListSignSpan.eq(1).addClass("select").siblings().removeClass("select");
        $FirstListUl.css({
            left: -$FirstListUl.width() / 2
        });
    }).on("swiperight", function(){
        $ListSignSpan.eq(0).addClass("select").siblings().removeClass("select");
        $FirstListUl.css({
            left: 0
        });
    });
});