$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  // smooth scroll on menu items click
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Hr Manager", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Hr Manager", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// let ltAssignments=document.getElementsByClassName("fa-laptop-file")
// ltAssignments.addEventListener("click",()=>{
//     console.log("sajid");
// })

document.addEventListener("DOMContentLoaded", function () {
    let latestassignlink = document.getElementById("latestassignlink");
    latestassignlink.addEventListener("click", () => {
      window.location.href = "index.html#latestassign";
    });
  
    let jsassignments = document.querySelector("#jsassign");
    jsassignments.addEventListener("click", () => {
      window.location.href = "js assignments.html";
    });
  
    let cssAssign = document.querySelector("#cssAssign");
    cssAssign.addEventListener("click", () => {
      window.location.href = "CSS assignments.html";
    });
  
    let htmlAssign = document.querySelector("#htmlAssign");
    htmlAssign.addEventListener("click", () => {
      window.location.href = "HTML assignments.html";
    });
  });
  