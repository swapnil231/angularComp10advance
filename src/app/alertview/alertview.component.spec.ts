import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertviewComponent } from './alertview.component';

describe('AlertviewComponent', () => {
  let component: AlertviewComponent;
  let fixture: ComponentFixture<AlertviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertviewComponent]
    });
    fixture = TestBed.createComponent(AlertviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
