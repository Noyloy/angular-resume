import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input('job-element') jobElement:{company_name: string, job_title: string, start_time: Date,  end_time: Date,  desc_list: string[],image_path: string};

  constructor() { }

  ngOnInit() {
  }

}
