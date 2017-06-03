import { Component, OnInit } from '@angular/core';
import { About } from "../about/about.model"
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  items: FirebaseListObservable<About[]>;

  constructor(db: AngularFireDatabase) { 
    this.items = db.list('about');
    
      this.items.subscribe(
      function(snap){
        this.items = snap;
      });
  }

  ngOnInit() {
  }

}