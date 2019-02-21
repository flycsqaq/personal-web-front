import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { throwError, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'

import { environment } from '../../../environments/environment';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class ApiService {
  public isLogin: boolean = true
  constructor(
    private http: HttpClient
  ) { }

  private formatErrors(error: any) {
    const loginError = ['Signature has expired.', 'Error decoding signature.']
    if(loginError.indexOf(error.error.detail) === -1) {
      this.isLogin = false
    }
    console.log(error.error)
    return throwError(error.error)
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params })
      .pipe(
        tap(),
        catchError(this.formatErrors)
      )
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, body)
      .pipe(
        tap(_ => this.isLogin = true),
        catchError(this.formatErrors)
      )
  }

  put(path: string, body: object = {}): Observable<any> {
    return this.http.put(`${environment.api_url}${path}`, body)
      .pipe(
        tap(),
        catchError(this.formatErrors)
      )
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${environment.api_url}${path}`)
      .pipe(
        tap(),
        catchError(this.formatErrors)
      )
  }
}