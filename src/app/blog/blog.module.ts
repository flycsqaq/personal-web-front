import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleReadComponent } from './article-read/article-read.component';
import { ArticleAddComponent } from './article-add/article-add.component';

@NgModule({
  declarations: [BlogComponent, ArticleReadComponent, ArticleAddComponent],
  imports: [
    BlogRoutingModule,
    SharedModule,
  ]
})
export class BlogModule { }
