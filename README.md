## Angular & FireBase Resume Template 
This is a project that created in order to learn Angular & Typescript. (in vs code).

My main concern with this project was to make the Resume somewhat Generic.

So I nerrowed it down to a few sections:

### Professional Experience
The Job Model:
``` typescript
export class Job {
    constructor(
        public company_name: string, 
        public job_title: string, 
        public start_time: Date, 
        public end_time: Date, 
        public desc_list: string[], 
        public image_path:string='https://cdn2.iconfinder.com/data/icons/metro-ui-icon-set/512/Work_Network.png') { }
}
```

### Education
The Edu Model:
``` typescript
export class Edu {
    constructor(
        public degree: string, 
        public institude: string,
        public city: string, 
        public end_time: Date, 
        public desc: string) { }
}
```

### Projects
The Project Model:
``` typescript
export class Project {
    constructor(
        public name: string,
        public description: string,
        public end_time: Date,
        public link: string,
        public image_path: string,
        public languages: string[],
        public links: { 
            link: string, 
            fa_icon: string, 
            hover_info: string }[]
    ) { }
}
```
### About
The About Model:
working on it...

## FireBase integration
The angular components are loaded from firebase db, in order to increase the generic approach I stated above. 