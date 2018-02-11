import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();

    constructor(public location: Location) { }

    isSplendi() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/spinnesplendi' ) {
            return false;
        }
        else {
            return true;
        }
    }
    ngOnInit() {}
}
