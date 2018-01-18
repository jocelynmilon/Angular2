import { Routes, RouterModule } from '@angular/router';

import {FormulaireComponent } from './formulaire.component';
import { DetailClientsComponent } from './detail-clients.component';
import { ClientsComponent } from './clients.component';


const appRoutes: Routes = [

    {
        path: '',
        redirectTo: 'Accueil',
        pathMatch: 'full'
    },
    {
        path: 'Accueil',
        component: ClientsComponent
    },

    {
        path: 'ajouterClient',
        component: FormulaireComponent
    },

    {
        path: 'details/:id',
        component: DetailClientsComponent
    }
]

export const routing = RouterModule.forRoot(appRoutes);