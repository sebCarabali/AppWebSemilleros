export class Device {

    constructor(
        public _id: String,
        public name: String,
        public description: String,
        public avialable: Boolean,
        public image?: String
    ) { }

}