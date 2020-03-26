import { ModalBase } from "../../compartilhado/modal-base.js";


export class ModalDeletarPalestra extends ModalBase<boolean> {
   

    constructor(palestraId: string) {
        super("ModalDeletarPalestra", "Deletar Palestra");
    }
    
    
    public html(): string {
        return `
            Deseja realmente deletar essa palestra ?
        `;
    }
    
    public async renderizar(): Promise<string> {
        return '';
    }
    
    public async aposRenderizar(): Promise<string> {
        return '';
    }

    public salvar(): void {
        
        this.callbackModal(true);
        this.fechar();
        
    }

  

}
