import { Component } from '@angular/core';


@Component({
    selector: 'todo-app',
    templateUrl:  `
        <div class="container">

        <h1>Todo Liste - Mon Gestionnaire de Tâches</h1>

        <div class="row">

                <div class="col-md-6">
                <table  class="table table-bordered table-hover">

                    <!--  1ère rangée -->
                    <tr>
                        <td width="55%">Texte Todo</td>
                        <td width="25%">Date </td>
                        <td width="25%">Priorité</td>     
                        <td width="2%"><span class="label label-danger">X</span></td>
                    </tr>

                    <!--  2ème rangée -->
                    <tr>
                        <td width="55%">Texte Todo</td>
                        <td width="25%">Date </td>
                        <td width="25%">Priorité</td>     
                        <td width="2%"><span class="label label-danger">X</span></td>
                    </tr>

                    <!--   3ème rangée -->
                    <tr>
                        <td width="55%">Texte Todo</td>
                        <td width="25%">Date </td>
                        <td width="25%">Priorité</td>     
                        <td width="2%"><span class="label label-danger">X</span></td>
                    </tr>
                    
                </table>  
                </div>

        </div><!-- row -->

        </div><!-- container -->  
    `
    
    
})

export class AppComponent { }
