import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SimpleAlertComponent } from './simple-alert/simple-alert.component';
import { SimpleviewComponent } from './simpleview/simpleview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, AfterContentInit {
  // isalerttimervisible = false;
  istimervisible = false;
  time = 0;
  timers: Array<number> = [];
  // @ViewChild(SimpleAlertComponent) alert!: SimpleAlertComponent;
  @ViewChild('timerInput') timerinputx!: ElementRef;
  @ViewChild('alert', { read: ViewContainerRef }) alertcop!: ViewContainerRef;

  constructor(private cdr: ChangeDetectorRef, private render: Renderer2) {
    this.timers = [3, 20, 185];
  }
  simpleref!: ComponentRef<SimpleAlertComponent>;

  ngAfterContentInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.timerinputx);
    // this.alert.title = 'hi';
    // this.alert.message = 'no';
    // this.cdr.detectChanges();

    // this.timerinputx.nativeElement.setAttribute(
    //   'placeholder',
    //   'enter the  number'
    // );
    // this.timerinputx.nativeElement.classList.add('input');
    this.render.setAttribute(
      this.timerinputx.nativeElement,
      'placeholder',
      'enter the number'
    );
    this.render.addClass(this.timerinputx.nativeElement, 'input');
    // console.log(this.alert);
    // this.alert.title = 'this is parent';
    // this.alert.message = 'hhhhhhhhhhh';
    this.cdr.detectChanges();
  }
  showaddtimer() {
    this.istimervisible = true;
    setTimeout(() => {
      // this.timerinputx.nativeElement.focus();
      this.render.selectRootElement(this.timerinputx.nativeElement).focus();
    });
  }
  hidetimer() {
    this.istimervisible = false;
  }
  title = 'angularComp101Inter';

  onend() {
    console.log('counter has ended');
  }

  submitAddtimer() {
    this.timers.push(this.time);
    this.hidetimer();
  }
  showendtimer() {
    this.simpleref = this.alertcop.createComponent(SimpleAlertComponent);
    this.simpleref.instance.title = 'timer end';
    this.simpleref.instance.message = 'your countdown ended';
    this.simpleref.instance.ondismiss.subscribe(() => {
      console.log('dismissed');
      this.simpleref.destroy();
    });
    console.log(this.simpleref.instance);
    this.simpleref.instance.show();
    // this.alert.show();
    // this.isalerttimervisible = true;
  }

  // hideendtimer() {
  //   this.isalerttimervisible = false;
  // }
}
