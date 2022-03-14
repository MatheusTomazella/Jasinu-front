import { Component, OnInit, ViewChild } from '@angular/core';
import { ExerciseObject, ExerciseQuery, ExerciseTag } from '../exercises-service/exercises-service.model';
import { ExercisesServiceService } from '../exercises-service/exercises-service.service';
import { FilterSelectorComponent } from './filter-selector/filter-selector.component';

@Component({
  selector: 'app-exercises-page',
  templateUrl: './exercises-page.component.html',
  styleUrls: ['./exercises-page.component.scss']
})
export class ExercisesPageComponent implements OnInit {

  @ViewChild(FilterSelectorComponent) filter! : FilterSelectorComponent;

  public exercises : ExerciseObject[] = [];
  public tags      : ExerciseTag[]    = [];

  constructor( private exerciseService : ExercisesServiceService ) { }

  ngOnInit() {
    this.updateData()
    
    this.exerciseService.fetchTags()
    .subscribe( data => this.tags = data );
  }

  updateData ( query? : ExerciseQuery ) {
    this.exerciseService.fetchExercises(query)
    .subscribe( data => this.exercises = data );
  }

  changeFilter ( ) {
    const tagId = this.filter.selected;
    this.updateData({tags: [tagId]});
  }
}
