import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '../../../node_modules/@angular/router';
import { MarkdownModule } from '../../../node_modules/ngx-markdown';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FooterComponent } from './footer/footer.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { 
  MatIconModule,
} from '@angular/material'
import { LMarkdownEditorModule } from 'ngx-markdown-editor'

import { HeaderComponent, LoginDialog, LogoutDialog } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginDialog,
    LogoutDialog,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MarkdownModule.forRoot(
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
    LoadingComponent,
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
