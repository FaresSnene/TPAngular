import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TPanglar';
  imgUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  name: string = '';
  onClick($event) {
    console.log('ok is clicked', $event);
  }
}
