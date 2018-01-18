import { Component, OnInit } from '@angular/core';

import { ClientService } from './client.service';


import { Client } from './client';


@Component({

    selector:'client',
    templateUrl: 'app/clients.component.html',
    styleUrls: ['app/clients.component.css'],
    
})

export class ClientsComponent implements OnInit {

    titre:string ="Clients"
    clients : Client[];
    client : Client

    constructor(
       
        private clientService: ClientService)
        
        {}
    
    afficherClients() {
        this.clientService.getClients().then(clients => this.clients = clients)
    }    

  
    voirDetails(client: Client, id:number) {
        this.clientService.voirClientDetails(client, id);
    }
    ngOnInit() {
        this.afficherClients();
    }
}