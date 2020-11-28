
// var SlideUp = document.querySelector(".slideUp");
// var imgEl = document.querySelector("#scroll-img");
// var slideArea = document.querySelector("#slide-area");

// for(var i=0; i<slideArea.length; i++){
//   var oneSlide = imgEl[i];
//   oneSlide.innerHTML = oneSlide.offsetTop;
// }

// function onScroll(){

//   for(var i = 0; i < oneSlide.length; i++){
//     var oneSlide = imgEl[i];
//     if(oneSlide.offsetTop < document.documentElement.scrollTop){
//       imgEl.classList.add("slideUp");
//       // window.onscroll = SlideUp();
//     } else {
//       imgEl.classList.remove("slideUp");
//     }
//   }
// }

// var SlideUp = document.querySelector(".slideUp");
// var imgEl = document.querySelector("#scroll-img");
// var slideArea = document.querySelector("#slide-area");

// function ScrollUp(e){
//   e.preventDefault();

//   var scrolled = window.scrollY;
//   var scrollEl= slideArea.offsetTop;

//   if(scrolled === scrollEl) {
//     imgEl.classList.add("slideUp");
//   }
// }

// window.addEventListener("scroll", ScrollUp);



console.log(window.pageYOffset);

window.onscroll = function() {ScrollUp()};
function ScrollUp() {
  if ( document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
    document.getElementById("scroll-img").className = "slideUp";
  }
  if ( document.body.scrollTop > 6900 || document.documentElement.scrollTop > 6900) {
    document.getElementById("app-login").className = "slideUp";
  }
}

