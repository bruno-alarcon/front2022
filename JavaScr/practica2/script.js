let botonAgregar = document.getElementById("botonAgregar");
botonAgregar.addEventListener("click",agregarElemento);

let divCuerpo = document.getElementById("container");

let indice = 0;
function agregarElemento(){

    if(indice<=100){
        
        let nuevoElemento = document.createElement("p");
        nuevoElemento.innerHTML = indice;
        divCuerpo.appendChild(nuevoElemento);
        indice++
    }

}
