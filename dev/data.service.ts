import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Headers} from "angular2/http";
import 'rxjs/Rx';

@Injectable()
export class DataService {
    constructor(private _http:Http) {
    }

    postData(data:any) {
        const body = JSON.stringify(data);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('https://sweltering-fire-7229.firebaseio.com/data.json', body, {headers: headers}).map(response => response.json());

    }
}