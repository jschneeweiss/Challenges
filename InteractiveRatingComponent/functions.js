let selectedRating = 0;
let toggle = 0;

function setRating(id) {  
    toggleButtonColor(id);        
}

function toggleButtonColor(id) {  
    document.getElementById(id).classList.add("circle-clicked");
    document.getElementById(id).classList.remove("circle-hover");

    // check if rating is selected and remove the old selected
    if (selectedRating) {
        document.getElementById(selectedRating).classList.remove("circle-clicked");
        document.getElementById(selectedRating).classList.add("circle-hover");
    }
    // check if the same rating is clicked and remove circle-clicked class
    if (selectedRating === id) {
        document.getElementById(selectedRating).classList.remove("circle-clicked");
        document.getElementById(selectedRating).classList.add("circle-hover");
        selectedRating = 0;
    } else {
        selectedRating = id;
    }
}

function toggleStar() {
    if (toggle) {
        document.getElementById("star").classList.remove("star-color-clicked");
        document.getElementById("star").classList.add("star-color-unclicked");
        toggle = 0;
    } else {
        document.getElementById("star").classList.add("star-color-clicked");
        document.getElementById("star").classList.remove("star-color-unclicked");
        toggle = 1;
    }    
}

function submit() {
    if (selectedRating) {
        document.getElementById("main").style.display = "none";
        document.getElementById("voted").style.display = "inline";

        let selectedRatintText = document.getElementById("selectedRating");
        selectedRatintText.innerHTML = selectedRating;
    } else {
        alert("You do not choose a rating number!");
    }
}