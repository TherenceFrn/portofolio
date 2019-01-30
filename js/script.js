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
$("#index .section-1").ready(function(){
  $("#index .section-1").mouseenter(function() {

    $("#index .aside-index-1").css("opacity", "1");
  });
  $("#index .section-1").mouseleave(function() {

    $("#index .aside-index-1").css("opacity", "0");
  });
});

$("#index .section-2").ready(function(){
  $("#index .section-2").mouseenter(function() {

    $("#index .aside-index-2").css("opacity", "1");
  });
  $("#index .section-2").mouseleave(function() {

    $("#index .aside-index-2").css("opacity", "0");
  });
});

$("#index .section-3").ready(function(){
  $("#index .section-3").mouseenter(function() {

    $("#index .aside-index-3").css("opacity", "1");
  });
  $("#index .section-3").mouseleave(function() {

    $("#index .aside-index-3").css("opacity", "0");
  });
});


$("#index .section-4").ready(function(){
  $("#index .section-4").mouseenter(function() {

    $("#index .aside-index-4").css("opacity", "1");
  });
  $("#index .section-4").mouseleave(function() {

    $("#index .aside-index-4").css("opacity", "0");
  });
});



$("#index .section-5").ready(function(){
  $("#index .section-5").mouseenter(function() {

    $("#index .aside-index-5").css("opacity", "1");
  });
  $("#index .section-5").mouseleave(function() {

    $("#index .aside-index-5").css("opacity", "0");
  });
});



$("#index .section-6").ready(function(){
  $("#index .section-6").mouseenter(function() {

    $("#index .aside-index-6").css("opacity", "1");
  });
  $("#index .section-6").mouseleave(function() {

    $("#index .aside-index-6").css("opacity", "0");
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
