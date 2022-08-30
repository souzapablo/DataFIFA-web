import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import Swal from "sweetalert2";
import { LoginService } from "../pages/login/services/login.service";

@Injectable()

export class TokenInterceptor implements HttpInterceptor{

  constructor(private loginService: LoginService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = this.loginService.getToken(); 

    if (token !== null) {
      const authRequest = req.clone({setHeaders: {'Authorization': `Bearer ${token}`}})
    
      return next.handle(authRequest);
    }

    return next.handle(req).pipe(
      catchError((err) => {
        console.log(err)
        if (err.status === 401) {
          this.loginService.logout();
          Swal.fire({
            title: "Tempo expirado!",
            text: "Você precisa fazer login novamente!",
            icon: 'error',
            confirmButtonText: 'Ok!'
          }).then(err =>
            this.router.navigateByUrl('')
          )
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}