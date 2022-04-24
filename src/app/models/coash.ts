export class Coash {
    _id?: string;
    name: string;
    avatar: string;
    lastname: String;
	email: String;
    password: String;

    constructor(name: string,avatar: string,lastname: String, email: String, password:String){
        this.name=name;
        this.avatar=avatar;
        this.lastname=lastname;
        this.email=email;
        this.password=password;

    }
}