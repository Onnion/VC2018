import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private _router: Subscription;

    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor(
        private renderer: Renderer,
        private router: Router,
        @Inject(DOCUMENT) private document: any,
        private element: ElementRef,
        public location: Location) {}

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement.children[0].children[0].children[0];

        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }else {
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', (event) => {
            const number = window.scrollY;
            if (number > 100 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            } else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        const ua = window.navigator.userAgent;
        const trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            const rv = ua.indexOf('rv:');
            const version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

    }
    removeFooter() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        } else {
            return true;
        }
    }
}
