

let btn_enviar = document.getElementById("btn_enviar");
btn_enviar.addEventListener("click",mostrar);
 


function mostrar(){
    let nombre = "";
    let apellido = "";
    let edad = "";

    let inputNombre = document.getElementById("inputNombre");
    nombre =  inputNombre.value;
    
      let inputApellido = document.getElementById("inputApellido");
    apellido = inputApellido.value;

      let inputEdad = document.getElementById("inputEdad");
    edad = inputEdad.value; 

    alert("Nombre: " + nombre + "    Apellido: " + apellido + "    Edad: " + edad);
}