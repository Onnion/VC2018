import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProvasService {

  constructor(
    private _http: Http) { }

  getProvas(){
    return new Promise((resolve, reject) => {
      this._http.post(environment.API_URL + 'provas', null).subscribe((result) => {
        resolve(result.json());
      }, (error) => {
        reject(error.json())
      });
    })
  }


}
