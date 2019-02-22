import { Component, OnInit, Input } from '@angular/core';
import { Article_GET } from '../../core/models';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.styl']
})
export class ArticleDetailComponent implements OnInit {
  @Input() article: Article_GET
  constructor() { }

  ngOnInit() {
    console.log(this.article)
  }

}
