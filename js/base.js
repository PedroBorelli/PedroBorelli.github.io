import {VerificarStorage} from "./storage.js";
import {CriarLocalStorage} from "./storage.js";
import {ExisteStorage} from "./storage.js";

const blogin = document.getElementById("blogin");
const bcadastro = document.getElementById("bcadastro");
const user = document.getElementById("user");

window.addEventListener('load', (event) => {
    if(VerificarStorage("localStorage")){
        var storage = localStorage;
        let session = sessionStorage;

        if(!ExisteStorage(storage,"AdmNome")){
            CriarLocalStorage(storage);
        }

        if(!ExisteStorage(session,"login")){
            session.setItem("login","off");
        }else if(!(session.getItem("login") == "off")){
            console.log("logado como "+ session.getItem("User"));
            blogin.classList.add("hide");
            bcadastro.classList.add("hide");
            user.classList.remove("hide");
            user.innerHTML = session.getItem("User");
        }
    }
})

function Sair(){
    let session = sessionStorage;
    session.setItem("login","off");
    window.location.reload();
}

user.addEventListener("click",Sair);