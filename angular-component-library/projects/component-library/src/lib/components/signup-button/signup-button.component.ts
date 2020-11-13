import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'lib-signup-button',
  templateUrl: './signup-button.component.html',
  styleUrls: ['./signup-button.component.css'],
  animations: [trigger('myTrigger', [
    state('small', style({transform: 'scale(1)'})),
    state('large', style({transform: 'scale(1.4)'})),
    transition('small <=> large', animate('500ms'))
  ])]
})
export class SignUpButtonComponent {

  @Output() numberOfClicks: EventEmitter<number> = new EventEmitter();
  clicks = 0;
  state = 'small';

  handleClick(): void {
    this.state = (this.state === 'small' ? 'large' : 'small');
    this.clicks++;
    this.numberOfClicks.emit(this.clicks);
  }
}
