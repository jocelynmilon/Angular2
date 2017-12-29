import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css']

   
})
export class AppComponent { 

    titre: string ="Paris est magique" ;
    image:string ="app/assets/image.jpeg";
    width: string = "1000";
    height:string = "600";
    date :Date = new Date();
    alert: string = "tu as cliqué sur le bouton date";
    texte: string = "Paris est magique"
    nombre:number = 1
    images: string[] = ['app/assets/image10.jpeg', 'app/assets/image11.jpg', 'app/assets/image12.jpg', 'app/assets/image13.jpg', 'app/assets/image14.jpg',' app/assets/image15.jpg'];
    picture: string = this.images[0];
    index: number = 0;


    onClick(){
        alert("vous avez cliquez sur le bouton");
    }
    changerImage(){
        this.image = (this.image == "app/assets/image.jpeg" ? "app/assets/image2.jpg" : "app/assets/image.jpeg")
    }
    changerTailleImage(){
        this.width = (this.width =="500" ? "1000" : "500"),
        this.height = (this.height =="300" ? "600" : "300");
    }
    defilerImage(){
        this.index++;
        this.picture = this.images[this.index]

        if (this.index == this.images.length - 1) {
            this.index = 0;
            this.picture = this.images[this.index]
        }else {
            this.index++;
            this.picture = this.images[this.index]
        }
    };
    afficherDate(){
        alert(this.date)
    }
    changerTexte() {
        this.texte = (this.texte == "Paris est magique" ? "rêvons plus grand" : "Paris est magique" ) 
    }
    
    incrementerNombre() {
        this.nombre ++
    }
    desincrementerNombre(){
        this.nombre --
    }           
}
