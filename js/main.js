let inputSpace = document.getElementById("input");

inputSpace.addEventListener("keydown", function(event){
    if (event.key == "Enter"){
        let button = document.getElementById("the-button");
        const text = this.value;
        button.classList.remove("desapear");
        button.onclick = function() {
            alert(`${text}, amor da sua vida vai aparecer, relaxe`);
        };
    }
});

