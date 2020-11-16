import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'lib-print-button',
  templateUrl: './print-button.component.html',
  styleUrls: ['./print-button.component.scss'],
  animations: [
    trigger('stateTrigger', [
    state('default', style({transform: 'scale(1)'})),
    state('hover', style({transform: 'scale(1.15)'})),
    transition('default => hover', animate('300ms ease-in')),
    transition('hover => default', animate('200ms ease-out'))
  ])]
})
export class PrintButtonComponent {
  state = 'default';

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  openPrintMenu(): void {
    this.trigger.openMenu();
  }

  updateButtonState(mouseState: string): void {
    this.state = mouseState;
  }
}
