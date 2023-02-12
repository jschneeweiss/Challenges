function checkEmail() {
    return document.getElementById("email").validity.valid;
}

function checkPassword(isClicked) {
    let password = document.getElementById("psw").value;
    let modal = document.getElementById("modal");

    let passw = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    
    if (password.match(passw)) {
        if (isClicked) {
            clearInputs();
            modal.style.display = "block";
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
        document.getElementsByClassName("container")[0].style = "height: 20rem";
        document.getElementsByClassName("login__button")[0].style = "visibility: visible";
        document.getElementsByClassName("login__passwordchecklist")[0].style = "visibility: visible";
        document.documentElement.style.setProperty('--button-position-y', "0rem");

        let password = document.getElementById("psw").value;

        let passw = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

        if (password.match(/^.{8,32}$/)) {
            document.getElementById("list-one").style.color = "green";
        } else {
            document.getElementById("list-one").style.color = "red";
        }

        if (password.match(/^(?=.*[a-z])(?=.*[A-Z])/)) {
            document.getElementById("list-two").style.color = "green";
        } else {
            document.getElementById("list-two").style.color = "red";
        }

        if (password.match(/^(?=.*[0-9])/)) {
            document.getElementById("list-three").style.color = "green";
        } else {
            document.getElementById("list-three").style.color = "red";
        }

        if (password.match(passw)) {
            resetButtonPosition();
            document.getElementsByClassName("container")[0].style = "height: 14.5rem";
            document.documentElement.style.setProperty('--button-position-y', "-5.5rem");
        }
    } else {
        document.getElementsByClassName("container")[0].style = "height: 12.5rem";
        document.getElementsByClassName("login__button")[0].style = "visibility: hidden";
        resetButtonPosition();
        document.getElementsByClassName("container")[0].style = "height: 12.5rem";
    }
}

function resetButtonPosition() {
    document.documentElement.style.setProperty('--button-position-x', "0rem");
    document.getElementsByClassName("login__passwordchecklist")[0].style = "visibility: hidden";
}

function clearInputs() {
    document.getElementById("psw").value = "";
    document.getElementById("email").value = "";

    document.getElementsByClassName("container")[0].style = "height: 12.5rem";
    document.getElementsByClassName("login__button")[0].style = "visibility: hidden";
    document.getElementsByClassName("login__passwordchecklist")[0].style = "visibility: hidden";
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