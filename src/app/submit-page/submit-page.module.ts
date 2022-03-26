import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { SubmitPageComponent } from './submit-page.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { OptionInputComponent } from './option-input/option-input.component';
import { OptionInputListComponent } from './option-input-list/option-input-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TagSelectorComponent } from './tag-selector/tag-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule
  ],
  declarations: [
    SubmitPageComponent,
    SubmitFormComponent,
    OptionInputComponent,
    OptionInputListComponent,
    TagSelectorComponent
  ]
})
export class SubmitPageModule { }
