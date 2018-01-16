import { Routes, RouterModule } from '@angular/router';

import {FormulaireComponent } from './formulaire.component';
import { DetailClientsComponent } from './detail-clients.component';


const appRoutes: Routes = [

    {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
    },

    {
        path: 'ajouterClient',
        component: FormulaireComponent
    },

    {
        path: 'detail/',
        component: DetailClientsComponent
    }
]

export const routing = RouterModule.forRoot(appRoutes);