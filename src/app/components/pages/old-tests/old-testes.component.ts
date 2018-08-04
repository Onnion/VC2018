import { Component, OnInit } from '@angular/core';
import { ProvasService } from 'app/services/provas/provas.service';
import { GabaritosService } from 'app/services/gabaritos/gabaritos.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-old-testes',
  templateUrl: './old-testes.component.html',
  styleUrls: ['./old-testes.component.css'],
  providers: [ProvasService, GabaritosService]
})
export class OldTestesComponent implements OnInit {
  private rows: any;

  constructor(
    private provaService: ProvasService,
    private gabaritoService: GabaritosService
  ) { }

  private injectProvas = () => {
    return new Promise((resolve, reject) => {
      this.provaService.getProvas().then((res: any) => {
        resolve(_.orderBy(res.result, 'ano_prova', 'desc'));
      });
    });
  }

  private injectGabaritos = () => {
    return new Promise((resolve, reject) => {
      this.gabaritoService.getGabaritos().then((res: any) => {
        resolve(_.orderBy(res.result, 'ano_gabarito', 'desc'));
      });
    });

  }

  private createRow = () => {
    
    this.injectGabaritos().then((gabaritos: any) => {
      this.injectProvas().then((provas: any) => {
        
        this.rows = _.merge(provas,gabaritos);

      });
    });


  }

  ngOnInit() {
    this.createRow();
  }

}
