import { ModelBase } from "./model-base";

export class PalestranteModel extends ModelBase {
    constructor(
        public id: string,
        public avatar: string,
        public especialidade: string,
        public nome: string
    ) {

        super(id);

    }
}