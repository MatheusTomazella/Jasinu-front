import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { ExerciseItemComponent } from "./exercise-item.component";


@NgModule({
    declarations: [ ExerciseItemComponent ],
    imports: [
        CommonModule,
        MatIconModule
    ],
    exports: [ ExerciseItemComponent ]
})
export class ExerciseItemModule {

}