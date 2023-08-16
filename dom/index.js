const form = document.querySelector('form');
const closeForm = document.querySelector('#close-form');
closeForm.addEventListener('click', () => {
    form.classList.toggle('hide')
    closeForm.innerText = '+'
})


const submit = document.querySelector('#sign-up')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const formContainer = form.parentElement
form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (!name.value && !email.value) {
        name.style.border = "2px red solid"
        email.style.border = '2px red solid'
        alert('You must enter a name and an email address to subscribe!')

    } else if(!name.value) {
        name.style.border = "2px red solid"
        alert('Please enter a name to subscribe.')
        
    } else if(!email.value) {
        email.style.border = '2px red solid'
        alert('Please enter an email address to subscribe.')
        
    } else if (name.value && email.value) {
        formContainer.innerText = 'Thank you for subscribing!'
    }
})