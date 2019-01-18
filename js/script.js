// $("#imgBody")
//   .mouseover(function() {
//     $('#imgBody').attr("src", "jfb.jpg");
//   });
//
// $("#imgBody")
//   .mouseout(function() {
//     $('#imgBody').attr("src", "trigger.gif");
//   });
//

$(".section-1").ready(function(){

  $(".aside-index-1").css("visibility", "visible");
  $(".section-1").mouseenter(function() {

    $(".aside-index-1").css("visibility", "visible");
  });
  $(".section-1").mouseleave(function() {

    $(".aside-index-1").css("visibility", "hidden");
  });
});

$(".section-3").ready(function(){
  $(".section-3").mouseenter(function() {

    $(".aside-index-3").css("visibility", "visible");
  });
  $(".section-3").mouseleave(function() {

    $(".aside-index-3").css("visibility", "hidden");
  });
});
