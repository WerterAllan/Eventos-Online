import { PalestrasPagina } from "./paginas/palestras/palestras-pagina.js";
import { PaginaBase } from "./compartilhado/pagina-base.js";


export class Rota {
    public rota: string;
    public pagina: PaginaBase;

}



export const ListaDeRotas =
{
    "/": new PalestrasPagina()
}

