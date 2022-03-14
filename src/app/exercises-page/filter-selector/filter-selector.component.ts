import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ExerciseTag } from 'src/app/exercises-service/exercises-service.model';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.scss']
})
export class FilterSelectorComponent implements OnInit {

  @Input()  tags     : ExerciseTag[] = [];
  @Output() selected : number        = -1;
  @Output() change = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
}
