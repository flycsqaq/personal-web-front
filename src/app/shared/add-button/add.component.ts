import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-button',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.styl']
})
export class AddBUttonComponent implements OnInit {
  @Input() routerPath
  public cache
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cache = window.localStorage
  }
  handleToPath() {
    console.log(this.routerPath)
  }
}
