export class Todo {
    constructor(
        public texte :string,
        public desc: string, 
        public  date: Date, 
        public estFait:boolean, 
        public priority: string
    ) { }
}