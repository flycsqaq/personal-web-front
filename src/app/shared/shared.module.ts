import { NgModule } from "../../../node_modules/@angular/core";
import { MaterialModule } from '../material/material.module';
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { OrderComponent } from './order/order.component';
import { AddBUttonComponent } from './add-button/add.component';

@NgModule({
  declarations: [
    FilterComponent,
    OrderComponent,
    AddBUttonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FilterComponent,
    OrderComponent,
    AddBUttonComponent
  ]
})
export class SharedModule {}