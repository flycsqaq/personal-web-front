import { Routes, RouterModule } from "@angular/router"
import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core'
import { BookAddComponent } from './book-add/book-add.component';
import { BookReadComponent } from './book-read/book-read.component';

const routes: Routes = [
  {
    path: 'read',
    component: BookComponent
  },
  {
    path: 'read/add',
    component: BookAddComponent
  },
  {
    path: 'read/:id',
    component: BookReadComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadRoutingModule {}