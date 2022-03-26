import { Component, OnInit, ViewChild } from '@angular/core';
import { ExerciseAddObject } from 'src/app/exercises-service/exercises-service.model';
import { ExercisesService } from 'src/app/exercises-service/exercises-service.service';
import { OptionInputListComponent } from '../option-input-list/option-input-list.component';
import { SubmitOption } from '../option-input/option-input.component.model';
import { TagSelectorComponent } from '../tag-selector/tag-selector.component';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {

  @ViewChild(OptionInputListComponent) optionComp! : OptionInputListComponent;
  @ViewChild(TagSelectorComponent)     tagComp!    : TagSelectorComponent;

  text : string = "";
  options : SubmitOption[] = [];
  tags : number[] = [];
  explanation: string = "";

  constructor(private exerciseService : ExercisesService) { }

  ngOnInit() {
  }

  clear ( ) {
    this.text = "";
    this.optionComp.clear();
    this.tagComp.clear();
    this.explanation = "";
  }

  getAddObj ( ) : ExerciseAddObject {
    return {
      text:         this.text,
      options:      this.options,
      tags:         this.tags,
      approved:     false,
      explanation:  this.explanation
    }
  }

  save ( ) {
    this.exerciseService.addExercise(this.getAddObj())
    .subscribe(
      result => {
        console.log(result);
        this.clear();
        alert("Sucesso");
      },
      error => {
        console.error(error);
        alert("Erro");
      }
    )
  }
}
