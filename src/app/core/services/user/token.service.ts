import { Injectable } from '@angular/core';
import { User_SAVE } from '../../models';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class TokenService {

  constructor() { }
  getToken(): string {
    return window.localStorage['JWTtoken']
  }

  saveToken(payload: User_SAVE): void {
    window.localStorage['username'] = payload.username
    window.localStorage['password'] = payload.password
    window.localStorage['jwtToken'] = payload.jwtToken
  }

  destoryToken(): void {
    window.localStorage.removeItem('jwtToken')
    window.localStorage.removeItem('username')
    window.localStorage.removeItem('password')
  }
}