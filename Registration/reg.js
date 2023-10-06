const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

 const isValidemail = email => {

 }




const validateInputs = () => {
    const usernameValue = username.ariaValueMax.trim();
    const emailValue  = email.ariaValueMax.trim();
    const passwordValue = password.value.trim();
    const password2value = password2.value.trim();

    if(usernameValue ==='') {
        setError(username, 'username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');

    }


};