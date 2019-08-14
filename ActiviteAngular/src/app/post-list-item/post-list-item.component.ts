import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-PostListItemComponent',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    lastDate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 100
      );
    });

     @Input() postTitle : string;
     @Input() postContent : string;
     @Input() loveIts : number;
     @Input() created_at : Date;

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
