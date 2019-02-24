import { Component, OnInit, Input } from '@angular/core';
import { Article_GET } from '../../core/models';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.styl']
})
export class ArticleDetailComponent implements OnInit {
  @Input() article: Article_GET
  @Input() categories
  category: string
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.handleGetCategory()
  }
  handleGetCategory() {
    if (!this.categories) {
      return
    }
    const category = this.categories.find(item => item.id === this.article.category)
    if (category) {
      this.category = category.name
    }
  }
}
