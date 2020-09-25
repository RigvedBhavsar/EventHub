import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import {UserDetails} from './user-details';
import { Enrollevent } from './enrollevent';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private _loginUrl = "http://localhost:3000/api/login";
    private _signupurl ="http://localhost:3000/api/register";
    private _enrollEvent ="http://localhost:3000/api/enrollevent"

    constructor(private http: HttpClient,
                private _router: Router) { }
  
    loginUser(user) {
      return this.http.post<any>(this._loginUrl, user)
    }
    
    signupData(userdet : UserDetails)
    {
       return  this.http.post<UserDetails[]>(this._signupurl, userdet);
    }

    EventEnroll(enrolevedet : Enrollevent)
    {
        return this.http.post<Enrollevent[]>(this._enrollEvent,enrolevedet);
    }

    logoutUser() {
      localStorage.removeItem('token')
      this._router.navigate(['/events'])
    }
  
    getToken() {
      return localStorage.getItem('token')
    }
  
    loggedIn() {
      return !!localStorage.getItem('token')    
    }
}
