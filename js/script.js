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


$("#portofolio .section-2 .article-1").ready(function(){

  $("#portofolio .section-2 .article-1").mouseenter(function() {

    $("#portofolio .section-2 .article-1 .p").css("opacity", "1");
  });
  $("#portofolio .section-2 .article-1").mouseleave(function() {

    $("#portofolio .section-2 .article-1 .p").css("opacity", "0");
  });

  $("#portofolio .section-2 .article-1").click(function() {

    $( "body" ).append( '<div class="bg" id="bg"><a class="close" id="close">X</a><div class="grosse-previ"><img src="https://i.imgur.com/qjONxb3.png"></div></div>');
  });


});



    var box = $("#bg");
    var btn = $("#bg");

      btn.on('click', function(){

      box.css('visibility', 'hidden');
    });




$("#portofolio .section-2 .article-2").ready(function(){
  $("#portofolio .section-2 .article-2").mouseenter(function() {

    $("#portofolio .section-2 .article-2 .p").css("opacity", "1");
  });
  $("#portofolio .section-2 .article-2").mouseleave(function() {

    $("#portofolio .section-2 .article-2 .p").css("opacity", "0");
  });
});

$("#portofolio .section-2 .article-3").ready(function(){
  $("#portofolio .section-2 .article-3").mouseenter(function() {

    $("#portofolio .section-2 .article-3 .p").css("opacity", "1");
  });
  $("#portofolio .section-2 .article-3").mouseleave(function() {

    $("#portofolio .section-2 .article-3 .p").css("opacity", "0");
  });
});

$("#portofolio .section-2 .article-4").ready(function(){
  $("#portofolio .section-2 .article-4").mouseenter(function() {

    $("#portofolio .section-2 .article-4 .p").css("opacity", "1");
  });
  $("#portofolio .section-2 .article-4").mouseleave(function() {

    $("#portofolio .section-2 .article-4 .p").css("opacity", "0");
  });
});

$("#portofolio .section-2 .article-5").ready(function(){
  $("#portofolio .section-2 .article-5").mouseenter(function() {

    $("#portofolio .section-2 .article-5 .p").css("opacity", "1");
  });
  $("#portofolio .section-2 .article-5").mouseleave(function() {

    $("#portofolio .section-2 .article-5 .p").css("opacity", "0");
  });
});


$("#portofolio .section-2 .article-6").ready(function(){
  $("#portofolio .section-2 .article-6").mouseenter(function() {

    $("#portofolio .section-2 .article-6 .p").css("opacity", "1");
  });
  $("#portofolio .section-2 .article-6").mouseleave(function() {

    $("#portofolio .section-2 .article-6 .p").css("opacity", "0");
  });
});
