export class About {
    constructor(
        public name: string, 
        public birthday: Date, 
        public image: string, 
        public location: string, 
        public description: string,
        public short_desc: string,
        public interests_list: string[], 
        public social_list: {name:string,fa_icon:string,link:string,color:string}[]
        ) { }
}