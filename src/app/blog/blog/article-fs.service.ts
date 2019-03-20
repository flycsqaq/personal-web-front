import { Injectable } from '@angular/core';
import { Subject } from '../../../../node_modules/rxjs';
import { Article, Page, Order } from '../../core/models';
import { combineLatest } from 'rxjs'
@Injectable()
export class ArticleFSService {
  articlesSource: Subject<Article[]> = new Subject()
  filterSource : Subject<string> = new Subject()
  pageSource: Subject<Page> = new Subject() 
  orderSource: Subject<Order> = new Subject()

  articles$ = this.articlesSource.asObservable()
  filter$ = this.filterSource.asObservable()
  order$ = this.orderSource.asObservable()
  page$ = this.pageSource.asObservable()

  articleFilter$ = combineLatest(this.articles$,this.filter$, (articles, filter) => {
    return filter === '0' ? articles: articles.filter(article => article.category === Number(filter))
  })

  articleShow$ = combineLatest(this.articleFilter$, this.order$, this.page$, (articles, order, page) => {
    const { pageIndex, pageSize } = page
    const { orderName, orderMethod } = order
    const start = pageIndex * pageSize
    const end = start + pageSize
    if (orderMethod === 'positive') {
      return articles.sort((left, right) => left[orderName] - right[orderName]).slice(start, end)
    }
    return articles.sort((left, right) => right[orderName] - left[orderName]).slice(start, end)
  })
  constructor(
  ) {}
}
