import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.css']
})
export class EduItemComponent implements OnInit {
@Input('edu-element') eduElement:{image_url:string, degree: string, institude: string,city: string, end_time: Date, desc: string};
  
  constructor() { 
  }
  ngOnInit() {
  }

}
