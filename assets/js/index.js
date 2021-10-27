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




