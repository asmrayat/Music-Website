const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const em = "admin@gmail.com";
const pass = "admin123";
const submitbtn = document.querySelector("#login-submit");

submitbtn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    console.log(email, " ", password);

    if (email == em && password == pass) {
        alert("Login success");
    }

    else {
        alert("Error");
    }


});


