import { Component, OnInit, ViewChild } from '@angular/core';
import { PreloadComponent } from './../../preload/preload.component';
import { ImagesService } from 'app/services/images/images.service';

declare const $: any;
declare const MaterialPhotoGallery: any;

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css'],
  providers:[ImagesService]
})
export class GaleryComponent implements OnInit {
  private images = null;

  @ViewChild(PreloadComponent) preload: PreloadComponent;

  constructor(private imagesService: ImagesService) { 
    
  }

  private injectImages = () => {
    return new Promise((resolve, reject) => {
      this.imagesService.getImages().then((res: any) => {
        resolve(res.result);
      });
    });

  }

  ngOnInit() {
    this.injectImages().then(res => {
      this.images = res;

      $(document).ready(function(){
        let elem = $('.m-p-g');
        var gallery = new MaterialPhotoGallery(elem);
  
      });
      setTimeout(() => {
        this.preload.hidden();
      }, 3000);
    })
   
  }

}
