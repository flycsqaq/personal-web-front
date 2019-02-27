import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleReadComponent } from './article-read/article-read.component';

const routes: Routes = [
  {
    path: 'blog',
    component: ArticleComponent
  },
  {
    path: 'blog/add',
    component: ArticleAddComponent
  },
  {
    path: 'blog/:id',
    component: ArticleReadComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}