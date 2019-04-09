export class Recipe {
    public name: string;
    public descprition: string;
    public imagePath: string;
    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.descprition = desc;
        this.imagePath = imagePath;
    }
}