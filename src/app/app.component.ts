import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taya-birthday';

  showEmittedValue(value: Date) {
    console.log(value.getSeconds());
  }
}
