import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { MaterialModule } from '../material/material.module';
// import { MarkdownModule } from 'ngx-markdown'
import { LMarkdownEditorModule } from '../../../node_modules/ngx-markdown-editor';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleReadComponent } from './article-read/article-read.component';
import { MarkdownModule } from '../../../node_modules/ngx-markdown';
@NgModule({
  imports: [
    BlogRoutingModule,
    SharedModule,
    CommonModule,
    MaterialModule,
    LMarkdownEditorModule,
    MarkdownModule.forRoot(),
    FormsModule
  ],
  declarations: [
    ArticleComponent,
    ArticleDetailComponent,
    ArticleAddComponent,
    ArticleReadComponent,
  ]
})
export class BlogModule {}