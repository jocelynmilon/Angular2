import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import { AccueilComponent } from './accueil.component';
import { PsgComponent } from './psg.component';
import { ClevelandComponent } from './cleveland.component';
import { routing } from './app.routing'

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [AppComponent, AccueilComponent, PsgComponent, ClevelandComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
