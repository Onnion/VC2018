import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class AprovedsService {

  constructor(private _http: HttpClient) { }

  getAproveds() {
    return new Promise((resolve, reject) => {
      this._http.post(environment.API_URL + 'aproveds', null).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error)
      });
    })
  }


}
