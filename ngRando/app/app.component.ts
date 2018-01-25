import { Component } from '@angular/core';
import { Hike } from './hike/hike';
import { HikeService } from './hike/hike.service'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    
    
    titre: string ="My First Angular 2 App"
    hikes : Hike[];

    constructor(private _hikeService: HikeService ){

        
    }

    ngOnInit() {

        //this.hikes = this._hikeService.getHikes();
        this._hikeService.getHikesFromAPI()
                            .subscribe(
                                res => this.hikes = res,
                                err => console.error(err.status) 
                            );
        console.log(this.hikes);

    }

 }
