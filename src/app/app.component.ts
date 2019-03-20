import { Component } from '@angular/core';
// import { Location } from '@angular/common';
// import { ActivatedRoute } from '../../node_modules/@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'web';
  constructor(
    // private location: Location,
    // private route: ActivatedRoute
  ) {}
  // goBack() {
  //   this.location.back()
  // }
}
