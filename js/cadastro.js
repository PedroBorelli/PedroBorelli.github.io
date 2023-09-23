import {VerificarStorage} from "./storage.js";

const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

if(VerificarStorage("localStorage")){
	let storage = localStorage;

	function Cadastrar(event) {
		storage.setItem("CliNome",nome.value);
    	storage.setItem("CliSobrenome",sobrenome.value);
    	storage.setItem("CliEmail",email.value);
    	storage.setItem("CliSenha",senha.value);
		event.preventDefault();
		window.open("index.html");
	}
	
	const form = document.getElementById("form");
	form.addEventListener("submit", Cadastrar);
}else{
	window.alert("Ative o localstorage do seu navegador");
}

