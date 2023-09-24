import {VerificarStorage} from "./storage.js";
import {ExisteStorage} from "./storage.js";

const email = document.getElementById("email");
const senha = document.getElementById("senha");
const erro = document.getElementById("erro");

if(VerificarStorage("localStorage")){
    let storage = localStorage;
    let session = sessionStorage;

    function logar(){
        if((email.value == storage.getItem("AdmEmail")) && (senha.value == storage.getItem("AdmSenha"))){
            session.setItem("login", "on");
            session.setItem("User", "Adm");
        }else if((email.value == storage.getItem("CliEmail")) && (senha.value == storage.getItem("CliSenha"))){
            session.setItem("login", "on");
            session.setItem("User", "Cli");
        }else{
            erro.innerHTML = "Usuário ou senha incorreto!!";
            event.preventDefault();
        }
    }

    const form = document.getElementById("form");
    form.addEventListener("submit", logar);
}

