import { ROLE_GUEST } from "../app.service";

export class User{
    uid?:number
    name:string;
    surname:string;
    role:"ROLE_GUEST";
    RFID:string;
    constructor(name:any,surname:any,role:any,rfid:any,uid?:number){
        this.RFID=rfid;
        this.name=name;
        this.role=role;
        this.surname=surname;
        this.uid=uid;
    }
}