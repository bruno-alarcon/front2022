let botonInvertir = document.getElementById("botonInvertir");
botonInvertir.addEventListener("click",invertirSaludo);

let inputTexto = document.getElementById("inputTexto");

function  invertirSaludo(){

    let Texto = inputTexto.value
    let textoInvertido= ""
    for(let i = Texto.length-1;i>=0;i--){

        textoInvertido = textoInvertido + Texto[i];
    }
    console.log(textoInvertido);

}