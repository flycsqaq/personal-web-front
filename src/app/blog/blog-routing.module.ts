import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ArticlesResolveService } from './blog/article-resolve.service';
import { CategoriesResolveService } from './blog/category-resolve.service';
import { ArticleReadComponent } from './article-read/article-read.component';
import { ArticleIDResolveService } from './article-read/article-detail-resolve.service';
import { ArticleAddComponent } from './article-add/article-add.component';
import { AuthGuard } from '../core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'add',
    component: ArticleAddComponent,
    canActivate: [AuthGuard],
    resolve: {
      category: CategoriesResolveService
    }
  },
  {
    path: ':id',
    component: ArticleReadComponent,
    resolve: {
      category: CategoriesResolveService,
      article: ArticleIDResolveService
    }
  },
  {
    path: '',
    component: BlogComponent,
    resolve: {
      article: ArticlesResolveService,
      category: CategoriesResolveService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
