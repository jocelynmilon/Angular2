import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.Component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {

   titre:string = 'two way binding';
   texte:string = "";
   taches:any[] = [
       {texte: 'renover le centre entrainement', fait:false },
       { texte: 'investir chez les jeunes joueur', fait: false },
       { texte: 'acheter des stars', fait: false },     
     ];
   ajoutertache(nouvelleTache:string) {
       this.taches.push(nouvelleTache)
       this.texte = "";
   }
   tacherealise(index:number) {
        console.log(this.taches[index] + " réalisé")
   }

 }
