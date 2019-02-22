import { Component, OnInit } from '@angular/core';
import { ArticleService, CategoryService } from '../../core/services';
import { Article_GET, Category_GET } from '../../core/models';
import { Subscription } from '../../../../node_modules/rxjs';
import { Option } from '../../core/models/data/options';
import { PageEvent } from '../../../../node_modules/@angular/material/paginator';

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
  filters: Option[] = [
  ] 
  filterName = '类型'
  orders: Option[] = [
    { value: 'title', hans: '标题' },
    { value: 'category', hans: '类型' },
    { value: 'created', hans: '创建时间' },
    { value: 'modified', hans: '最后修改时间' }
  ]
  pageSize = 10
  pageSizeOptions: number[] = [5, 10, 25, 100]
  pageEvent: PageEvent
  length: 100
  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.articleService.get()
    this.categoryService.get()
    this.initBlog()
  }
  initBlog() {
    this.articlesSubscription = this.articleService.articles$
      .subscribe(
        articles => this.articles = articles,
        error => console.log(error)
      )
    this.categoriesSubscription = this.categoryService.categories$
      .subscribe(
        categories => {
          this.categories = categories
          this.filters = categories.map(category => {
            return {
              value: category.id,
              hans: category.name
            }
          })
        },
        error => console.log(error)
      )
  }
}
