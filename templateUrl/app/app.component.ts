import { Component } from '@angular/core';
import { AppFormulaireComponent } from './app.formulaire.component';
import {AppTodoDetailsComponent } from './app.todo-details.component';
import { Todo } from './todo';
import { TODOS } from './todos';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css'],
    directives: [AppFormulaireComponent, AppTodoDetailsComponent]
})
export class AppComponent { 
   
    titre:string ="templateUrl";
    todos = TODOS;
    todoSelectionne: Todo;
    texteBouton: string = "modifier";
   
   
    
    

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
   
    marquerTodoFait(index: number) {
             
        this.todos [index].estFait = (this.todos[index].estFait == false ? true : false)
    }
    supprimerTodo(index: number) {

        this.todos.splice(index, 1)
        
    }
}
