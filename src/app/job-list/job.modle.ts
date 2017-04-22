export class Job {
    constructor(public company_name: string, public job_title: string, public start_time: Date, public end_time: Date, public desc_list: string[]) { }
}