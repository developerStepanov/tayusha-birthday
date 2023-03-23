import {Component, EventEmitter, Output } from '@angular/core';
import {Subscription, interval, Observable, takeUntil, takeWhile} from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent {
  private subscription: Subscription;

  @Output()
  dateEventEmitter = new EventEmitter<Date>();

  step = "first";

  public dateNow = new Date();
  public dDay = new Date('Mar 24 2023 01:30:00');

  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference: number;
  public secondsToDday: number;
  public minutesToDday: number;
  public hoursToDday: number;
  public daysToDday: number;


  private getTimeDifference () {
    this.dateNow = new Date();
    this.changeDateEvent(this.dateNow);
    this.timeDifference = this.dDay.getTime() - this.dateNow.getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference: number) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

  private changeDateEvent(date: Date) {
    this.dateEventEmitter.emit(date);
  }

  public changeFontColor() {
    let delta = (this.dDay.getTime() - this.dateNow.getTime()) / 1000;
    console.log(delta);
    if (delta < 60) {
      this.step = "second";
    }
  }


  public isWorking() : boolean {
    return this.dateNow.getTime() <= this.dDay.getTime();
  }

  ngOnInit() {
    this.subscription = interval(1000)
      .pipe(takeWhile(() => this.isWorking()))
      .subscribe(x => {
        this.getTimeDifference();
        this.changeFontColor();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.dateEventEmitter.unsubscribe();
  }
}
