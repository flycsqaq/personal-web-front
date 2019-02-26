import { NgModule } from "../../../node_modules/@angular/core";
import { MaterialModule } from '../material/material.module';
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { OrderComponent } from './order/order.component';
import { AddBUttonComponent } from './add-button/add.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { LMarkdownEditorModule } from '../../../node_modules/ngx-markdown-editor';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    FilterComponent,
    OrderComponent,
    AddBUttonComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    LMarkdownEditorModule,
    FormsModule
  ],
  exports: [
    FilterComponent,
    OrderComponent,
    AddBUttonComponent,
  ]
})
export class SharedModule {}