import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { User } from '../models/models';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  registerUser(user : User){
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    return this.http.post('/api/User/Register', body);
  }

  userAuthentication(userName, password){
    const data = `username=${userName}&password=${password}&grant_type=password`;
    const reqHeader =  new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
    return this.http.post('/token', data, {headers: reqHeader});
  }
}