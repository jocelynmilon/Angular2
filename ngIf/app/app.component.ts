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

    apprendreLaLangue(index:number) {

    }

    nePasApprendreLaLangue(index:number) {

    }








}