import { Component } from '@angular/core';
import { CLIENTS } from './clients';
import { Client } from './client';



@Component({
    selector:'formulaire',
    templateUrl:'app/formulaire.component.html',
    styleUrls: ['app/formulaire.component.css']
})

export class FormulaireComponent {

    clients = CLIENTS;
    client = Client

    ajouterClient(nom: string, prenom: string, email: string) {

        let nouveauClient = new Client(nom, prenom, email, false);
        this.clients.push(nouveauClient);
        //code
    }


}