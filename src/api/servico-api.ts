import { Palestra } from "../model/palestra";
import { BaseApi } from "./base-api.js";

export class Servico extends BaseApi {

    private _recurso = 'palestras';

    constructor() {
        super('http://5e780ba1491e9700162ddc3e.mockapi.io/Evento')

    }

    public listarPalestras(): Promise<Palestra[]> {

        return this.get(this._recurso);

    }

    public palestraPorId(id: string): Promise<Palestra> {
        
        return this.get(`${this._recurso}/${id}`);
            
    }

    public adicionar(palestras: Palestra | Palestra[]): Promise<any> {

        return this.post(this._recurso, palestras);

    }

    public atualizar(palestra: Palestra): Promise<any> {

        return this.put(`${this._recurso}/${palestra.id}`, palestra);

    }
    
    public deletar(id: string): Promise<any> {

        return this.delete(this._recurso, id);

    }
}