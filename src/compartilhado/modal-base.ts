import { PaginaBase } from "./pagina-base.js";

export abstract class ModalBase<T> extends PaginaBase {

  private _modalElement: HTMLElement;
  protected callbackModal: (x: T) => void;


  constructor(

    private nomePagina: string,
    private tituloModal: string

  ) {

    super(nomePagina);

    this._modalElement = document.getElementById("possivel-modal")
  }


  public abstract salvar(): void;
  public fechar(): void {

    this._modalElement.classList.remove("show");
    this._modalElement.style.display = "none";
    this._modalElement.removeChild(this._modalElement.children[0])

  }


  public mostrar(acao: (x: T) => any): void {

    this.callbackModal = acao;

    let modal = this._modalElement;

    modal.insertAdjacentHTML('afterbegin', this.htmlModal());

    modal.style.display = "block";
    modal.style.paddingRight = "15px";
    modal.classList.add('show');
  }

  protected pegarInput(idDoinput: string): HTMLInputElement {

    return this._modalElement
      .querySelector(`#${idDoinput}`) as HTMLInputElement;

  }


  private htmlModal(): string {

    return `

        <div id="modal" class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"> ${ this.tituloModal} </h5>
            <button type="button" onclick="${this.modulo}.fechar()" name="fechar" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

          ${this.html()}
      
          </div>
          <div class="modal-footer">
            <button type="button" id="brnSalvar" onclick="${this.modulo}.salvar()"  class="btn btn-primary">Salvar</button>
            <button type="button"  name="fechar"  onclick="${this.modulo}.fechar()" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          </div>
        </div>
      </div>
          

        `;

  }




}