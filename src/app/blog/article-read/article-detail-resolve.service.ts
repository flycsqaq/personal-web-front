import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ArticleService } from '../../core/services/blog.service';
import { CategoryService } from '../../core/services/categoryService';
import { Observable, of } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticleIDResolveService implements Resolve<any> {

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService
  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const id = +route.paramMap.get('id');
    return this.articleService.getDetail(id)
      .pipe(
        take(1),
        mergeMap(data => {
          return of(data)
        })
      )
  }
}