const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const helsingborgMain = $('#helsingborg');
const acceptCookieContainer = $('#accept-cookie')
const frontPage = $('#front-page')
const mainPage = $('#main')
const logo = $('#logo')
const acceptBtn = $('.btn-accept')
const policyBtn = $('.btn-policy')
const COOKIE_ACCEPTED = "cookie_accepted"
let acceptedCookie = localStorage.getItem(COOKIE_ACCEPTED) || ""



//Click on logo , show up accept cookie

window.onload = () => {
    if (acceptedCookie != '') {
        helsingborgMain.classList.add('accepted')

    } else {
        acceptCookieContainer.style.transform = 'translateY(0)';
        acceptBtn.addEventListener('click', () => {
            helsingborgMain.classList.add('accepted')
            localStorage.setItem(COOKIE_ACCEPTED, 'accepted')
        })
    }

}

logo.addEventListener('click', () => {
    frontPage.style.display = 'none'
    mainPage.style.display = 'block'
})




//menubar
document.querySelector(".menubar").addEventListener("click", function () {
    document.querySelector(".menubar").classList.toggle('open')
})
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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
