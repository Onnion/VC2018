import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProvasService {

  constructor(
    private _http: HttpClient) { }

  getProvas() {
    return new Promise((resolve, reject) => {
      this._http.post(environment.API_URL + 'provas', null).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error)
      });
    })
  }


}
