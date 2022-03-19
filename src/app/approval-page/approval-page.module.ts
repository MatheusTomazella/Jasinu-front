import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalPageComponent } from './approval-page.component';
import { ExerciseItemModule } from '../exercise-item/exercise-item.module';
import { ApprovalItemComponent } from './approval-item/approval-item.component';
import { ApprovalListComponent } from './approval-list/approval-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    ExerciseItemModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    ApprovalPageComponent,
    ApprovalItemComponent,
    ApprovalListComponent
  ],
  exports: [ApprovalPageComponent]
})
export class ApprovalPageModule { }
