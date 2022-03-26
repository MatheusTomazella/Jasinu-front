import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option-input',
  templateUrl: './option-input.component.html',
  styleUrls: ['./option-input.component.scss']
})
export class OptionInputComponent implements OnInit {

  @Output() onDelete : EventEmitter<void> = new EventEmitter();
  @Output() onChange : EventEmitter<void> = new EventEmitter();

  @Input() index = 0;
  @Input() id    = -1;

  @Input() @Output() text    = "";
  @Input() @Output() correct = false;

  constructor() { }

  ngOnInit() {
  }

}
