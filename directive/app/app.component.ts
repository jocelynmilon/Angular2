import { Component } from '@angular/core';

class Langage {
    id:number;
    langue:string;
    interesse:boolean;
}

const LANGAGES : Langage[] = [

    { id: 1, langue: 'francais', interesse:false },
    { id: 2, langue: 'brésilien', interesse: false },
    { id: 3, langue: 'espagnole', interesse: false },
    { id: 4, langue: 'allemand', interesse: false },
    { id: 5, langue: 'argentin', interesse: false },

]

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {

    titre:string = 'directive';

    langages = LANGAGES;

    surLigner(index:number) {
       
        this.langages[index].interesse = (this.langages[index].interesse == false ? this.langages[index].interesse = true : this.langages[index].interesse = false)
        
        
    }
        
        
      
    ];
 }
