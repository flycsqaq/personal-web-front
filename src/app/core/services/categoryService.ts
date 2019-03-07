import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Category } from '../models';

@Injectable()
export class CategoryService {
  base_url: string = 'api/blog/category/'
  constructor(
    private apiService: ApiService
  ) { }
  
  get(): Observable<any> {
    return this.apiService.get(this.base_url)
  }
  post(category: Category): Observable<any> {
    return this.apiService.post(this.base_url, category)
  }
  put(id: number, category: Category): Observable<any> {
    return this.apiService.put(`${this.base_url}${id}/`, category)
  }
  delete(id: number): Observable<any> {
    return this.apiService.delete(`${this.base_url}${id}/`)
  }
}