import { Component } from '@angular/core';

class Maillot {
    nom:string;
    prix:number;
}

const MAILLOTS : Maillot[] = [

    {nom: 'maillot bleu domicile', prix: 150},
    { nom: 'maillot bleu domicile manche courte', prix: 100 },
    { nom: 'maillot black domicile', prix: 200 },
    { nom: 'maillot black domicile manche courte', prix: 120 },
    { nom: 'maillot jaune exterieur', prix: 119 },
    { nom: 'maillot jaune exterieur manche courte', prix: 99 },
    { nom: 'maillot rouge exterieur', prix: 140 },
    { nom: 'maillot rouge exterieur manche courte', prix: 100 },

]

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']

})
export class AppComponent {
   
    titre:string ='Currency pipe';
    maillots = MAILLOTS;
    total:number;

    supprimerListe(index:number) {
       this.maillots.splice(index, 1);
   }
  
    ajouterListe(titre:string, price:number) {
        let nouveauMaillot = { nom:titre, prix:price}
        this.maillots.push(nouveauMaillot);
    }

    calculerTotal():number {
        let sum:number =0;

        for (var i = 0; i < this.maillots.length ; i++) {
            let price = this.maillots[i].prix;
            sum = sum + price
        }

        return sum
    }


    

}  
