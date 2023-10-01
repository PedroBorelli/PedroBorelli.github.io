import {VerificarStorage} from "./storage.js";

const nome = document.getElementById("NomeProd");
const descinic = document.getElementById("DescInic");
const desccomp = document.getElementById("DescComp");
const valor = document.getElementById("Valor");
const lista = document.getElementById("Lista");
const bt = document.getElementById("adquirir");
const adquirido = document.getElementById("adquirido");

//Limpeza do modelo
nome.innerHTML = "";
descinic.innerHTML = "";
//desccomp.innerHTML = "";
valor.innerHTML = "";
lista.innerHTML = "";

//Preenchimento do modelo
window.addEventListener('load', (event) => {
    if(VerificarStorage("localStorage")){
        let session = sessionStorage;
        let storage = localStorage;
        let user = JSON.parse(storage.getItem("ListaClientes"));
        let userid = session.getItem("IdCli");
        let id = Number(session.getItem("IdProd"));
        let prods = JSON.parse(storage.getItem("ListaProds"));

        nome.innerHTML = prods.Prods[id].Plano;
        descinic.innerHTML = prods.Prods[id].DesInic;
        //desccomp.innerHTML = prods.Prods[id].DesInic;
        valor.innerHTML = prods.Prods[id].Preco;
        lista.innerHTML = prods.Prods[id].Lista;

        if(user.Clientes[userid].Plano == id){
            bt.classList.add("hide");
            adquirido.innerHTML = "Você já possui este plano"
        }
    }
})

function VerificarSessao(){
    if(VerificarStorage("sessionStorage")){
        let session = sessionStorage;

        if(session.getItem("login") == "off"){
            window.open("./cadastro.html","_self");
        }else{
            window.open("./compra.html","_self");
        }
    }
}

bt.addEventListener("click", () =>{
    VerificarSessao();
})