// $("h1").addClass("big-title margin-50"); //adding class from CSS tidak ada di HTML

// $("h1").text("Bye")//manipulation text
//
// $("button").html("<em>Don't click me</em>");//manipulating html


//console.log($("img").attr("src")); //manipulating attribute

//$("a").attr("href", "https://www.yahoo.com"); // manipulating attribute

//adding event
// $("h1").click(function(){
//   $("h1").css("color", "purple");
// }); //click has change color

// for (var i = 0; i<5; i++){
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple";
//   });
// } //Without JQuery

// $("button").click(function(){
//   $("h1").css("color", "purple");
// });


// $(document).keypress(function(event){
//   $("h1").text(event.key);
// });//merubah text di website dengan menekan keyboard

// $("h1").on("mouseover", function(){
//   $("h1").css("color", "purple");
// })//mengubah color ketika mouse melewati objek

//website animation
// $("h1").on("click", function(){
// $("h1").animate({margin: 20});
// });

$("h1").on("click", function(){
$("h1").slideUp().slideDown().animate({opacity: 0.5});
});
