const form = document.querySelector('form');
const closeForm = document.querySelector('#close-form');
closeForm.addEventListener('click', () => {
    form.classList.toggle('hide')
})



// closeForm.addEventListener('submit', hide)