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
        obj = {
			"Prods":[
				{
					"Plano": "Plano Grátis",
					"DesInic": "Aquela força nos primeiros passos do seu negócio!",
					"DescComp": "",
					"Preco": "0",
					"Lista": "<li>Controle de Vendas</li><li>1 Usuários</li><li>Cadastro de Produtos</li><li>Suporte por E-mail</li>"
				},
        		{
					"Plano": "Plano Inicial",
					"DesInic": "Recursos essenciais de gestão para lojas em crescimento.",
					"DescComp": "",
					"Preco": "59",
					"Lista": "<li>+ Recursos do Plano Grátis</li><li>Controle de Caixa</li><li>Usuários Ilimitados</li><li>Etiquetas</li><li>Recibo Digital PDF</li><li>Pedido Online</li><li>Estatísticas</li><li>Múltiplos Endereços</li>"
				},
				{
					"Plano": "Plano Avançado",
					"DesInic": "Recursos avançados para expandir seu negócio.",
					"DescComp": "",
					"Preco": "89",
					"Lista": "<li>+ Recursos dos Planos Grátis e inicial</li><li>Sistema de Fidelidade</li><li>Vendedores e Comissão</li><li>Estoque via XML</li><li>Uso em Rede</li><li>Controle de Pedidos</li>"
				},
				{
					"Plano": "Plano Supremo",
					"DesInic": "Descomplique a emissão de notas fiscais.",
					"DescComp": "",
					"Preco": "139",
					"Lista": "<li>+ Recursos dos Planos Grátis, inicial e avançados</li><li>NF-e</li><li>NFC-e</li><li>SAT CF-e</li><li>Suporte Fiscal</li>"
				}
			]
        }
        storage.setItem("ListaProds",JSON.stringify(obj));
    }
}

export {
    VerificarStorage,
    ExisteStorage,
    CriarLocalStorage
};