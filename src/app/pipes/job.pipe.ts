import { Pipe, PipeTransform } from '@angular/core';
import { Job } from "../job-list/job.modle";
import { DatePipe } from "@angular/common";

@Pipe({
  name: 'job'
})
export class JobPipe implements PipeTransform {

  transform(value: Job, jobSection: string, jobDescription: string): any {
    if (jobSection.toLowerCase() === 'head') return this.getJobHeaderFormat(value);
    if (jobSection.toLowerCase() === 'time') return this.getJobTimeFormat(value);
    return null;
  }

  getJobHeaderFormat(job: Job) {
    return job.company_name + ', ' + job.job_title;
  }

  getJobTimeFormat(job: Job) {
    const datePipe: DatePipe = new DatePipe('en-US');
    let endTime =  job.end_time == null ? 'Now' : datePipe.transform(job.end_time, 'MMM yyyy');
    return datePipe.transform(job.start_time, 'MMM yyyy')+ ' - ' + endTime;
  }

}
