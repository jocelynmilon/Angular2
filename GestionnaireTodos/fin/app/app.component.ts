import { Component } from '@angular/core';
import {AppFormulaireComponent} from './app.formulaire.component';
import {AppTodoDetailsComponent} from './app.todo-details.component';
import {Todo} from './todo';
import {TODOS} from './todos';


@Component({
    selector: 'todo-app',
    templateUrl:  'app/app.component.html', 
    styleUrls : ['app/app.component.css'],
    directives: [AppFormulaireComponent,AppTodoDetailsComponent ]    
})

export class AppComponent {

    todos = TODOS;
    todoSelectionne:Todo;
    texteBouton:string = 'Modifier';
   

    setClasses(todo: Todo) {
        let classes = {
            faible: todo.priority == 'faible',
            moyenne: todo.priority == 'moyenne',
            haute : todo.priority == 'haute'
        };
        return classes
    }

    onSelect(todo: Todo) {
        this.todoSelectionne = todo;
        console.log(todo)
    }


    marquerTodoFait(index:number) {
        this.todos[index].estFait = (this.todos[index].estFait == false ? true : false)  
    }


    supprimerTodo(index:number) {
        this.todos.splice(index, 1)
    }

 }
