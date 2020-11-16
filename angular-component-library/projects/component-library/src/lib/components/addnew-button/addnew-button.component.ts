import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'lib-addnew-button',
  templateUrl: './addnew-button.component.html',
  styleUrls: ['./addnew-button.component.scss'],
  animations: [
    trigger('trigger', [
    state('default', style({transform: 'scale(1)'})),
    state('hover', style({transform: 'scale(1.15) rotate(-180deg)'})),
    transition('default => hover', animate('300ms ease-in')),
    transition('hover => default', animate('200ms ease-out'))
  ])]
})
export class AddnewButtonComponent {
  state = 'default';

  updateButtonState(mouseState: string): void {
    this.state = mouseState;
  }

}

