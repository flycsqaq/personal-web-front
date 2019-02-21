import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from '../api.service';
import { PlanWeb_GET, PlanWeb_POST } from '../../models';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class WebService {
  private webs: BehaviorSubject<PlanWeb_GET[]> = new BehaviorSubject([])
  public webs$ = this.webs.asObservable()
  private base_url = 'api/plan/web/'
  private isInit: boolean = false
  constructor(
    private apiService: ApiService
  ) { }

  get(): void {
    if (!this.isInit) {
      this.apiService.get(this.base_url)
        .subscribe(webs => {
          this.webs.next(webs)
          this.isInit = true
        })
    }
  }
  update(): void {
    this.apiService.get(this.base_url)
      .subscribe(webs => this.webs.next(webs))
  }
  post(web: PlanWeb_POST): void {
    this.apiService.post(this.base_url, web)
      .subscribe(_ => this.update())
  }
  put(id: number, web: PlanWeb_POST): void {
    this.apiService.put(`${this.base_url}${id}/`, web)
      .subscribe(_ => this.update())
  }
  delete(id: number): void {
    this.apiService.delete(`${this.base_url}${id}/`)
      .subscribe(_ => this.update())
  }
}