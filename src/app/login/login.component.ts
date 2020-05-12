import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,private router : Router) { }

  ngOnInit() {
  }
  invaildEmail = false
  invaildpass = false
  LoginUserData={}
  LoginUser()
  {
    console.log(this.LoginUserData)

    this.auth.loginUser(this.LoginUserData).subscribe(
      res=>{ console.log(res)
        localStorage.setItem('token',res.token)
          this.router.navigate(['/special'])},
      err=> {
        if(err instanceof HttpErrorResponse){
          if(err.status===404){
            this.invaildEmail = true;
          }else if(err.status===401)
          {this.invaildpass=true}
        }
      }
      )




  }

}
