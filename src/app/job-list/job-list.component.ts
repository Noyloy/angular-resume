import { Component, OnInit } from '@angular/core';
import { Job } from "../job-list/job.modle";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  
  items: FirebaseListObservable<Job[]>;

  constructor(db: AngularFireDatabase) { 
    this.items = db.list('jobs');
    this.items.subscribe(
      function(snap){
        this.items = snap;
      });
  }

  ngOnInit() {
  }

}
