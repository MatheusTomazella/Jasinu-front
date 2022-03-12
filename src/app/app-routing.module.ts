import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesPageComponent } from './exercises-page/exercises-page.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
