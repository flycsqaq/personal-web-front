import { Component, OnInit } from '@angular/core';
import { ArticleService, CategoryService } from '../../core/services';
import { Article_GET, Category_GET } from '../../core/models';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.styl']
})
export class ArticleComponent implements OnInit {
  articles: Article_GET[] = []
  articlesSubscription: Subscription
  categories: Category_GET[] = []
  categoriesSubscription: Subscription
  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.articleService.get()
    this.categoryService.get()
  }
  initBlog() {
    this.articlesSubscription = this.articleService.articles$
      .subscribe(
        articles => this.articles = articles,
        error => console.log(error)
      )
    this.categoriesSubscription = this.categoryService.categories$
      .subscribe(
        categories => this.categories = categories,
        error => console.log(error)
      )
  }
}
