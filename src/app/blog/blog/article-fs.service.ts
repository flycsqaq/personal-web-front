import { Injectable } from '@angular/core';
import { Observable, Subscribable, Subscriber, Subscription } from '../../../../node_modules/rxjs';
import { Article, Category } from '../../core/models';

@Injectable()
export class ArticleFSService {
  articles: Article[] = []
  categories: Category[]
  articlesFilter: Article[] = []
  articlesOrder: Article[] = []
  articlesShow: Article[] = []
  pageIndex: number = 0
  pageSize: number = 10
  constructor(
  ) {}
  handleChange(payload) {
    let { filter, orderName, orderMethod } = payload
    if (this.articles.length === 0) {
      return
    }
    filter = Number(filter)
    if (filter === 0) {
      this.articlesFilter = this.articles
    } else {
      this.articlesFilter = this.articles.filter(article => {
        return article.category === Number(filter)
      })
    }
    if (orderMethod === 'positive') {
      this.articlesOrder = this.articlesFilter.sort((left, right) => {
        return left[orderName] - right[orderName]
      })
    } else {
      this.articlesOrder = this.articlesFilter.sort((left, right) => {
        return right[orderName] - left[orderName]
      })
    }
    this.handleChangeShow()
  } 
  handleChangeShow(payload?): void {
    const pageIndex = payload? payload.pageIndex: this.pageIndex
    const pageSize = payload? payload.pageSize: this.pageSize
    const start = pageIndex * pageSize
    const end = pageSize + start
    this.articlesShow = this.articlesOrder.slice(start, end)
  }
}
