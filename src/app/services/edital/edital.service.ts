import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class EditalService {

  constructor(
    private _http: HttpClient) { }

  getEdital() {
    return new Promise((resolve, reject) => {
      this._http.post(environment.API_URL + 'edital', null).subscribe(
        (result) => {
          resolve(result);
        },
        (error) => {
          reject(error)
        });
    })
  }


}
