import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { OldTestesComponent } from './old-testes/old-testes.component';
import { SpinnesplendiComponent } from './spinnesplendi/spinnesplendi.component';


const routes: Routes =[
    { path: 'spinnesplendi',    component: SpinnesplendiComponent },    
    { path: 'testes',           component: OldTestesComponent },  
    { path: 'landing',          component: LandingComponent },
    { path: '',                 redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
