import { Component } from '@angular/core';
import { Todo } from './todo';
import { TODOS } from './todos';

@Component({
    selector: 'formulaire-todo',
    templateUrl: 'app/app.formulaire.component.html'
})

export class AppFormulaireComponent {


    todos = TODOS;
    priorities:string[] = ['faible','moyenne', 'haute'];


    ajouterTodo(texte: string, desc: string, date: Date, priority: string) {
        let nouveauTodo = { texte: texte, desc: desc, date: date, estFait: false, priority: priority }
        this.todos.push(nouveauTodo)
    }
}