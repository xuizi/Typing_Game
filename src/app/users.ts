export class Users {
    public Id: number;
    public username: string;
    public password:string;
    public email:string;
    public confirmPassword:string;
    
    constructor(Id:number,username: string,password:string,email:string,confirmPassword:string) {
    this.Id = Id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.confirmPassword =email;
    }
    }