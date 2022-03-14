import { Component, Input, OnInit } from '@angular/core';
import { ExerciseObject } from 'src/app/exercises-service/exercises-service.model';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent {

  @Input() exercises : ExerciseObject[] = [];
  @Input() ngStyle : { [klass : string] : any } = {};

  constructor() { }
}
