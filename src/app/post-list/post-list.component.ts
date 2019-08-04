import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-PostListItemComponent',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  lastDate = new Date();

   @Input() postTitle : string;
   @Input() postContent : string;
   @Input() loveIts : number;
   @Input() created_at : Date

    constructor() { }

    ngOnInit() {
    }

    getContent(){

      return this.postContent;

    }

    onIncrease(){

      return this.loveIts++;

    }

    onDecrease(){

      return this.loveIts--;

    }

    getColor(){

      if(this.loveIts > 0){

        return "green";

      }else if(this.loveIts < 0){

        return 'red';

      }
    }

}
