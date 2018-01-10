import {Component, Input} from '@angular/core';
import {Todo} from './todo';


@Component({
    selector: 'todo-details', 
    templateUrl: 'app/app.todo-details.component.html' 
})

export class AppTodoDetailsComponent {
    @Input()
    todo:Todo;
    texteBouton:string = 'Modifier';
    priorities : string[] = ['faible', 'moyenne', 'haute'];
    edit:boolean = false;

    modifierTodo(bool:boolean) {

        this.edit = (this.edit ? false : true);
        this.texteBouton = (this.edit ? 'Sauvegarder': 'Modifier' )
    }

}