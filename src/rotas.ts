import { PalestrasPagina } from "./paginas/palestras/palestras-pagina.js";
import { PalestrantesPagina } from "./paginas/palestrantes/palestrantes-pagina.js";
import { PaginaPrincipal } from "./paginas/home/pagina-principal.js";


export const ListaDeRotas = {
    "/": new PaginaPrincipal(),
    "/palestras": new PalestrasPagina(),
    "/palestrantes": new PalestrantesPagina()
}

