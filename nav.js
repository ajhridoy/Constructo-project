// $(window).scroll(function(){
//     if($(this).scrollTop() > 100){
//         $('#navbar2').addClass('sticky')
//     } else{
//         $('#navbar2').removeClass('sticky')
//     }
// });

// var  mn = $("#navbar2");
//     mns = "main-nav-scrolled";
//     hdr = $("#navbar1").height();

// $(window).scroll(function() {
//   if( $(this).scrollTop() > hdr ) {
//     mn.addClass(mns);
//   } else {
//     mn.removeClass(mns);
//   }
// });

var activator = $("#activator");
var navBg = $("#fade-bg");

activator.on("click", function () {
  $(this).toggleClass("active");
  $("#activate-menu").toggleClass("visible");
  navBg.fadeToggle();
});

navBg.on("click", function () {
  $("#activate-menu").removeClass("visible");
  $(activator).removeClass("active");
  $(this).hide();
});