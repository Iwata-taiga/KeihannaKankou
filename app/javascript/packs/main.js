
$(function(){
  $('.nav-text').hover(function() {
    $(".nav-text").removeClass("navBorderLeave")
    $(this).addClass("navBorder")
  })

  $('.nav-text' ).mouseleave(function() {
    $(".nav-text").removeClass("navBorder")
    $(this).addClass("navBorderLeave")
  })

  var blockNum = 0

  $(".menu-btn").click(function(){
    
    blockNum++
    
    if ((blockNum % 2 ) != 0 ){
      $(".header-nav").addClass("mobile-nav")
      var aTag = $(".nav-text").parent()
      var liTag = $(aTag).parent()

      $(liTag).each(function(i, li) {
        $(li).css("animation", `delayNav ${(i * 2) / 3.5 }s forwards`)
      })

      $(".block").each(function(i, block) {
        if ((i % 2) != 0 ){
          $(block).removeClass("opacityOn")
          $(block).addClass("opacity")}
      })

    }else{
      $(".header-nav").removeClass("mobile-nav")
      
      $(".block").each(function(i, block) {
        if ((i % 2) != 0 ){
          $(block).removeClass("opacity")
          $(block).addClass("opacityOn")}
      })
    }
  })
})