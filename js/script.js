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
  $(".section-1").mouseenter(function() {

    $(".aside-index-1").css("opacity", "1");
  });
  $(".section-1").mouseleave(function() {

    $(".aside-index-1").css("opacity", "0");
  });
});

$(".section-2").ready(function(){
  $(".section-2").mouseenter(function() {

    $(".aside-index-2").css("opacity", "1");
  });
  $(".section-2").mouseleave(function() {

    $(".aside-index-2").css("opacity", "0");
  });
});

$(".section-3").ready(function(){
  $(".section-3").mouseenter(function() {

    $(".aside-index-3").css("opacity", "1");
  });
  $(".section-3").mouseleave(function() {

    $(".aside-index-3").css("opacity", "0");
  });
});


$(".section-4").ready(function(){
  $(".section-4").mouseenter(function() {

    $(".aside-index-4").css("opacity", "1");
  });
  $(".section-4").mouseleave(function() {

    $(".aside-index-4").css("opacity", "0");
  });
});



$(".section-5").ready(function(){
  $(".section-5").mouseenter(function() {

    $(".aside-index-5").css("opacity", "1");
  });
  $(".section-5").mouseleave(function() {

    $(".aside-index-5").css("opacity", "0");
  });
});



$(".section-6").ready(function(){
  $(".section-6").mouseenter(function() {

    $(".aside-index-6").css("opacity", "1");
  });
  $(".section-6").mouseleave(function() {

    $(".aside-index-6").css("opacity", "0");
  });
});

$(".section-1").ready(function(){
    $('.section-1').click(function(){
      window.location = 'profil.html';
    });
});

$(".acceuil-header").ready(function(){
    $('.acceuil-header').click(function(){
      window.location = 'index.html';
    });
});
$(".contact-header").ready(function(){
    $('.contact-header').click(function(){
      window.location = 'contact.html';
    });
});
