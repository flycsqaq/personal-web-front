import { Component, OnInit } from '@angular/core';
import { Article_GET, Article_POST, Category_GET } from '../../core/models';
import { CategoryService, ArticleService } from '../../core/services';
import { Subscription } from '../../../../node_modules/rxjs';
import { FormBuilder } from '../../../../node_modules/@angular/forms';
import { Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.styl']
})
export class ArticleAddComponent implements OnInit {
  categories: Category_GET[] = []
  articleForm = this.fb.group({
    title: ['', Validators.required],
    abstract: [''],
    body: ['', Validators.required],
    reference: [''],
    category: [0]
  })
  constructor(
    private categoryService: CategoryService,
    private articleService: ArticleService,
    private fb: FormBuilder,
    private loaction: Location
  ) { }

  ngOnInit() {
    this.categoryService.get()
    this.categoryService.categories$
      .subscribe(
        category => this.categories = category,
        error => console.log(error)
      )
  }
  post() {
    this.articleService.post(this.articleForm.value)
  }
  init() {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      abstract: [''],
      body: ['', Validators.required],
      reference: [''],
      category: [0]
    })
  }
  goBack() {
    this.loaction.back()
  }
}
