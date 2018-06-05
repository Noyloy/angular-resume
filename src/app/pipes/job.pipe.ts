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
    let endTimeStr =  job.end_time == null ? 'Present' : datePipe.transform(job.end_time, 'MMM yyyy');
    let endTime = job.end_time == null ? (new Date()) : job.end_time;
    let durationStr = this.getJobTimeDurationStr(job.start_time,endTime);
    return datePipe.transform(job.start_time, 'MMM yyyy')+ ' - ' + endTimeStr + '(' + durationStr +')';
  }

  getJobTimeDurationStr(start_time : Date, end_time : Date) {
    let jobDuration = end_time.getTime() - start_time.getTime();
    let dayInMillisec = 1000*60*60*24;
    let days = jobDuration/dayInMillisec;
    let months = Math.ceil(days/31) % 12;
    let years = Math.floor(((days/31)-months) /12);
    if (months == 0 && years == 0) return "1 mos";
    if (years == 0) return months+ " mos";
    if (months == 0) return years + " yr";
    return years + " yr " + months + " mos";
  }

}
