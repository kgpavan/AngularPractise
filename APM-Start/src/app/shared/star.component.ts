import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";
//import { EventEmitter } from "protractor";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number ;
    starWidth : number;
   // @Output() notify:EventEmitter<string> = 
   //         new EventEmitter<string>();
   @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        this.starWidth=this.rating * 86/5;
    }
    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}