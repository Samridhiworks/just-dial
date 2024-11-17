//Toaster code starts here

let toaster = document.getElementById('liveToast');

function opentoaster() {
    toaster.style.display = "block";
}


 
let close2 = document.getElementById('float-close')
  function closing(){
    close2.style.display = "none"
  }

//scroll to top starts here

function scrolltotop(){
    document.documentElement.scrollTop = 0;
  }

//onload popup starts here

// let displaypop = document.getElementById('display');
// let popup = document.querySelector('.popup');
// let banners = document.getElementById('banners')

// function showpopup(){
//     displaypop.style.display = "flex";
//     banners.style.display ="none"
//     document.body.classList.add('body-fixed');
//  setInterval(()=>{
//     popup.classList.add('show')
    
    
//  },10)
 
// }

window.onload= function() {
  setTimeout(showpopup, 10000);
};

function hidepopup(){
    displaypop.style.display = 'none'
   banners.style.display ="flex"
   document.body.classList.remove('body-fixed');
}

//caraousel code starts here

let backward = document.getElementById('backward')
  let forward = document.getElementById('forward')
  let gallery = document.getElementById('gallery')

  function scrollleft(){
    gallery.scrollLeft -= 230
  }

  function scrollright(){
    gallery.scrollLeft += 230
  }
  

//swiper code starts here


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//mobile faqs start here
$(document).ready(function() {
  $("#mb-display").click(function() {
      $("#mb-show").slideToggle(); 
  });
});

$(document).ready(function() {
  $("#mb-display2").click(function() {
      $("#mb-show2").slideToggle(); 
  });
});

$(document).ready(function() {
  $("#mb-display3").click(function() {
      $("#mb-show3").slideToggle(); 
  });
});