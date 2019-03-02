import { Component, OnInit } from '@angular/core';
import { BookService } from '../../core/services';
import { Book_GET } from '../../core/models';
import { Subscription } from '../../../../node_modules/rxjs';
import { reverse_by } from '../../core/fun';

@Component({
  selector: 'app-read-recently',
  templateUrl: './read-recently.component.html',
  styleUrls: ['./read-recently.component.styl']
})
export class ReadRecentlyComponent implements OnInit {
  recently_books: Book_GET[] = []
  subscription: Subscription
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.get()
    this.subscription = this.bookService.books$
      .subscribe(
        books => this.recently_books = reverse_by(books, 'last_read_time').slice(0, 3).map(book => {
          const $book = book
          $book.link = `read/${$book.id}`
          return $book
        }),
        error => console.log(error)
      )
  }

}
