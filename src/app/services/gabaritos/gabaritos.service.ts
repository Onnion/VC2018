import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class GabaritosService {

  constructor(
    private _http: Http) { }

  getGabaritos(){
    return new Promise((resolve, reject) => {
      this._http.post(environment.API_URL + 'gabarito', null).subscribe((result) => {
        resolve(result.json());
      }, (error) => {
        reject(error.json())
      });
    })
  }


}
