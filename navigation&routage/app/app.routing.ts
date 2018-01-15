import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil.component';
import { PsgComponent } from './psg.component';
import { ClevelandComponent } from './cleveland.component';



const appRoutes: Routes = [

{
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
},

{
    path: 'accueil',
    component: AccueilComponent
},
{
        path: 'psg',
        component: PsgComponent
},
{
        path: 'cleveland',
        component: ClevelandComponent
}
]

export const routing = RouterModule.forRoot(appRoutes);