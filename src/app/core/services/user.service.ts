import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../models';
import { Observable } from 'rxjs';
import { JwtService } from './jwt.service';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  isLogin: boolean = false
  username: string
  constructor(
    private apiService: ApiService,
    private jwtService: JwtService
  ) { }

  login(user: User): Observable<any> {
    return this.apiService.post('api-token-auth/', user)
      .pipe(map(
        data => {
          const userToken: User = {
            username: user.username,
            password: user.password,
            token: data.token
          }
          this.jwtService.saveToken(userToken)
          this.isLogin = true
          this.username = window.localStorage['username']
          return data
        }
      ))
  } 

  verify(): Observable<any> {
    const body = {
      token: this.jwtService.getToken()
    }
    return this.apiService.post('api-token-verify/', body)
      .pipe(map(
        data => {
          this.isLogin = true
          this.username = window.localStorage['username']
          return data
        },
        error => {
          this.logout()
          return error
        }
      ))
  }

  logout(): void {
    this.isLogin = false
    return this.jwtService.destoryToken()
  }
}