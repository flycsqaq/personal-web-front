import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)

export class HttpTokenInterceptor implements HttpInterceptor {
  private notTokenUrl: string[] = ['api-token-auth', 'api-token-verify'] 
  constructor(
  ){}
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    if (req.method === 'GET') {
      return next.handle(req)
    }
    if (this.notTokenUrl.indexOf(req.url.split('/')[3]) > -1){
      return next.handle(req)
    }
    const headersConfig = {
      // 'Content-Type': 'application/json',
      // 'Accept': 'application/json'
    };
    const token = window.localStorage['jwtToken']
    if (token) {
      headersConfig['Authorization'] = `JWT ${token}`;
    }
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request)
  }
}
