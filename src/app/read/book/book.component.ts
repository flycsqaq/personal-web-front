import { Component, OnInit } from '@angular/core';
import { BookService, InspirationService } from '../../core/services';
import { Book_GET, Inspiration_GET } from '../../core/models';
import { Subscription } from '../../../../node_modules/rxjs';
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
