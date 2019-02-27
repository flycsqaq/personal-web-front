import { Component, OnInit, Input } from '@angular/core';
import { Book_GET, Inspiration_GET } from '../../core/models';
import { sort_by } from '../../core/fun';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.styl']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book_GET
  // @Input() inspiration: Inspiration_GET[]
  // inspirationFirst: Inspiration_GET
  constructor(
  ) { }

  ngOnInit() {
  }
  // ngOnChanges() {
  //   if (this.inspiration && this.inspiration.length > 0) {
  //     this.handleFindInspiration()
  //   }
  // }
  // handleFindInspiration() {
  //   const inspirations = sort_by(this.inspiration.filter(ins => ins.book === this.book.id), 'id')
  //   if (inspirations.length > 0) {
  //     this.inspirationFirst = inspirations[inspirations.length-1]
  //   }
  // }
}
