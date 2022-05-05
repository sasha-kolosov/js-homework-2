const menuLinkHelp = document.querySelectorAll('.menu__item > a.menu__link-help')

const menuLink = document.getElementsByClassName('menu__link')

const menuSub = document.querySelectorAll('.menu_sub')  

for(let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', event => {
        event.preventDefault()
    })
}

for(let i = 0; i < menuLinkHelp.length; i++) {
    menuLinkHelp[i].addEventListener('click', event => {
        event.preventDefault()
        menuSub[i].classList.toggle('menu_active')
    })
}