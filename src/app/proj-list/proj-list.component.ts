import { Component, OnInit } from '@angular/core';
import { Project } from "../proj-list/project.model";

@Component({
  selector: 'app-proj-list',
  templateUrl: './proj-list.component.html',
  styleUrls: ['./proj-list.component.css']
})
export class ProjListComponent implements OnInit {
projects:Project[] = [

    new Project(
      'Omnistick',
      `Cool drumstick app, 
I created as a part of my final project at android development course.`,
      new Date('2015-08-01'),
      'https://play.google.com/store/apps/details?id=com.noy.loy.omnistick',
      'https://lh3.googleusercontent.com/--IIdvMAuuJ6vgH1gr-IYXcrCnWmBgcExWVNLUFFN5BikIGViBrZBHbMurJx0x5byj4=w300-rw'
    ),

        new Project(
      'Tap it Out',
      `Fun android casual music Game.`,
      new Date('2014-01-01'),
      'https://play.google.com/store/apps/details?id=tap.it.out',
      'https://lh5.ggpht.com/imLQki7xyJ9sLdIovsWacdfCqF49LgR_PeNIQ_eXX6AyQhrLdojRM8mMjaxHq3hFcWdI=w300-rw')
    ,
    new Project(
      'Omnistick',
      `Cool drumstick app, 
I created as a part of my final project at android development course.`,
      new Date('2015-08-01'),
      'https://play.google.com/store/apps/details?id=com.noy.loy.omnistick',
      'https://lh3.googleusercontent.com/--IIdvMAuuJ6vgH1gr-IYXcrCnWmBgcExWVNLUFFN5BikIGViBrZBHbMurJx0x5byj4=w300-rw'
    ),
    new Project(
      'Omnistick',
      `Cool drumstick app, 
I created as a part of my final project at android development course.`,
      new Date('2015-08-01'),
      'https://play.google.com/store/apps/details?id=com.noy.loy.omnistick',
      'https://lh3.googleusercontent.com/--IIdvMAuuJ6vgH1gr-IYXcrCnWmBgcExWVNLUFFN5BikIGViBrZBHbMurJx0x5byj4=w300-rw'
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
