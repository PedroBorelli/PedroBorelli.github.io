import {VerificarStorage} from "./storage.js";
import {CriarLocalStorage} from "./storage.js";

const email = document.getElementById("email");
const senha = document.getElementById("senha");
const erro = document.getElementById("erro");

window.addEventListener('load', (event) => {
    if(VerificarStorage("localStorage")){
        var storage = localStorage;

        CriarLocalStorage(storage);
    }
})

if(VerificarStorage("localStorage")){
    let storage = localStorage;
    let session = sessionStorage;
    let adm = JSON.parse(storage.getItem("Adm")); 
    let listaClientes = JSON.parse(storage.getItem("ListaClientes"));

    function logar(event){
        if((email.value == adm.Email) && (senha.value == adm.Senha)){
            console.log("Adm");
            session.setItem("login", "on");
            session.setItem("User", "Adm");
        }else{
            console.log("Cli");
            for(var i = 0 ; i < listaClientes.Clientes.length ; i++ ){
                console.log(i);
                if((email.value == listaClientes.Clientes[i].Email) && (senha.value == listaClientes.Clientes[i].Senha)){
                    session.setItem("login", "on");
                    session.setItem("User", "Cli");
                    session.setItem("IdCli", i);
                }
            }
            if(session.getItem("login") == "off"){
                erro.innerHTML = "Usuário ou senha incorreto!!";
                event.preventDefault();
            }
        }
    }

    const form = document.getElementById("form");
    form.addEventListener("submit", logar);
}

