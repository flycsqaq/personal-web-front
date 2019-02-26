import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { ArticleAddComponent } from './article-add/article-add.component';

const routes: Routes = [
  {
    path: 'blog',
    component: ArticleComponent
  },
  {
    path: 'blog/add',
    component: ArticleAddComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}