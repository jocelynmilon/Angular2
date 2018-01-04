import { Component } from '@angular/core';

class Maillot {
    id: number;
    nom: string;
    date: Date;
    interested: boolean;
}

const MAILLOTS: Maillot[] = [

    { id: 1, nom: 'maillot bleu domicile', date: new Date("october 12, 2016 13:14:00"), interested: false },
    { id: 2, nom: 'maillot bleu domicile manche courte', date: new Date("november 30, 2016 20:14:00"), interested: false },
    { id: 3, nom: 'maillot black domicile', date: new Date("september 18, 2016 18:14:00"), interested: false },
    { id: 4, nom: 'maillot black domicile manche courte', date: new Date("March  12, 2016 13:14:00"), interested: false },
    { id: 5, nom: 'maillot jaune exterieur', date: new Date("April 12, 2016 13:14:00"), interested: false },
    { id: 6, nom: 'maillot jaune exterieur manche courte', date: new Date("May 12, 2016 13:14:00"), interested: false },
    { id: 7, nom: 'maillot rouge exterieur', date: new Date("June 12, 2016 13:14:00"), interested: false },
    { id: 8, nom: 'maillot rouge exterieur manche courte', date: new Date("July 12, 2016 13:14:00"), interested: false },

]

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {

    titre: string = 'Uppercase Pipe';
    maillots = MAILLOTS;
    input: string;

    setStyles(maillot: Maillot) {

        let styles = {
            'color': maillot.interested ? '#000' : 'blue',
            'background-color': maillot.interested ? 'yellow' : 'transparent'
        };
        return styles;

    }

    ajouterLangage(texte: string) {
        let nouveau = { id: this.maillots.length + 1, nom: texte, date: new Date(), interested: false }
        this.maillots.push(nouveau)
    }

    marquerImportant(index: number) {
        let maillot = this.maillots[index];
        maillot.interested = true;
    }

    marquerPasImportant(index: number) {
        let maillot = this.maillots[index];
        maillot.interested = false;
    }


}
