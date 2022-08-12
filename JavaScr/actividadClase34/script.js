/* AGREGA ELEMENTOS A LA LISTA*/

let inputLista = document.getElementById("inputLista");
let botonElemento = document.getElementById("botonElemento");
botonElemento.addEventListener("click",agregarElemento);
let miLista = document.getElementById("miLista");

function agregarElemento(){
    let nuevoElemento = document.createElement("li");
    nuevoElemento.innerHTML = inputLista.value
    miLista.appendChild(nuevoElemento);

}

/* AGREGA PARRAFO */

let divParrafo = document.getElementById("divParrafo");
let botonParrafo = document.getElementById("botonParrafo");
botonParrafo.addEventListener("click", agregarParrafo);
let inputParrafo = document.getElementById("inputParrafo");

function agregarParrafo(){

    let nuevoParrafo = document.createElement("p");

    nuevoParrafo.innerHTML=inputParrafo.value;

    divParrafo.appendChild(nuevoParrafo);

}


