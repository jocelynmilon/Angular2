import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';


import { AppComponent }  from './app.component';
import { FormulaireComponent } from './formulaire.component';
import { DetailClientsComponent } from './detail-clients.component';
import { ClientsComponent } from './clients.component';
import { routing } from './app.routing'
import { ClientService } from './client.service';


@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [AppComponent, FormulaireComponent, DetailClientsComponent, ClientsComponent],
 
  providers: [ ClientService ],
 
  bootstrap: [ AppComponent ]
})
export class AppModule { }
