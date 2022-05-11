let menuBurger = document.querySelector(".menu_burger")
let sideMenu = document.querySelector(".side_menu")

menuBurger.addEventListener("click", e => {
    sideMenu.classList.toggle("active")
})
