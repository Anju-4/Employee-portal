import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  
  SERVER_URL = "https://employee-portal-server-eehh.onrender.com"
  constructor(private http:HttpClient) { }

  // add user api
  addUserApi(user:UserModel){
    return this.http.post(`${this.SERVER_URL}/users`,user)
  }

  // get all user
getAllUserAPI(){
  return this.http.get(`${this.SERVER_URL}/users`)
}

// delte user api
 deleteUserAPI(id:string){
  return this.http.delete(`${this.SERVER_URL}/users/${id}`)
 }

//  view user
viewUserAPI(id:any){
  return this.http.get(`${this.SERVER_URL}/users/${id}`)
}
 
// editUser api
updateUserAPI(id:any,user:UserModel){
  return this.http.put(`${this.SERVER_URL}/users/${id}`,user)
}
}


