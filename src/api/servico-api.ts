import { PalestraModel } from "../model/palestra-model";
import { BaseApi } from "./base-api.js";
import { ModelBase } from "../model/model-base";

export class ServicoApi<T extends ModelBase> extends BaseApi {

    constructor(recuros: string) {
        super( recuros )

    }

    public obter(): Promise<T[]> {

        return this.get();

    }

    public obterPorId(id: string): Promise<T> {
        
        return this.get(id);
            
    }

    public adicionar(item: T | T[]): Promise<any> {

        return this.post( item );

    }

    public atualizar(item: T): Promise<any> {

        return this.put(item.id, item);

    }
    
    public deletar(id: string): Promise<any> {

        return this.delete(id);

    }
}