import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Inspiration_GET, Inspiration_POST } from '../../models';
import { ApiService } from '../api.service';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class InspirationService {
  private inspirations: BehaviorSubject<Inspiration_GET[]> = new BehaviorSubject([])
  public inspirations$ = this.inspirations.asObservable()
  private base_url = 'api/book/inspiration/'
  private isInit: boolean = false
  constructor(
    private apiService: ApiService
  ) { }

  get(): void {
    if (!this.isInit) {
      this.apiService.get(this.base_url)
        .subscribe(inspirations => {
          this.inspirations.next(inspirations)
          this.isInit = true
        })
    }
  }
  update(): void {
    this.apiService.get(this.base_url)
      .subscribe(inspirations => this.inspirations.next(inspirations))
  }
  post(inspiration: Inspiration_POST): void {
    this.apiService.post(this.base_url, inspiration)
      .subscribe(_ => this.update())
  }
  put(id: number, inspiration: Inspiration_POST): void {
    this.apiService.put(`${this.base_url}${id}/`, inspiration)
      .subscribe(_ => this.update())
  }
  delete(id: number): void {
    this.apiService.delete(`${this.base_url}${id}/`)
      .subscribe(_ => this.update())
  }
}