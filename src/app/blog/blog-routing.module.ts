import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleReadComponent } from './article-read/article-read.component';

const routes: Routes = [
  {
    path: 'blog',
    component: ArticleComponent,
    // data: { animation: 'blog' }

  },
  {
    path: 'blog/add',
    component: ArticleAddComponent,
    // data: { animation: '' }
  },
  {
    path: 'blog/:id',
    component: ArticleReadComponent,
    // data: { animation: '' }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}