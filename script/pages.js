

function switchcontent(event){
    var currentContent = document.getElementsByClassName("activePage");
    currentContent[0].className = currentContent[0].className.replace("activePage", "");
    var name = event.target.getAttribute("name");
    var contents = document.getElementsByClassName("sector");
    
   for (var i = 0; i < contents.length; i++) {
        var nameContent = contents[i].getAttribute("name");
        
        if(nameContent == name){
            contents[i].className +=" activePage";
            return true;
        }
    
    }
    return false;
}


function hover(element){
    element.setAttribute('src',"asset/paypalover.jpg");
}
function unhover(element){
    element.setAttribute('src',"asset/paypal.jpg");
}


/** Photo gallery script */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("photos");
  var dots = document.getElementsByClassName("indicatorPhotos");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activephoto", " transparentphoto");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activephoto";
}

/*
AUTO SHOW
var myVar = setInterval(scrollphoto, 15000);

function scrollphoto() {
  plusSlides(1);
}*/