let input_nombre = document.getElementById("input-nombre");
input_nombre.addEventListener("input",mostrarPorConsola)


function mostrarPorConsola(){

    console.log(input_nombre.value);
}