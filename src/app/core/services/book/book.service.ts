import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from '../api.service';
import { Book_GET, Book_POST } from '../../models';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class BookService {
  private books: BehaviorSubject<Book_GET[]> = new BehaviorSubject([])
  public books$ = this.books.asObservable()
  private base_url = 'api/book/book/'
  private isInit: boolean = false
  constructor(
    private apiService: ApiService
  ) { }

  get(): void {
    if (!this.isInit) {
      this.apiService.get(this.base_url)
        .subscribe(books => {
          this.books.next(books)
          this.isInit = true
        })
    }
  }
  update(): void {
    this.apiService.get(this.base_url)
      .subscribe(books => this.books.next(books))
  }
  post(book: Book_POST): void {
    this.apiService.post(this.base_url, book)
      .subscribe(_ => this.update())
  }
  put(id: number, book: Book_POST): void {
    this.apiService.put(`${this.base_url}${id}/`, book)
      .subscribe(_ => this.update())
  }
  delete(id: number): void {
    this.apiService.delete(`${this.base_url}${id}/`)
      .subscribe(_ => this.update())
  }
}