let x = $(".about").offset().top
console.log(x)

$(window).scroll(function(){

    let wScroll = $(Window).scrollTop()
    if(wScroll => x)
    {
        $("nav").css("backgroundColor", "red")
    }
})