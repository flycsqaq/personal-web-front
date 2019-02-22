import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.styl']
})
export class AddBUttonComponent implements OnInit {
  public cache
  constructor() { }

  ngOnInit() {
    this.cache = window.localStorage
  }

}
