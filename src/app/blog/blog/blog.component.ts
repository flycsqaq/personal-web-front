import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Article, Category } from '../../core/models';
import { ArticleFSService } from './article-fs.service';
import { FormBuilder, FormControl } from '../../../../node_modules/@angular/forms';
import { PageEvent } from '../../../../node_modules/@angular/material/paginator';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.styl'],
  providers: [ArticleFSService]
})
export class BlogComponent implements OnInit {
  loading = true
  articles: Article[] = []
  categories: Category[] = []


  orderForm = this.fb.group({
    orderName: ['id'],
    orderMethod: ['positive']
  })
  filterForm = new FormControl('0')
  orders = [
    { value: 'id', hans: '默认' },
    { value: 'title', hans: '标题' },
    { value: 'category', hans: '类型' },
    { value: 'created', hans: '创建时间' },
    { value: 'modified', hans: '最后修改时间' }
  ]
  pageLength: number
  pageSize: number =  0
  pageIndex: number = 0
  pageSizeOptions: number[] = [5, 10, 25, 100]
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public articleFSService: ArticleFSService,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.handleSubscribe()
    this.route.data.subscribe(data => {
      const ar =  this.articleFSService
      const categories = data.category
      this.categories = categories

      const articles = data.article.map(art =>{
        art.categoryName = categories.find(cat => cat.id === art.category).name
        return art
      })
      ar.articlesSource.next(articles)
      ar.filterSource.next('0')
      ar.pageSource.next({pageIndex: 0, pageSize: 10})
      ar.orderSource.next({orderName: 'id', orderMethod: 'positive'})
    })
    this.loading = false
  }
  handleSubscribe() {
    this.filterForm.valueChanges.subscribe(
      x => this.articleFSService.filterSource.next(x),
      error => console.log(error)
    )
    this.orderForm.valueChanges.subscribe(
      x => this.articleFSService.orderSource.next(x),
      err => console.log(err)
    )
    const ar =  this.articleFSService
    ar.articleShow$.subscribe(
      article => this.articles = article,
      error => console.log(error)
    )
    ar.articleFilter$.subscribe(
      articles => this.pageLength = articles.length,
      err => console.log(err)
    )
  }
  handlePage(e) {
    const { pageIndex, pageSize } = e
    this.articleFSService.pageSource.next({pageIndex, pageSize})
  }
}
