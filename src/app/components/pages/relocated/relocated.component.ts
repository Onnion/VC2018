import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import { AprovedsService   } from 'app/services/aproveds/aproveds.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-relocated',
  templateUrl: './relocated.component.html',
  styleUrls: ['./relocated.component.css'],
  providers: [AprovedsService]
})
export class RelocatedComponent implements OnInit {

  constructor(
    private aproveds: AprovedsService,
    private route:    Router) { }

  private aprovedsBeforeFiltred = [];
  private aprovedsAfterFiltred  = [];
  private filter: string;
  private loading = true;
  
  ngOnInit() {
    this.aproveds.getAproveds().then( ( res: any ) => {
      this.loading = false;
      this.aprovedsBeforeFiltred = [
      {
        n_inscricao: 20181439, 
        name: "ADELSON JOSÉ EVANGELISTA FILHO"
      },
      {
        n_inscricao: 20180963, 
        name: "LUCAS SILVA CHACON"
      },
      {
        n_inscricao: 20180644, 
        name: "WELYSON DE LIMA SANTANA"
      },
    ]
      this.aprovedsAfterFiltred  = this.aprovedsBeforeFiltred;
    }).catch(err => console.log(err));

  }

  goTo () {
    this.isMobile() ? this.route.navigateByUrl('matricula') : true ;
  }

  isMobile () {
    return document.getElementById('body').offsetWidth <= 768;    
  }

  handleFilter() {
    if (_.isEmpty(this.filter)) {
      this.aprovedsAfterFiltred = this.aprovedsBeforeFiltred;
      return;
    }
    this.aprovedsAfterFiltred = this.aprovedsBeforeFiltred.filter(aproved => this.hasFilter(aproved, this.filter));
  }

  hasFilter(aproved, filter): boolean {
    return (aproved.name.toLowerCase().includes(this.replace(filter.toLowerCase())) || aproved.n_inscricao.toString().toLowerCase().includes(filter.toString().toLowerCase()));
  }

  notAproved () {
    return _.isEmpty(this.aprovedsAfterFiltred) && !this.loading;
  }

  replace (name: String) {

    let _name = name.toLowerCase();                                                         
    _name = _name.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    _name = _name.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    _name = _name.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    _name = _name.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    _name = _name.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    return _name;             
  }
}
