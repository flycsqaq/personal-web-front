import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { JwtService } from './services/jwt.service';
import { UserService } from './services/user.service';
import { httpInterceptorProviders } from './interceptors';
import { UserResolverService } from './services/user-resolve.service';
import { ArticleService } from './services/blog.service';
import { CategoryService } from './services/categoryService';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    httpInterceptorProviders,
    ApiService,
    JwtService,
    UserService,
    UserResolverService,
    ArticleService,
    CategoryService
  ]
})
export class CoreModule { }
