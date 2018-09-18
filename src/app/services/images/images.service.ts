import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ImagesService {

  constructor(
    private _http: HttpClient) { }

  getImages() {
    return new Promise((resolve, reject) => {
      this._http.post(environment.API_URL + 'image', null).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error)
      });
    })
  }


}
