let theBurgerSpan = document.querySelector(".burger-icon");
let theNavBar = document.querySelector('nav');
let thecontainer = document.querySelectorAll(".cont-ainer");
let allSection = document.querySelectorAll(".section")
let theImages = document.querySelectorAll(".image-background");
console.log(theImages)

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

$(theBurgerSpan).click(function () { 
   
    $(".burger-icon span").toggleClass("active");
    $(theNavBar).toggleClass("hide");
    
});


// animation function

function animRotate() {
     
    for (let e = 0; e < thecontainer.length; e++) {
    
            $(window).scroll(
                function () {
                    let v = window.scrollY;
                  if(  $(thecontainer).eq(e).offset().top - $(thecontainer).eq(e).height() * 0.8 <= $(window).scrollTop() ){
                    $(thecontainer).eq(e).removeClass("rotate")
                  }  
                  if(  $(thecontainer).eq(e).offset().top + $(thecontainer).eq(e).height() <= $(window).scrollTop() ){
                    $(thecontainer).eq(e).addClass("rotate")
                  }  
                }
            )
        
        
    }
    window.onload = function () {
            thecontainer[0].classList.remove("rotate") 
        }
    
    }

animRotate()