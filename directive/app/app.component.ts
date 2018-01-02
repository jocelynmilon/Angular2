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
    texteBouton: string = 'cacher le texte';
    visible:boolean = true;

    langages = LANGAGES;

    setStyles(langage: Langage) {

        let styles = {
            'color': langage.interesse ? 'red' : 'blue',
            'background-color': langage.interesse ? 'blue' : 'transparent'
        };
        return styles;
    }

    surLigner(index: number) {

        let langage = this.langages[index];
        langage.interesse = true;
    }
    
    pasSurLigner(index:number) {
        let langage = this.langages[index];
        langage.interesse = false;

    }  

    cacherTexte() {
        if(this.visible == true) {
            this.visible = false
            this.texteBouton = "afficher le texte"
        } else {
            this.visible = true
            this.texteBouton = "cacher le texte"
        }
    }
        

 }
