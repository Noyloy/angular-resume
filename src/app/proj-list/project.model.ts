export class Project {
    constructor(
        public name: string,
        public description: string,
        public end_time: Date,
        public link: string,
        public image_path: string,
        public languages: string[],
        public links: { link: string, fa_icon: string, hover_info: string }[]
    ) { }
}