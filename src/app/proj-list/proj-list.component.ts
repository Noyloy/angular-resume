import { Component, OnInit } from '@angular/core';
import { Project } from "../proj-list/project.model";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-proj-list',
  templateUrl: './proj-list.component.html',
  styleUrls: ['./proj-list.component.css']
})
export class ProjListComponent implements OnInit {
  
  items: FirebaseListObservable<Project[]>;

    constructor(db: AngularFireDatabase) { 
    this.items = db.list('projects');
    this.items.subscribe(
      function(snap){
        this.items = snap;
      });
  }

  ngOnInit() {
  }

}
