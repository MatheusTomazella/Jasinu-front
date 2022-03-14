import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { ExercisesPageComponent } from './exercises-page.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseItemComponent } from './exercise-item/exercise-item.component';
import { FilterSelectorComponent } from './filter-selector/filter-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ],
  declarations: [
    ExercisesPageComponent,
    ExerciseListComponent,
    ExerciseItemComponent,
    FilterSelectorComponent
  ],
  exports: [ExercisesPageComponent]
})
export class ExercisesPageModule { }
