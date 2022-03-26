import { ExerciseTag } from "src/app/exercises-service/exercises-service.model";

export interface SubmitTag extends ExerciseTag {
    selected? : boolean;
}