let titulo = document.querySelector("h1");

let botonSumar = document.getElementById("botonSumar");
botonSumar.addEventListener("click", sumarNumeros);

let botonRestar = document.getElementById("botonRestar");
botonRestar.addEventListener("click", restarNumeros);

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

document.getElementById("botonSumar").classList.add("botonSuma");
document.getElementById("botonRestar").classList.add("botonResta");


function sumarNumeros(){
    
    let resultado = parseInt(input1.value) + parseInt(input2.value) ; 
    titulo.innerHTML = "El resultado es: " + resultado;
    document.querySelector("h1").classList.toggle("tituloAzul");
    
}

function restarNumeros(){
    let resultado = parseInt(input1.value) - parseInt(input2.value);
    titulo.innerHTML = "El resultado es: " + resultado;
    document.querySelector("h1").classList.toggle("tituloRojo");
    

}