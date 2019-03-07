import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule, MarkedOptions } from '../../../node_modules/ngx-markdown';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { HeaderComponent, LoginDialog, LogoutDialog } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { 
  MatIconModule,
} from '@angular/material'
import { LMarkdownEditorModule } from 'ngx-markdown-editor'
import { RouterModule } from '../../../node_modules/@angular/router';
@NgModule({
  declarations: [
    HeaderComponent,
    LoginDialog,
    LogoutDialog,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MarkdownModule.forRoot(
      // {
      // provide: MarkedOptions,
      // useValue: {
      //   gfm: true,
      //   tables: true,
      //   breaks: false,
      //   pedantic: false,
      //   sanitize: false,
      //   smartLists: true,
      //   smartypants: false,
      // },
      // }
    ),
    RouterModule
  ],
  entryComponents: [
    LoginDialog,
    LogoutDialog
  ],
  exports: [
    CommonModule,    
    MatIconModule,
    MatMenuModule,
    HeaderComponent,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FooterComponent,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MarkdownModule,
    LMarkdownEditorModule
  ]
})
export class SharedModule { }
