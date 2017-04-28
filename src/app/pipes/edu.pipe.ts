import { Pipe, PipeTransform } from '@angular/core';
import { Edu } from "../edu-list/edu.model";
import { DatePipe } from "@angular/common";

@Pipe({
  name: 'edu'
})
export class EduPipe implements PipeTransform {

  transform(value: Edu, eduScetion: string, eduDesc: string): any {
    if (eduScetion.toLowerCase() === 'head') return this.getEduHeaderFormat(value);
    if (eduScetion.toLowerCase() === 'desc') return this.getEduDescriptionFormat(eduDesc);
    return null;
  }
 getEduHeaderFormat(edu: Edu) {
   const datePipe: DatePipe = new DatePipe('en-US');
   return edu.degree + ', ' + edu.institude+', '+edu.city+', '+datePipe.transform(edu.end_time, 'yyyy');
  }

  getEduDescriptionFormat(eduDesc: string) {
    return eduDesc;
  }
}
