import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from '../api.service';
import { Category_GET, Category_POST } from '../../models';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class CategoryService {
  private categories: BehaviorSubject<Category_GET[]> = new BehaviorSubject([])
  public categories$ = this.categories.asObservable()
  private base_url = 'api/blog/category/'
  private isInit: boolean = false
  constructor(
    private apiService: ApiService
  ) { }

  get(): void {
    if (!this.isInit) {
      this.apiService.get(this.base_url)
        .subscribe(categories => {
          this.categories.next(categories)
          this.isInit = true
        })
    }
  }
  update(): void {
    this.apiService.get(this.base_url)
      .subscribe(categories => this.categories.next(categories))
  }
  post(category: Category_POST): void {
    this.apiService.post(this.base_url, category)
      .subscribe(_ => this.update())
  }
  put(id: number, category: Category_POST): void {
    this.apiService.put(`${this.base_url}${id}/`, category)
      .subscribe(_ => this.update())
  }
  delete(id: number): void {
    this.apiService.delete(`${this.base_url}${id}/`)
      .subscribe(_ => this.update())
  }
}