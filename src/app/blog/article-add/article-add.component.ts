import { Component, OnInit } from '@angular/core';
import { Article_GET, Article_POST, Category_GET } from '../../core/models';
import { CategoryService, ArticleService } from '../../core/services';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.styl']
})
export class ArticleAddComponent implements OnInit {
  categories: Category_GET[] = []
  subscription: Subscription
  article: Article_POST = {
    title: '',
    abstract: '',
    body: '',
    reference: '',
    category: 0
  }
  constructor(
    private categoryService: CategoryService,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.categoryService.get()
    this.subscription = this.categoryService.categories$
      .subscribe(
        category => this.categories = category,
        error => console.log(error)
      )
  }
  post() {
    this.articleService.post(this.article)
  }
}
