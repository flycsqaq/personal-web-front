import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Article, Category } from '../../core/models';
import { ArticleFSService } from './article-fs.service';
import { FormBuilder } from '../../../../node_modules/@angular/forms';
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
  osForm = this.fb.group({
    filter: [0],
    orderName: ['id'],
    orderMethod: ['positive']
  })
  orders = [
    { value: 'id', hans: '默认' },
    { value: 'title', hans: '标题' },
    { value: 'category', hans: '类型' },
    { value: 'created', hans: '创建时间' },
    { value: 'modified', hans: '最后修改时间' }
  ]
  pageSizeOptions: number[] = [5, 10, 25, 100]
  pageEvent: PageEvent
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public articleFSService: ArticleFSService,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
        const ar =  this.articleFSService
        const categories = data.category
        ar.categories = categories
        const articles = data.article.map(art =>{
          art.categoryName = categories.find(cat => cat.id === art.category).name
          return art
        })
        ar.articles = articles
        ar.articlesFilter = articles
        ar.articlesOrder = articles
        ar.articlesShow = articles
      })
    this.osForm.valueChanges.subscribe(
      x => this.articleFSService.handleChange(x)
    )
    this.loading = false
  }
  handlePage(e): void {
    this.articleFSService.handleChangeShow(e)
  }
}
