import { PaginaBase } from "../../compartilhado/pagina-base.js";

export class PaginaPrincipal extends PaginaBase {

    constructor() {
        super("PaginaPrincipal");
    }

    public html(): string {
        return `

        <div class="jumbotron">
            <div class="container">
            <h1 class="display-3">Estudos NoSql</h1>
            <p>Esse app tem como objetivo servir de frontend para APIs que usam banco NoSql, dentre eles
            RavenDB, MongoDB e CouchDB.</p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">Saiba mais»</a></p>
            </div>
        </div>
        
        `;
    }
    
    public async renderizar(): Promise<string> {
        return this.html();
    }

    public async aposRenderizar(): Promise<string> {
        return  '';
    }

}