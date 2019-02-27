import { NgModule } from "@angular/core";
import { BookComponent } from './book/book.component';
import { ReadRoutingModule } from './read-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { MaterialModule } from '../material/material.module';
import { BookReadComponent } from './book-read/book-read.component';
import { BookAddComponent } from './book-add/book-add.component';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    ReadRoutingModule,
    SharedModule,
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    BookComponent, 
    BookDetailComponent, BookReadComponent, BookAddComponent
  ]
})
export class ReadModule {}