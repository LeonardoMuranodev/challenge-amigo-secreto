// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array de amigos
let nombresDeAmigos = [];

//Funcion para agregar amigos
function agregarAmigo(){

    //Capturar el input y el valor del mismo
    let inputAmigo = document.getElementById("amigo")
    let nombreIngresado = inputAmigo.value.toUpperCase();

    //Validar que el nombre sea valido
    if(nombreIngresado === ""){
        alert("Por favor inserte un nombre válido")
        return;
    }

    //Validar que el nombre que se agrego no se haya repetido
    if (nombresDeAmigos.includes(nombreIngresado)) {
        alert("Este amigo ya ha sido agregado.");

        //Limpiar el input y hacer foco en el
        inputAmigo.value = '';
        inputAmigo.focus();

        return;
    }

    //Agregar nombre al array de amigos
    nombresDeAmigos.push(nombreIngresado);

    //Llamar a la funcion que muestra los amigos en pantalla
    mostrarListaDeAmigos()

    //Limpiar el campo de entrada
    inputAmigo.value = '';

    //Deja el foco sobre el input
    inputAmigo.focus();

    return;
}

function mostrarListaDeAmigos(){

    //Asegurar de que no haya duplicados al actualizar
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    //Iterar sobre el array de los amigos para mostrarlos
    for(let i = 0; i < nombresDeAmigos.length; i++){
        //Crear un elemento <li> por cada elemento del array de amigos
        let itemDeLista = document.createElement("li");

        //Poner el contenido de los <li>
        itemDeLista.textContent = nombresDeAmigos[i];

        // Agregar el <li> a la lista en el DOM
        listaAmigos.appendChild(itemDeLista);
    }

    return;
}

function sortearAmigo(){

    //Validar que haya al menos dos amigos para comenzar a sortear
    if (nombresDeAmigos.length < 2) {
        alert("Debes agregar al menos dos amigos antes de comenzar el sorteo");
        return;
    }

    //Generar indice aleatorio para luego usarlo como indice del array de amigos
    let indiceAleatorio = Math.floor(Math.random()*nombresDeAmigos.length);

    //Obtener amigo secreto a partir del indice generado anteriormente
    let amigoSecreto = nombresDeAmigos[indiceAleatorio];

    //Obtener elemento resultado y agregar su contenido con el amigo secreto
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo sorteado es ${amigoSecreto}`;

    //Limpiar lista de amigos luego de sortearlos
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    return;
}