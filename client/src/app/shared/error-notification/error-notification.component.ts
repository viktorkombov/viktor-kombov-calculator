import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error-notification',
  templateUrl: './error-notification.component.html',
  styleUrls: ['./error-notification.component.scss']
})
export class ErrorNotificationComponent {
  @Input() public message = '';
  @Output() notificationClosed = new EventEmitter();

  @HostListener("document:click") hideOnClick() {
    this.notificationClosed.emit();
  }
}
