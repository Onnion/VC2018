import { BrowserModule    } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { NgModule         } from '@angular/core';
import { FormsModule      } from '@angular/forms';
import { NgbModule        } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule     } from '@angular/router';
import { HttpModule       } from '@angular/http';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';

//PAGES
import { AppComponent           } from './app.component';
import { LandingComponent       } from './components/pages/landing/landing.component';
import { OldTestesComponent     } from './components/pages/old-tests/old-testes.component';
import { SpinnesplendiComponent } from './components/pages/spinnesplendi/spinnesplendi.component';
import { RegistryComponent      } from './components/pages/registry/registry.component';
import { GaleryComponent        } from './components/pages/galery/galery.component';
import { ExamLocationComponent  } from './components/pages/exam-location/exam-location.component';
import { AprovedsComponent      } from './components/pages/aproveds/aproveds.component';
import { MatriculaComponent     } from './components/pages/matricula/matricula.component';
import { RelocatedComponent     } from './components/pages/relocated/relocated.component';

//COMPONENTS
import { FooterComponent    } from './components/shared/footer/footer.component';
import { NavbarComponent    } from './components/shared/navbar/navbar.component';
import { SaparatorComponent } from './components/saparator/saparator.component';
import { MapsComponent      } from './components/maps/maps.component';
import { PreloadComponent   } from './components/preload/preload.component';
import { ContactComponent   } from './components/contact/contact.component';

//LIBS
import { Ng2Timeline   } from 'ng2-timeline';
import { AgmCoreModule } from '@agm/core';

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
    GaleryComponent,
    ContactComponent,
    PreloadComponent,
    ExamLocationComponent,
    AprovedsComponent,
    MatriculaComponent,
    RelocatedComponent
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
