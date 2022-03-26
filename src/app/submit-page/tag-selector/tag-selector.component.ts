import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExercisesService } from 'src/app/exercises-service/exercises-service.service';
import { SubmitTag } from './tag-selector.component.model';

@Component({
  selector: 'app-tag-selector',
  templateUrl: './tag-selector.component.html',
  styleUrls: ['./tag-selector.component.scss']
})
export class TagSelectorComponent implements OnInit {

  @Output() onChange : EventEmitter<void> = new EventEmitter();
  @Output() selectedTags : number[] = [];

  tags : SubmitTag[] = [];

  constructor(private exercisesService : ExercisesService) { }

  updateSelected ( ) {
    this.selectedTags = [];
    this.tags.forEach( tag => {
      if ( tag.selected )
        this.selectedTags.push( tag.id );
    } )
    this.onChange.emit();
  }

  clear ( ) {
    this.tags.forEach(tag=>tag.selected=false);
    this.updateSelected();
  }

  ngOnInit() {
    this.exercisesService.fetchTags()
    .subscribe( data => this.tags = data );
  }
}
