import {VerificarStorage} from "./storage.js";
import {CriarLocalStorage} from "./storage.js";

window.addEventListener('load', (event) => {
    if(VerificarStorage("localStorage")){
        var storage = localStorage;

        CriarLocalStorage(storage);
    }
})