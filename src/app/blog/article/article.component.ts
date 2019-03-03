import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services';
import { Article_GET, Category_GET } from '../../core/models';
import { Option } from '../../core/models/data/options';
import { PageEvent } from '../../../../node_modules/@angular/material/paginator';
import { ArticleShowService } from './article-show.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.styl'],
  providers: [
    ArticleShowService
  ]
})
export class ArticleComponent implements OnInit {
  routerPath = 'add'
  articles: Article_GET[] = [] 
  categories: Category_GET[] = []
  filters: Option[] = []
  filterName = '类型'
  orders: Option[] = [
    { value: 'title', hans: '标题' },
    { value: 'category', hans: '类型' },
    { value: 'created', hans: '创建时间' },
    { value: 'modified', hans: '最后修改时间' }
  ]
  pageSizeOptions: number[] = [5, 10, 25, 100]
  pageEvent: PageEvent
  constructor(
    private categoryService: CategoryService,
    public articleShowService: ArticleShowService
  ) { }
  ngOnInit() {
    this.articleShowService.get()
    this.categoryService.get()
    this.articleShowService.setStream()
    this.articleShowService.articleShowPublic
      .subscribe(articles => this.articles = articles, error => console.log(error))
    this.categoryService.categories$
      .subscribe(
        categories => {
          this.categories = categories
          this.filters = categories.map(category => {
            return {
              value: category.id,
              hans: category.name
            }
          })
        },
        error => console.log(error)
      )
    }
  handlePage(e): void {
      this.articleShowService.pageSize.next(e.pageSize)
      this.articleShowService.pageIndex.next(e.pageIndex)
    }
  changeFilter(e): void {
    this.articleShowService.filter.next(e)
    this.articleShowService.pageIndex.next(0)
  }
  changeOrder(e): void {
    this.articleShowService.order.next(e)
    this.articleShowService.pageIndex.next(0)
  }
  changeOrderMethod(): void {
    const orderMethod = this.articleShowService.orderMethod
    orderMethod.next(!orderMethod['_value'])
  }
}