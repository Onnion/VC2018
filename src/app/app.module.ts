import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

//PAGES
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { OldTestesComponent } from './old-testes/old-testes.component';
import { SpinnesplendiComponent } from './spinnesplendi/spinnesplendi.component';

//COMPONENTS
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

//LIBS
import { Ng2Timeline } from 'ng2-timeline';
import { RegistryComponent } from './registry/registry.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    OldTestesComponent,
    SpinnesplendiComponent,
    RegistryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    Ng2Timeline,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
