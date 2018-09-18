import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class GabaritosService {

  constructor(
    private _http: HttpClient) { }

  getGabaritos() {
    return new Promise((resolve, reject) => {
      this._http.post(environment.API_URL + 'gabarito', null).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error)
      });
    })
  }


}
