const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const acceptCookieContainer = $('#accept-cookie');
const acceptBtn = $('.btn-accept')
const policyBtn = $('.btn-policy')

acceptBtn.addEventListener('click',()=>{
    acceptCookieContainer.classList.add('accepted')
})