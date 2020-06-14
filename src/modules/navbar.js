

const Navbar = () => {
    let container = document.getElementById("navContainer")
    const navBar = document.createElement("div")
    navBar.className = "navbar"

    const home = document.createElement("a")
    home.innerHTML = "HOME"
    home.id = "home"
    navBar.appendChild(home)

    const menu = document.createElement("a")
    menu.innerHTML = "MENU"
    menu.id = "menu2"
    navBar.appendChild(menu)

    const contact = document.createElement("a")
    contact.innerHTML = "CONTACT"
    contact.id = "contact"
    navBar.appendChild(contact)

    container.appendChild(navBar)

    return container 

}

export default Navbar 