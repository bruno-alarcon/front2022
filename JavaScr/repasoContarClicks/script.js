let contador = 0;
 
let botonContar = document.getElementById("sumarClicks");
botonContar.addEventListener("click",contarClick);

let botonMostrar= document.getElementById("mostrarCantidadDeClicks");
botonMostrar.addEventListener("click",mostrarClick);

let botonRestar = document.getElementById("restarClicks");
botonRestar.addEventListener("click",restarClick);

function contarClick(){
    contador++;
    document.querySelector("h1").innerHTML = contador;
}

function restarClick(){
    contador--;
    document.querySelector("h1").innerHTML = contador;
}

function mostrarClick(){
    document.querySelector("h1").innerHTML = contador;
}