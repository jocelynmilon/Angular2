import { Component } from '@angular/core';


@Component({
    selector: 'formulaire-todo',
    templateUrl: 'app/app.formulaire.component.html'
})

export class AppFormulaireComponent {


    todos: any[] = [
        { texte: 'aller au FC Barcelone', desc: 'rencontrer Neymar', date: new Date(2017, 6, 30), estFait: false, priority: 'haute' },
        { texte: 'aller à As Monaco', desc: 'rencontrer Mbappé', date: new Date(2017, 7, 5), estFait: false, priority: 'haute' },
        { texte: 'aller à la Juventus turin', desc: 'rencontrer Alves', date: new Date(2017, 7, 1), estFait: false, priority: 'haute' },
        { texte: 'aller au PEC Zwolle', desc: 'rencontrer Hebling', date: new Date(2017, 7, 17), estFait: false, priority: 'faible' },
        { texte: 'aller au Pescara Calcio', desc: 'rencontrer Bahebeck', date: new Date(2017, 8, 17), estFait: false, priority: 'moyenne' },
    ]


    ajouterTodo(texte: string, desc: string, date: Date, priority: string) {
        let nouveauTodo = { texte: texte, desc: desc, date: date, estFait: false, priority: priority }
        this.todos.push(nouveauTodo)
    }
}