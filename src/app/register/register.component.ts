import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth : AuthService,private router : Router) { }

  ngOnInit() {
  }
   flag = false;
  registerUserData ={}
  registerUser(){

        this.auth.registerUser(this.registerUserData).subscribe(
          res=>{ console.log(res)
                  localStorage.setItem('token',res.token)
                  this.router.navigate(['./special'])},
          err=> {
            if(err instanceof HttpErrorResponse){
              if(err.status===401){
               this.flag=true;
              }
            }
          }

        )

  }

}
