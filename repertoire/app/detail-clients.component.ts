import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { CLIENTS } from './clients';
import { Client } from './client';



@Component({
    selector: 'detail-client',
    templateUrl: 'app/detail-clients.component.html',
    styleUrls: ['app/detail-clients.component.css']  
}) 

export class DetailClientsComponent implements OnInit{
    clients= CLIENTS;
    client: Client;
    edit: boolean = false;
    texteBouton:string ="modifier"
   
    constructor(
        private router :Router,
        private route: ActivatedRoute
    ) {}



    ngOnInit() {

        let id = +this.route.snapshot.params['id'];
        this.client = this.clients[id];
        console.log(this.clients[id])
    }

    modifierClient(){
       
        
        this.edit = (this.edit == false ? true : false);
        this.texteBouton = (this.edit == false ? "modifier" : "sauvegarder"   );

        return false;
    }

    supprimerClient(index: number){ 

        this.clients.splice(index - 1, 1);
        this.router.navigate(['/Accueil']);
        return false;
    }
}