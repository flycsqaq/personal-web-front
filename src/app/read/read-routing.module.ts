import { Routes, RouterModule } from "@angular/router"
import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core'

const routes: Routes = [
  {
    path: 'read',
    component: BookComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadRoutingModule {}