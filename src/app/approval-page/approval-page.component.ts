import { Component, OnInit } from '@angular/core';
import { ExerciseObject } from '../exercises-service/exercises-service.model';
import { ExercisesService } from '../exercises-service/exercises-service.service';

@Component({
  selector: 'app-approval-page',
  templateUrl: './approval-page.component.html',
  styleUrls: ['./approval-page.component.scss']
})
export class ApprovalPageComponent implements OnInit {

  public exercises : ExerciseObject[] = [];

  constructor( private exercisesService : ExercisesService ) { }

  async ngOnInit() {
    this.exercisesService.fetchUnapprovedExercises()
    .subscribe( data => {
      console.log(data)
      this.exercises = data;
    } )
  }

}
