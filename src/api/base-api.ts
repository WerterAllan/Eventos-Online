export abstract class BaseApi {

    constructor(private _api: string) {

    }

    protected get(acao: string): Promise<any> {

        return fetch(`${this._api}/${acao}`, {
            method: 'GET'
        })
        .then(x => x.json())

    }

    protected post(acao: string, corpo: any): Promise<any> {

        return fetch(`${this._api}/${acao}`, {
            method: 'POST',
            headers: [
                ["Content-Type", "application/json"]
              ],
            body: JSON.stringify(corpo)
        })

    }


    protected put(acao: string, corpo: any): Promise<any> {

        console.log('acao', corpo)

        return fetch(`${this._api}/${acao}`, {          
            method: 'PUT',
            headers: [
                ["Content-Type", "application/json"]
              ],
            body: JSON.stringify(corpo)
        })

    }

    protected delete(acao: string, id: string): Promise<any> {

        return fetch(`${this._api}/${acao}/${id}`, {

            method: 'DELETE'

        });

    }

}