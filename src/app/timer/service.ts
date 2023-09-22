import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class TService {
  private counterref: any = null;
  counter = new BehaviorSubject<number>(0);
  counter$ = this.counter.asObservable();
  paused = true;
  private init = 0;
  constructor() {}
  private countdownend = new Subject<void>();
  countdownend$ = this.countdownend.asObservable();

  OnDestroy(): void {
    this.cleartime();
  }

  restartcoundown(init?: any) {
    if (init) {
      this.init = init;
    }

    if (this.init && this.init > 0) {
      this.paused = true;
      this.cleartime();
      this.counter.next(this.init);
    }
  }
  docowntdown() {
    this.counterref = setInterval(() => {
      if (this.counter.getValue() === 0) {
        return;
      }

      this.counter.next(this.counter.getValue() - 1);
      this.processcoundown();
    }, 1000);
  }
  togglecountdown() {
    this.paused = !this.paused;
    if (this.paused === false) {
      this.docowntdown();
    } else {
      this.cleartime();
    }
  }
  private cleartime() {
    if (this.counterref) {
      clearTimeout(this.counterref);
      this.counterref = null;
    }
  }
  private processcoundown() {
    if (this.counter.getValue() === 0) {
      // console.log('counter end');
      // this.oncomplete.emit();
      this.countdownend.next();
    } else {
      console.log(`counter value ${this.counter.getValue()}`);
    }
  }
}
