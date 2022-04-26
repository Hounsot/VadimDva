$(document).ready(function(){
  var imageArray = [`<div class="poster"><img src="./images/lol.gif" alt=""></div>`, `<div class="poster"><img src="./images/lol.gif" alt=""></div>`, `<div class="poster"><img src="./images/lol.gif" alt=""></div>`,`<div class="poster"><img src="./images/lol.gif" alt=""></div>`,`<div class="poster"><img src="./images/lol.gif" alt=""></div>`,`<div class="poster"><img src="./images/lol.gif" alt=""></div>`,`<div class="poster"><img src="./images/lol.gif" alt=""></div>`,`<div class="poster"><img src="./images/lol.gif" alt=""></div>`,`<div class="poster"><img src="./images/lol.gif" alt=""></div>`,`<div class="poster"><img src="./images/lol.gif" alt=""></div>`];
  var positionArray = [`{"left": "-900px", "bottom": "-900px"}`, `{"left": "0", "bottom": "0"}`, `{"left": "900px", "bottom": "900px"}`];
  var randomImageNumber = Math.floor(Math.random() * 10);
  var randomImage = imageArray[randomImageNumber];
  console.log(randomImageNumber);
  var randomPositionDefinitor = Math.floor(Math.random() * (1 - 4) + 4) - 1;
  var randomPosition = positionArray[randomPositionDefinitor];
  console.log(randomPositionDefinitor);
  console.log(randomPosition);
  var ViewportWidth = $(document).width();
  var ViewportHeight = $(document).height();
  var timer = setInterval(function(){
  var randomPositionVertical = Math.floor(Math.random() * -500);
  var randomPositionHorizontal = Math.floor(Math.random() * 4000);
  $(".aue").append(`${randomImage}`);
  // $(".poster").css({'left': `${randomPositionVertical}px`, 'bottom': `${randomPositionHorizontal}`});
  $(".poster").css(positionArray[randomPositionDefinitor]);
  console.log(positionArray[randomPositionDefinitor]);
  // $(".poster").css(randomPosition);
  // $(".poster").css(`${randomPosition}`);
  $(".poster").animate({left: `${ViewportWidth}px`, bottom: `${ViewportHeight}px`}, 9000, "linear", function() {
    if ($(".poster").offset().left === ViewportWidth || $(".poster").offset().top === -583) {
      console.log("privet");
      console.log(ViewportHeight);
      console.log($(".poster").offset().bottom);
      console.log($(".poster").offset().top);
      this.remove();
  }});
}, 2000);
});
