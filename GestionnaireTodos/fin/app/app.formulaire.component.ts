import { Component } from '@angular/core';
import {Todo} from './todo';
import {TODOS} from './todos';

@Component({
    selector: 'formulaire-todo', 
    templateUrl: 'app/app.formulaire.component.html'
})

export class AppFormulaireComponent {
    todos = TODOS;
    priorities : string[] = ['faible', 'moyenne', 'haute'];
    priority = 'faible'; //valeur 'faible' par défaut
    nouveauTodo:string;
    todoDate:string;
    todoDesc:string;


    ajouterTodo(texte:string, desc: string, date: Date, priority:string) {
        
    //  if (this.nouveauTodo.length == 0 && this.todoDate == null && this.todoDesc.length == 0) {
    //      return false;
    //  }
       let nouveauTodo = {texte: texte, desc: desc, date: date, estFait: false, priority: priority}
       this.todos.push(nouveauTodo);
       this.reinitialiser();
   }

   reinitialiser() {
        this.nouveauTodo = '';
        this.todoDate = null;
        this.priority = 'faible';
        this.todoDesc = '';
   }

}