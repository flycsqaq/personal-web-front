import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../core/services';
import { Subscription } from '../../../../node_modules/rxjs';
import { Article_GET } from '../../core/models';
import { sort_by } from '../../core/fun';
@Component({
  selector: 'app-blog-recently',
  templateUrl: './blog-recently.component.html',
  styleUrls: ['./blog-recently.component.styl']
})
export class BlogRecentlyComponent implements OnInit {
  recently_articles: Article_GET[] = []
  subscription: Subscription
  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articleService.get()
    this.subscription = this.articleService.articles$
      .subscribe(
        articles => this.recently_articles = sort_by(articles, 'created'),
        error => console.log(error)
      )
  }

}
