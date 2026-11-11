
function register(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("pswd").value;

    let user = {
        email: email,
        username: username,
        password: password
    };

    console.log(user);
}


function login(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("pswd").value;

    let user = {
        username: username,
        password: password
    };

    console.log(user);
}


document.addEventListener("DOMContentLoaded", function() {

    let registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", register);
    }

    let loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", login);
    }

});
