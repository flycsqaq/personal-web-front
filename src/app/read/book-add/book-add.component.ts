import { Component, OnInit } from '@angular/core';
import { Book_GET, Book_POST } from '../../core/models';
import { BookService } from '../../core/services';
import { getYMD } from '../../core/fun/date';
import { FormBuilder } from '../../../../node_modules/@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.styl']
})
export class BookAddComponent implements OnInit {
  bookForm = this.fb.group({
    name: ['', Validators.required],
    page_total: [0, Validators.required],
    page_read: [0, Validators.required],
    start: ['', Validators.required],
    anticipated_end: ['', Validators.required],
    isCompleted: [false, Validators.required]
  })
  constructor(
    private bookService: BookService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }
  change(e) {
    this.bookForm.value.isCompleted = e
  }
  post() {
    const { name, page_total, page_read, start, anticipated_end, isCompleted } = this.bookForm.value
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
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      page_total: [0, Validators.required],
      page_read: [0, Validators.required],
      start: ['', Validators.required],
      anticipated_end: ['', Validators.required],
      isCompleted: [false, Validators.required]
    })
  }
}
