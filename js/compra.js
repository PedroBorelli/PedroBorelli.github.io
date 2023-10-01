import {VerificarStorage} from "./storage.js";

const nome = document.getElementById("NomeProd");
const descinic = document.getElementById("DescInic");
const valor = document.getElementById("Valor");
const verificar = document.getElementById("verificar");
const senha = document.getElementById("senha");

//Limpeza do modelo
nome.innerHTML = "";
descinic.innerHTML = "";
valor.innerHTML = "";

//Preenchimento do modelo
window.addEventListener('load', (event) => {
    if(VerificarStorage("localStorage")){
        let session = sessionStorage;
        let storage = localStorage;
        let id = Number(session.getItem("IdProd"));
        let prods = JSON.parse(storage.getItem("ListaProds"));

        if(session.getItem("login") == "off"){
            window.open("./index.html","_self");
        }
        nome.innerHTML = prods.Prods[id].Plano;
        descinic.innerHTML = prods.Prods[id].DesInic;
        valor.innerHTML = prods.Prods[id].Preco;
    }
});

//Botões de Sim e Não
document.getElementById("sim").addEventListener("click",()=>{
    verificar.classList.remove("hide");
});

document.getElementById("nao").addEventListener("click", ()=>{
    window.open("./index.html","_self");
});

//Botão confirmar
document.getElementById("conf").addEventListener("click", ()=>{
    let session = sessionStorage;
    let storage = localStorage;
    let i = session.getItem("IdCli");
    let usuario;

    if(session.getItem("User")=="Adm"){
        usuario = JSON.parse(storage.getItem("Adm"));
        if(usuario.Senha == senha.value){
            window.alert("Transação Concluida usuário Administrador");
            window.open("./index.html","_self");
        }
    }else{
        usuario = JSON.parse(storage.getItem("ListaClientes"));
        if(usuario.Clientes[i].Senha == senha.value){
            window.alert("Transação Concluida "+usuario.Clientes[i].Nome+" "+usuario.Clientes[i].Sobrenome);
            usuario.Clientes[i].Plano = session.getItem("IdProd");
            storage.setItem("ListaClientes",JSON.stringify(usuario));
            window.open("./index.html","_self");
        }
    }
});