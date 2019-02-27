import { Injectable } from '@angular/core';
import { BookService, InspirationService } from '../../core/services';
import { BehaviorSubject } from '../../../../node_modules/rxjs';
import { Book_GET } from '../../core/models';
import { sort_by } from '../../core/fun';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class BookShowService {
  books: Book_GET[] = []
  booksFilter: Book_GET[] = []
  order: BehaviorSubject<string> = new BehaviorSubject('id')
  filter: BehaviorSubject<boolean | number> = new BehaviorSubject(0)
  pageSize: BehaviorSubject<number> = new BehaviorSubject(10)
  pageIndex: BehaviorSubject<number> = new BehaviorSubject(0)
  booksShow: BehaviorSubject<Book_GET[]> = new BehaviorSubject([])
  constructor(
    private bookService: BookService,
    private inspirationService: InspirationService
  ) { }
  private changeFilter(): Book_GET[] {
    let booksFilter = this.books
    if (booksFilter.length === 0) {
      return []
    }
    const filter = this.filter['_value']
    if (filter !== 0) {
      booksFilter = booksFilter.filter(book => book.isCompleted === filter)
    }
    return booksFilter
  }
  private handleChangeFilter(): void {
    this.booksFilter = this.changeFilter()
  }
  private changeShow(): Book_GET[] {
    const booksShow = this.booksFilter
    const pageSize = this.pageSize['_value']
    const pageIndex = this.pageIndex['_value']
    const order = this.order['_value']
    if (booksShow.length === 0) {
      return []
    }
    const booksOrder = sort_by(booksShow, order)
    const start = pageIndex * pageSize
    const end = start + pageSize
    return booksOrder.slice(start, end)
  }
  private handleChangeShow():void {
    this.booksShow.next(this.changeShow())
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
    this.bookService.books$
      .subscribe(book => {
        this.books = book
        this.handleChangeFilter()
        this.handleChangeShow()
      },
      error => console.log(error))
    this.setOneStream(this.pageSize)
    this.setOneStream(this.pageIndex)
    this.setOneStream(this.filter, this.handleChangeFilter)
    this.setOneStream(this.order)
  }
  
}