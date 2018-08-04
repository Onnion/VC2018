import { Component, OnInit } from '@angular/core';
import { EditalService } from 'app/services/edital/edital.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css'],
  providers:[EditalService]
  
})
export class RegistryComponent implements OnInit {
  private edital = null;
  constructor(private editalService: EditalService) { }

  private injectEdital = () => {
    return new Promise((resolve, reject) => {
      this.editalService.getEdital().then((res: any) => {
        resolve(res.result);
      });
    });

  }

  ngOnInit() {

    this.injectEdital().then(res => {
      this.edital = res;
    })


  }

}
