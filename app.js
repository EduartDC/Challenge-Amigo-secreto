// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

document.addEventListener("DOMContentLoaded", function () {
	const inputAmigo = document.getElementById("amigo");
	inputAmigo.addEventListener("keypress", function (event) {
		if (event.key === "Enter") {
			agregarAmigo();
		}
	});
});

function agregarAmigo() {
	let nombre = document.getElementById("amigo").value;
	if (nombre.trim() === "") {
		alert("Por favor, ingresa un nombre válido.");
		return;
	}
	listaNombres.push(nombre);
	document.getElementById("amigo").value = "";
	console.log(listaNombres);
	mostrarAmigos();
}
function mostrarAmigos() {
	if (listaNombres.length === 0) {
		mensajeListaVacia("No hay más amigos en la lista.");
		return;
	}
	listaNombres.forEach((nombre, index) => {
		lista.innerHTML += `<li><strong>${index + 1}.-</strong> ${nombre}</li>`;
	});
}
function sortearAmigo() {
	if (listaNombres.length === 0) {
		alert("No hay amigos en la lista para sortear.");
		mensajeListaVacia("No hay amigos en la lista para sortear.");
		return;
	}
	let indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
	let amigoSorteado = listaNombres[indiceAleatorio];
	document.getElementById(
		"resultado"
	).innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
	listaNombres.splice(indiceAleatorio, 1);
	mostrarAmigos();
}

function mensajeListaVacia(mensaje) {
	let lista = document.getElementById("listaAmigos");
	lista.innerHTML = `<p>${mensaje}</p>`;
	document.getElementById("resultado").innerHTML = "";
}
