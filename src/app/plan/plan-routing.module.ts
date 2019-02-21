import { Routes, RouterModule } from "../../../node_modules/@angular/router";
import { PlanComponent } from './plan/plan.component';
import { NgModule } from '../../../node_modules/@angular/core';

const routes: Routes = [
  {
    path: 'plan',
    component: PlanComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PlanRoutingModule {}