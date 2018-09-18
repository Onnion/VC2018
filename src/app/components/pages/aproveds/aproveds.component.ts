import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import { AprovedsService   } from 'app/services/aproveds/aproveds.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-aproveds',
  templateUrl: './aproveds.component.html',
  styleUrls: ['./aproveds.component.css'],
  providers: [AprovedsService]
})
export class AprovedsComponent implements OnInit {
  private aprovedsBeforeFiltred = [];
  private aprovedsAfterFiltred  = [];
  private filter: string;
  private loading = true;

  constructor(
    private aproveds: AprovedsService,
    private route:    Router) { }


  ngOnInit() {
    this.aproveds.getAproveds().then( ( res: any ) => {
      this.loading = false;
      this.aprovedsBeforeFiltred = res.result;
      this.aprovedsAfterFiltred  = this.aprovedsBeforeFiltred;
    }).catch(err => console.log(err));

  }

  goTo () {
    if (this.isMobile()) {
     this.route.navigateByUrl('matricula');

    }
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
    return (
      aproved.name.toLowerCase().includes(this.replace(filter.toLowerCase())) ||
      aproved.n_inscricao.toString().toLowerCase().includes(filter.toString().toLowerCase()));
  }

  notAproved () {
    return _.isEmpty(this.aprovedsAfterFiltred) && !this.loading;
  }

  replace (name: String) {

    let _name = name.toLowerCase();
    _name = _name.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    _name = _name.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    _name = _name.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    _name = _name.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    _name = _name.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    return _name;
  }
}
