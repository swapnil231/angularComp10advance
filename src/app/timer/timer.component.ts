import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { TService } from './service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit, OnDestroy {
  constructor(public t_service: TService, private cdref: ChangeDetectorRef) {}

  ngOnDestroy(): void {
    this.t_service.OnDestroy();
    this.counterendsubscrption.unsubscribe();
    this.countdownsubscription.unsubscribe();
  }

  @Input() init!: number;
  @Output() oncomplete = new EventEmitter<void>();
  private counterendsubscrption!: Subscription;
  private countdownsubscription!: Subscription;
  countdown = 0;

  ngOnInit(): void {
    this.t_service.restartcoundown(this.init);

    this.counterendsubscrption = this.t_service.countdownend$.subscribe(() => {
      // console.log('----counter end-----');
      this.oncomplete.emit();
    });
    this.countdownsubscription = this.t_service.counter$.subscribe((data) => {
      this.countdown = data;
      this.cdref.markForCheck();
    });
  }

  get progress() {
    return ((this.init - this.countdown) / this.init) * 100;
  }
}
