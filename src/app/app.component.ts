import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'web';
  constructor(
    private location: Location
  ) {}
  goBack() {
    this.location.back()
  }
}
