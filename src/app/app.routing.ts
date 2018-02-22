import { NgModule }               from '@angular/core';
import { CommonModule, }          from '@angular/common';
import { BrowserModule  }         from '@angular/platform-browser';
import { Routes, RouterModule }   from '@angular/router';
import { LandingComponent }       from './components/pages/landing/landing.component';
import { OldTestesComponent }     from './components/pages/old-testes/old-testes.component';
import { SpinnesplendiComponent } from './components/pages/spinnesplendi/spinnesplendi.component';
import { RegistryComponent }      from './components/pages/registry/registry.component';
import { GaleryComponent }        from './components/pages/galery/galery.component';

const routes: Routes =[
    { path: 'spinnesplendi', component:  SpinnesplendiComponent    },    
    { path: 'testes',        component:  OldTestesComponent        },  
    { path: 'home',          component:  LandingComponent          },
    { path: 'matricula',     component:  RegistryComponent         },    
    { path: 'fotos',         component:  GaleryComponent         },    
    { path: '',              redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],
})
export class AppRoutingModule { }
