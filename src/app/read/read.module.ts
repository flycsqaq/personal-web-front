import { NgModule } from "@angular/core";
import { BookComponent } from './book/book.component';
import { ReadRoutingModule } from './read-routing.module';

@NgModule({
  imports: [
    ReadRoutingModule
  ],
  declarations: [BookComponent]
})
export class ReadModule {}