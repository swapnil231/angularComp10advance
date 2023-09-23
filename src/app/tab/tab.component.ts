import {
  AfterContentInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { tab } from './tabinterface';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements tab, OnInit {
  isActive: boolean = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}

  clickTabContent() {
    this.onClick.emit();
  }
}
