import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

declare const $: any;

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})

export class MatriculaComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    $("body").animate({ scrollTop: 0 }, 1000); 
  }


}
