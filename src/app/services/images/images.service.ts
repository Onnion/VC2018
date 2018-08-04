import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ImagesService {

  constructor(
    private _http: Http) { }

  getImages(){
    return new Promise((resolve, reject) => {
      this._http.post(environment.API_URL + 'image', null).subscribe((result) => {
        resolve(result.json());
      }, (error) => {
        reject(error.json())
      });
    })
  }


}
