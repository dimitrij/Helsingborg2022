const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const helsingborgMain = $('#helsingborg');
const acceptCookieContainer = $('#accept-cookie')
const logo = $('#logo')
const acceptBtn = $('.btn-accept')
const policyBtn = $('.btn-policy')
const COOKIE_ACCEPTED = "cookie_accepted"
let acceptedCookie = localStorage.getItem(COOKIE_ACCEPTED) || ""


window.onload = function () {
    if (acceptedCookie != '') {
        helsingborgMain.classList.add('accepted')

    } else {
        //Click on logo , show up accept cookie

        logo.onclick = () => {
            acceptCookieContainer.style.transform = 'translateY(0)';
        }

        //Click on Accept button, hide accept cookie
        acceptBtn.addEventListener('click', () => {
            helsingborgMain.classList.add('accepted')
            localStorage.setItem(COOKIE_ACCEPTED, 'accepted')
        })
    }
}



