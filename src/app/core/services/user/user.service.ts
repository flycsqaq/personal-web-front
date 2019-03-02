import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service'
import { TokenService } from './token.service' 
import { User, User_SAVE } from '../../models';
@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class UserService {
  cache = window.localStorage
  constructor(
    private apiService: ApiService,
    private tokenService: TokenService
  ) { }
  login(user: User): void {
    this.apiService.post('api-token-auth/', user)
      .subscribe(
        res => {
          const payload: User_SAVE = {
            jwtToken: res.token,
            username: user.username,
            password: user.username
          }
          this.tokenService.saveToken(payload)
          console.log('login')
        }
      )
  }
  verifyToken(): void {
    const body = {
      token: this.tokenService.getToken()
    }
    this.apiService.post('api-token-verify/', body)
      .subscribe(_ => console.log('login'))
  }
  logout(): void {
    this.tokenService.destoryToken()
    console.log('logout')
  }
}