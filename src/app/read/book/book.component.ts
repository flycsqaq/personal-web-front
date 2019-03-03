import { Component, OnInit } from '@angular/core';
import { BookService, InspirationService } from '../../core/services';
import { Book_GET, Inspiration_GET } from '../../core/models';
import { Subscription } from '../../../../node_modules/rxjs';
import { Option } from '../../core/models/data/options';
import { PageEvent } from '../../../../node_modules/@angular/material/paginator';
import { BookShowService } from './book-show.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.styl'],
  providers: [
    BookShowService
  ]
})
export class BookComponent implements OnInit {
  books: Book_GET[] = []
  inspiration: Inspiration_GET[] = []
  routerPath: string = 'add'
  filters: Option[] = [
    { value: true, hans: '是' },
    { value: false, hans: '否'  }
  ]  
  filterName: string = '是否完成'
  orders: Option[] = [
    { value: 'anticipated_end', hans: '预计结束时间' },
    { value: 'last_read_time', hans: '最后阅读时间' }
  ]
  pageSizeOptions: number[] = [5, 10, 25, 100]
  pageEvent: PageEvent
  constructor(
    private bookService: BookService,
    private inspirationService: InspirationService,
    private bookShowService: BookShowService
  ) { }

  ngOnInit() {
    this.bookService.get()
    this.inspirationService.get()
    this.bookShowService.setStream()
    this.bookShowService.booksShow
      .subscribe(
        books => this.books = books,
        error => console.log(error)
      )
    this.inspirationService.inspirations$
      .subscribe(
        inspiration => {
          this.inspiration = inspiration
        },
        error => console.log(error)
      )
  }
  handlePage(e): void {
    this.bookShowService.pageSize.next(e.pageSize)
    this.bookShowService.pageIndex.next(e.pageIndex)
  }
  changeFilter(e): void {
    this.bookShowService.filter.next(e)
    this.bookShowService.pageIndex.next(0)
  }
  changeOrder(e): void {
    this.bookShowService.order.next(e)
    this.bookShowService.pageIndex.next(0)
  }
  changeOrderMethod(): void {
    const orderMethod = this.bookShowService.orderMethod
    orderMethod.next(!orderMethod['_value'])
  }
}

