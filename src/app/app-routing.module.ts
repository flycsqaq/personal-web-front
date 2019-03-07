import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolverService } from './core/services/user-resolve.service';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'blog',
    resolve:{
      boo: 
      UserResolverService
    },
    loadChildren: './blog/blog.module#BlogModule'
  },
  {
    path: '**',
    redirectTo: 'blog'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
