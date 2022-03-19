import { Component, Input, OnInit } from '@angular/core';
import { ExerciseObject } from 'src/app/exercises-service/exercises-service.model';
import { ExercisesService } from 'src/app/exercises-service/exercises-service.service';

@Component({
  selector: 'app-approval-item',
  templateUrl: './approval-item.component.html',
  styleUrls: ['./approval-item.component.scss']
})
export class ApprovalItemComponent implements OnInit {

  @Input() index : number = 0;
  @Input() data! : ExerciseObject;
  
  situationClass : string = "";

  constructor( private exerciseService : ExercisesService ) { }

  ngOnInit() {
  }

  scrollToNext () {
    scrollTo({top: window.innerHeight * this.index})
  }

  approve ( ) {
    this.exerciseService.setExerciseApproved(this.data)
    .then( () => {
      this.situationClass = "approved";
    } )
    .catch( console.error )
  }

  reject ( ) {
    this.exerciseService.deleteExercise(this.data.id)
    .then( () => {
      this.situationClass = "rejected";
    } )
    .catch( console.error )
  }
}
