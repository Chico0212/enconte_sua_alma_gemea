let input = document.querySelector("#input-crush");

input.addEventListener("keydown", function(event){
    if (event.key == "Enter"){
        const yourName = input.value;
        return requestToAPI(yourName);
    }
});

function requestToAPI(name) {
    const strToAI = strTreatment(name);
    // const request = new XMLHttpRequest();

    // request.open("");

    spaceTreatment();
    alert(strToAI);
}

function strTreatment(subStr) {
    return `pessoa com o nome ${subStr} desde que não seja uma criança`;
}

function spaceTreatment() {
    let space = document.querySelector(".final-img");

    space.classList.add("desapear");
}