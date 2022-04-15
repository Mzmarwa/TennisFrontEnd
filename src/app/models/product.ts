export class Product {
    _id?: string;
    name: string;
    image: string;
    marque: String;
    description: String;
    prix:String;

    constructor(name: string,image: string,marque: String,description: String, prix:String){
        this.name=name;
        this.image=image;
        this.marque=marque;
        this.description=description;
        this.prix=prix;

    }
}