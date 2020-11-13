import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-addnew-button',
  templateUrl: './addnew-button.component.html',
  styleUrls: ['./addnew-button.component.css']
})
export class AddnewButtonComponent implements OnInit {
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