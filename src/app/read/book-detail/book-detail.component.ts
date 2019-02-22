import { Component, OnInit, Input } from '@angular/core';
import { Book_GET } from '../../core/models';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.styl']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book_GET
  constructor() { }

  ngOnInit() {
  }

}
