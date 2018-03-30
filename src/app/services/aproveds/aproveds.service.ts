import { Injectable  } from '@angular/core';
import { Http        } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AprovedsService {

  constructor(private _http: Http) { }

  getAproveds(){
    return new Promise((resolve, reject) => {
      this._http.post(environment.API_URL + 'aproveds', null).subscribe((result) => {
        resolve(result.json());
      }, (error) => {
        reject(error.json())
      });
    })
  }


}
