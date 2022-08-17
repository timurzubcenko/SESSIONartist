const search = document.querySelector('.input_search')
const searchClick = document.querySelector('.icon_input')
const closeBtn = document.querySelector('.bi-x-lg')
const searchBtn = document.querySelector('.bi-search')

const logo = document.querySelector('.logo')
const headerBurger = document.querySelector('.header_burger')

searchClick.addEventListener('click', function () {
    search.classList.toggle('active')
    searchClick.classList.toggle('absolute')

    logo.classList.toggle('hide')
    headerBurger.classList.toggle('hide')

    closeBtn.classList.toggle('visible')
    searchBtn.classList.toggle('hide')
})


const btnPopup = document.querySelector('#btn_popup')
const mainPopup = document.querySelector('.main_popup')

btnPopup.addEventListener('click', function () {
    mainPopup.classList.toggle('active')
})

const closePopup = document.querySelector('.close')

function clickClosePopup() {
    mainPopup.classList.remove('active')
}

const btnPopupRegister = document.querySelector('#btn_popup_register')
const mainPopup2 = document.querySelector('.main_popup_2')

function clickCloseRegister() {
    mainPopup2.classList.toggle('active')

    headerMenu.classList.remove('active');
    headerBurger.classList.remove('active');
    body.classList.remove('lock');
}

function clickClosePopup2() {
    mainPopup2.classList.remove('active')
}

// const closeMenuBurger = document.querySelector('.item')

function clickClose() {
    headerMenu.classList.remove('active');
    headerBurger.classList.remove('active');
    body.classList.remove('lock');
}

// closeMenuBurger.addEventListener('click', function () {
//     headerMenu.classList.toggle('close');
// })

const headerMenu = document.querySelector('.header_menu');
const body = document.querySelector('body')

function clickBurger() {
    headerMenu.classList.toggle('active');
    headerBurger.classList.toggle('active');
    body.classList.toggle('lock');
}
