import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.css']
})
export class PreloadComponent implements OnInit {

  public status: Boolean;

  constructor() {
    this.show();
   }

  ngOnInit() {
  }

  show() {
    this.status = true;
    $('body').css({'overflow-y': 'hidden'})
  }

  hidden() {
    this.status = false;
    $('body').css({'overflow-y': 'scroll'})

  }

}
