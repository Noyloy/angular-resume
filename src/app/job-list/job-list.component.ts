import { Component, OnInit } from '@angular/core';
import { Job } from "../job-list/job.modle";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs:Job[] = [

    new Job(
      'Pango',
      'Fullstack Developer',
      new Date('2016-09-01'),null,
      ['Work in an agile scrum team methodology.',
       'Using Team Foundation Server source control.',
       'In charge of multiple ASP.NET and WCF services.',
       'Close integration with Microsoft SQL Server 2014 Database.'
      ]),

    new Job(
      'Map-IT',
      'Android Developer'
      ,new Date('2014-11-01'),new Date('2016-07-01'),
      ['Execution of phone calls, sms & emails.',
       'Uploading of Camera taken pictures to Server.',
       'Using Google maps GPS & Background Services.'
      ]),

    new Job(
      'Map-IT',
      'Fullstack ASP.NET Main Developer',
      new Date('2014-10-01'),new Date('2016-07-01'),
      ['Client side programming (JavaScript and jQuery).',
       'Close integration with Microsoft SQL Server 2012 Database.',
       'Automated sending of emails formatted in functioning html.',
       'Implementation of versatile Web Services and notification system.'
      ]),

    new Job(
      'Aplit-Soft',
      'Fullstack ASP.NET Junior Developer',
      new Date('2013-12-01'),new Date('2014-08-01'),
      ['Design and implementation of GUI elements and UX.',
       'Integration with Microsoft SQL Server 2012 Database.',
       'Client side programming (JavaScript and jQuery).',
       'Google Charts integration.',
       'Improvement of GUI and overall look and feel for Android applications.'
      ])
  ];
  constructor() { }

  ngOnInit() {
  }

}
