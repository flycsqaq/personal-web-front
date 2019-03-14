import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolverService } from './core/services/user-resolve.service';
import { AppComponent } from './app.component';
import { MeComponent } from './me/me.component';

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
    path: 'about-me',
    component: MeComponent,
    resolve:{
      boo: 
      UserResolverService
    }
  },
  {
    path: '**',
    redirectTo: 'blog'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
