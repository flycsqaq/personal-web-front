import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  public nav: object = [
    { link: '', hans: '首页' },
    { link: 'blog', hans: '博客' },
    { link: 'read', hans: '阅读' },
    { link: 'plan', hans: '计划'  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
