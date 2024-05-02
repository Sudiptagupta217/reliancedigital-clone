$(document).ready(function () {
    var leftGap = 50;
    var rightGap = 50;

    $('.dropdown-content').each(function () {
        var offsetLeft = $(this).parent('.dropdown').offset().left - leftGap;
        var offsetRight = $(window).width() - ($(this).parent('.dropdown').offset().left + $(this).parent('.dropdown').outerWidth()) - rightGap;

        $(this).css({
            'left': -offsetLeft,
            'right': -offsetRight
        });
    });
});


let slideIndex = 0;
let slideIndex1 = 0;
showSlides();
showSlides1();

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500);
}

function showSlides1(){
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    let dots = document.querySelectorAll(".slideshow-container:nth-child(2) .dot-container .dot");
    if (slideIndex1 > slides.length) {slideIndex1 = 1}
    if (slideIndex1 < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1-1].style.display = "block";  
    dots[slideIndex1-1].className += " active";
    setTimeout(showSlides1, 3500);
}

function redirectToLoginPage() {
  window.location.href = 'login.html';
}