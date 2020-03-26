export abstract class PaginaBase  {
    
    private _nomeProjeto = 'EventosOnline';
    

    constructor(private _nomePagina: string) {

        console.log('nome pagina', _nomePagina)
        if (!!!window[this._nomeProjeto])
            window[this._nomeProjeto] = {};

        window[this._nomeProjeto][this._nomePagina] = this;

    }

    public abstract html(): string;
    public async abstract renderizar(): Promise<string> ;
    public async abstract aposRenderizar(): Promise<string> ;

    
    public get modulo() : string {
        
        return `${this._nomeProjeto}.${this._nomePagina}`;
    }
    

    public adicionarCallback(nome: string, acao: Function): void {
        
        window[this._nomeProjeto]["callbacks"][nome] = acao;

    }

    public executarCallback(nome: string): Function {
        return window[this._nomeProjeto]["callbacks"][nome];
    }

}