const modalMain = document.getElementById('modal_main')
const modalClose = document.getElementsByClassName('modal__close')
const modal = document.getElementsByClassName('modal')
const showSuccess = document.getElementsByClassName('show-success')[0]
const modalSuccess = document.getElementById('modal_success')

modalMain.classList.add('modal_active')

modalClose[0].addEventListener('click', () => {
    modal[0].classList.remove('modal_active')
})

modalClose[2].addEventListener('click', () => {
    modal[1].classList.remove('modal_active')
})

showSuccess.addEventListener('click', () => {
    modalMain.classList.remove('modal_active')
    modalSuccess.classList.add('modal_active')
})