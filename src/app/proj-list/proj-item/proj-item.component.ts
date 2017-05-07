import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proj-item',
  templateUrl: './proj-item.component.html',
  styleUrls: ['./proj-item.component.css']
})
export class ProjItemComponent implements OnInit {
  @Input('project-element') projEle: {name: string, description: string,  end_time: Date,  link: string,  image_path: string, description_extra: string[]};
  
  constructor() { }

  ngOnInit() {
  }

}
