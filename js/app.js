let listaDeAmigos = [];

const nombreDeAmigo = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = nombreDeAmigo.value;

    if (nombre != "") {
        listaDeAmigos.push (nombre);
        nombreDeAmigo.value = "";
        actualizarLista ();
    } else {
         alert("Por favor, inserte un nombre.");
    }
}

function actualizarLista() {
    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = listaDeAmigos [i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    resultado.innerHTML = "";

    if (listaDeAmigos.length > 0) {
        const numeroAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        const ganador = listaDeAmigos [numeroAleatorio];
        const li = document.createElement("li");
        li.textContent = "El amigo secreto es: " + ganador;
        resultado.appendChild(li);
    } else {
        alert("Agregue al menos un nombre antes de sortear.");
    }
}
