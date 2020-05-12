import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private register = "http://localhost:5000/api/register"
    private login = "http://localhost:5000/api/login"

  constructor(private http : HttpClient,private router :Router) { }

  registerUser(user){
    return this.http.post<any>(this.register,user);
  }

  loginUser(user){
     return this.http.post<any>(this.login,user);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  gettoken(){
    return localStorage.getItem('token')

  }
  loggedOut(){
    localStorage.removeItem('token')
    this.router.navigate(['./events'])
  }

}
