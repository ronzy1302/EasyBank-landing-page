const menu = document.querySelector('.hamburger')
const menuItems = document.querySelector('.nav-items')

menu.addEventListener('click', () => {
    menuItems.classList.toggle('active')

    menuItems.classList.contains('active') ? menu.src = '/images/icon-close.svg' : menu.src = '/images/icon-hamburger.svg'

})

window.addEventListener('click', (e) => {
    if (e.target.closest('main') || e.target.closest('footer') || e.target.closest('.link')) {
        setTimeout(() => {
            menuItems.classList.remove('active')
            menu.src = '/images/icon-hamburger.svg'
        })

    }

})