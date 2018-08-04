import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class EditalService {

  constructor(
    private _http: Http) { }

  getEdital(){
    return new Promise((resolve, reject) => {
      this._http.post(environment.API_URL + 'edital', null).subscribe(
        (result) => {
          resolve(result.json());
        }, 
        (error) => {
          reject(error.json())
        });
    })
  }


}
