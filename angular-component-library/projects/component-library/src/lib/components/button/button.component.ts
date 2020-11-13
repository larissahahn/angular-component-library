import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
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