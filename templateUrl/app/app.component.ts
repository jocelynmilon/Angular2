import { Component } from '@angular/core';
import { AppFormulaireComponent } from './app.formulaire.component'


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css'],
    directives: [AppFormulaireComponent]
})
export class AppComponent { 
   
    titre:string ="templateUrl";
    
    
}
