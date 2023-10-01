import {VerificarStorage} from "./storage.js";

const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const endereco = document.getElementById("endereco");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
var obj = {};

function Vazio(){
	if(nome.value == ""){
		return false;
	}else if(sobrenome.value == ""){
		return false;
	}else if(endereco.value == ""){
		return false;
	}else if(email.value == ""){
		return false;
	}else if(senha.value == ""){
		return false;
	}
	return true;
}

if(VerificarStorage("localStorage")){
	let storage = localStorage;
	
	function Cadastrar(event) {
		event.preventDefault();
		let objtemp = JSON.parse(storage.getItem("ListaClientes"));

		function validarSenha(senha) {
			var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
			if (regex.test(senha)) {
				return true;
			} else {
				window.alert("A senha deve conter no mínimo 8 caracteres, uma letra maiúscula e minúscula, números e caractere especial");
				return false;
			}
		}

		if((validarSenha(senha.value))&&(Vazio())){
			obj = {
				"Nome": nome.value,
				"Sobrenome": sobrenome.value,
				"Endereco": endereco.value,
				"Email": email.value,
				"Senha": senha.value,
				"Plano": "-1"
			}
			objtemp.Clientes.push(obj);
			storage.setItem("ListaClientes",JSON.stringify(objtemp));
			window.open("index.html", "_self");
		}else{
			console.log("Falhou");
			document.getElementById("mensagem").innerHTML = "Todos os campos devem estar preenchidos!!";
		}
	}
	
	const form = document.getElementById("form");
	form.addEventListener("submit", Cadastrar);
}else{
	window.alert("Ative o localstorage do seu navegador");
}