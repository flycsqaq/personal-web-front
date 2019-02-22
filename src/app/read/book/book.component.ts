import { Component, OnInit } from '@angular/core';
import { BookService, InspirationService } from '../../core/services';
import { Book_GET, Inspiration_GET } from '../../core/models';
import { Subscription } from '../../../../node_modules/rxjs';
import { Option } from '../../core/models/data/options';
import { PageEvent } from '../../../../node_modules/@angular/material/paginator';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.styl']
})
export class BookComponent implements OnInit {
  books: Book_GET[] = []
  booksSubscription: Subscription
  inspirations: Inspiration_GET[] = []
  inspirationsSubsciption: Subscription
  filters: Option[] = [
    { value: true, hans: '是' },
    { value: false, hans: '否'  }
  ]
  filterName: string = '是否完结'
  orders: Option[] = [
    { value: 'anticipated_end', hans: '预计结束时间' },
    { value: 'last_read_time', hans: '最后阅读时间' }
  ]
  pageSize = 10
  pageSizeOptions: number[] = [5, 10, 25, 100]
  pageEvent: PageEvent
  constructor(
    private bookService: BookService,
    private inspirationService: InspirationService
  ) { }

  ngOnInit() {
    this.bookService.get()
    this.inspirationService.get()
    this.initBooks()
  }
  initBooks() {
    this.booksSubscription = this.bookService.books$
    .subscribe(
      books => this.books = books,
      error => console.log(error)
    )
    this.inspirationsSubsciption = this.inspirationService.inspirations$
      .subscribe(
        inspirations => this.inspirations = inspirations,
        error => console.log(error)
      )
  }
}
