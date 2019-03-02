import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Article_GET, Article_POST } from '../../models';
import { ApiService } from '../api.service';
import { ArticleShowService } from '../../../blog/article/article-show.service';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class ArticleService {
  public articles: BehaviorSubject<Article_GET[]> = new BehaviorSubject([])
  public articles$ = this.articles.asObservable()
  private base_url = 'api/blog/article/'
  private isInit: boolean = false
  constructor(
    private apiService: ApiService,
  ) { }

  get(): void {
    if (!this.isInit) {
      this.apiService.get(this.base_url)
        .subscribe(articles => {
          this.articles.next(articles)
          this.isInit = true
        })
    }
  }
  update(): void {
    this.apiService.get(this.base_url)
      .subscribe(articles => this.articles.next(articles))
  }
  post(article: Article_POST): void {
    this.apiService.post(this.base_url, article)
      .subscribe(_ => this.update())
  }
  put(id: number, article: Article_POST): void {
    this.apiService.put(`${this.base_url}${id}/`, article)
      .subscribe(_ => this.update())
  }
  delete(id: number): void {
    this.apiService.delete(`${this.base_url}${id}/`)
      .subscribe(_ => this.update())
  }
}