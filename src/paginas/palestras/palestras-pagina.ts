import { Servico } from "../../api/servico-api.js";
import { ModalEditarPalestra } from "./modal-editar-palestra.js";
import { Palestra } from "../../model/palestra.js";
import { ModalDeletarPalestra } from "./modal-deletar-palestra.js";
import { HtmlPalestraUtil } from "../../utils/html-palestra-util.js";
import { PaginaBase } from "../../compartilhado/pagina-base.js";


export class PalestrasPagina extends PaginaBase {


    private _api: Servico;

    constructor() {
        super("PalestrasPagina");
        this._api = new Servico();
    }

    public html(): string {
        return `
            <br />
            <table class="table table-houver" >
        
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tema</th>
                        <th>Descricao</th>
                        <th>Data</th>
                        <th>Editar</th>
                        <th>Deletar</th>
                        
                    </tr>
                </thead>
        
                <tbody id="palestras">
                    
                </tbody>
        
            </table>
    `
    }

    public async renderizar(): Promise<string> {

        return this.html();

    }

    public async aposRenderizar(): Promise<string> {

        let palestras = await this._api.listarPalestras();

        let html = palestras.map(x => {
            return `
            <tr id="palestra_${x.id}" >
                <td>${x.id}</td>
                <td>${x.tema}</td>
                <td>${x.descricao}</td>
                <td>${x.data}</td>
                <td> <button class="btn btn-info" onclick="${this.modulo}.editarPalestra(${x.id})" >Editar</button> </td>
                <td> <button class="btn btn-danger" onclick="${this.modulo}.excluirPalestra(${x.id})" >Excluir</button> </td>
            </tr>
            `
        }).join(``)


        document.getElementById(`palestras`)
            .insertAdjacentHTML(`beforebegin`, html);

        return ``;
    }


    public editarPalestra(id: string): void {

        console.log(`editar`, id)
        new ModalEditarPalestra(id)
            .mostrar(palestra => {

                console.log('retorno da edição da palestra', palestra);
                this.atualizarGrid(palestra);
                this._api.atualizar(palestra);

            });

    }

    public excluirPalestra(id: string): void {

        console.log(`editar`, id)
        new ModalDeletarPalestra(id)
            .mostrar(éParaDeletar => {

                if (!éParaDeletar) return;

                console.log('resultado do delete', éParaDeletar);
                this._api.deletar(id);
                this.deletarPalestraElemento(id);

            })


    }

    private deletarPalestraElemento(id: string): void {

        HtmlPalestraUtil.palestraPorId(id).remove();

    }

    private atualizarGrid(palestra: Palestra): void {

        let
            palestraElemento = document.getElementById(`palestra_${palestra.id}`),
            tds = palestraElemento.querySelectorAll("td");

        tds[0].textContent = palestra.id;
        tds[1].textContent = palestra.tema;
        tds[2].textContent = palestra.descricao;
        tds[3].textContent = palestra.data.toString();

    }


}