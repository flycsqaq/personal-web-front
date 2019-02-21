import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: 'blog',
    component: ArticleComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}