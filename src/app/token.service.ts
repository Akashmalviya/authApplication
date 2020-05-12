import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(private inject : Injector) { }
  intercept(req,next){
    let auth = this.inject.get(AuthService)
    let tokenized = req.clone({
      setHeaders:{
        Authorization:`Bearer ${auth.gettoken()}`
      }
    })
    return next.handle(tokenized)
  }
}
