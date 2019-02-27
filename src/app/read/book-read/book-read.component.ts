import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { BookService, InspirationService } from '../../core/services';
import { Book_GET, Inspiration_GET } from '../../core/models';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.styl']
})
export class BookReadComponent implements OnInit {
  book: Book_GET
  inspirations: object[]
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private inspirationService: InspirationService
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
        books => this.book = books.find(books => books.id === id),
        error => console.log(error)
      )
    this.inspirationService.inspirations$
      .subscribe(
        inspirations => {
          if (inspirations.length > 0) {
            this.inspirations = inspirations.filter(ins => ins.book === id)
              .map(ins => {
                const insp = ins
                insp['isWrite'] = false
                return insp
              })
          }
        },
        error => console.log(error)
      )
  }
}
