import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

	constructor(public router:Router){
		console.log("FSDDSFSDFGFDFSDFB")
	}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).do((response: HttpEvent<any>) => {
	    	if (response instanceof HttpResponse) {
	    		return response;
	    	}
	    }, (err: any) => {
	    	if (err instanceof HttpErrorResponse) {
	    		if (err.status === 401) {
	    			this.router.navigate(['login'])
	    		}
	    	}
	    });

	}

}