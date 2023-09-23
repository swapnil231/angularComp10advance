import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
} from '@angular/core';
import { tab } from '../tab/tabinterface';
import { TabComponent } from '../tab/tab.component';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {
  onclicksubscribe: any[] = [];

  ngOnDestroy(): void {
    if (this.onclicksubscribe) {
      this.onclicksubscribe.forEach((tab) => {
        tab.unsubscribe();
      });
      console.log('miiiiiiiii');
    }
  }
  ngAfterContentInit(): void {
    console.log(this.tabs);
    this.tabs.forEach((tab) => {
      let subscribe = tab.onClick.subscribe(() => {
        console.log(`tab ${tab.title} is clicked`);
      });
      this.onclicksubscribe.push(subscribe);
    });
    this.selecttab(this.tabs.first);

    // if (this.tabx) {
    //   console.log(this.tabx);
    //   this.addtabs(this.tabx);
    //   this.onclicksubscribe = this.tabx.onClick.subscribe(() => {
    //     console.log('click detected');
    //   });
    // }
  }
  ngOnInit(): void {}
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  addtabs(tab: tab) {
    // if (this.tabs.length === 0) {
    //   tab.isActive = true;
    // }
    // this.tabs.push(tab);
  }
  selecttab(tab: tab) {
    this.tabs.forEach((tab) => {
      tab.isActive = false;
    });
    tab.isActive = true;
  }
}
