import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'lib-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss'],
  animations: [
    trigger('trigger', [
      state('default', style({transform: 'scale(1)'})),
      state('hover', style({transform: 'scale(1.25)'})),
      transition('default => hover', animate('300ms ease-in')),
      transition('hover => default', animate('200ms ease-out'))
  ])]
})
export class SaveButtonComponent {
  state = 'default';

  updateButtonState(mouseState: string): void {
    this.state = mouseState;
  }

  handleClick(): void {
    //
  }

}
