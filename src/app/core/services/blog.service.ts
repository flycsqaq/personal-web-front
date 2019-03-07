import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Article } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleService {
  private base_url = 'api/blog/article/'
  constructor(
    private apiService: ApiService
  ) { }
  get(): Observable<any> {
    return this.apiService.get(this.base_url)
  }
  getDetail(id: number) {
    return this.apiService.get(`${this.base_url}${id}/`)
  }
  post(article: Article): Observable<any> {
    return this.apiService.post(this.base_url, article)
  }
  put(id: number, article: Article): Observable<any> {
    return this.apiService.put(`${this.base_url}${id}/`, article)
  }
  delete(id: number): Observable<any> {
    return this.apiService.delete(`${this.base_url}${id}/`)
  }
}