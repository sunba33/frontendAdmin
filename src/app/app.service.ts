import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, range } from 'rxjs';
import { User } from './persists/user.model';

export enum ROLE_GUEST{
  ROLE_GUEST,
  ROLE_ADMIN
} 

@Injectable({
  providedIn: 'root'
})


export class AppService {

  constructor(private http:HttpClient) {
    
  }
  putUser(user:User):Observable<User>{
    console.log(user);
    const postURL="http://3e3691156c4f.ngrok.io/users/createUser";
    return this.http.post<User>(postURL,JSON.stringify(user))
  }
  getUserByRfid(rfid:any){
    const getURL="http://3e3691156c4f.ngrok.io/users/getByRFID/"+rfid;
    return this.http.get(getURL);
  }
  getUserByUid(uid:any){
    const getURL="http://172.16.60.216/users/getById/"+uid;
    return this.http.get(getURL);
  }
  getUsersByRange(rangeStart:any,rangeEnd:any){
    const getURL="http://172.16.60.216/users/offset/"+rangeStart+"/limit/"+rangeEnd;
    return this.http.get(getURL);
  }
  deletUserByUid(uid:any){
    const deleteURL="http://172.16.60.216/users/deleteUserById/"+uid;
    return this.http.delete(deleteURL);
  }
  updateUserByUid(uid:any,user:User){
    const putURL="http://172.16.60.216/users/updateUserById/"+uid;
    return this.http.put(putURL,JSON.stringify(user));
  }
}
