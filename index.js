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
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
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