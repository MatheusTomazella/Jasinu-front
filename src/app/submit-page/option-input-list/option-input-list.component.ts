import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SubmitOption } from '../option-input/option-input.component.model';

@Component({
  selector: 'app-option-input-list',
  templateUrl: './option-input-list.component.html',
  styleUrls: ['./option-input-list.component.scss']
})
export class OptionInputListComponent implements OnInit {

  @Output() onChange : EventEmitter<void> = new EventEmitter();
  @Output() options : SubmitOption[] = [];

  constructor() { }

  init ( ) {
    this.options = [];
    this.addOption();
    this.addOption();
  }

  findIndexById ( id : number ) : number {
    return this.options.findIndex( option => (option.id == id) );
  }

  getAvailableId ( ) {
    for ( let i = 0; i < 100; i++ )
      if ( this.findIndexById(i) == -1 ) 
        return i;
    throw "Max number of option reached";
  }

  addOption ( ) {
    this.options.push({
      id: this.getAvailableId(),
      text: "",
      correct: false
    });
  }

  deleteOption ( id : number ) {
    if ( this.options.length <= 2 ) return;
    this.options = this.options.filter(option => option.id != id)
  }

  clear () {
    this.init();
  }

  ngOnInit(): void {
    this.init();
  }
}
