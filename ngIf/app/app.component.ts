import { Component } from '@angular/core';


const LANGAGES: string[] = [
    'francais',
    'espagnole',
    'brésilien',
    'argentin',
    'allemand',


]

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent { 

    titre:string = "NgIf";

    langages = LANGAGES;
    langagesSelectionnes:string [] = [];
    nombre:number

    apprendreLaLangue(index:number) {
        let langage :string = this.langages[index];
        this.langagesSelectionnes.push(langage)
        this.langages.splice(index, 1)
        console.log(langage)
    }

    nePasApprendreLaLangue(index:number) {
        let langage: string = this.langagesSelectionnes[index];
        this.langages.push(langage)
        this.langagesSelectionnes.splice(index, 1)
    }
    retournerCompte() {
        this.nombre = this.langagesSelectionnes.length;
        return this.nombre;
    }








}