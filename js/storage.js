function VerificarStorage(type) {
    try {
        var storage = window[type],
          x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
      } catch (e) {
        return (
          e instanceof DOMException &&
          // everything except Firefox
          (e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === "QuotaExceededError" ||
            // Firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
          // acknowledge QuotaExceededError only if there's something already stored
          storage.length !== 0
        );
      }
}

function ExisteStorage(storage,item){
    if (storage.getItem(item)){
        return true;
    }else{
        return false;
    }
}

function CriarLocalStorage(storage){
    let obj;
    if(!ExisteStorage(storage,"Adm")){
        obj = {
            "Nome": "Admin",
            "Sobrenome": "Site",
            "Endereco": "Sem endereço",
            "Email": "adm@adm.com",
            "Senha": "Senha_Adm"
        }
        storage.setItem("Adm",JSON.stringify(obj));
        storage.setItem("ListaClientes",'{"Clientes":[]}');
    }
}

export {
    VerificarStorage,
    ExisteStorage,
    CriarLocalStorage
};