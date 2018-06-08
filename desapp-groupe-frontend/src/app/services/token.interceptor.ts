import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token:string
  constructor(){}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = localStorage.getItem('id_token');
    console.log("token: ",this.token)
    if(this.token){
      request = request.clone({
        setHeaders: {
          Authorization: this.token,
        }
      });
    } 
    return next.handle(request);
  }
}