import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './http.interceptor'

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
];