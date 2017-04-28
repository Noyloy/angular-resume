import { Component, OnInit } from '@angular/core';
import { Edu } from "../edu-list/edu.model";

@Component({
  selector: 'app-edu-list',
  templateUrl: './edu-list.component.html',
  styleUrls: ['./edu-list.component.css']
})
export class EduListComponent implements OnInit {
  edus:Edu[] = [
    new Edu(
      'B.Sc Software Engineering',
      'Afeka collage of engineering',
      'Tel – Aviv',
      new Date('2016-01-01'),
      'Specialization: mobile applications.'),

    new Edu(
      'Full high-school matriculation diploma',
      'Ami Asaf high-school',
      'Beit Berl',
      new Date('2006-01-01'),
      'Extended Professions: Computer Science [5 units] and Biology [5 units].')
  ];
  constructor() { }

  ngOnInit() {
  }

}
