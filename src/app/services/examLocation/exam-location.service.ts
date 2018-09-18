import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ExamLocation {

  constructor(
    private _http: HttpClient) { }

  getExamLocation() {
    return new Promise((resolve, reject) => {
      this._http.post(environment.API_URL + 'exam/location', null).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error)
      });
    })
  }


}
