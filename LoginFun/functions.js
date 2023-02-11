function checkEmail() {
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let email = document.getElementById("email").value;

    return email.match(emailRegex) ? true : false;
}

function checkPassword(isClicked) {
    let password = document.getElementById("psw").value;
    let modal = document.getElementById("modal");

    let passw = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    if (password.match(passw)) {
        if (isClicked) {
            clearInputs();
            modal.style.display = "block";
            // alert("You created an account :)");
        }

        resetButtonPosition();
    }
    else {
        let xPosition = random(-5, 5);
        let yPosition = random(-10, 10);
        document.documentElement.style.setProperty('--button-position-x', xPosition + "rem");
        document.documentElement.style.setProperty('--button-position-y', yPosition + "rem");
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showButton() {
    let password = document.getElementById("psw").value;

    if ((password !== "") && checkEmail()) {
        document.getElementsByClassName("container")[0].style = "height: 14.5rem";
        document.getElementsByClassName("login__button")[0].style = "visibility: visible";

        let password = document.getElementById("psw").value;

        let passw = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

        if (password.match(passw))
            resetButtonPosition();
    } else {
        document.getElementsByClassName("container")[0].style = "height: 12.5rem";
        document.getElementsByClassName("login__button")[0].style = "visibility: hidden";
        resetButtonPosition();
    }
}

function resetButtonPosition() {
    document.documentElement.style.setProperty('--button-position-x', "0");
    document.documentElement.style.setProperty('--button-position-y', "0");
}

function clearInputs() {
    document.getElementById("psw").value = "";
    document.getElementById("email").value = "";

    document.getElementsByClassName("container")[0].style = "height: 12.5rem";
    document.getElementsByClassName("login__button")[0].style = "visibility: hidden";
}

function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}