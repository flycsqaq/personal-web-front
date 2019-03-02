import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Article_GET, Category_GET } from '../../core/models';
import { ArticleService, CategoryService } from '../../core/services';
import { Subscription } from '../../../../node_modules/rxjs';
import { filter, combineLatest } from '../../../../node_modules/rxjs/operators';
import { getPluralCategory } from '../../../../node_modules/@angular/common/src/i18n/localization';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.styl']
})
export class ArticleReadComponent implements OnInit {
  public cache
  article: Article_GET
  categories: Category_GET[] = []
  category: string
  subscription: Subscription
  isWrite: boolean = false
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.cache = window.localStorage
    this.articleService.get()
    this.categoryService.get()
    this.getArticle()
  }
  getArticle() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subscription = this.articleService.articles$
      .subscribe(
        articles => {
          this.article = articles.find(article => article.id === id)
          this.getCategory()
        },
        error => console.log(error)
      )
    this.categoryService.categories$
      .subscribe(
        categories => {
          this.categories = categories,
          this.getCategory()
        },
        error => console.log(error)
      )
  }
  getCategory() {
    if (this.categories.length > 0 && this.article) {
      const articleCate = this.article.category
      this.category = this.categories.find(category => articleCate === category.id).name
    }
  }
  handleEdit() {
    this.isWrite = true
  }
  handleRead() {
    this.isWrite = false
  }
  
  handlePut() {
    const { title, abstract, body, reference, category } = this.article
    const article = {
      title,
      abstract,
      body,
      reference,
      category
    }
    this.articleService.put(this.article.id, article)
  }
}
