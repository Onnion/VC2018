import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ExamLocation {

  constructor(
    private _http: Http) { }

  getExamLocation(){
    return new Promise((resolve, reject) => {
      this._http.post(environment.API_URL + 'exam/location', null).subscribe((result) => {
        resolve(result.json());
      }, (error) => {
        reject(error.json())
      });
    })
  }


}
