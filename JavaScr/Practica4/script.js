let divContainer = document.getElementById("container");
let botonSaludo = document.getElementById("botonSaludo");
botonSaludo.addEventListener("click",crearSaludo);


let inputSaludo = document.getElementById("inputSaludo");

let checkbox = document.getElementById("checkbox");
/* checkbox.addEventListener("click",check) */


/* function check(){
    if(checkbox.checked) {
        console.log('El elemento está marcado');
      } else {
        console.log('Ahora está desmarcado');
      }
} */


function crearSaludo(){
    if(checkbox.checked){
        let saludo = document.createElement("h1")
        saludo.innerHTML = inputSaludo.value
        divContainer.appendChild(saludo);
    }else{
        let saludo = document.createElement("h2")
        saludo.innerHTML = inputSaludo.value
        divContainer.appendChild(saludo);
    }
}