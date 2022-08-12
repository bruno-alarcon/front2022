let botonDiv = document.getElementById("botonDiv");
botonDiv.addEventListener("click",crearDiv);

let divContainer = document.getElementById("container");


function colorAleatorio(){
    
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb=[r,g,b];
    
    return (" # "+ rgb)

}


function crearDiv(){
    let nuevoDiv = document.createElement("div");
    let nuevoColor = ["yellow","red","blue"];
    let color = colorAleatorio();
    let tamañoDiv = Math.floor(Math.random()*200);
    let indice = Math.floor(Math.random()*nuevoColor.length);

    nuevoDiv.innerHTML = "Hola a todos"
    divContainer.appendChild(nuevoDiv);
   
    nuevoDiv.style.backgroundColor = color;
    


    console.log(color);
    
}
