let botonToogle = document.getElementById("botonToggle");
botonToogle.addEventListener("click",ocultarTag);

function ocultarTag(){
    /* let div = document.getElementById("divToggle");

    div.document.classList.toggle(".ocultar") */

    document.querySelector("div").classList.toggle("ocultar")
}