import  { Injectable  } from '@angular/core';
import { Router } from '@angular/router';

import { CLIENTS } from './clients';
import { Client } from './client'; 


@Injectable()

export class ClientService {

    clients = CLIENTS

    constructor(
        private router: Router
    ) { }

    getClients() {

    return Promise.resolve(CLIENTS);
    }

    ajouterAListeClients(nom: string, prenom: string, email: string) {
        let id = this.clients.length + 1
        let nouveauClient: Client = new Client(id, nom, prenom, email, false);
        this.clients.push(nouveauClient);
    }

    voirClientDetails(client: Client, id: number) {
        let lien = ['/details', id];
        this.router.navigate(lien);
    }
}