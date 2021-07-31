const validateForm = e => {
    e.preventDefault();

    let firstName = document.querySelector('#fname');
    let lastName = document.querySelector('#lname');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let submit = document.querySelector('#submit');

    [firstName, lastName, email, password].forEach(item => {
        if (item.value === '') {
            item.previousElementSibling.style.visibility = 'visible';
            item.nextElementSibling.style.display = 'block';
            item.style.borderColor = 'hsl(0, 100%, 74%)';
        } else {
            item.previousElementSibling.style.visibility = 'hidden';
            item.nextElementSibling.style.display = 'none';
            item.style.borderColor = '#000';
        }

        if (!validateEmail(email)) {
            email.previousElementSibling.style.visibility = 'visible';
            email.nextElementSibling.style.display = 'block';
            email.style.borderColor = 'hsl(0, 100%, 74%)';
        } else {
            email.previousElementSibling.style.visibility = 'hidden';
            email.nextElementSibling.style.display = 'none';
            email.style.borderColor = '#000';
        }
    });

};

function validateEmail(email) {
    let regexp = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    return regexp.test(String(email.value).toLowerCase());
}

window.onload = () => document.forms[0].addEventListener('submit', validateForm);
