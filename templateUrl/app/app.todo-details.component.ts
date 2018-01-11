import { Component, Input } from '@angular/core';
import { Todo } from './todo';



@Component({
    
   
    selector: 'todo-details',
    templateUrl: 'app/app.todo-details.component.html',
    styleUrls: ['app/app.todo-details.component.css'],
})

export class AppTodoDetailsComponent {

    @Input()
    todo: Todo;
    
    priorities: string[] = ['faible', 'moyenne', 'haute'];
    edit: boolean = false;

   
    modifierTodo(bool: boolean) {
        if (bool) {
            this.edit = false;
            this.texteBouton = "modifier"
        } else {
            this.edit = true;
            this.texteBouton = "sauvegarder"
        }

    }
}




