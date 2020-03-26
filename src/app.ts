import { Utils } from "./utils.js";
import { ListaDeRotas } from "./rotas.js";
import { Error404 } from "./paginas/error404.js";

const roteador = async () => {

    // lazy load view elemento
    const conteudo = null || document.getElementById(`pagina_container`);

    let requisicao = Utils.extrairRequisicaoDaURL();

    let urlParseada = 
        (requisicao.recurso ? `/${requisicao.recurso}` : `/` ) +
        (requisicao.id ? `/:id` : ``) +
        (requisicao.verbo ? `/` + requisicao.verbo : ``);

        

    let pagina = ListaDeRotas[urlParseada] ? ListaDeRotas[urlParseada] : new Error404();
    console.log(`pagina`, {
        pagina: pagina,
        url: urlParseada
    })
    conteudo.innerHTML = await pagina.renderizar();
    await pagina.aposRenderizar();


}


window.addEventListener(`hashchange`, roteador);
window.addEventListener(`load`, roteador);