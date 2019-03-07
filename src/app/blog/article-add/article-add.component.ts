import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Article } from '../../core/models';
import { FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { ArticleService } from '../../core/services/blog.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.styl']
})
export class ArticleAddComponent implements OnInit {
  categories: Article
  articleForm = this.fb.group({
    title: ['', Validators.required],
    abstract: [''],
    body: ['', Validators.required],
    reference: [''],
    category: ['', Validators.required]
  })
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.categories = data.category
      }
    )
  }
  post() {
    const body = this.articleForm.value
    this.articleService.post(body)
      .subscribe(res => {
        this.router.navigate(['blog'])
      })
  }
}
