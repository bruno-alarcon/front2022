let botonEnviar = document.getElementById("botonEnviar");
botonEnviar.addEventListener("click",enviarInformacion);


let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");
let inputMail = document.getElementById("inputMail");
let inputConsulta = document.getElementById("inputConsulta");





function enviarInformacion(){
    
    let nombreValue = inputNombre.value;
    let apellidoValue = inputApellido.value;
    let consultaValue = inputConsulta.value;
    let mailValue  = inputMail.value;

       
    if(nombreValue.length > 0 && nombreValue.length >= 3 && nombreValue.length <=20  ){
        console.log("Nombre: " + nombreValue); 
    }else{
        console.log("Ingrese un nombre que no sea vacío y tenga entre 3 y 20 caracteres");
    }



        
            if(apellidoValue.length > 0 && apellidoValue.length >= 3 && apellidoValue.length <=20  ){
                console.log("Apellido: " + apellidoValue); 
            }else{
                console.log("Ingrese un apellido que no sea vacío y tenga entre 3 y 20 caracteres");
            }
    


    

    if(consultaValue.length == 0){
        
        console.log("La consulta no puede ser vacia");
    }else{
        console.log("Consulta: " + consultaValue);
        
    }
    

    

        console.log("Mail: " + mailValue);
        
    






}
