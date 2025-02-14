$(document).ready(function () {
  //Owl
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    navText: ["PREV", "NEXT"],
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  $("#projects-slider").owlCarousel({
    loop: true,
    nav: false,
    items: 2,
    dots: true,
    smartSpeed: 600,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 8,
      },
    },
  });

  $(".reviews-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 900,
    items: 1,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 4000,
  });
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

/*********Social media*********/
let list = document.querySelectorAll(".sci li");
//console.log(list);
let bg = document.querySelector(".sectionSocial");
//console.log(bg);
list.forEach(function (elements) {
  //console.log(elements);
  elements.addEventListener("mouseenter", function (event) {
    let color = event.target.getAttribute("data-color");
    //console.log(color);
    bg.style.backgroundColor = color;
  });
  elements.addEventListener("mouseleave", function (event) {
    bg.style.backgroundColor = "#ffffff";
  });
});
