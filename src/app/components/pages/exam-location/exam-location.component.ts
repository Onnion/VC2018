import { Component, OnInit } from '@angular/core';
import { ExamLocation      } from 'app/services/examLocation/exam-location.service';

@Component({
  selector:    'app-exam-location',
  templateUrl: './exam-location.component.html',
  styleUrls:   ['./exam-location.component.css'],
  providers:   [ExamLocation]

})
export class ExamLocationComponent implements OnInit {
  public exam_location = null;

  constructor(private editalService: ExamLocation) { }

  private injectExamLocation= () => {
    return new Promise((resolve, reject) => {
      this.editalService.getExamLocation().then((res: any) => {
        resolve(res.result);
      });
    });

  }

  ngOnInit() {

    this.injectExamLocation().then(res => {
      this.exam_location = res;
    })


  }

}
