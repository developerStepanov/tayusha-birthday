import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-enter-point',
  templateUrl: './enter-point.component.html',
  styleUrls: ['./enter-point.component.scss']
})
export class EnterPointComponent {

  constructor(public router: Router) { }

  navigateToSurprise(answer: HTMLInputElement): void {
    this.router.navigate(['surprise'], { queryParams : { answer : answer.value}});
  }
}
