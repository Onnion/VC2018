import { Component, OnInit, ViewChild } from '@angular/core';
import { PreloadComponent } from './../../preload/preload.component';

declare const $: any;
declare const MaterialPhotoGallery: any;

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  @ViewChild(PreloadComponent) preload: PreloadComponent;

  constructor() { 
    
  }

  ngOnInit() {
    $(document).ready(function(){
      let elem = $('.m-p-g');
      var gallery = new MaterialPhotoGallery(elem);

    });
    setTimeout(() => {
      this.preload.hidden();
    }, 3000);
  }

}
