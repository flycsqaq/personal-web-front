import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BlogRecentlyComponent } from './blog-recently/blog-recently.component';
import { ReadRecentlyComponent } from './read-recently/read-recently.component';
import { PlanRecentlyComponent } from './plan-recently/plan-recently.component';
import { CommonModule } from '../../../node_modules/@angular/common';


@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule
  ],
  declarations: [
    HomeComponent,
    BlogRecentlyComponent,
    ReadRecentlyComponent,
    PlanRecentlyComponent
  ]
})
export class HomeModule {}
