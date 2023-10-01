import {VerificarStorage} from "./storage.js";

const btgratis = document.getElementById("btgratis");
const btinicial = document.getElementById("btinicial");
const btavancado = document.getElementById("btavancado");
const btsupremo = document.getElementById("btsupremo");

function botao(id){
    if(VerificarStorage("localStorage")){
        let session = sessionStorage;
        session.setItem("IdProd",id);
        window.open("./produto.html","_self");
    }
}

btgratis.addEventListener("click", function(){
    botao(0);
});
btinicial.addEventListener("click", function(){
    botao(1);
});
btavancado.addEventListener("click", function(){
    botao(2);
});
btsupremo.addEventListener("click", function(){
    botao(3);
});