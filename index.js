const input = document.querySelector("input");
const log = document.getElementById("characterNameValue");


input.addEventListener("input", currentName);

function currentName(e) {
    log.textContent = "name: " + e.target.value;
}



let genderInput = document.getElementById("characterGender");
let genderIcon = document.getElementById("genderIcon");

/*
let femaleIcon = document.createElement("img");
femaleIcon.src = "icons/icons8-female-24.png";
let maleIcon = document.createElement("img");
maleIcon.src = "icons/icons8-male-50.png";
femaleIcon.setAttribute("style", "width: 20px; height: 20px; ");
maleIcon.setAttribute("style", "width: 20px; height: 20px; ");
*/




genderInput.addEventListener('change', selectedGender);

function selectedGender() {
    if (genderInput.value === "female") {
        genderIcon.src = "icons/icons8-female-96.png";
    } else if (genderInput.value === "male") {
        genderIcon.src = "icons/icons8-male-96.png";
    }
}

let raceInput = document.getElementById("characterRace");
let raceIcon = document.getElementById("raceIcon");

raceInput.addEventListener('change', selectedRace);

function selectedRace() {
    if (raceInput.value === "tunderke") {
        raceIcon.src = "icons/icons8-fantasy-96.png";
    } else if (raceInput.value === "robot") {
        raceIcon.src = "icons/icons8-robotic-96.png";
    } else if (raceInput.value === "eger") {
        raceIcon.src = "icons/icons8-computer-mouse-96.png";
    } else if (raceInput.value === "ember") {
        raceIcon.src = "icons/icons8-foot-96.png";
    } else if (raceInput.value === "rem") {
        raceIcon.src = "icons/icons8-bat-96.png";
    } 
}

let classInput = document.getElementById("characterClass");
let classIcon = document.getElementById("classIcon");

classInput.addEventListener('change', selectedClass);

function selectedClass() {
    if (classInput.value === "uralkodo") {
        classIcon.src = "icons/icons8-crown-96.png";
    } else if (classInput.value === "foispan") {
        classIcon.src = "icons/icons8-castle-96.png";
    } else if (classInput.value === "saman") {
        classIcon.src = "icons/icons8-mushroom-96.png";
    } else if (classInput.value === "betyar") {
        classIcon.src = "icons/icons8-hacking-96.png";
    } else if (classInput.value === "muvesz") {
        classIcon.src = "icons/icons8-compact-camera-96.png"
    }
}