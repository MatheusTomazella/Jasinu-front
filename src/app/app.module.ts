import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApprovalPageModule } from './approval-page/approval-page.module';
import { ExercisesPageModule } from './exercises-page/exercises-page.module';
import { SubmitPageModule } from './submit-page/submit-page.module';

@NgModule({
  declarations: [			
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ExercisesPageModule,
    ApprovalPageModule,
    SubmitPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
