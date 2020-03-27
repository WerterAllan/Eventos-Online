import { PalestraModel } from "../../model/palestra-model.js";
import { ConversaoGenericaUtil } from "../../utils/conversao-generica-util.js";
import { HtmlPalestraUtil } from "../../utils/html-palestra-util.js";
import { ModalBase } from "../../compartilhado/modal-base.js";
import { ServicoApi } from "../../api/servico-api.js";
import { PalestranteModel } from "../../model/palestrante-model.js";



export class ModalEditarPalestra extends ModalBase<PalestraModel> {
  
  private _palestraSelecionada: PalestraModel;
  private _api: ServicoApi<PalestranteModel>;

  constructor(
    private _palestraId: string
  ) {
    
    super("ModalEditarPalestra", "Editar Palestra");
    this._palestraSelecionada = this.extrairPalestraDoHtml();
    this._api = new ServicoApi<PalestranteModel>('palestrantes');

  }


  public async renderizar(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  
  public async aposRenderizar(): Promise<string> {
    throw new Error("Method not implemented.");
  }

  private coluna<T>(indiceColuna: number): T {

    let conteudo = HtmlPalestraUtil.palestraPorId(this._palestraId)
      .querySelectorAll("td")[indiceColuna]
      .textContent;

    return ConversaoGenericaUtil.converter<T>(conteudo);

  }

  private extrairPalestraDoHtml(): PalestraModel {

    return new PalestraModel(
      this.coluna<string>(0),
      this.coluna<string>(1),
      this.coluna<string>(2),
      this.coluna<Date>(3)
    );

  }

  public salvar(): void {

    this.atualizarPalestra();
    this.callbackModal(this._palestraSelecionada);
    this.fechar();

  }


  private atualizarPalestra(): void {

    
    const tema = this.pegarInput("tema");
    console.log('tema input', tema)
    this._palestraSelecionada.tema = tema.value.trim();

    const descricao = this.pegarInput("descricao");
    this._palestraSelecionada.descricao = descricao.value.trim();

  }



  public html = (): string =>  `
    
          <form>
            <fieldset>
              <legend>Dados</legend>
    
              <div class="form-group">
                <label for="tema">Tema</label>
                <input type="text" class="form-control" id="tema" aria-describedby="tema-desc" placeholder="Tema Central" value="${this._palestraSelecionada.tema}">
                <small id="tema-desc" class="form-text text-muted">Tema central da palestra</small>
              </div>
    
    
              <div class="form-group">
                <label for="descricao">Descrição</label>
                <textarea class="form-control" id="descricao" rows="3">${this._palestraSelecionada.descricao.trim()}
                </textarea>
              </div>
    
    
    
              <div class="form-group">
                <label for="palestrante">Palestrante</label>
                <select class="form-control" id="palestrante">
                  <option>Fulano</option>
                  <option>Beltrano</option>
                  <option>Ciclano</option>
                  <option>João</option>
                  <option>Maria</option>
                </select>
              </div>
    
            </fieldset>
          </form>
    
    
    

        `;



      public async montarHtmlDePalestrante(): Promise<string> {

        const palestrantes = await this._api.obter();

        return palestrantes.map(x => {
          return `
              <option value="${x.nome}" >${x.nome}</option>
          `
        })
        .join('');

      }





}