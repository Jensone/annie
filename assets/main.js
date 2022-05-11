let menuBurger = document.querySelector(".menu_burger")
let sideMenu = document.querySelector(".side_menu")
let openMenu = document.querySelector(".open_menu")
let closeMenu = document.querySelector(".close_menu")

menuBurger.addEventListener("click", e => {
    sideMenu.classList.toggle("active")
    openMenu.classList.toggle("active")
    closeMenu.classList.toggle("active")
})
