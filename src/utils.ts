import { RequisicaoSPA } from "./requisicao-spa";

export class Utils {
    public static extrairRequisicaoDaURL(): RequisicaoSPA {
        let 
            url = location.hash.slice(1).toLowerCase() || `/`,
            r = url.split("/"),
            requisicao: RequisicaoSPA = {
                recurso     : null,
                id          : null,
                verbo       : null
            };

        requisicao.recurso      = r[1];
        requisicao.id           = r[2];
        requisicao.verbo        = r[3];

        return requisicao;
        
    }
}