
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    private token;
    constructor(private router: Router, private toastr: ToastrService) { }

    intercept(request: HttpRequest < any >, next: HttpHandler): Observable < HttpEvent < any >> {
        // console.log('auth intercepted');
        this.token = localStorage.getItem('token');
        if (this.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.token}`
                }
            });
        }
        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    this.toastr.error('Please login again', 'Your session has expired');
                    localStorage.clear();
                    this.router.navigate(['/auth/signout']);
                }
            }
        });
    }
}
