import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalPageComponent } from './approval-page/approval-page.component';
import { ExercisesPageComponent } from './exercises-page/exercises-page.component';
import { SubmitPageComponent } from './submit-page/submit-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "exercises",
    pathMatch: "full"
  },
  {
    path: "home",
    redirectTo: "exercises",
    pathMatch: "full"
  },
  {
    path: "exercises",
    component: ExercisesPageComponent,
    pathMatch: "full"
  },
  {
    path: "approve",
    component: ApprovalPageComponent,
    pathMatch: "full"
  },
  {
    path: "submit",
    component: SubmitPageComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
