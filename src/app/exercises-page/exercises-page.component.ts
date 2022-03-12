import { Component, OnInit } from '@angular/core';
import { ExercisesServiceService } from '../exercises-service/exercises-service.service';

@Component({
  selector: 'app-exercises-page',
  templateUrl: './exercises-page.component.html',
  styleUrls: ['./exercises-page.component.scss']
})
export class ExercisesPageComponent implements OnInit {

  constructor( private exerciseService : ExercisesServiceService ) { }

  ngOnInit() {
    this.exerciseService.fetchExercises()
    .subscribe( console.log );
  }

}
