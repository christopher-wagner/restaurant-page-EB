const Contact = () => {

    let container = document.getElementById("homeContainer")

    let form = document.createElement("form")
    form.className = "contactForm"

    let nameLabel = document.createElement("label")
    nameLabel.setAttribute('for','name')
    nameLabel.innerText = 'Name:'
    //nameLabel.c

    let name = document.createElement("input")
    name.id = "name"
    name.setAttribute('type','text')
    name.setAttribute('name','name')

    let emailLabel = document.createElement("label")
    emailLabel.setAttribute('for','email')
    emailLabel.innerText = 'Email:'

    let email = document.createElement("input")
    email.id = "email"
    email.setAttribute('type','email')
    email.setAttribute('name', 'email')

    let textAreaLabel = document.createElement("label")
    textAreaLabel.setAttribute('for','message')
    textAreaLabel.innerText = 'Send us your comments:'


    let textarea = document.createElement('textarea');
    textarea.id = "message"
    textarea.setAttribute('name', 'message');
    textarea.setAttribute('id', 'message');
    textarea.setAttribute('cols', '30');
    textarea.setAttribute('rows', '10');
    textarea.setAttribute('required', 'true');

    let submitBtn = document.createElement('button')
    submitBtn.id = "contactBtn"
    submitBtn.classList.add('form-btn')
    submitBtn.innerText = 'Send'

    form.appendChild(nameLabel)
    form.appendChild(name)
    form.appendChild(emailLabel)
    form.appendChild(email)
    form.appendChild(textAreaLabel)
    form.appendChild(textarea)
    form.appendChild(submitBtn)
    container.appendChild(form)

    return container


}

export default Contact