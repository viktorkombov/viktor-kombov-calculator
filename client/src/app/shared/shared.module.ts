import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { ErrorNotificationComponent } from './error-notification/error-notification.component';



@NgModule({
  declarations: [LoadingIndicatorComponent, ErrorNotificationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingIndicatorComponent,
    ErrorNotificationComponent,
  ]
})
export class SharedModule { }
