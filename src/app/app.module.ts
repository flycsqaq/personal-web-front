import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { BlogModule } from './blog/blog.module';
import { ReadModule } from './read/read.module';
import { PlanModule } from './plan/plan.module';
import { httpInterceptorProviders } from './core/interceptors';
import { ApiService, ArticleService, CategoryService, BookService, InspirationService, CompletedService, PersonalService, WebService, UserService, TokenService } from './core/services';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    HomeModule,
    BlogModule,
    ReadModule,
    PlanModule
  ],
  providers: [
    httpInterceptorProviders,
    ApiService,
    TokenService,
    UserService,
    ArticleService,
    CategoryService,
    BookService,
    InspirationService,
    CompletedService,
    PersonalService,
    WebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
