let input = document.querySelector("#input-crush");

input.addEventListener("keydown", function(event){
    if (event.key == "Enter"){
        return requestImage();
    }
});

function requestImage() {
    alert("Isso poderia ser a integra��o com a API do DALLE2, mas eu ainda estou na lista de espera...");
}
