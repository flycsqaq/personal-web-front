import { Injectable } from '@angular/core';
import { ArticleService } from '../../core/services';
import { Article_GET } from '../../core/models';
import { BehaviorSubject } from '../../../../node_modules/rxjs';
import { sort_by, reverse_by } from '../../core/fun';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class ArticleShowService {
  private articles: Article_GET[] = []
  public articlesFilter: Article_GET[] = []
  public pageSize: BehaviorSubject<number> = new BehaviorSubject(10)
  public pageIndex: BehaviorSubject<number> = new BehaviorSubject(0)
  public filter: BehaviorSubject<number> = new BehaviorSubject(0)
  public order: BehaviorSubject<string> = new BehaviorSubject('id')
  public articleShowPublic: BehaviorSubject<Article_GET[]> = new BehaviorSubject([])
  public orderMethod: BehaviorSubject<boolean> = new BehaviorSubject(true)
  constructor(
    private articleSerice: ArticleService
  ) { }
  get():void {
    this.articleSerice.get()
  }

  private changeFilter(): Article_GET[] {
    let articlesFilter = this.articles
    if (articlesFilter.length === 0) {
      return []
    }
    const filter = this.filter['_value']
    if (filter !== 0) {
      articlesFilter = articlesFilter.filter(article => article.category === filter)
    }
    return articlesFilter
  }
  private handleChangeFilter(): void {
    this.articlesFilter = this.changeFilter()
  }

  private ChangeShow(): Article_GET[] {
    const articles = this.articlesFilter
    const pageSize = this.pageSize['_value']
    const pageIndex = this.pageIndex['_value']
    const order = this.order['_value']
    const orderMethod = this.orderMethod['_value']
    if (articles.length === 0) {
      return []
    }
    let articlesOrder
    if (orderMethod) {
      articlesOrder = sort_by(articles, order)
    } else {
      articlesOrder = reverse_by(articles, order)
    }
    const start = pageIndex * pageSize
    const end = start + pageSize
    return articlesOrder.slice(start, end)
  }
  private handleChangeShow(): void {
    this.articleShowPublic.next(this.ChangeShow())
  }

  private setOneStream(sub: any, fun = function(){}): any {
    return sub.subscribe(res => {
        fun.call(this)
        this.handleChangeShow()
      }, 
      error => console.log(error)
    )
  }

  public setStream(): void {
    this.articleSerice.articles$
      .subscribe(articles => {
        this.articles = articles
        this.handleChangeFilter()
        this.handleChangeShow()
      },
        error => console.log(error))
    this.setOneStream(this.pageSize)
    this.setOneStream(this.pageIndex)
    this.setOneStream(this.filter, this.handleChangeFilter)
    this.setOneStream(this.orderMethod)
    this.setOneStream(this.order)
  }
}