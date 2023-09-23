import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { TimerComponent } from './timer/timer.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { AlertviewComponent } from './alertview/alertview.component';
import { FormsModule } from '@angular/forms';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { SimpleAlertComponent } from './simple-alert/simple-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    TimerComponent,
    ProgressbarComponent,
    AlertviewComponent,
    TabComponent,
    TabsComponent,
    SimpleAlertComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
