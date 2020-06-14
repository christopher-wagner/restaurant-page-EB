

import Home from './modules/home'
import Navbar from './modules/navbar.js'
import Menu from './modules/menu.js'
import Contact from './modules/contact.js'

const clearContent = () => {
    let content = document.getElementById("homeContainer")
    content.querySelectorAll("*").forEach(n => n.remove())
}


const displayHome = () => {
    clearContent()
    Home()
    const menuBtn = document.getElementById("menu1")
    menuBtn.addEventListener("click", displayMenu)
}

const displayMenu = () => {
    clearContent()
    Menu.setMenu()

}

const displayContact = () => {
    clearContent()
    Contact()
}

document.addEventListener('DOMContentLoaded', () => {

    Navbar()
    Home()

    
    const home = document.getElementById("home")
    const menu = document.getElementById("menu2")
    const menuBtn = document.getElementById("menu1")
    const contact = document.getElementById("contact")
    

    menuBtn.addEventListener("click", displayMenu)
    menu.addEventListener('click', displayMenu)
    home.addEventListener('click', displayHome)
    contact.addEventListener('click', displayContact)

})





