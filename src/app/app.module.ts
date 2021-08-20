import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { AlertViewComponent } from './components/alert-view/alert-view.component';
import { DisplayComponent } from './components/display/display.component';
import { SimpleAlertViewComponent } from './components/simple-alert-view/simple-alert-view.component';
import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TimerComponent } from './components/timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    CountdownComponent,
    AlertViewComponent,
    DisplayComponent,
    SimpleAlertViewComponent,
    TabComponent,
    TabsComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
