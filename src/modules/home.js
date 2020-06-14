
const Home = () => {

    let container = document.getElementById("homeContainer")
    let homeContainer = document.createElement("div")
    homeContainer.className = "home"

    let EBlogo = document.createElement("h1")
    EBlogo.innerHTML = "EARLY BIRD"
    homeContainer.appendChild(EBlogo)

    let EBtagline = document.createElement("p")
    EBtagline.innerHTML = "Not your everyday brunch, every day."
    homeContainer.appendChild(EBtagline)

    let EBmenu = document.createElement("h2")
    EBmenu.innerHTML = "MENU"
    EBmenu.id = "menu1"
    homeContainer.appendChild(EBmenu)


    let hours = document.createElement("p")
    hours.innerHTML = "Everyday: 7:00am - 2:00pm"
    homeContainer.appendChild(hours)

    let delivery = document.createElement("p")
    delivery.innerHTML = "Get delivery through DoorDash or GrubHub"
    homeContainer.appendChild(delivery)

    let carryOut = document.createElement("p")
    carryOut.innerHTML = "We are now accepting carry-out orders all day on Sat/Sun."
    homeContainer.appendChild(carryOut)

    container.appendChild(homeContainer)
    return container 

}





export default Home