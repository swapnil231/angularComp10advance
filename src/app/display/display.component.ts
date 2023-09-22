import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnChanges {
  minites = '00';
  sec = '00';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['time']) {
      const minites = Math.trunc(changes['time'].currentValue / 60);
      const sec = changes['time'].currentValue - minites * 60;
      this.minites = ('0' + minites).slice(-2);
      this.sec = ('0' + sec).slice(-2);
    }
  }

  @Input() time!: number;
}
