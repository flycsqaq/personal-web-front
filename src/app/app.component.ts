import { Component } from '@angular/core';
import { slideInAnimation } from './shared/animation/slide';
import { RouterOutlet } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'FLY个人博客';
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
