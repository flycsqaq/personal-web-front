import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)

export class HttpTodolistInterceptor implements HttpInterceptor {
  constructor(
  ){}
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const headersConfig = {
      // 'Content-Type': 'application/json',
      // 'Accept': 'application/json'
    };
    let ok: string;
    const token = window.localStorage['jwtToken']
    if (req.url.split('/')[3] === 'api-token-auth'){
      return next.handle(req)
    }
    if (token) {
      headersConfig['Authorization'] = `JWT ${token}`;
    }
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request)
  }
}
