const menu = document.querySelector('.hamburger')
const menuItems = document.querySelector('.list-items')

menu.addEventListener('click', () => {
    menuItems.classList.toggle('active')
})

window.addEventListener('click', (e) => {
    if (e.target.closest('main') || e.target.closest('footer') || e.target.closest('.link')) {
        menuItems.classList.remove('active')
    }

})