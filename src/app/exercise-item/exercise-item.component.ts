import { Component, Input, OnInit } from '@angular/core';
import { ExerciseObject, ExerciseOption } from 'src/app/exercises-service/exercises-service.model';

@Component({
  selector: 'app-exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.scss']
})
export class ExerciseItemComponent implements OnInit {

  @Input() index : number = 0;
  @Input() data! : ExerciseObject;
  
  completed : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  detectCompleted ( ) {
    this.completed = this.data.options.filter(e => e.selected).length == this.data.options.filter(e => e.correct).length;
  } 

  reset ( ) {
    this.data.options.forEach( option => {
      option.selected = false;
    } );
    this.completed = false;
  }

  select ( option : ExerciseOption ) {
    if ( !this.completed ) option.selected = !option.selected;
    this.detectCompleted();
  }

  indexToLetter ( index : number, mod? : number ) : string {
    if ( index > 25 ) return this.indexToLetter( index-26, mod ? mod+1 : 1);
    return String.fromCharCode(65+index) + ( mod ? mod.toString() : "" );
  }
}
