import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { PlanPersonal_GET, PlanPersonal_POST } from '../../models';
import { ApiService } from '../api.service';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class PersonalService {
  private personals: BehaviorSubject<PlanPersonal_GET[]> = new BehaviorSubject([])
  public $personals = this.personals.asObservable()
  private base_url = 'api/plan/personal/'
  private isInit: boolean = false
  constructor(
    private apiService: ApiService
  ) { }

  get(): void {
    if (!this.isInit) {
      this.apiService.get(this.base_url)
        .subscribe(personals => {
          this.personals.next(personals)
          this.isInit = true
        })
    }
  }
  update(): void {
    this.apiService.get(this.base_url)
      .subscribe(personals => this.personals.next(personals))
  }
  post(personal: PlanPersonal_POST): void {
    this.apiService.post(this.base_url, personal)
      .subscribe(_ => this.update())
  }
  put(id: number, personal: PlanPersonal_POST): void {
    this.apiService.put(`${this.base_url}${id}/`, personal)
      .subscribe(_ => this.update())
  }
  delete(id: number): void {
    this.apiService.delete(`${this.base_url}${id}/`)
      .subscribe(_ => this.update())
  }
}