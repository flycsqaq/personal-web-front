import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  private notTokenUrl: string[] = ['api-token-auth', 'api-token-verify'] 
  constructor(
    private jwtService: JwtService
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
    const token = this.jwtService.getToken()
    if (token) {
      headersConfig['Authorization'] = `JWT ${token}`;
    }
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request)
  }
}