import { PaginaBase } from "../compartilhado/pagina-base.js";



export class Error404 extends PaginaBase {

    constructor() {
        super("Error404");
    }
    
    public html(): string {
        return `
            <section class="section mx-auto"  style="width: 400px">
                <h1> Pagina nao encontrada </h1>
            </section>
        `
    }


    public async renderizar(): Promise<string> {

        return this.html();

    }

    public async aposRenderizar(): Promise<string> {

        return ``;
    }






}