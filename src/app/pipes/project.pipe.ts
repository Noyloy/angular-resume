import { Pipe, PipeTransform } from '@angular/core';
import { Project } from "../proj-list/project.model";
import { DatePipe } from "@angular/common";

@Pipe({
  name: 'project'
})
export class ProjectPipe implements PipeTransform {

  transform(value: Project, projectSection: string): any {
   if (projectSection.toLowerCase() === 'head') return this.getProjHeaderFormat(value);
    if (projectSection.toLowerCase() === 'time') return this.getProjTimeFormat(value);
    if (projectSection.toLowerCase() === 'desc') return this.getProjDescriptionFormat(value);
    return null;
  }
    getProjHeaderFormat(proj: Project) {
    return proj.name;
  }

  getProjTimeFormat(proj: Project) {
    const datePipe: DatePipe = new DatePipe('en-US');
    let endTime =  proj.end_time == null ? 'In-Progress' : datePipe.transform(proj.end_time, 'MMM yyyy');
    return endTime;
  }

  getProjDescriptionFormat(proj: Project) {
    return proj.description;
  }
}
