import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';

//PAGES
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { OldTestesComponent } from './old-testes/old-testes.component';
import { SpinnesplendiComponent } from './spinnesplendi/spinnesplendi.component';
import { MapsComponent } from './maps/maps.component';
import { RegistryComponent } from './registry/registry.component';

//COMPONENTS
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SaparatorComponent } from './saparator/saparator.component';

//LIBS
import { Ng2Timeline } from 'ng2-timeline';
import { AgmCoreModule } from '@agm/core';
import { EditalComponent } from './edital/edital.component';
import { GaleryComponent } from './galery/galery.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    OldTestesComponent,
    SpinnesplendiComponent,
    RegistryComponent,
    SaparatorComponent,
    MapsComponent,
    EditalComponent,
    GaleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    Ng2Timeline,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDhrQfYI21HF75zwp7GXJ3OQZ38KaAmUbs'
    })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
