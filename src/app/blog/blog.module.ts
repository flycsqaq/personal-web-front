import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    BlogRoutingModule,
    SharedModule,
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ArticleComponent,
    ArticleDetailComponent,
  ]
})
export class BlogModule {}