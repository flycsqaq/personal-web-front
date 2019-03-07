import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ArticleService } from '../../core/services/blog.service';
import { CategoryService } from '../../core/services/categoryService';
import { Observable, of } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticlesResolveService implements Resolve<any> {

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService
  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.articleService.get()
      .pipe(
        take(1),
        mergeMap(data => {
          return of(data)
        })
      )
  }
}