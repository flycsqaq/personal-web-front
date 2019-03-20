import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Article, Category } from '../../core/models';
import { UserService } from '../../core/services/user.service';
import { ArticleService } from '../../core/services/blog.service';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.styl']
})
export class ArticleReadComponent implements OnInit {
  article: Article
  categories: Category[]
  articleModify: Article
  isModify: boolean = false
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      const article = data.article
      this.article = data.article
      this.categories = data.category
      this.articleModify = JSON.parse(JSON.stringify(data.article))
    })
  }
  put() {
    this.articleService.put(this.articleModify.id, this.articleModify)
      .subscribe(
        res => {
          this.isModify = false
          this.article = JSON.parse(JSON.stringify(this.articleModify))
        }
      )
  }
}
