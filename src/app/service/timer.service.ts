import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private counterref: any = null;
  counter = 0;
  paused = true;
  private init = 0;
  constructor() {}

  OnDestroy(): void {
    this.cleartime();
  }

  restartcoundown(init: any) {
    if (init) {
      this.init = init;
    }

    if (this.init && this.init > 0) {
      this.paused = true;
      this.counter = this.init;
    }
  }
  docowntdown() {
    this.counterref = setInterval(() => {
      if (this.counter === 0) {
        return;
      }
      this.counter--;
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
    if (this.counter === 0) {
      console.log('counter end');
      // this.oncomplete.emit();
    } else {
      console.log(`counter value ${this.counter}`);
    }
  }
}
