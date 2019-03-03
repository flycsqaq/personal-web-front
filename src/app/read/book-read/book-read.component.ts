import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { BookService, InspirationService, UserService } from '../../core/services';
import { Book_GET, Inspiration_GET, Inspiration_POST } from '../../core/models';
import { getYMD } from '../../core/fun/date';
import { FormBuilder } from '../../../../node_modules/@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.styl']
})
export class BookReadComponent implements OnInit {
  book: Book_GET
  initBook: string
  inspiration = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required]
  })
  inspirations: object[] = []
  isWrite: boolean = false
  isAdd: boolean = false
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private inspirationService: InspirationService,
    public userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookService.get()
    this.inspirationService.get()
    this.init()
  }
  init() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.bookService.books$
      .subscribe(
        books => {
          this.book = books.find(books => books.id === id)
          this.initBook = JSON.stringify(this.book)
        },
        error => console.log(error)
      )
    this.inspirationService.inspirations$
      .subscribe(
        inspirations => {
          if (inspirations.length > 0) {
            this.inspirations = inspirations.filter(ins => ins.book === id)
          }
        },
        error => console.log(error)
      )
  }
  initIns() {
    this.inspiration = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    })
  }
  postIns() {
    const { title, body } = this.inspiration.value
    const ins = {
      title,
      body,
      book: this.book.id
    }
    this.inspirationService.post(ins)
  }
  change(e) {
    this.book.isCompleted = !this.book.isCompleted
  }
  cancel() {
    this.isWrite = false
    this.book = JSON.parse(this.initBook)
  }
  put() {
    const { name, page_total, page_read, start, anticipated_end, isCompleted } = this.book
    let startTime, endTime
    if (typeof start === 'string') {
      startTime = start
    } else {
      startTime = getYMD(new Date(start))
    }
    if (typeof anticipated_end === 'string') {
      endTime = anticipated_end
    } else {
      endTime = getYMD(new Date(anticipated_end))
    }
    let time = {
      name,
      page_total,
      page_read,
      isCompleted,
      start: startTime,
      anticipated_end: endTime
    }
    this.bookService.put(this.book.id, time)
  }
}
