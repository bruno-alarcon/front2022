let input_arreglo = document.getElementById("input-arreglo");
input_arreglo.addEventListener("input",sumarElementoAArreglo);

let boton_cargar = document.getElementById("boton-cargar");
boton_cargar.addEventListener("click",sumarElementoAArreglo)

let boton_mostrar =document.getElementById("boton-mostrar");
boton_mostrar = document.addEventListener("click",mostrarArreglo);



let array=[]

function sumarElementoAArreglo(){

    array = array + input_arreglo.value  
}


function mostrarArreglo(){

    console.log(array);


}