export abstract class BaseApi {

    private _apiBase = "http://5e780ba1491e9700162ddc3e.mockapi.io/Evento";

    constructor(private _recurso: string) {

    }
    
    protected get(id: string = ''): Promise<any> {

        return fetch(`${this._apiBase}/${this._recurso}` + (!!id ? `/${id}` : '')  , {
            method: 'GET'
        })
        .then(x => x.json())

    }

    protected post(corpo: any): Promise<any> {

        return fetch(`${this._apiBase}/${this._recurso}`, {
            method: 'POST',
            headers: [
                ["Content-Type", "application/json"]
              ],
            body: JSON.stringify(corpo)
        })

    }


    protected put(id: string, corpo: any): Promise<any> {

        console.log('acao', corpo)

        return fetch(`${this._apiBase}/${this._recurso}/${id}`, {          
            method: 'PUT',
            headers: [
                ["Content-Type", "application/json"]
              ],
            body: JSON.stringify(corpo)
        })

    }

    protected delete( id: string): Promise<any> {

        return fetch(`${this._apiBase}/${this._recurso}/${id}`, {

            method: 'DELETE'

        });

    }

}