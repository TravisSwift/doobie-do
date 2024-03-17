 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}




function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  

  // Update the URL with the current slide number
  history.pushState(null, '', '?slide=' + slideIndex);
}

document.addEventListener('DOMContentLoaded', (event) => {
  let urlParams = new URLSearchParams(window.location.search);
  let slide = parseInt(urlParams.get('slide'));
  if (slide) {
    showSlides(slideIndex = slide);
  }

  function updateShareLinks(slideIndex) {
    const baseUrl = "https://superdoobie.com/comics.html?slide=";
    const shareUrl = baseUrl + slideIndex;
    
    document.getElementById("twitter-share").href = `https://twitter.com/intent/tweet?text=Check%20out%20this%20comic!&url=${encodeURIComponent(shareUrl)}`;
    document.getElementById("facebook-share").href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    document.getElementById("email-share").href = `mailto:thesuperdoobie@gmail.com?subject=Check%20out%20this%20comic!&body=Check%20out%20this%20comic%20at%20${encodeURIComponent(shareUrl)}`;
  }
  

// End Comic Strip Slide Show

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() { 
  document.getElementById("mySidepanel").style.width = "0";
}

fetch('Header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
})


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

}); 