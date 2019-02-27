import { Component, OnInit } from '@angular/core';
import { Book_GET, Book_POST } from '../../core/models';
import { BookService } from '../../core/services';
import { getYMD } from '../../core/fun/date';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.styl']
})
export class BookAddComponent implements OnInit {
  book: Book_POST = {
    name: '',
    page_total: 0,
    page_read: 0,
    start: '',
    anticipated_end: '',
    isCompleted: false
  }
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
  }
  change(e) {
    this.book.isCompleted = !this.book.isCompleted
  }
  post() {
    const { name, page_total, page_read, start, anticipated_end, isCompleted } = this.book
    const startTime = getYMD(new Date(start))
    const endTime = getYMD(new Date(anticipated_end))
    let time = {
      name,
      page_total,
      page_read,
      isCompleted,
      start: startTime,
      anticipated_end: endTime
    }
    this.bookService.post(time)
  }
  init() {
    this.book = {
      name: '',
      page_total: 0,
      page_read: 0,
      start: '',
      anticipated_end: '',
      isCompleted: false
    }
  }
  startChange(e) {
    console.log(e)
  }
}
