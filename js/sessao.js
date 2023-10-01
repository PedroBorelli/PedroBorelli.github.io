import {VerificarStorage} from "./storage.js";
import {ExisteStorage} from "./storage.js";

const blogin = document.getElementById("blogin");
const bcadastro = document.getElementById("bcadastro");
const user = document.getElementById("user");

window.addEventListener('load', (event) => {
    if(VerificarStorage("localStorage")){
        let session = sessionStorage;
        let storage = localStorage;
        let usuario;
        let i;

        if(!ExisteStorage(session,"login")){
            session.setItem("login","off");
            session.setItem("IdCli","-1");
            session.setItem("IdProd","0");
        }else if(!(session.getItem("login") == "off")){
            if(session.getItem("User") == "Adm"){
                usuario = JSON.parse(storage.getItem("Adm"));
                user.innerHTML = usuario.Nome;
            }else{
                i = Number(session.getItem("IdCli"));
                if(i != -1){
                    usuario = JSON.parse(storage.getItem("ListaClientes"));
                    user.innerHTML = usuario.Clientes[i].Nome;
                }
            }
            user.classList.remove("hide");
            blogin.classList.add("hide");
            bcadastro.classList.add("hide");
        }
    }
})

function Sair(){
    let session = sessionStorage;
    session.setItem("login","off");
    session.setItem("IdCli","-1");
    session.setItem("IdProd","0");
    window.open("./index.html","_self");
}

user.addEventListener("click",Sair);