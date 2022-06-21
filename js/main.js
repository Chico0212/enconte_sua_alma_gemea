let inputSpace = document.getElementById("input");

inputSpace.addEventListener("keydown", function(event){
    if (event.key == "Enter"){
        let button = document.getElementById("the-button");
        const text = this.value;

        if (!inputValidation(text))
            return;

        buttonTreatment(button);

        button.onclick = function() {
            alert(`${text}, amor da sua vida vai aparecer, relaxe`);
            alert("Mas antes que ele apareça, veja isso!!");
        };
    }
});


function buttonTreatment(button) {
    button.classList.remove("desapear");
    let ancor = button.parentNode;
    ancor.href = "https://www.youtube.com/shorts/YJWSAJjkTsI";
}
