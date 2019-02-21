import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { PlanCompleted_GET, PlanCompleted_POST } from '../../models';
import { ApiService } from '../api.service';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class CompletedService {
  private completeds: BehaviorSubject<PlanCompleted_GET[]> = new BehaviorSubject([])
  public completeds$ = this.completeds.asObservable()
  private base_url = 'api/plan/completed/'
  private isInit: boolean = false
  constructor(
    private apiService: ApiService
  ) { }

  get(): void {
    if (!this.isInit) {
      this.apiService.get(this.base_url)
        .subscribe(completeds => {
          this.completeds.next(completeds)
          this.isInit = true
        })
    }
  }
  update(): void {
    this.apiService.get(this.base_url)
      .subscribe(completeds => this.completeds.next(completeds))
  }
  post(completed: PlanCompleted_POST): void {
    this.apiService.post(this.base_url, completed)
      .subscribe(_ => this.update())
  }
  put(id: number, completed: PlanCompleted_POST): void {
    this.apiService.put(`${this.base_url}${id}/`, completed)
      .subscribe(_ => this.update())
  }
  delete(id: number): void {
    this.apiService.delete(`${this.base_url}${id}/`)
      .subscribe(_ => this.update())
  }
}