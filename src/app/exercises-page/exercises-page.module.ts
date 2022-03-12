import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesPageComponent } from './exercises-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExercisesPageComponent],
  exports: [ExercisesPageComponent]
})
export class ExercisesPageModule { }
