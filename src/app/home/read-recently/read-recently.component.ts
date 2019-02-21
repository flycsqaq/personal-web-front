import { Component, OnInit } from '@angular/core';
import { BookService } from '../../core/services';
import { Book_GET } from '../../core/models';
import { Subscription } from '../../../../node_modules/rxjs';

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
        books => this.recently_books = books,
        error => console.log(error)
      )
  }

}
