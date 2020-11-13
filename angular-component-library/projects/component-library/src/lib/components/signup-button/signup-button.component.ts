import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'lib-signup-button',
  templateUrl: './signup-button.component.html',
  styleUrls: ['./signup-button.component.css'],
  animations: [
    // button animations
  ]
})
export class SignUpButtonComponent implements OnInit {
  @Output() numberOfClicks: EventEmitter<number> = new EventEmitter();
  clicks = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.clicks++;
    this.numberOfClicks.emit(this.clicks);
  }

}
