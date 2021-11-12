import { Component,OnInit } from "@angular/core";

@Component({
    selector: 'my-app',
    template: '<h1><li *ngFor="let i of title">{{i}}</li></h1>'
})
export class AppComponent implements OnInit{
    constructor(){
        console.log('this is angular');
    }
    title: any[] = [1, 2, 3, 4, 5];

    ngOnInit(){
        console.log(this.title);
    }
};