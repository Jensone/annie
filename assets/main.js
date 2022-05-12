let menuBurger = document.querySelector(".menu_burger")
let sideMenu = document.querySelector(".side_menu")
// let openMenu = document.querySelector(".open_menu")
// let closeMenu = document.querySelector(".close_menu")

menuBurger.addEventListener("click", e => {
    sideMenu.classList.toggle("active")
    // openMenu.classList.toggle("active")
    // closeMenu.classList.toggle("active")
})








// Je stock l'icone pour lancer une surveillance au survol
let login = document.querySelector(".login")

// Je stock logo pour le faire disparaitre au survol de login
let logo = document.querySelector(".logo")

login.addEventListener("mouseover", e => {
    console.log("Youpi ça marche")
    logo.style.backgroundColor = 'gray'
})
