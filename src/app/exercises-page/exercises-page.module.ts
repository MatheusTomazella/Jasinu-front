import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesPageComponent } from './exercises-page.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { FilterSelectorComponent } from './filter-selector/filter-selector.component';
import { FormsModule } from '@angular/forms';
import { ExerciseItemModule } from '../exercise-item/exercise-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExerciseItemModule
  ],
  declarations: [
    ExercisesPageComponent,
    ExerciseListComponent,
    FilterSelectorComponent
  ],
  exports: [ExercisesPageComponent]
})
export class ExercisesPageModule { }
