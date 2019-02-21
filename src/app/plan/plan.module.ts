import { NgModule } from "../../../node_modules/@angular/core";
import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan/plan.component';

@NgModule({
  declarations: [
    PlanComponent
  ],
  imports: [
    PlanRoutingModule
  ]
})
export class PlanModule {}