

$("h1").css("color","cyan");

console.log($("h1").css("color"));



$("h1").text("Byeee!!!")

$("button").html("<em> Click Me !!!!</em>")

//console.log($("img").attr("src"))


/*for (var i=0;i<5;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
           document.querySelector("h1").style.color="red";
    })
}*/

// $("button").click(function(){
//     $("h1").css("color","purple");
// })

// $(document).keypress(function(event){
//     console.log(event.key)
//     $("h1").text(event.key)
// })

// $("h1").on("mouseover",function(){
//     $("h1").css("color","red")
// })
 $("h1").addClass("big")


// $("button").on("click",function(){
//     $("h1").slideToggle();//we also can use hide,show,fade,slide
// })

// $("button").on("click",function(){
//     $("h1").animate({margin:"10%"});//we also can use hide,show,fade,slide {opacity:0.5},
// })

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});//we also can use hide,show,fade,slide {opacity:0.5},
})