var myIndex = 0;
showSlides()

function showSlides() {
  var i;
  var x = document.getElementsByClassName("slide-show-element");
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = 0;  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.opacity = 1;  
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}