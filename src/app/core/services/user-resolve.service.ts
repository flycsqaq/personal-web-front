import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of }  from 'rxjs';
import { mergeMap, take, catchError }         from 'rxjs/operators';
import { UserService } from './user.service';
import { JwtService } from './jwt.service';
 
 
@Injectable()
export class UserResolverService implements Resolve<any> {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    if (this.userService.isLogin) {
      return of(true)
    }
    const token = this.jwtService.getToken()
    if (token) {
      return this.userService.verify()
        .pipe(
          take(1),
          mergeMap(res => {
            if (res['token']) {
              this.userService.isLogin = true 
            } else {
              this.userService.logout()
            }
            return of(true)
          }
        ),
        catchError(err => {
          this.userService.logout()
          return of(true)
          // return throwError(err.error)
        }),
      )
    }
  }
}