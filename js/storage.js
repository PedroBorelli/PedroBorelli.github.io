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
    if(!ExisteStorage(storage,"AdmNome")){
        storage.setItem("AdmNome","Admin");
        storage.setItem("AdmSobrenome","Site");
        storage.setItem("AdmEmail","adm@adm.com");
        storage.setItem("AdmSenha","4dm!n_L0c@l");
    }
}

export {
    VerificarStorage,
    ExisteStorage,
    CriarLocalStorage
};