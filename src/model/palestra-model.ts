import { ModelBase } from "./model-base.js";

export class PalestraModel extends ModelBase {
    
    
    constructor(
        public id: string,
        public tema: string,
        public descricao: string,
        public data: Date

    ) {
        super(id);
    }
}