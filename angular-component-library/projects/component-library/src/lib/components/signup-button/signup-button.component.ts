import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'lib-signup-button',
  templateUrl: './signup-button.component.html',
  styleUrls: ['./signup-button.component.scss'],
  animations: [trigger('trigger', [
    state('default', style({transform: 'scale(1)'})),
    state('hover', style({transform: 'scale(1.1)'})),
    state('press', style({transform: 'scale(1.2)',
      backgroundColor: 'white'})),
    transition('default => hover', animate('300ms ease-in')),
    transition('hover => default', animate('200ms ease-out')),
    transition('hover => press', animate('300ms ease-in'))
  ])]
})
export class SignUpButtonComponent {
  state = 'default';

  updateButtonState(mouseState: string): void {
    if (this.state !== 'press') {
      this.state = mouseState;
    }
  }

  handleClick(): void {
    this.state = 'press';
    setTimeout('100');
    const myCanvas = document.createElement('canvas');
    const myGridItem = document.getElementById('signup-button-grid');
    myGridItem.appendChild(myCanvas);
    const myConfetti = confetti.create(myCanvas, {
      resize: true,
      useWorker: true
    });
    myConfetti({
      particleCount: 200,
      spread: 180
    });
  }
}
