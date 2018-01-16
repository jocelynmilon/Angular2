import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';


import { AppComponent }  from './app.component';
import { FormulaireComponent } from './formulaire.component';
import { DetailClientsComponent } from './detail-clients.component';
import { routing } from './app.routing'

@NgModule({
  imports: [BrowserModule, FormsModule, routing  ],
  declarations: [AppComponent, FormulaireComponent, DetailClientsComponent  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
