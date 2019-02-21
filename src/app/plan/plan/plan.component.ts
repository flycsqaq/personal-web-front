import { Component, OnInit } from '@angular/core';
import { WebService, CompletedService, PersonalService } from '../../core/services';
import { PlanPersonal_GET, PlanWeb_GET, PlanCompleted_GET } from '../../core/models';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.styl']
})
export class PlanComponent implements OnInit {
  personalPlan: PlanPersonal_GET[] = []
  webPlan: PlanWeb_GET[] = []
  completedPlan: PlanCompleted_GET[] = []
  personalSubscription: Subscription
  webSubscription: Subscription
  completedSubscription: Subscription
  constructor(
    private personalService: PersonalService,
    private webService: WebService,
    private completedService: CompletedService
  ) { }

  ngOnInit() {
    this.personalService.get()
    this.webService.get()
    this.completedService.get()
    this.initPlan()
  }
  
  initPlan() {
    this.personalSubscription = this.personalService.$personals
    .subscribe(
      personals => this.personalPlan = personals,
      error => console.log(error)
    )
  this.webSubscription = this.webService.webs$
    .subscribe(
      webs => this.webPlan = webs,
      error => console.log(error)
    )
  this.completedSubscription = this.completedService.completeds$
    .subscribe(
      completeds => this.completedPlan = completeds,
      error => console.log(error)
    )
  }
}
