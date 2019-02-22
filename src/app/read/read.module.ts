import { NgModule } from "@angular/core";
import { BookComponent } from './book/book.component';
import { ReadRoutingModule } from './read-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    ReadRoutingModule,
    SharedModule,
    CommonModule,
    MaterialModule
  ],
  declarations: [
    BookComponent, 
    BookDetailComponent
  ]
})
export class ReadModule {}