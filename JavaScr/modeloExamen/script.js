let listaTareas = document.getElementById("listaTareas");
let inputTarea = document.getElementById("inputTarea");


let btnGuardarTarea = document.getElementById("btnGuardarTarea");
btnGuardarTarea.addEventListener("click", agregarTarea);

let btnLimpiarLista = document.getElementById("btnLimpiarLista");
btnLimpiarLista.addEventListener("click",limpiarLista);


function agregarTarea(){
    let valueTarea = inputTarea.value

    let nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = valueTarea 
    listaTareas.appendChild(nuevaTarea);
}


function limpiarLista(){

    listaTareas.innerHTML = " ";

}
