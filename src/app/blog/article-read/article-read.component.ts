import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Article_GET, Category_GET } from '../../core/models';
import { ArticleService, CategoryService } from '../../core/services';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.styl']
})
export class ArticleReadComponent implements OnInit {
  public cache
  article: Article_GET
  categories: Category_GET[]
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
        articles => this.article = articles.find(article => article.id === id),
        error => console.log(error)
      )
    this.categoryService.categories$
      .subscribe(
        categories => this.categories = categories,
        error => console.log(error)
      )
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
