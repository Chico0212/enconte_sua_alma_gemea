let input = document.querySelector("#input-crush");

input.addEventListener("keydown", function(event){
    if (event.key == "Enter"){
        return requestImage();
    }
});

function requestImage() {
    let img = document.getElementsByClassName("img")[0];
    const request = new XMLHttpRequest();

    request.addEventListener("load", function(){
        spaceTreatment(img);
        img.src = "https://thispersondoesnotexist.com/image";
    });

    request.open("GET", "https://thispersondoesnotexist.com/image");
    request.send();
}

function spaceTreatment(img) {
    let space = document.getElementsByClassName("initial")[0];
    img.classList.remove("desapear");
    space.classList.add("desapear");
}
