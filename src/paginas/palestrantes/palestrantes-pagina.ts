import { PaginaBase } from "../../compartilhado/pagina-base.js";
import { ServicoApi } from "../../api/servico-api.js";
import { PalestranteModel } from "../../model/palestrante-model.js";

export class PalestrantesPagina extends PaginaBase {
    
    private _api: ServicoApi<PalestranteModel>

    constructor() {
        super("PalestrantesPagina");
        this._api = new ServicoApi<PalestranteModel>('palestrantes');
    }
    
    public html(): string {
        return `
            <br />
            <table class="table table-houver" >
        
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>Especialidade</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
        
                <tbody id="palestrantes">
                    
                </tbody>
        
            </table>
    `
    }

    public async renderizar(): Promise<string> {
        return this.html();
    }

    public async aposRenderizar(): Promise<string> {

        let palesrantes = await this._api.obter();

        let html = palesrantes.map(x => {
            return `
            <tr id="palestrante_${x.id}" >
                <td><img src="${x.avatar}" class="rounded-circle" /></td>
                <td>${x.nome}</td>
                <td>${x.especialidade}</td>
                <td> <button class="btn btn-info" onclick="${this.modulo}.editarPalestra(${x.id})" >Editar</button> </td>
                <td> <button class="btn btn-danger" onclick="${this.modulo}.excluirPalestra(${x.id})" >Remover</button> </td>
            </tr>
            `
        }).join(``)


        document.getElementById(`palestrantes`)
            .insertAdjacentHTML(`beforebegin`, html);

        return ``;
        
        return '';
    }

}