import { Component, OnInit } from '@angular/core';
import { Edu } from "../edu-list/edu.model";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edu-list',
  templateUrl: './edu-list.component.html',
  styleUrls: ['./edu-list.component.css']
})
export class EduListComponent implements OnInit {
  items: FirebaseListObservable<Edu[]>;

    constructor(db: AngularFireDatabase) { 
    this.items = db.list('education');
    this.items.subscribe(
      function(snap){
        this.items = snap;
      });
  }

  ngOnInit() {
  }

}
