
$(function(){
  $('.nav-text').hover(function() {
    $(".nav-text").removeClass("navBorderLeave")
    $(this).addClass("navBorder")

    // $(".nav-sub-text").removeClass("offText")
    // $(".nav-sub-text").removeClass("onText")
    // var a = $(this).parent()
    // var sub = a.find(".nav-sub-text")
    // sub.addClass("onText")
  })

  $('.nav-text' ).mouseleave(function() {
    $(".nav-text").removeClass("navBorder")
    $(this).addClass("navBorderLeave")

    // $(".nav-sub-text").removeClass("onText")
    // var a = $(this).parent()
    // var sub = a.find(".nav-sub-text")
    // sub.addClass("offText")
  })
})