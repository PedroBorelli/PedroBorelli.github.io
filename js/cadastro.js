import {VerificarStorage} from "./storage.js";

const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

if(VerificarStorage("localStorage")){
	let storage = localStorage;

	function validarSenha(senha) {
		var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
		if (regex.test(senha)) {
			return true;
		} else {
			return false;
		}
	}
	
	function Cadastrar(event) {

		if(validarSenha(senha.value)){
			storage.setItem("CliNome",nome.value);
    		storage.setItem("CliSobrenome",sobrenome.value);
    		storage.setItem("CliEmail",email.value);
    		storage.setItem("CliSenha",senha.value);
			event.preventDefault();
			window.open("index.html", "_self");
		}else{
			window.alert("A senha deve no no mínimo 8 caracteres, uma letra maiúscula e minúscula, números e caractere especial");
		}
	}
	
	const form = document.getElementById("form");
	form.addEventListener("submit", Cadastrar);
}else{
	window.alert("Ative o localstorage do seu navegador");
}

