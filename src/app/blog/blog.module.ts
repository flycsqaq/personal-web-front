import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    BlogRoutingModule
  ],
  declarations: [ArticleComponent]
})
export class BlogModule {}