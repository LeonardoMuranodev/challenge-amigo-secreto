// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array de amigos
let nombresDeAmigos = [];

//Funcion para agregar amigos
function agregarAmigo(){

    //Capturar el input y el valor del mismo
    let inputAmigo = document.getElementById("amigo")
    let nombreIngresado = inputAmigo.value;

    //Validar que el nombre sea valido
    if(nombreIngresado === ""){
        alert("Por favor inserte un nombre válido")
        return;
    }

    //Agregar nombre al array de amigos
    nombresDeAmigos.push(nombreIngresado);

    //Llamar a la funcion que muestra los amigos en pantalla
    mostrarListaDeAmigos()

    //Limpiar el campo de entrada
    inputAmigo.value = '';

    return;
}

function mostrarListaDeAmigos(){

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < nombresDeAmigos.length; i++){
        let itemDeLista = document.createElement("li");
        itemDeLista.textContent = nombresDeAmigos[i];
        listaAmigos.appendChild(itemDeLista);
    }

    return;
}