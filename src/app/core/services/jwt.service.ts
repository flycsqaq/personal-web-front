import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable()
export class JwtService {

  constructor(
  ) { }
  getToken(): string {
    return window.localStorage['jwtToken']
  }

  saveToken(user: User): void {
    window.localStorage['jwtToken'] = user.token
    window.localStorage['username'] = user.username
    window.localStorage['password'] = user.password
  }

  destoryToken(): void {
    window.localStorage.removeItem('jwtToken')
    window.localStorage.removeItem('username')
    window.localStorage.removeItem('password')
  }
}